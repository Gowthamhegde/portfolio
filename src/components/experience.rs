use leptos::*;
use crate::data::EXPERIENCE;

#[component]
pub fn Experience() -> impl IntoView {
    view! {
        <section id="experience" class="py-12 relative bg-[#0d0d0d]">
            <div class="max-w-7xl mx-auto px-6">
                // Section Header
                <div class="section-header">
                    <div>
                        <div class="section-tag mb-1">"04 / WORK HISTORY"</div>
                        <h2 class="font-comic text-4xl text-white tracking-wide">
                            "PROFESSIONAL "<span class="text-yellow">"EXPERIENCE"</span>
                        </h2>
                    </div>
                </div>

                // Timeline container
                <div class="relative pl-6 sm:pl-10">
                    // Vertical timeline line
                    <div class="absolute left-2.5 sm:left-5 top-0 bottom-0 w-0.5 bg-yellow/30" />

                    {EXPERIENCE.iter().enumerate().map(|(_i, exp)| {
                        view! {
                            <div class="relative pl-6 sm:pl-10 pb-12">
                                // Timeline Node Marker
                                <div class="absolute left-[-16px] sm:left-[-15px] top-1 w-8 h-8 sm:w-10 sm:h-10 bg-yellow flex items-center justify-center shadow-[2px_2px_0px_#000]">
                                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black" />
                                </div>

                                // Entry Panel
                                <div class="panel p-6 sm:p-7 border-l-4 border-yellow">
                                    <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                                        <div>
                                            <span class="badge badge-success mb-2 inline-flex">"INTERNSHIP"</span>
                                            <h3 class="font-comic text-2xl text-white tracking-wide mb-1">{exp.role}</h3>
                                            <div class="text-yellow font-semibold text-lg">{exp.company}</div>
                                        </div>
                                        <div class="text-left sm:text-right">
                                            <div class="font-mono text-sm text-gray-300 font-bold mb-1">{exp.period}</div>
                                            <div class="font-mono text-xs text-gray-500">{exp.location}</div>
                                        </div>
                                    </div>

                                    // Key Responsibilities
                                    <div class="mb-6">
                                        <div class="font-comic text-yellow text-sm tracking-widest mb-3">"KEY RESPONSIBILITIES"</div>
                                        <div class="space-y-2">
                                            {exp.details.iter().map(|detail| {
                                                view! {
                                                    <div class="flex items-start gap-3 p-3 border border-border hover:border-yellow/40 transition-colors bg-[#111111]">
                                                        <span class="text-yellow mt-0.5 flex-shrink-0">"▸"</span>
                                                        <span class="text-gray-300 text-sm leading-relaxed">{*detail}</span>
                                                    </div>
                                                }
                                            }).collect_view()}
                                        </div>
                                    </div>

                                    // Technologies Used
                                    <div>
                                        <div class="font-comic text-yellow text-sm tracking-widest mb-3">"TECHNOLOGIES USED"</div>
                                        <div class="flex flex-wrap gap-2">
                                            {exp.tech_used.iter().map(|tech| {
                                                view! {
                                                    <span class="tech-tag">{*tech}</span>
                                                }
                                            }).collect_view()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    }).collect_view()}

                    // Open to opportunities CTA
                    <div class="relative pl-6 sm:pl-10">
                        <div class="panel p-6 sm:p-7 border-2 border-yellow shadow-[4px_4px_0px_#f5c518] bg-yellow/5 flex flex-wrap items-center justify-between gap-6">
                            <div>
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-yellow text-xl">"✅"</span>
                                    <h4 class="font-comic text-xl text-white tracking-wide">"OPEN TO NEW OPPORTUNITIES"</h4>
                                </div>
                                <p class="text-gray-400 text-sm max-w-xl">
                                    "Seeking full-time roles & high-impact projects in Cloud Architecture, DevOps Automation, and Systems / Backend Engineering."
                                </p>
                            </div>
                            <a href="#contact" class="btn-primary">
                                "GET IN TOUCH"
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}
