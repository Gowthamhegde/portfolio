use leptos::*;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};
use std::cell::RefCell;
use std::rc::Rc;

struct Particle {
    x: f64,
    y: f64,
    vx: f64,
    vy: f64,
    radius: f64,
    color: &'static str,
}

#[component]
pub fn CanvasParticles() -> impl IntoView {
    let canvas_ref = create_node_ref::<html::Canvas>();

    create_effect(move |_| {
        if let Some(canvas) = canvas_ref.get() {
            let canvas: HtmlCanvasElement = (*canvas).clone();
            let window = web_sys::window().unwrap();
            let dpr = window.device_pixel_ratio().max(1.0);

            let width = window.inner_width().unwrap().as_f64().unwrap_or(1200.0);
            let height = window.inner_height().unwrap().as_f64().unwrap_or(800.0);

            canvas.set_width((width * dpr) as u32);
            canvas.set_height((height * dpr) as u32);

            let ctx: CanvasRenderingContext2d = canvas
                .get_context("2d")
                .unwrap()
                .unwrap()
                .unchecked_into();
            let _ = ctx.scale(dpr, dpr);

            // Generate particles
            let particle_count = if width < 768.0 { 28 } else { 55 };
            let mut particles = Vec::with_capacity(particle_count);

            for i in 0..particle_count {
                let seed = i as f64 * 137.5;
                let x = (seed * 19.3) % width;
                let y = (seed * 31.7) % height;
                let vx = (((i % 7) as f64 - 3.0) * 0.25).max(-0.6).min(0.6);
                let vy = (((i % 5) as f64 - 2.0) * 0.25).max(-0.6).min(0.6);
                let radius = 1.2 + (i % 3) as f64 * 0.8;
                let color = if i % 4 == 0 {
                    "rgba(245, 197, 24, 0.65)" // Yellow
                } else if i % 4 == 1 {
                    "rgba(66, 153, 225, 0.5)" // Blue
                } else {
                    "rgba(255, 255, 255, 0.35)" // White
                };
                particles.push(Particle { x, y, vx, vy, radius, color });
            }

            let particles_rc = Rc::new(RefCell::new(particles));
            let f: Rc<RefCell<Option<Closure<dyn FnMut()>>>> = Rc::new(RefCell::new(None));
            let g = f.clone();

            *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
                ctx.clear_rect(0.0, 0.0, width, height);

                let mut parts = particles_rc.borrow_mut();
                let len = parts.len();

                // Update & draw particles
                for p in parts.iter_mut() {
                    p.x += p.vx;
                    p.y += p.vy;

                    if p.x < 0.0 { p.x = width; }
                    if p.x > width { p.x = 0.0; }
                    if p.y < 0.0 { p.y = height; }
                    if p.y > height { p.y = 0.0; }

                    ctx.begin_path();
                    let _ = ctx.arc(p.x, p.y, p.radius, 0.0, std::f64::consts::PI * 2.0);
                    ctx.set_fill_style_str(p.color);
                    ctx.fill();
                }

                // Connect nearby particles
                let dist_threshold = 110.0;
                for i in 0..len {
                    for j in (i + 1)..len {
                        let dx = parts[i].x - parts[j].x;
                        let dy = parts[i].y - parts[j].y;
                        let dist = (dx * dx + dy * dy).sqrt();

                        if dist < dist_threshold {
                            let alpha = (1.0 - (dist / dist_threshold)) * 0.18;
                            let line_color = format!("rgba(245, 197, 24, {:.3})", alpha);
                            ctx.begin_path();
                            ctx.set_stroke_style_str(&line_color);
                            ctx.set_line_width(0.75);
                            ctx.move_to(parts[i].x, parts[i].y);
                            ctx.line_to(parts[j].x, parts[j].y);
                            ctx.stroke();
                        }
                    }
                }

                let window = web_sys::window().unwrap();
                let _ = window.request_animation_frame(
                    f.borrow().as_ref().unwrap().as_ref().unchecked_ref(),
                );
            }) as Box<dyn FnMut()>));

            let window = web_sys::window().unwrap();
            let _ = window.request_animation_frame(
                g.borrow().as_ref().unwrap().as_ref().unchecked_ref(),
            );
        }
    });

    view! {
        <canvas
            node_ref=canvas_ref
            class="absolute inset-0 pointer-events-none z-0 opacity-70 w-full h-full"
        />
    }
}
