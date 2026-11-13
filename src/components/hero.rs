use leptos::*;
use gloo_timers::future::TimeoutFuture;
use crate::data::PROFILE;

const ROLES: &[&str] = &[
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS Architect",
    "Infrastructure Engineer",
    "Rust / Systems Developer",
];

#[component]
pub fn Hero() -> impl IntoView {
    let role_idx = create_rw_signal(0usize);

    // Role cycling effect every 3 seconds
    create_effect(move |_| {
        leptos::spawn_local(async move {
            loop {
                TimeoutFuture::new(3000).await;
                role_idx.update(|idx| *idx = (*idx + 1) % ROLES.len());
            }
        });
    });

    view! {
        <section id="home" class="relative min-h-[90vh] flex items-center pt-8 pb-12 overflow-hidden bg-[#0d0d0d]">
            // Halftone pattern overlay
            <div
                class="absolute inset-0 opacity-[0.04] pointer-events-none"
                style="background-image: radial-gradient(circle, #f5c518 1px, transparent 1px); background-size: 28px 28px;"
            />

            // Yellow accent strip top
            <div class="absolute top-0 left-0 right-0 h-1 bg-yellow" />

            // Decorative Lightning SVGs
            <svg class="absolute top-24 right-[12%] w-8 h-16 text-yellow/20 rotate-12 pointer-events-none" viewBox="0 0 24 48" fill="currentColor">
                <path d="M13 0L0 28h10L8 48l16-28H14L13 0z" />
            </svg>
            <svg class="absolute bottom-20 left-[8%] w-6 h-12 text-yellow/15 -rotate-6 pointer-events-none" viewBox="0 0 24 48" fill="currentColor">
                <path d="M13 0L0 28h10L8 48l16-28H14L13 0z" />
            </svg>

            <div class="relative z-10 max-w-7xl mx-auto px-6 w-full py-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">

                    // LEFT: Identity & Info
                    <div class="animate-fadeIn">
                        // Status pill
                        <div class="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-yellow bg-yellow/10 mb-6 rounded-sm">
                            <span class="relative flex h-2.5 w-2.5">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75" />
                                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow" />
                            </span>
                            <span class="font-comic text-yellow text-sm tracking-widest uppercase">"AVAILABLE FOR HIRE"</span>
                        </div>

                        // Name
                        <h1 class="font-comic leading-[0.95] tracking-wide mb-4">
                            <span class="block text-white text-5xl sm:text-7xl lg:text-8xl">{PROFILE.first_name}</span>
                            <span class="block text-yellow text-5xl sm:text-7xl lg:text-8xl">{PROFILE.last_name}</span>
                        </h1>

                        // Animated role cycling
                        <div class="flex items-center gap-3 mb-5 h-9">
                            <span class="text-gray-500 font-mono text-sm">"~/"</span>
                            <span class="text-yellow font-comic text-2xl tracking-wide transition-all duration-300">
                                {move || ROLES[role_idx.get()]}
                            </span>
                            <span class="w-0.5 h-6 bg-yellow animate-blink" />
                        </div>

                        // Bio
                        <p class="text-gray-400 text-base leading-relaxed max-w-lg mb-8 border-l-4 border-yellow pl-4">
                            {PROFILE.summary}
                        </p>

                        // CTA Buttons
                        <div class="flex flex-wrap gap-4 mb-8">
                            <a href="#projects" class="btn-primary">
                                "VIEW PROJECTS"
                            </a>
                            <a href={PROFILE.socials[0].href} target="_blank" rel="noopener noreferrer" class="btn-secondary">
                                "GITHUB"
                            </a>
                            <a href={PROFILE.socials[1].href} target="_blank" rel="noopener noreferrer" class="btn-secondary">
                                "LINKEDIN"
                            </a>
                        </div>

                        // Contact items
                        <div class="flex flex-wrap gap-6 text-xs font-mono text-gray-400 border-t border-border pt-4">
                            <div class="flex items-center gap-2">
                                <span class="text-yellow">"📍"</span>
                                <span>{PROFILE.location}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-yellow">"✉️"</span>
                                <a href=format!("mailto:{}", PROFILE.email) class="hover:text-yellow transition-colors">
                                    {PROFILE.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    // RIGHT: Profile Avatar & Stats Grid
                    <div class="flex flex-col items-center lg:items-end gap-8">
                        // Avatar in comic circular frame
                        <div class="relative group">
                            <div class="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-yellow shadow-[6px_6px_0px_#f5c518] bg-[#1a1a1a] relative z-10 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src={PROFILE.profile_picture}
                                    alt={PROFILE.name}
                                    class="w-full h-full object-cover object-center"
                                />
                            </div>
                            // Status dot
                            <div class="absolute bottom-2 right-4 z-20 w-6 h-6 rounded-full bg-yellow border-2 border-black flex items-center justify-center">
                                <div class="w-2.5 h-2.5 rounded-full bg-black" />
                            </div>
                        </div>

                        // 2x2 Stats Grid
                        <div class="grid grid-cols-2 gap-4 w-full max-w-md">
                            <div class="panel p-4 text-center border-l-4 border-yellow">
                                <div class="font-comic text-3xl sm:text-4xl text-yellow">"5+"</div>
                                <div class="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">"Projects"</div>
                            </div>
                            <div class="panel p-4 text-center border-l-4 border-yellow">
                                <div class="font-comic text-3xl sm:text-4xl text-yellow">"4"</div>
                                <div class="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">"Certifications"</div>
                            </div>
                            <div class="panel p-4 text-center border-l-4 border-yellow">
                                <div class="font-comic text-3xl sm:text-4xl text-yellow">"1 YR"</div>
                                <div class="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">"Experience"</div>
                            </div>
                            <div class="panel p-4 text-center border-l-4 border-yellow">
                                <div class="font-comic text-3xl sm:text-4xl text-yellow">"20+"</div>
                                <div class="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">"Skills"</div>
                            </div>
                        </div>

                        // AWS Badge Panel
                        <div class="panel p-4 w-full max-w-md flex items-center justify-between border-l-4 border-yellow bg-[#141414]">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-yellow flex items-center justify-center text-black font-bold text-xl shadow-[2px_2px_0px_#000]">
                                    "☁️"
                                </div>
                                <div>
                                    <div class="font-comic text-white text-base tracking-wide">"AWS SOLUTIONS ARCHITECT"</div>
                                    <div class="font-mono text-[11px] text-gray-400">"EC2 • S3 • RDS • VPC • CloudWatch"</div>
                                </div>
                            </div>
                            <span class="badge badge-success">"CERT"</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    }
}

