use leptos::*;
use web_sys::MouseEvent;
use crate::components::audio::SoundEngine;
use crate::components::hero::Hero;
use crate::components::skills::Skills;
use crate::components::projects::Projects;
use crate::components::experience::Experience;
use crate::components::education::Education;
use crate::components::certifications::Certifications;
use crate::components::contact::Contact;
use crate::components::terminal::Terminal;
use crate::components::aws_visualizer::AwsVisualizer;
use crate::components::pipeline_runner::PipelineRunner;
use crate::components::benchmark::Benchmark;
use crate::data::PROFILE;
use gloo_timers::future::TimeoutFuture;

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum AppId {
    Hero,
    Skills,
    Projects,
    Experience,
    Education,
    Certifications,
    Contact,
    Terminal,
    AwsArch,
    Pipeline,
    Benchmark,
}

#[derive(Clone, Debug)]
pub struct AppDef {
    pub id: AppId,
    pub title: &'static str,
    pub icon: &'static str,
    pub color: &'static str,
    pub description: &'static str,
}

pub static APPS: &[AppDef] = &[
    AppDef {
        id: AppId::Skills,
        title: "Skills",
        icon: "💻",
        color: "bg-blue-600",
        description: "Cloud, DevOps, Systems & Full-Stack Capabilities",
    },
    AppDef {
        id: AppId::Projects,
        title: "Projects",
        icon: "📂",
        color: "bg-yellow",
        description: "Production Deployments & Architecture Registry",
    },
    AppDef {
        id: AppId::Experience,
        title: "Experience",
        icon: "💼",
        color: "bg-green-600",
        description: "Cloud Architect Intern at GTTC & Professional History",
    },
    AppDef {
        id: AppId::Terminal,
        title: "Terminal CLI",
        icon: "⌨️",
        color: "bg-emerald-600",
        description: "Interactive Rust/WASM Virtual DevOps Terminal",
    },
    AppDef {
        id: AppId::AwsArch,
        title: "AWS Explorer",
        icon: "☁️",
        color: "bg-amber-600",
        description: "Interactive Cloud Infrastructure Topology & Terraform",
    },
    AppDef {
        id: AppId::Pipeline,
        title: "CI/CD Pipeline",
        icon: "🚀",
        color: "bg-orange-600",
        description: "Automated Build, Container & Cloud Deploy Simulator",
    },
    AppDef {
        id: AppId::Benchmark,
        title: "Diagnostics",
        icon: "⚡",
        color: "bg-cyan-600",
        description: "Native Rust WASM Performance & Benchmark Suite",
    },
    AppDef {
        id: AppId::Education,
        title: "Education",
        icon: "🎓",
        color: "bg-purple-600",
        description: "Computer Science Degree & Polytechnic Coursework",
    },
    AppDef {
        id: AppId::Certifications,
        title: "Certifications",
        icon: "📜",
        color: "bg-rose-600",
        description: "AWS Solutions Architect & Cloud Credentials",
    },
    AppDef {
        id: AppId::Contact,
        title: "Contact",
        icon: "✉️",
        color: "bg-red-600",
        description: "Direct Transmission Endpoints & Message Dispatcher",
    },
];

#[derive(Clone, Debug, PartialEq)]
pub struct WindowState {
    pub id: AppId,
    pub x: f64,
    pub y: f64,
    pub is_maximized: bool,
    pub is_minimized: bool,
    pub z_index: u32,
}

#[component]
pub fn LaptopOS() -> impl IntoView {
    let open_windows = create_rw_signal(vec![
        // Open Hero and Terminal by default on desktop load
        WindowState {
            id: AppId::Hero,
            x: 4.0,
            y: 4.0,
            is_maximized: false,
            is_minimized: false,
            z_index: 10,
        },
    ]);

    let active_app = create_rw_signal(Some(AppId::Hero));
    let start_menu_open = create_rw_signal(false);
    let search_query = create_rw_signal(String::new());
    let sound_enabled = create_rw_signal(true);
    let next_z = create_rw_signal(20u32);

    // Live clock signal (formatted)
    let time_str = create_rw_signal("12:00:00 PM".to_string());
    let date_str = create_rw_signal("Nov 13, 2026".to_string());

    // Window dragging state
    let dragging_window = create_rw_signal(Option::<(AppId, f64, f64)>::None);

    // Update system clock every second
    create_effect(move |_| {
        leptos::spawn_local(async move {
            loop {
                let js_date = js_sys::Date::new_0();
                let hours = js_date.get_hours();
                let minutes = js_date.get_minutes();
                let seconds = js_date.get_seconds();
                let ampm = if hours >= 12 { "PM" } else { "AM" };
                let h12 = if hours % 12 == 0 { 12 } else { hours % 12 };

                time_str.set(format!("{:02}:{:02}:{:02} {}", h12, minutes, seconds, ampm));
                date_str.set(format!("{}/{}/{}", js_date.get_date(), js_date.get_month() + 1, js_date.get_full_year()));
                TimeoutFuture::new(1000).await;
            }
        });
    });

    // Helper to open or focus an app
    let open_app = move |id: AppId| {
        SoundEngine::play_window_open(sound_enabled.get());
        start_menu_open.set(false);

        let mut windows = open_windows.get();
        if let Some(pos) = windows.iter().position(|w| w.id == id) {
            // Already open: unminimize and bring to front
            windows[pos].is_minimized = false;
            let current_z = next_z.get() + 1;
            next_z.set(current_z);
            windows[pos].z_index = current_z;
            open_windows.set(windows);
        } else {
            // Not open: cascade placement
            let count = windows.len() as f64;
            let offset_x = (count * 3.5) % 20.0 + 5.0;
            let offset_y = (count * 3.5) % 15.0 + 5.0;
            let current_z = next_z.get() + 1;
            next_z.set(current_z);

            windows.push(WindowState {
                id,
                x: offset_x,
                y: offset_y,
                is_maximized: false,
                is_minimized: false,
                z_index: current_z,
            });
            open_windows.set(windows);
        }

        active_app.set(Some(id));
    };

    // Helper to bring a window to front
    let focus_window = move |id: AppId| {
        let mut windows = open_windows.get();
        if let Some(pos) = windows.iter().position(|w| w.id == id) {
            let current_z = next_z.get() + 1;
            next_z.set(current_z);
            windows[pos].z_index = current_z;
            windows[pos].is_minimized = false;
            open_windows.set(windows);
            active_app.set(Some(id));
        }
    };

    // Helper to close a window
    let close_window = move |id: AppId| {
        SoundEngine::play_window_close(sound_enabled.get());
        let mut windows = open_windows.get();
        windows.retain(|w| w.id != id);
        open_windows.set(windows);

        if active_app.get() == Some(id) {
            active_app.set(open_windows.get().last().map(|w| w.id));
        }
    };

    // Helper to toggle maximize
    let toggle_maximize = move |id: AppId| {
        let mut windows = open_windows.get();
        if let Some(pos) = windows.iter().position(|w| w.id == id) {
            windows[pos].is_maximized = !windows[pos].is_maximized;
            open_windows.set(windows);
            focus_window(id);
        }
    };

    // Helper to toggle minimize
    let toggle_minimize = move |id: AppId| {
        let mut windows = open_windows.get();
        if let Some(pos) = windows.iter().position(|w| w.id == id) {
            windows[pos].is_minimized = !windows[pos].is_minimized;
            let was_minimized = windows[pos].is_minimized;
            open_windows.set(windows);
            if was_minimized {
                active_app.set(open_windows.get().iter().find(|w| !w.is_minimized).map(|w| w.id));
            } else {
                focus_window(id);
            }
        }
    };

    // Drag handlers on desktop
    let on_desktop_mousemove = move |ev: MouseEvent| {
        if let Some((id, orig_mouse_x, orig_mouse_y)) = dragging_window.get() {
            let dx = ev.client_x() as f64 - orig_mouse_x;
            let dy = ev.client_y() as f64 - orig_mouse_y;

            let window = web_sys::window().unwrap();
            let vw = window.inner_width().unwrap().as_f64().unwrap_or(1200.0);
            let vh = window.inner_height().unwrap().as_f64().unwrap_or(800.0);

            let percent_dx = (dx / vw) * 100.0;
            let percent_dy = (dy / vh) * 100.0;

            let mut windows = open_windows.get();
            if let Some(pos) = windows.iter().position(|w| w.id == id && !w.is_maximized) {
                windows[pos].x = (windows[pos].x + percent_dx).clamp(0.0, 60.0);
                windows[pos].y = (windows[pos].y + percent_dy).clamp(0.0, 60.0);
                open_windows.set(windows);
            }
            dragging_window.set(Some((id, ev.client_x() as f64, ev.client_y() as f64)));
        }
    };

    let on_desktop_mouseup = move |_| {
        dragging_window.set(None);
    };

    view! {
        <div
            id="laptop-os"
            on:mousemove=on_desktop_mousemove
            on:mouseup=on_desktop_mouseup
            class="h-screen w-full bg-[#0a0a0a] overflow-hidden relative font-sans text-white select-none"
        >
            // Radial Wallpaper
            <div
                class="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none"
                style="background-image: radial-gradient(circle at 50% 120%, #1a365d 0%, #060b14 55%, #000000 85%);"
            />

            // Ambient Glow Spheres
            <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow/10 blur-[150px] rounded-full pointer-events-none" />
            <div class="absolute bottom-12 left-0 w-[450px] h-[450px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            // Desktop Workspace Area
            <div
                class="relative w-full h-[calc(100vh-48px)] p-4 overflow-hidden"
                on:click=move |_| start_menu_open.set(false)
            >
                // Desktop Shortcut Icons Grid (Left Side)
                <div class="absolute top-4 left-4 bottom-4 flex flex-col flex-wrap gap-4 content-start z-0">
                    // Profile App
                    <button
                        on:click=move |e| { e.stop_propagation(); open_app(AppId::Hero); }
                        class="w-20 h-24 flex flex-col items-center justify-start gap-1.5 p-2 hover:bg-white/10 rounded group border border-transparent hover:border-white/20 transition-all text-center"
                    >
                        <div class="w-12 h-12 rounded-lg bg-yellow flex items-center justify-center text-2xl shadow-lg shadow-black/50 text-black group-hover:scale-110 transition-transform">
                            "⚡"
                        </div>
                        <span class="text-xs text-white drop-shadow font-medium">"Profile"</span>
                    </button>

                    // Other Apps
                    {APPS.iter().map(|app| {
                        let id = app.id;
                        let icon = app.icon;
                        let color = app.color;
                        let title = app.title;
                        view! {
                            <button
                                on:click=move |e| { e.stop_propagation(); open_app(id); }
                                class="w-20 h-24 flex flex-col items-center justify-start gap-1.5 p-2 hover:bg-white/10 rounded group border border-transparent hover:border-white/20 transition-all text-center"
                            >
                                <div class=format!("w-12 h-12 rounded-lg {} flex items-center justify-center text-2xl shadow-lg shadow-black/50 text-white group-hover:scale-110 transition-transform", color)>
                                    {icon}
                                </div>
                                <span class="text-xs text-white drop-shadow font-medium leading-tight">
                                    {title}
                                </span>
                            </button>
                        }
                    }).collect_view()}
                </div>

                // Render Content Windows
                {move || open_windows.get().into_iter().map(|win| {
                    let id = win.id;
                    let is_active = active_app.get() == Some(id);
                    let is_min = win.is_minimized;
                    let is_max = win.is_maximized;

                    if is_min {
                        return view! { <div class="hidden" /> }.into_view();
                    }

                    let app_info = APPS.iter().find(|a| a.id == id);
                    let (title, icon) = if id == AppId::Hero {
                        ("Profile Overview", "⚡")
                    } else if let Some(info) = app_info {
                        (info.title, info.icon)
                    } else {
                        ("App", "🗂️")
                    };

                    let on_titlebar_mousedown = move |ev: MouseEvent| {
                        ev.stop_propagation();
                        focus_window(id);
                        if !is_max {
                            dragging_window.set(Some((id, ev.client_x() as f64, ev.client_y() as f64)));
                        }
                    };

                    view! {
                        <div
                            on:mousedown=move |_| focus_window(id)
                            class=move || {
                                let mut classes = "absolute rounded-lg overflow-hidden border flex flex-col shadow-2xl backdrop-blur-2xl transition-all duration-150 ".to_string();
                                if is_max {
                                    classes.push_str("inset-0 rounded-none w-full h-full ");
                                } else {
                                    classes.push_str("w-[92vw] sm:w-[82vw] lg:w-[68vw] h-[82vh] ");
                                }
                                if is_active {
                                    classes.push_str("border-yellow/50 bg-[#141414]/95 shadow-[0_10px_40px_rgba(0,0,0,0.8)] ");
                                } else {
                                    classes.push_str("border-white/10 bg-[#111111]/90 shadow-black ");
                                }
                                classes
                            }
                            style=move || {
                                if is_max {
                                    format!("z-index: {};", win.z_index)
                                } else {
                                    format!("left: {:.2}%; top: {:.2}%; z-index: {};", win.x, win.y, win.z_index)
                                }
                            }
                        >
                            // Window Title Bar
                            <div
                                on:mousedown=on_titlebar_mousedown
                                class="h-9 bg-[#1a1a1a]/90 border-b border-[#2a2a2a] px-3 flex items-center justify-between cursor-move select-none"
                            >
                                <div class="flex items-center gap-2">
                                    <span class="text-sm">{icon}</span>
                                    <span class="font-comic text-white text-sm tracking-wide">{title}</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    // Minimize
                                    <button
                                        on:click=move |e| { e.stop_propagation(); toggle_minimize(id); }
                                        class="w-7 h-6 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white rounded text-xs transition-colors"
                                    >
                                        "―"
                                    </button>
                                    // Maximize / Restore
                                    <button
                                        on:click=move |e| { e.stop_propagation(); toggle_maximize(id); }
                                        class="w-7 h-6 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white rounded text-xs transition-colors"
                                    >
                                        {if is_max { "❐" } else { "□" }}
                                    </button>
                                    // Close
                                    <button
                                        on:click=move |e| { e.stop_propagation(); close_window(id); }
                                        class="w-7 h-6 flex items-center justify-center hover:bg-red-600 text-gray-400 hover:text-white rounded text-xs transition-colors"
                                    >
                                        "✕"
                                    </button>
                                </div>
                            </div>

                            // Window Inner Content View
                            <div class="flex-1 overflow-y-auto bg-[#0d0d0d] p-4 sm:p-6">
                                {match id {
                                    AppId::Hero => view! { <Hero /> }.into_view(),
                                    AppId::Skills => view! { <Skills /> }.into_view(),
                                    AppId::Projects => view! { <Projects /> }.into_view(),
                                    AppId::Experience => view! { <Experience /> }.into_view(),
                                    AppId::Education => view! { <Education /> }.into_view(),
                                    AppId::Certifications => view! { <Certifications /> }.into_view(),
                                    AppId::Contact => view! { <Contact /> }.into_view(),
                                    AppId::Terminal => view! { <Terminal sound_enabled=sound_enabled.get() /> }.into_view(),
                                    AppId::AwsArch => view! { <AwsVisualizer /> }.into_view(),
                                    AppId::Pipeline => view! { <PipelineRunner /> }.into_view(),
                                    AppId::Benchmark => view! { <Benchmark /> }.into_view(),
                                }}
                            </div>
                        </div>
                    }.into_view()
                }).collect_view()}

                // Start Menu Panel
                {move || if start_menu_open.get() {
                    let q = search_query.get().to_lowercase();
                    view! {
                        <div
                            on:click=move |e| e.stop_propagation()
                            class="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95vw] sm:w-[580px] h-[520px] bg-[#1a1a1a]/95 backdrop-blur-3xl border border-white/20 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] z-50 flex flex-col overflow-hidden animate-slideUp font-sans"
                        >
                            // Search Bar
                            <div class="p-4 border-b border-white/10">
                                <div class="flex items-center gap-2 px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-sm text-white">
                                    <span class="text-gray-400">"🔍"</span>
                                    <input
                                        type="text"
                                        placeholder="Type to search portfolio apps, skills, projects..."
                                        class="bg-transparent border-none outline-none text-white text-xs sm:text-sm w-full placeholder-gray-500 font-sans"
                                        prop:value=move || search_query.get()
                                        on:input=move |ev| search_query.set(event_target_value(&ev))
                                    />
                                </div>
                            </div>

                            // Pinned Apps & Results
                            <div class="flex-1 p-5 overflow-y-auto">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="font-comic text-xs uppercase tracking-widest text-yellow">"APPLICATIONS"</span>
                                    <span class="font-mono text-[10px] text-gray-500">"Click to launch"</span>
                                </div>
                                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {APPS.iter().filter(move |a| q.is_empty() || a.title.to_lowercase().contains(&q) || a.description.to_lowercase().contains(&q)).map(|app| {
                                        let id = app.id;
                                        view! {
                                            <button
                                                on:click=move |_| open_app(id)
                                                class="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-white/20 hover:bg-white/10 text-left transition-all group"
                                            >
                                                <div class=format!("w-10 h-10 rounded-lg {} flex items-center justify-center text-xl text-white group-hover:scale-105 transition-transform flex-shrink-0 shadow", app.color)>
                                                    {app.icon}
                                                </div>
                                                <div class="min-w-0">
                                                    <div class="font-comic text-sm text-white truncate leading-tight">{app.title}</div>
                                                    <div class="text-[10px] text-gray-400 font-mono truncate">{app.description}</div>
                                                </div>
                                            </button>
                                        }
                                    }).collect_view()}
                                </div>
                            </div>

                            // User Profile Footer
                            <div class="p-3 bg-black/60 border-t border-white/10 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <img src={PROFILE.profile_picture} alt={PROFILE.name} class="w-9 h-9 rounded-full border border-yellow object-cover" />
                                    <div>
                                        <div class="font-comic text-sm text-white">{PROFILE.name}</div>
                                        <div class="font-mono text-[10px] text-yellow">{PROFILE.title}</div>
                                    </div>
                                </div>
                                <a href=format!("mailto:{}", PROFILE.email) class="p-2 hover:bg-white/10 rounded text-xs text-yellow font-mono border border-yellow/30">
                                    "Connect ✉️"
                                </a>
                            </div>
                        </div>
                    }.into_view()
                } else {
                    view! { <div class="hidden" /> }.into_view()
                }}
            </div>

            // Windows 11 Taskbar
            <div class="absolute bottom-0 left-0 right-0 h-12 bg-[#121212]/90 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between px-3 z-40">
                // Center-Left: Start Button & Open App Indicators
                <div class="flex items-center gap-2">
                    // Start Button
                    <button
                        on:click=move |e| {
                            e.stop_propagation();
                            SoundEngine::play_click(sound_enabled.get());
                            start_menu_open.update(|s| *s = !*s);
                        }
                        class=move || {
                            if start_menu_open.get() {
                                "h-9 px-3 rounded-lg bg-yellow text-black font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000] transition-all"
                            } else {
                                "h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-1.5 transition-all group"
                            }
                        }
                    >
                        <span class="text-base group-hover:rotate-12 transition-transform">"⊞"</span>
                        <span class="font-comic text-xs tracking-wider">"START"</span>
                    </button>

                    // Taskbar Open App Badges
                    <div class="flex items-center gap-1.5 overflow-x-auto max-w-[50vw]">
                        {move || open_windows.get().into_iter().map(|win| {
                            let id = win.id;
                            let is_act = active_app.get() == Some(id);
                            let app_info = APPS.iter().find(|a| a.id == id);
                            let title = if id == AppId::Hero { "Profile" } else { app_info.map(|a| a.title).unwrap_or("App") };

                            view! {
                                <button
                                    on:click=move |e| {
                                        e.stop_propagation();
                                        SoundEngine::play_click(sound_enabled.get());
                                        if is_act {
                                            toggle_minimize(id);
                                        } else {
                                            focus_window(id);
                                        }
                                    }
                                    class=move || {
                                        if is_act {
                                            "h-9 px-3 rounded-lg bg-white/20 border-b-2 border-yellow text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
                                        } else {
                                            "h-9 px-3 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
                                        }
                                    }
                                >
                                    <span class="w-1.5 h-1.5 rounded-full bg-yellow" />
                                    <span>{title}</span>
                                </button>
                            }
                        }).collect_view()}
                    </div>
                </div>

                // Right: System Tray & Clock
                <div class="flex items-center gap-3 font-mono text-xs text-gray-300">
                    // Sound FX Toggle
                    <button
                        on:click=move |_| sound_enabled.update(|s| *s = !*s)
                        class="px-2 py-1 rounded hover:bg-white/10 border border-white/10 text-[11px] flex items-center gap-1"
                        title="Toggle Sound Effects"
                    >
                        <span>{move || if sound_enabled.get() { "🔊" } else { "🔇" }}</span>
                    </button>

                    // WASM 60FPS Badge
                    <div class="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-yellow/10 border border-yellow/30 text-yellow text-[11px] font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse" />
                        <span>"RUST / WASM"</span>
                    </div>

                    // Real-time Clock
                    <div class="text-right leading-tight">
                        <div class="font-bold text-white text-xs">{move || time_str.get()}</div>
                        <div class="text-[10px] text-gray-400">{move || date_str.get()}</div>
                    </div>
                </div>
            </div>
        </div>
    }
}
