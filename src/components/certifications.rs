use leptos::*;
use crate::data::CERTIFICATIONS;

#[component]
pub fn Certifications() -> impl IntoView {
    view! {
        <section id="certifications" class="py-12 relative bg-[#0d0d0d]">
            <div class="max-w-7xl mx-auto px-6">
                // Section Header
                <div class="section-header">
                    <div>
                        <div class="section-tag mb-1">"06 / CREDENTIALS"</div>
                        <h2 class="font-comic text-4xl text-white tracking-wide">
                            "CERTIFICATIONS "<span class="text-yellow">"& BADGES"</span>
                        </h2>
                    </div>
                    <div class="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
                        <span class="font-comic text-yellow text-lg">{CERTIFICATIONS.len()}</span>
                        "credentials verified"
                    </div>
                </div>

                // Certifications Grid
                <div class="grid md:grid-cols-2 gap-6">
                    {CERTIFICATIONS.iter().map(|cert| {
                        view! {
                            <div class="panel p-6 border-l-4 border-yellow flex flex-col justify-between">
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 bg-yellow flex items-center justify-center flex-shrink-0 text-black shadow-[2px_2px_0px_#000]">
                                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center gap-2 mb-2">
                                            <span class="badge badge-success">{cert.category}</span>
                                            <span class="font-mono text-xs text-gray-500">{cert.year}</span>
                                        </div>
                                        <h3 class="text-white font-bold text-base leading-snug mb-1">{cert.name}</h3>
                                        <div class="text-gray-400 text-xs font-mono mb-4">{cert.issuer}</div>
                                        <a
                                            href={cert.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-yellow transition-colors group"
                                        >
                                            <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            <span>"VIEW CERTIFICATE"</span>
                                        </a>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge badge-success">"VERIFIED"</span>
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

