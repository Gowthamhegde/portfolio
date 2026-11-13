use leptos::*;
use gloo_timers::future::TimeoutFuture;

#[component]
pub fn PipelineRunner() -> impl IntoView {
    let is_running = create_rw_signal(false);
    let active_step = create_rw_signal(0usize);
    let logs = create_rw_signal(vec![
        "[INFO] CI/CD Pipeline Ready. Click 'Trigger Deploy' to start automated workflow.".to_string(),
    ]);

    let steps = vec![
        "Cargo Test & Clippy Lint",
        "Trunk WASM Compilation",
        "Docker Container Packaging",
        "Trivy Vulnerability Scan",
        "Terraform Apply (AWS)",
        "Production Health Verified",
    ];

    let run_pipeline = move |_| {
        if is_running.get() { return; }
        is_running.set(true);
        active_step.set(0);
        logs.set(vec!["[INFO] Pipeline initiated by user.".to_string()]);

        leptos::spawn_local(async move {
            let log_messages = vec![
                vec!["[TEST] Running 14 unit test suites...", "[TEST] 14 passed; 0 failed; 0 ignored", "[LINT] cargo clippy --all-targets -- -D warnings: OK"],
                vec!["[BUILD] trunk build --release", "[BUILD] Compiling portfolio v2.0.0 (wasm32-unknown-unknown)", "[BUILD] Applying LTO optimization... WASM binary emitted"],
                vec!["[DOCKER] Building image: gowtham/portfolio:latest", "[DOCKER] Multi-stage build layer 1/3 cached", "[DOCKER] Image tagged and pushed to AWS ECR registry"],
                vec!["[SECURITY] Running Trivy vulnerability scanner...", "[SECURITY] 0 critical, 0 high, 0 medium vulnerabilities detected", "[SECURITY] Security compliance grade: A+"],
                vec!["[TERRAFORM] Initializing provider aws v5.0", "[TERRAFORM] Applying target group and listener rule updates", "[TERRAFORM] 1 updated, 0 added, 0 destroyed"],
                vec!["[DEPLOY] Deploying container to EC2 cluster...", "[HEALTH] Probing /healthz endpoint... HTTP 200 OK", "[SUCCESS] Pipeline completed successfully in 3.42s!"],
            ];

            for (step_idx, msgs) in log_messages.into_iter().enumerate() {
                active_step.set(step_idx);
                for msg in msgs {
                    TimeoutFuture::new(350).await;
                    logs.update(|l| l.push(msg.to_string()));
                }
                TimeoutFuture::new(250).await;
            }

            active_step.set(6); // All done
            is_running.set(false);
        });
    };

    view! {
        <div class="panel p-6 bg-[#0a0a0a] border-2 border-border rounded-lg text-white font-sans flex flex-col gap-6">
            // Header
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                    <div class="section-tag mb-1">"AUTOMATED WORKFLOWS"</div>
                    <h3 class="font-comic text-2xl text-white">
                        "CI/CD "<span class="text-yellow">"DEPLOYMENT PIPELINE"</span>
                    </h3>
                </div>
                <button
                    on:click=run_pipeline
                    disabled=move || is_running.get()
                    class=move || {
                        if is_running.get() {
                            "px-4 py-2 font-comic text-sm bg-yellow/50 text-black rounded cursor-not-allowed flex items-center gap-2"
                        } else {
                            "btn-primary py-2 px-5 text-sm flex items-center gap-2"
                        }
                    }
                >
                    <span class="text-base">{move || if is_running.get() { "⏳" } else { "🚀" }}</span>
                    <span>{move || if is_running.get() { "DEPLOYING..." } else { "TRIGGER DEPLOY" }}</span>
                </button>
            </div>

            // Pipeline Stages Visualization
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {steps.into_iter().enumerate().map(|(idx, step_name)| {
                    view! {
                        <div class=move || {
                            let curr = active_step.get();
                            let is_done = curr > idx;
                            let is_active = curr == idx && is_running.get();

                            if is_done {
                                "p-3 rounded border border-green-500 bg-green-500/10 flex flex-col items-center text-center gap-1.5 transition-all"
                            } else if is_active {
                                "p-3 rounded border-2 border-yellow bg-yellow/10 flex flex-col items-center text-center gap-1.5 animate-pulse transition-all"
                            } else {
                                "p-3 rounded border border-border bg-[#141414] flex flex-col items-center text-center gap-1.5 opacity-60"
                            }
                        }>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono">
                                {move || {
                                    let curr = active_step.get();
                                    if curr > idx {
                                        "✓"
                                    } else if curr == idx && is_running.get() {
                                        "●"
                                    } else {
                                        "○"
                                    }
                                }}
                            </div>
                            <span class="font-mono text-[10px] leading-tight font-medium">{step_name}</span>
                        </div>
                    }
                }).collect_view()}
            </div>

            // Streaming Console Output
            <div class="flex flex-col rounded bg-black border border-[#222] p-4 font-mono text-xs max-h-52 overflow-y-auto">
                <div class="flex items-center justify-between text-gray-500 border-b border-[#222] pb-2 mb-2 text-[11px]">
                    <span>"LIVE PIPELINE TELEMETRY LOGS"</span>
                    <span>"BUILD #842"</span>
                </div>
                <div class="space-y-1">
                    {move || logs.get().into_iter().map(|msg| {
                        let is_err = msg.contains("[ERROR]");
                        let is_succ = msg.contains("[SUCCESS]") || msg.contains("passed") || msg.contains("OK");
                        let is_bold = msg.contains("[BUILD]") || msg.contains("[DEPLOY]");

                        view! {
                            <div class=if is_err {
                                "text-red-400"
                            } else if is_succ {
                                "text-green-400 font-bold"
                            } else if is_bold {
                                "text-yellow"
                            } else {
                                "text-gray-300"
                            }>
                                {msg}
                            </div>
                        }
                    }).collect_view()}
                </div>
            </div>
        </div>
    }
}
