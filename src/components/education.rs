use leptos::*;
use crate::data::EDUCATION;

#[component]
pub fn Education() -> impl IntoView {
    view! {
        <section id="education" class="py-12 relative bg-[#0d0d0d]">
            <div class="max-w-7xl mx-auto px-6">
                // Section Header
                <div class="section-header">
                    <div>
                        <div class="section-tag mb-1">"05 / BACKGROUND"</div>
                        <h2 class="font-comic text-4xl text-white tracking-wide">
                            "EDUCATION "<span class="text-yellow">"HISTORY"</span>
                        </h2>
                    </div>
                </div>

                // Education List Stack
                <div class="space-y-6">
                    {EDUCATION.iter().map(|edu| {
                        view! {
                            <div class="panel p-6 sm:p-7 border-l-4 border-yellow">
                                <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 bg-yellow flex items-center justify-center flex-shrink-0 text-black shadow-[2px_2px_0px_#000]">
                                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-comic text-xl text-white tracking-wide mb-0.5">{edu.degree}</h3>
                                            <div class="text-yellow font-semibold">{edu.school}</div>
                                        </div>
                                    </div>
                                    <div class="text-left sm:text-right">
                                        <div class="font-mono text-sm text-gray-400 mb-2">{edu.period}</div>
                                        <span class="badge badge-success">{edu.status}</span>
                                    </div>
                                </div>

                                // Coursework
                                <div>
                                    <div class="font-comic text-yellow text-sm tracking-widest mb-3">"RELEVANT COURSEWORK"</div>
                                    <div class="flex flex-wrap gap-2">
                                        {edu.coursework.iter().map(|course| {
                                            view! {
                                                <span class="tech-tag">{*course}</span>
                                            }
                                        }).collect_view()}
                                    </div>
                                </div>
                            </div>
                        }
                    }).collect_view()}
                </div>
            </div>
        </section>
    }
}

