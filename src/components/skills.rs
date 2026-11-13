use leptos::*;
use crate::data::SKILL_GROUPS;

#[component]
pub fn Skills() -> impl IntoView {
    let filter = create_rw_signal("ALL");

    view! {
        <section id="skills" class="py-12 relative bg-[#0d0d0d]">
            <div class="max-w-7xl mx-auto px-6">
                // Section Header
                <div class="section-header">
                    <div>
                        <div class="section-tag mb-1">"02 / CAPABILITIES"</div>
                        <h2 class="font-comic text-4xl text-white tracking-wide">
                            "TECHNICAL "<span class="text-yellow">"STACK"</span>
                        </h2>
                    </div>
                    <div class="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
                        <span class="w-2 h-2 rounded-full bg-yellow animate-pulse" />
                        "ALL SYSTEMS NOMINAL"
                    </div>
                </div>

                // Category Filter Pills
                <div class="flex flex-wrap gap-2 mb-8">
                    {["ALL", "Cloud", "DevOps", "Full-Stack", "Security"].into_iter().map(|cat| {
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

                // Skill Groups Grid
                <div class="grid md:grid-cols-2 gap-6">
                    {move || {
                        let current_filter = filter.get();
                        SKILL_GROUPS
                            .iter()
                            .filter(move |g| current_filter == "ALL" || g.category == current_filter)
                            .map(|group| {
                                view! {
                                    <div class="panel p-6 border-l-4 border-yellow flex flex-col justify-between">
                                        // Group Header
                                        <div class="flex items-center justify-between mb-5">
                                            <div class="flex items-center gap-3">
                                                <div class="w-9 h-9 bg-yellow flex items-center justify-center text-lg shadow-[2px_2px_0px_#000]">
                                                    {group.icon}
                                                </div>
                                                <span class="font-comic text-white text-base tracking-widest">{group.label}</span>
                                            </div>
                                            <span class="badge badge-success">"ACTIVE"</span>
                                        </div>

                                        // Skill Chips
                                        <div class="flex flex-wrap gap-2">
                                            {group.skills.iter().map(|skill| {
                                                view! {
                                                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#111111] border border-border text-gray-300 font-mono text-xs rounded hover:border-yellow hover:text-yellow transition-all cursor-default">
                                                        <span class="w-1.5 h-1.5 rounded-full bg-yellow" />
                                                        {*skill}
                                                    </span>
                                                }
                                            }).collect_view()}
                                        </div>
                                    </div>
                                }
                            })
                            .collect_view()
                    }}
                </div>
            </div>
        </section>
    }
}

