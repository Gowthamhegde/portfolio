use leptos::*;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use std::cell::RefCell;
use std::rc::Rc;

#[component]
pub fn CinematicSequence(children: Children) -> impl IntoView {
    let scroll_y = create_rw_signal(0.0f64);
    let video_duration = create_rw_signal(0.0f64);
    let video_ref = create_node_ref::<html::Video>();

    // Scroll listener with requestAnimationFrame
    create_effect(move |_| {
        let window = web_sys::window().unwrap();
        let ticking = Rc::new(RefCell::new(false));

        let cb = {
            let ticking = ticking.clone();
            Closure::wrap(Box::new(move || {
                if !*ticking.borrow() {
                    *ticking.borrow_mut() = true;
                    let ticking_inner = ticking.clone();
                    let window = web_sys::window().unwrap();
                    let _ = window.request_animation_frame(
                        Closure::once_into_js(move || {
                            *ticking_inner.borrow_mut() = false;
                            let window = web_sys::window().unwrap();
                            let current_y = window.scroll_y().unwrap_or(0.0);
                            scroll_y.set(current_y);
                        }).unchecked_ref()
                    );
                }
            }) as Box<dyn FnMut()>)
        };

        let _ = window.add_event_listener_with_callback("scroll", cb.as_ref().unchecked_ref());
        cb.forget();
    });

    // Handle video metadata
    let on_loaded_metadata = move |_| {
        if let Some(video) = video_ref.get() {
            let dur = video.duration();
            if dur > 0.0 && !dur.is_nan() {
                video_duration.set(dur);
            }
        }
    };

    // Calculate scroll progress (0.0 to 1.0 across 400vh)
    let progress = create_memo(move |_| {
        let window = web_sys::window().unwrap();
        let viewport_h = window.inner_height().unwrap().as_f64().unwrap_or(800.0);
        let track_h = viewport_h * 4.0;
        let y = scroll_y.get();
        (y / track_h).clamp(0.0, 1.0)
    });

    // Video currentTime scrubber effect
    create_effect(move |_| {
        let p = progress.get();
        let dur = video_duration.get();
        if dur > 0.0 {
            if let Some(video) = video_ref.get() {
                if p >= 0.20 && p <= 0.80 {
                    let play_p = ((p - 0.20) / 0.60).clamp(0.0, 1.0);
                    video.set_current_time(play_p * dur);
                }
            }
        }
    });

    // Skip to desktop
    let skip_to_content = move |_| {
        let window = web_sys::window().unwrap();
        let viewport_h = window.inner_height().unwrap().as_f64().unwrap_or(800.0);
        window.scroll_to_with_x_and_y(0.0, viewport_h * 4.0 + 10.0);
    };

    // Compute transforms based on progress
    let image_opacity = move || {
        let p = progress.get();
        if p <= 0.15 {
            1.0 - (p / 0.15)
        } else {
            0.0
        }
    };

    let image_scale = move || {
        let p = progress.get();
        if p <= 0.15 {
            1.0 + (p / 0.15) * 0.20
        } else {
            1.2
        }
    };

    let image_y = move || {
        let p = progress.get();
        if p <= 0.15 {
            -50.0 * (p / 0.15)
        } else {
            -50.0
        }
    };

    let video_opacity = move || {
        let p = progress.get();
        if p < 0.10 {
            0.0
        } else if p <= 0.20 {
            (p - 0.10) / 0.10
        } else if p <= 0.95 {
            1.0
        } else {
            1.0 - ((p - 0.95) / 0.05)
        }
    };

    let video_scale = move || {
        let p = progress.get();
        if p < 0.80 {
            1.0
        } else if p <= 0.95 {
            1.0 + ((p - 0.80) / 0.15) * 14.0
        } else {
            15.0
        }
    };

    let sequence_opacity = move || {
        let p = progress.get();
        if p <= 0.95 {
            1.0
        } else {
            (1.0 - (p - 0.95) / 0.05).max(0.0)
        }
    };

    let pointer_events = move || {
        if progress.get() >= 0.98 { "none" } else { "auto" }
    };

    view! {
        <>
            // 400vh scroll track
            <div class="absolute top-0 left-0 w-full h-[400vh] pointer-events-none" />

            // Fixed Overlay
            <div
                class="fixed top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black z-50 transition-opacity duration-75"
                style=move || format!(
                    "opacity: {:.3}; pointer-events: {};",
                    sequence_opacity(),
                    pointer_events()
                )
            >
                // Skip Button
                <button
                    on:click=skip_to_content
                    class="absolute top-6 right-6 z-30 font-mono text-xs px-3 py-1.5 border border-yellow/60 bg-black/60 backdrop-blur text-yellow hover:bg-yellow hover:text-black transition-all flex items-center gap-2 rounded shadow-lg"
                >
                    <span>"SKIP INTRO"</span>
                    <span class="text-sm">"⏭"</span>
                </button>

                // Layer 1: Entrance Image & Comic Titles
                <div
                    class="absolute inset-0 flex items-center justify-start px-8 md:px-24 z-10 will-change-transform"
                    style=move || format!(
                        "opacity: {:.3}; transform: translateY({:.1}px) scale({:.3});",
                        image_opacity(),
                        image_y(),
                        image_scale()
                    )
                >
                    // Left Side: Titles
                    <div class="text-left max-w-xl z-20 relative">
                        <div class="inline-flex items-center gap-2 px-2.5 py-1 border border-yellow/40 bg-yellow/10 mb-3 rounded">
                            <span class="w-2 h-2 rounded-full bg-yellow animate-pulse" />
                            <span class="font-mono text-xs text-yellow tracking-widest uppercase">"Rust + WASM v2.0"</span>
                        </div>
                        <h2 class="text-yellow font-mono text-sm md:text-xl lg:text-2xl mb-2 md:mb-4 tracking-widest uppercase">
                            "Welcome to the portfolio of"
                        </h2>
                        <h1 class="font-comic text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-widest mb-4 md:mb-6 leading-[0.9]">
                            "GOUTHAMA "<br /><span class="text-yellow">"HEGDE"</span>
                        </h1>
                        <p class="text-gray-400 text-sm md:text-lg lg:text-2xl mb-8 md:mb-12 border-l-4 border-yellow pl-3 md:pl-5 max-w-md">
                            "Cloud Architect, DevOps Engineer & Systems Developer."
                        </p>
                        <div class="font-mono text-yellow tracking-widest animate-pulse inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 border-2 border-yellow bg-yellow/10 text-xs md:text-base">
                            <span class="w-2 h-2 rounded-full bg-yellow" />
                            "SCROLL TO EXPLORE"
                        </div>
                    </div>

                    // Right Side: Floating 3D Profile Image
                    <img
                        src="/me-removebg-preview.png"
                        alt="Gouthama Hegde"
                        class="absolute bottom-0 right-[-10%] md:right-10 lg:right-24 max-w-[280px] md:max-w-2xl lg:max-w-[800px] object-contain drop-shadow-[0_0_80px_rgba(245,197,24,0.4)] z-10 origin-bottom opacity-30 md:opacity-100 animate-float"
                    />
                </div>

                // Layer 2: Laptop Video Layer
                <div
                    class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none will-change-transform"
                    style=move || format!(
                        "opacity: {:.3}; transform: scale({:.3});",
                        video_opacity(),
                        video_scale()
                    )
                >
                    <video
                        node_ref=video_ref
                        src="/Timeline 1.mp4"
                        class="w-full h-full object-cover md:object-contain"
                        muted
                        playsinline
                        preload="auto"
                        on:loadedmetadata=on_loaded_metadata
                    />
                </div>
            </div>

            // Children content pushed down past the 400vh track
            <div class="pt-[400vh]">
                {children()}
            </div>
        </>
    }
}
