use leptos::*;
use crate::data::PROJECTS;

#[component]
pub fn Projects() -> impl IntoView {
    let filter = create_rw_signal("ALL");

    view! {
        <section id="projects" class="py-12 relative bg-[#0d0d0d]">
            <div class="max-w-7xl mx-auto px-6">
                // Section Header
                <div class="section-header">
                    <div>
                        <div class="section-tag mb-1">"03 / DEPLOYMENTS"</div>
                        <h2 class="font-comic text-4xl text-white tracking-wide">
                            "PROJECT "<span class="text-yellow">"REGISTRY"</span>
                        </h2>
                    </div>
                    <div class="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
                        <span class="font-comic text-yellow text-lg">{PROJECTS.len()}</span>
                        "deployments active"
                    </div>
                </div>

                // Category Filter Pills
                <div class="flex flex-wrap gap-2 mb-8">
                    {["ALL", "Cloud", "AI/ML", "Full-Stack", "Frontend", "Systems"].into_iter().map(|cat| {
                        view! {
                            <button
                                on:click=move |_| filter.set(cat)
                                class=move || {
                                    let active = filter.get() == cat;
                                    if active {
                                        "px-3 py-1 font-mono text-xs rounded border border-yellow bg-yellow text-black font-bold shadow-[2px_2px_0px_#000] transition-all"
                                    } else {
                                        "px-3 py-1 font-mono text-xs rounded border border-border bg-[#141414] text-gray-400 hover:border-yellow/50 hover:text-white transition-all"
                                    }
                                }
                            >
                                {cat}
                            </button>
                        }
                    }).collect_view()}
                </div>

                // Projects Grid
                <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {move || {
                        let current_filter = filter.get();
                        PROJECTS
                            .iter()
                            .filter(move |p| current_filter == "ALL" || p.category == current_filter)
                            .map(|project| {
                                view! {
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="panel p-6 flex flex-col justify-between gap-4 cursor-pointer no-underline border-2 border-border hover:border-yellow hover:shadow-[4px_4px_0px_#f5c518] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group"
                                    >
                                        // Card Top Header
                                        <div>
                                            <div class="flex items-start justify-between gap-3 mb-3">
                                                <div class="flex items-center gap-2">
                                                    <div class="w-8 h-8 bg-yellow flex items-center justify-center text-black shadow-[2px_2px_0px_#000]">
                                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <span class="font-mono text-[10px] text-gray-500 tracking-widest">{project.dep_id}</span>
                                                </div>
                                                <span class="badge badge-success">{project.status}</span>
                                            </div>

                                            // Project Name & Architecture
                                            <h3 class="font-comic text-white text-xl tracking-wide leading-tight mb-1 group-hover:text-yellow transition-colors">
                                                {project.name}
                                            </h3>
                                            <div class="font-mono text-[11px] text-gray-500 mb-3">{project.arch}</div>

                                            // Description
                                            <p class="text-gray-400 text-sm leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        // Card Footer: Tech tags + Link
                                        <div class="pt-3 border-t border-border flex flex-col gap-3">
                                            <div class="flex flex-wrap gap-1.5">
                                                {project.tech.iter().map(|t| {
                                                    view! {
                                                        <span class="tech-tag">{*t}</span>
                                                    }
                                                }).collect_view()}
                                            </div>
                                            <div class="flex items-center gap-1.5 text-xs font-mono text-gray-500 group-hover:text-yellow transition-colors mt-1">
                                                <span>"VIEW REPOSITORY"</span>
                                                <span>"↗"</span>
                                            </div>
                                        </div>
                                    </a>
                                }
                            })
                            .collect_view()
                    }}
                </div>
            </div>
        </section>
    }
}

