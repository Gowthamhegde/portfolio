use leptos::*;
use web_sys::KeyboardEvent;
use crate::components::audio::SoundEngine;
use crate::data::{PROFILE, PROJECTS, SKILL_GROUPS};

#[derive(Clone, Debug, PartialEq)]
pub struct TerminalLine {
    pub is_command: bool,
    pub content: String,
    pub is_accent: bool,
}

#[component]
pub fn Terminal(
    #[prop(default = true)] sound_enabled: bool,
) -> impl IntoView {
    let input_val = create_rw_signal(String::new());
    let history = create_rw_signal(vec![
        TerminalLine {
            is_command: false,
            content: "╔══════════════════════════════════════════════════════════════════════╗".to_string(),
            is_accent: true,
        },
        TerminalLine {
            is_command: false,
            content: "║  GOWTHAMOS v2.0 - Rust / WebAssembly Interactive DevOps Terminal   ║".to_string(),
            is_accent: true,
        },
        TerminalLine {
            is_command: false,
            content: "╚══════════════════════════════════════════════════════════════════════╝".to_string(),
            is_accent: true,
        },
        TerminalLine {
            is_command: false,
            content: "Type 'help' to inspect available system commands or 'neofetch' for specs.".to_string(),
            is_accent: false,
        },
    ]);

    let cmd_history = create_rw_signal(Vec::<String>::new());
    let history_index = create_rw_signal(Option::<usize>::None);
    let matrix_mode = create_rw_signal(false);

    let execute_command = move |cmd: String| {
        let trimmed = cmd.trim().to_string();
        if trimmed.is_empty() { return; }

        SoundEngine::play_terminal_key(sound_enabled);

        // Add to command history
        cmd_history.update(|h| h.push(trimmed.clone()));
        history_index.set(None);

        history.update(|lines| {
            lines.push(TerminalLine {
                is_command: true,
                content: format!("gowthama@cloud:~$ {}", trimmed),
                is_accent: false,
            });
        });

        let lower = trimmed.to_lowercase();
        let parts: Vec<&str> = lower.split_whitespace().collect();
        let root_cmd = parts.get(0).copied().unwrap_or("");

        let mut output_lines = Vec::new();

        match root_cmd {
            "help" => {
                output_lines.push(("AVAILABLE COMMANDS:".to_string(), true));
                output_lines.push(("  neofetch       - Display system & architecture specs in ASCII".to_string(), false));
                output_lines.push(("  whoami         - Print current operator identity".to_string(), false));
                output_lines.push(("  skills         - List technical skill matrices & tools".to_string(), false));
                output_lines.push(("  projects       - View active cloud & systems deployments".to_string(), false));
                output_lines.push(("  aws [s3|ec2]   - Simulated AWS CLI operations".to_string(), false));
                output_lines.push(("  docker [ps]    - Inspect containerized workloads".to_string(), false));
                output_lines.push(("  kubectl [get]  - Query Kubernetes cluster nodes and pods".to_string(), false));
                output_lines.push(("  terraform      - Run simulated Terraform plan / apply".to_string(), false));
                output_lines.push(("  ls             - List directory files".to_string(), false));
                output_lines.push(("  cat <file>     - Display file contents (e.g. cat Dockerfile)".to_string(), false));
                output_lines.push(("  bench          - Run native Rust WebAssembly compute benchmark".to_string(), false));
                output_lines.push(("  matrix         - Toggle digital matrix rain effect".to_string(), false));
                output_lines.push(("  clear          - Clear terminal buffer".to_string(), false));
            }
            "whoami" => {
                output_lines.push((format!("{} ({})", PROFILE.name, PROFILE.title), true));
                output_lines.push((format!("Location: {} | Email: {}", PROFILE.location, PROFILE.email), false));
            }
            "neofetch" => {
                let ascii = vec![
                    r"      ____                  _   _                       ",
                    r"     / ___| _____      ____| |_| |__   __ _ _ __ ___    ",
                    r"    | |  _ / _ \ \ /\ / / _` | '_ \ / _` | '_ ` _ \     ",
                    r"    | |_| | (_) \ V  V / (_| | | | | (_| | | | | | |    ",
                    r"     \____|\___/ \_/\_/ \__,_|_| |_|\__,_|_| |_| |_|    ",
                ];
                for line in ascii {
                    output_lines.push((line.to_string(), true));
                }
                output_lines.push(("--------------------------------------------------------".to_string(), false));
                output_lines.push(("OS: GowthamOS 2.0 (Compiled with Rust 1.99 -> WebAssembly)".to_string(), false));
                output_lines.push(("Framework: Leptos 0.6.15 (Fine-grained reactive UI)".to_string(), false));
                output_lines.push(("Host: Browser WebAssembly Environment (wasm32-unknown-unknown)".to_string(), false));
                output_lines.push(("Uptime: 99.99% Nominal".to_string(), false));
                output_lines.push(("Shell: Gowtham-sh (Custom Rust Parser)".to_string(), false));
                output_lines.push(("AWS Profile: Solutions Architect Associate (EC2, S3, RDS, VPC)".to_string(), false));
            }
            "skills" => {
                output_lines.push(("=== TECHNICAL CAPABILITIES ===".to_string(), true));
                for g in SKILL_GROUPS {
                    output_lines.push((format!("[{}] {}", g.label, g.skills.join(" • ")), false));
                }
            }
            "projects" => {
                output_lines.push(("=== REGISTERED DEPLOYMENTS ===".to_string(), true));
                for p in PROJECTS {
                    output_lines.push((format!("{} | {:<25} | {:<10} | {}", p.dep_id, p.name, p.status, p.arch), false));
                }
            }
            "aws" => {
                let sub = parts.get(1).copied().unwrap_or("help");
                match sub {
                    "s3" => {
                        output_lines.push(("2024-03-12 10:44:21  s3://gowtham-portfolio-assets-prod".to_string(), false));
                        output_lines.push(("2024-03-12 10:44:50  s3://gowtham-terraform-state-backend".to_string(), false));
                        output_lines.push(("2024-03-12 10:45:12  s3://gowtham-ec2-application-backups".to_string(), false));
                    }
                    "ec2" => {
                        output_lines.push(("INSTANCE_ID    STATE    TYPE       PUBLIC_IP       NAME".to_string(), true));
                        output_lines.push(("i-08a9f43b12   running  t3.medium  13.233.14.88    expense-tracker-prod".to_string(), false));
                        output_lines.push(("i-09b12e87c4   running  t3.large   13.233.15.102   yolo-detection-gpu".to_string(), false));
                    }
                    _ => {
                        output_lines.push(("AWS CLI v2.0.12 - Available subcommands: aws s3, aws ec2".to_string(), false));
                    }
                }
            }
            "docker" => {
                output_lines.push(("CONTAINER ID   IMAGE                 STATUS         PORTS                  NAMES".to_string(), true));
                output_lines.push(("a1b2c3d4e5f6   portfolio-rust:latest Up 14 days     0.0.0.0:8080->80/tcp   portfolio-wasm".to_string(), false));
                output_lines.push(("f6e5d4c3b2a1   yolov8-inference:v2   Up 3 days      0.0.0.0:7860->7860/tcp yolo-service".to_string(), false));
                output_lines.push(("c4d5e6f7a8b9   mysql:8.0             Up 14 days     0.0.0.0:3306->3306/tcp db-prod".to_string(), false));
            }
            "kubectl" => {
                output_lines.push(("NAME             STATUS   ROLES           AGE   VERSION".to_string(), true));
                output_lines.push(("ip-10-0-1-20     Ready    control-plane   42d   v1.28.3".to_string(), false));
                output_lines.push(("ip-10-0-1-45     Ready    worker          42d   v1.28.3".to_string(), false));
                output_lines.push(("ip-10-0-1-89     Ready    worker          42d   v1.28.3".to_string(), false));
            }
            "terraform" => {
                output_lines.push(("Terraform v1.7.4 on linux_amd64".to_string(), true));
                output_lines.push(("Refreshing state... [id=vpc-0a8947f2b109]".to_string(), false));
                output_lines.push(("Plan: 0 to add, 0 to change, 0 to destroy.".to_string(), false));
                output_lines.push(("Infrastructure is up-to-date and nominal.".to_string(), true));
            }
            "ls" => {
                output_lines.push(("drwxr-xr-x  4 gowthama  staff   128 Mar 12 11:00  .".to_string(), false));
                output_lines.push(("-rw-r--r--  1 gowthama  staff   412 Mar 12 11:00  Dockerfile".to_string(), false));
                output_lines.push(("-rw-r--r--  1 gowthama  staff   624 Mar 12 11:00  docker-compose.yml".to_string(), false));
                output_lines.push(("-rw-r--r--  1 gowthama  staff  1048 Mar 12 11:00  main.tf".to_string(), false));
                output_lines.push(("-rw-r--r--  1 gowthama  staff  2048 Mar 12 11:00  Cargo.toml".to_string(), false));
                output_lines.push(("-rw-r--r--  1 gowthama  staff  9310 Mar 12 11:00  resume.pdf".to_string(), false));
            }
            "cat" => {
                let target = parts.get(1).copied().unwrap_or("");
                match target {
                    "dockerfile" => {
                        output_lines.push(("FROM rust:1.99-alpine AS builder".to_string(), false));
                        output_lines.push(("RUN apk add --no-cache musl-dev && cargo install trunk".to_string(), false));
                        output_lines.push(("COPY . . && trunk build --release".to_string(), false));
                        output_lines.push(("FROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html".to_string(), false));
                    }
                    "main.tf" => {
                        output_lines.push(("resource \"aws_vpc\" \"portfolio_vpc\" {".to_string(), false));
                        output_lines.push(("  cidr_block           = \"10.0.0.0/16\"".to_string(), false));
                        output_lines.push(("  enable_dns_hostnames = true".to_string(), false));
                        output_lines.push(("  tags = { Name = \"gowtham-cloud-vpc\" }".to_string(), false));
                        output_lines.push(("}".to_string(), false));
                    }
                    _ => {
                        output_lines.push((format!("cat: {}: No such file or directory (try 'cat Dockerfile' or 'cat main.tf')", target), false));
                    }
                }
            }
            "bench" => {
                let start = web_sys::window().unwrap().performance().unwrap().now();
                // Perform CPU computation in WebAssembly
                let mut sum = 0u64;
                for i in 1..=100_000u64 {
                    sum = sum.wrapping_add((i * 1337) ^ (i >> 3));
                }
                let elapsed = web_sys::window().unwrap().performance().unwrap().now() - start;
                output_lines.push(("🚀 RUST WASM BENCHMARK COMPLETE".to_string(), true));
                output_lines.push((format!("Computed 100,000 iterations in {:.3} ms (checksum: {:x})", elapsed, sum), false));
                output_lines.push(("Performance grade: A+ Native execution speed".to_string(), true));
            }
            "matrix" => {
                matrix_mode.update(|m| *m = !*m);
                let state_str = if matrix_mode.get() { "ENABLED" } else { "DISABLED" };
                output_lines.push((format!("Matrix visualizer mode {}", state_str), true));
            }
            "clear" => {
                history.set(Vec::new());
                return;
            }
            _ => {
                output_lines.push((format!("Command not found: '{}'. Type 'help' to see valid commands.", trimmed), false));
            }
        }

        history.update(|lines| {
            for (text, is_accent) in output_lines {
                lines.push(TerminalLine {
                    is_command: false,
                    content: text,
                    is_accent,
                });
            }
        });
    };

    let on_keydown = move |ev: KeyboardEvent| {
        if ev.key() == "Enter" {
            let cmd = input_val.get();
            execute_command(cmd);
            input_val.set(String::new());
        } else if ev.key() == "ArrowUp" {
            let cmds = cmd_history.get();
            if !cmds.is_empty() {
                let new_idx = match history_index.get() {
                    None => cmds.len() - 1,
                    Some(idx) if idx > 0 => idx - 1,
                    Some(_) => 0,
                };
                history_index.set(Some(new_idx));
                if let Some(cmd) = cmds.get(new_idx) {
                    input_val.set(cmd.clone());
                }
            }
        } else if ev.key() == "ArrowDown" {
            let cmds = cmd_history.get();
            if let Some(idx) = history_index.get() {
                if idx + 1 < cmds.len() {
                    let new_idx = idx + 1;
                    history_index.set(Some(new_idx));
                    if let Some(cmd) = cmds.get(new_idx) {
                        input_val.set(cmd.clone());
                    }
                } else {
                    history_index.set(None);
                    input_val.set(String::new());
                }
            }
        }
    };

    view! {
        <div class="terminal flex flex-col h-[520px] w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            // Terminal Header Bar
            <div class="terminal-bar bg-[#141414] border-b border-[#2a2a2a] px-4 py-2 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" />
                    <span class="w-3 h-3 rounded-full bg-yellow/80 cursor-pointer" />
                    <span class="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" />
                    <span class="ml-2 text-gray-400 font-mono text-xs font-semibold">"gowthama@cloud-architect: ~"</span>
                </div>
                <div class="flex items-center gap-3 text-gray-500 text-xs">
                    <span class="px-2 py-0.5 rounded bg-yellow/10 text-yellow border border-yellow/30 font-bold">"WASM SH"</span>
                    <span>"bash 5.2"</span>
                </div>
            </div>

            // Terminal Body / Output
            <div
                class=move || {
                    if matrix_mode.get() {
                        "flex-1 p-4 overflow-y-auto space-y-1 bg-black/95 text-green-400 font-mono selection:bg-green-500 selection:text-black"
                    } else {
                        "flex-1 p-4 overflow-y-auto space-y-1 bg-[#0a0a0a] text-gray-200 font-mono selection:bg-yellow selection:text-black"
                    }
                }
            >
                {move || history.get().into_iter().map(|line| {
                    if line.is_command {
                        view! {
                            <div class="flex items-center gap-2 text-yellow font-bold mt-2">
                                <span>{line.content}</span>
                            </div>
                        }
                    } else if line.is_accent {
                        view! {
                            <div class="text-yellow font-semibold whitespace-pre-wrap">{line.content}</div>
                        }
                    } else {
                        view! {
                            <div class="text-gray-300 whitespace-pre-wrap leading-relaxed">{line.content}</div>
                        }
                    }
                }).collect_view()}

                // Active Command Input Line
                <div class="flex items-center gap-2 pt-2 text-yellow">
                    <span class="font-bold flex-shrink-0">"gowthama@cloud:~$ "</span>
                    <input
                        type="text"
                        autofocus
                        class="flex-1 bg-transparent border-none outline-none text-white font-mono focus:ring-0 p-0 text-xs sm:text-sm"
                        prop:value=move || input_val.get()
                        on:input=move |ev| input_val.set(event_target_value(&ev))
                        on:keydown=on_keydown
                    />
                </div>
            </div>
        </div>
    }
}

