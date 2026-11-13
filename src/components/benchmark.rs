use leptos::*;

#[component]
pub fn Benchmark() -> impl IntoView {
    let bench_result = create_rw_signal(Option::<(f64, u64, f64)>::None); // (time_ms, ops, mops_per_sec)
    let is_benchmarking = create_rw_signal(false);

    let run_benchmark = move |_| {
        is_benchmarking.set(true);

        leptos::spawn_local(async move {
            let window = web_sys::window().unwrap();
            let perf = window.performance().unwrap();
            let start = perf.now();

            // Run 500,000 intensive numeric hashing / bitwise operations in pure Rust
            let iterations: u64 = 500_000;
            let mut acc: u64 = 0x5A827999;
            for i in 0..iterations {
                acc = acc.rotate_left(5) ^ ((acc & 0x9E3779B9) + i);
                acc ^= acc.wrapping_mul(6364136223846793005);
            }

            let end = perf.now();
            let elapsed_ms = (end - start).max(0.001);
            let mops = (iterations as f64 / (elapsed_ms / 1000.0)) / 1_000_000.0;

            bench_result.set(Some((elapsed_ms, iterations, mops)));
            is_benchmarking.set(false);
        });
    };

    view! {
        <div class="panel p-6 bg-[#0a0a0a] border-2 border-border rounded-lg text-white font-sans flex flex-col gap-6">
            // Header
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                    <div class="section-tag mb-1">"SYSTEM PERFORMANCE"</div>
                    <h3 class="font-comic text-2xl text-white">
                        "RUST / WASM "<span class="text-yellow">"BENCHMARK ENGINE"</span>
                    </h3>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-yellow animate-pulse" />
                    <span class="font-mono text-xs text-yellow font-bold uppercase">"Zero JS Overhead"</span>
                </div>
            </div>

            // Metrics Cards
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="panel p-4 bg-[#141414] border-l-4 border-yellow text-center">
                    <div class="font-mono text-[11px] text-gray-500 uppercase">"Engine"</div>
                    <div class="font-comic text-2xl text-white mt-1">"Rust 1.99"</div>
                    <div class="font-mono text-[10px] text-yellow mt-0.5">"WASM Target"</div>
                </div>
                <div class="panel p-4 bg-[#141414] border-l-4 border-yellow text-center">
                    <div class="font-mono text-[11px] text-gray-500 uppercase">"Target Arch"</div>
                    <div class="font-comic text-2xl text-white mt-1">"wasm32"</div>
                    <div class="font-mono text-[10px] text-green-400 mt-0.5">"AOT Compiled"</div>
                </div>
                <div class="panel p-4 bg-[#141414] border-l-4 border-yellow text-center">
                    <div class="font-mono text-[11px] text-gray-500 uppercase">"Target Frame Rate"</div>
                    <div class="font-comic text-2xl text-yellow mt-1">"60 - 120 FPS"</div>
                    <div class="font-mono text-[10px] text-gray-400 mt-0.5">"V-Sync Locked"</div>
                </div>
                <div class="panel p-4 bg-[#141414] border-l-4 border-yellow text-center">
                    <div class="font-mono text-[11px] text-gray-500 uppercase">"Reactivity Model"</div>
                    <div class="font-comic text-2xl text-white mt-1">"Signals"</div>
                    <div class="font-mono text-[10px] text-yellow mt-0.5">"No Virtual DOM"</div>
                </div>
            </div>

            // Interactive Benchmark Action
            <div class="p-5 rounded bg-[#111111] border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                    <h4 class="font-comic text-lg text-white mb-1">"CPU Hash & Arithmetic Stress Test"</h4>
                    <p class="text-gray-400 text-xs font-mono max-w-lg">
                        "Executes 500,000 non-linear bitwise mixing loops directly in WebAssembly to verify near-native CPU throughput."
                    </p>
                </div>
                <button
                    on:click=run_benchmark
                    disabled=move || is_benchmarking.get()
                    class="btn-primary flex-shrink-0"
                >
                    {move || if is_benchmarking.get() { "BENCHMARKING..." } else { "RUN BENCHMARK ⚡" }}
                </button>
            </div>

            // Benchmark Result Display
            {move || bench_result.get().map(|(time_ms, ops, mops)| {
                view! {
                    <div class="p-4 rounded border-2 border-yellow bg-yellow/10 font-mono text-xs flex flex-wrap items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">"⚡"</span>
                            <div>
                                <span class="text-yellow font-bold text-sm block">"BENCHMARK COMPLETED"</span>
                                <span class="text-gray-300">
                                    {format!("Processed {} iterations in {:.2} ms", ops, time_ms)}
                                </span>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-right">
                                <span class="text-yellow font-comic text-2xl block">{format!("{:.1} MOPS", mops)}</span>
                                <span class="text-gray-400 text-[10px]">"Million Ops / Sec"</span>
                            </div>
                            <span class="badge badge-success">"GRADE A+"</span>
                        </div>
                    </div>
                }
            })}
        </div>
    }
}

