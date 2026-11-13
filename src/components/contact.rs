use leptos::*;
use crate::data::PROFILE;
use gloo_net::http::Request;
use serde_json::json;

#[derive(Clone, Copy, PartialEq)]
enum SubmitState {
    Idle,
    Submitting,
    Success,
    Error,
}

#[component]
pub fn Contact() -> impl IntoView {
    let name_sig = create_rw_signal(String::new());
    let email_sig = create_rw_signal(String::new());
    let message_sig = create_rw_signal(String::new());
    let submit_state = create_rw_signal(SubmitState::Idle);

    let handle_submit = move |ev: web_sys::SubmitEvent| {
        ev.prevent_default();
        let name = name_sig.get();
        let email = email_sig.get();
        let message = message_sig.get();

        if name.trim().is_empty() || email.trim().is_empty() || message.trim().is_empty() {
            return;
        }

        submit_state.set(SubmitState::Submitting);

        leptos::spawn_local(async move {
            let payload = json!({
                "name": name,
                "_replyto": email,
                "message": message,
                "_subject": "New Portfolio Contact (Rust/WASM)"
            });

            let req = Request::post("https://formspree.io/f/mykkjnza")
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .body(payload.to_string());

            match req {
                Ok(r) => {
                    match r.send().await {
                        Ok(response) if response.ok() => {
                            submit_state.set(SubmitState::Success);
                            name_sig.set(String::new());
                            email_sig.set(String::new());
                            message_sig.set(String::new());
                        }
                        _ => {
                            submit_state.set(SubmitState::Error);
                        }
                    }
                }
                Err(_) => {
                    submit_state.set(SubmitState::Error);
                }
            }
        });
    };

    view! {
        <section id="contact" class="py-12 relative bg-[#0d0d0d]">
            <div class="max-w-7xl mx-auto px-6">
                // Section Header
                <div class="section-header">
                    <div>
                        <div class="section-tag mb-1">"07 / CONNECT"</div>
                        <h2 class="font-comic text-4xl text-white tracking-wide">
                            "INIT "<span class="text-yellow">"CONNECTION"</span>
                        </h2>
                    </div>
                </div>

                <div class="grid lg:grid-cols-2 gap-8">
                    // Left Column: Contact Endpoints & Socials
                    <div class="space-y-6">
                        <div class="panel p-6 border-l-4 border-yellow">
                            <div class="font-comic text-yellow text-sm tracking-widest mb-4">"CONTACT ENDPOINTS"</div>
                            <div class="space-y-4">
                                <a
                                    href=format!("mailto:{}", PROFILE.email)
                                    class="flex items-center gap-4 p-3 border border-border hover:border-yellow hover:bg-yellow/5 transition-all group rounded"
                                >
                                    <div class="w-2 h-8 bg-yellow flex-shrink-0" />
                                    <div>
                                        <div class="font-mono text-[10px] text-gray-500 tracking-widest uppercase">"EMAIL"</div>
                                        <div class="text-white text-sm font-medium group-hover:text-yellow transition-colors">{PROFILE.email}</div>
                                    </div>
                                </a>

                                <a
                                    href=format!("tel:{}", PROFILE.phone)
                                    class="flex items-center gap-4 p-3 border border-border hover:border-yellow hover:bg-yellow/5 transition-all group rounded"
                                >
                                    <div class="w-2 h-8 bg-yellow flex-shrink-0" />
                                    <div>
                                        <div class="font-mono text-[10px] text-gray-500 tracking-widest uppercase">"PHONE"</div>
                                        <div class="text-white text-sm font-medium group-hover:text-yellow transition-colors">{PROFILE.phone}</div>
                                    </div>
                                </a>

                                <div class="flex items-center gap-4 p-3 border border-border bg-[#111] rounded">
                                    <div class="w-2 h-8 bg-yellow flex-shrink-0" />
                                    <div>
                                        <div class="font-mono text-[10px] text-gray-500 tracking-widest uppercase">"LOCATION"</div>
                                        <div class="text-white text-sm font-medium">{PROFILE.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        // Social Links
                        <div class="panel p-6 border-l-4 border-yellow">
                            <div class="font-comic text-yellow text-sm tracking-widest mb-4">"SOCIAL LINKS"</div>
                            <div class="flex gap-4">
                                {PROFILE.socials.iter().map(|social| {
                                    view! {
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="flex-1 flex items-center justify-center gap-2 p-3 border-2 border-border hover:border-yellow hover:bg-yellow hover:text-black transition-all text-gray-300 font-comic tracking-wide shadow-[2px_2px_0px_#2a2a2a] hover:shadow-[2px_2px_0px_#000] rounded group"
                                        >
                                            <span class="text-base group-hover:scale-110 transition-transform">
                                                {if social.label == "GitHub" { "🐙" } else { "💼" }}
                                            </span>
                                            <span>{social.label}</span>
                                        </a>
                                    }
                                }).collect_view()}
                            </div>
                        </div>
                    </div>

                    // Right Column: Contact Form
                    <div>
                        <div class="panel p-6 sm:p-7 border-l-4 border-yellow">
                            <div class="font-comic text-yellow text-lg tracking-widest mb-6">"TRANSMIT MESSAGE"</div>

                            {move || match submit_state.get() {
                                SubmitState::Success => view! {
                                    <div class="p-6 border-2 border-yellow bg-yellow/10 rounded text-center">
                                        <div class="text-4xl mb-2">"🚀"</div>
                                        <h4 class="font-comic text-2xl text-yellow mb-1">"TRANSMISSION RECEIVED!"</h4>
                                        <p class="text-gray-300 font-mono text-xs">
                                            "Thank you for reaching out. I will get back to you shortly."
                                        </p>
                                        <button
                                            on:click=move |_| submit_state.set(SubmitState::Idle)
                                            class="mt-4 px-4 py-2 font-mono text-xs border border-yellow text-yellow hover:bg-yellow hover:text-black transition-all rounded"
                                        >
                                            "Send Another Message"
                                        </button>
                                    </div>
                                }.into_view(),
                                _ => view! {
                                    <form on:submit=handle_submit class="space-y-4">
                                        <div>
                                            <label class="block font-comic text-yellow text-sm tracking-widest mb-2">"NAME"</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                prop:value=move || name_sig.get()
                                                on:input=move |ev| name_sig.set(event_target_value(&ev))
                                                class="w-full px-4 py-3 bg-black border-2 border-border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-yellow transition-all font-mono rounded"
                                            />
                                        </div>

                                        <div>
                                            <label class="block font-comic text-yellow text-sm tracking-widest mb-2">"EMAIL"</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="your.email@domain.com"
                                                prop:value=move || email_sig.get()
                                                on:input=move |ev| email_sig.set(event_target_value(&ev))
                                                class="w-full px-4 py-3 bg-black border-2 border-border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-yellow transition-all font-mono rounded"
                                            />
                                        </div>

                                        <div>
                                            <label class="block font-comic text-yellow text-sm tracking-widest mb-2">"MESSAGE"</label>
                                            <textarea
                                                required
                                                rows="5"
                                                placeholder="Hello Gouthama, I'd like to discuss an opportunity..."
                                                prop:value=move || message_sig.get()
                                                on:input=move |ev| message_sig.set(event_target_value(&ev))
                                                class="w-full px-4 py-3 bg-black border-2 border-border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-yellow transition-all resize-none font-mono rounded"
                                            />
                                        </div>

                                        {move || if submit_state.get() == SubmitState::Error {
                                            view! {
                                                <div class="p-3 border border-red-500 bg-red-500/10 text-red-400 font-mono text-xs rounded">
                                                    "Failed to deliver message. Please reach out directly to gowthamhegde606@gmail.com"
                                                </div>
                                            }.into_view()
                                        } else {
                                            view! { <div /> }.into_view()
                                        }}

                                        <button
                                            type="submit"
                                            disabled=move || submit_state.get() == SubmitState::Submitting
                                            class="w-full btn-primary justify-center py-3 text-base flex items-center gap-2"
                                        >
                                            {move || if submit_state.get() == SubmitState::Submitting {
                                                "TRANSMITTING..."
                                            } else {
                                                "SEND MESSAGE ➔"
                                            }}
                                        </button>
                                    </form>
                                }.into_view(),
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}
