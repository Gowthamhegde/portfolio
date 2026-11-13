use leptos::*;
use crate::components::{CanvasParticles, CinematicSequence, LaptopOS};
#[component]
pub fn App() -> impl IntoView {

    create_effect(|_| {
        if let Some(window) = web_sys::window() {
            let history = window.history().unwrap();
            let _ = history.set_scroll_restoration(web_sys::ScrollRestoration::Manual);
            window.scroll_to_with_x_and_y(0.0, 0.0);
        }
    });

    view! {
        <main class="relative bg-[#0d0d0d] min-h-screen text-[#f1f1f1] overflow-x-hidden">
            // High-fps Rust WASM particle background
            <CanvasParticles />

            // Scroll-scrubbed cinematic intro transitioning into LaptopOS
            <CinematicSequence>
                <LaptopOS />
            </CinematicSequence>
        </main>
    }
}

