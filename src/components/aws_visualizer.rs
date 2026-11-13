use leptos::*;

#[derive(Clone, Debug, PartialEq)]
pub struct AwsNode {
    pub id: &'static str,
    pub name: &'static str,
    pub service: &'static str,
    pub icon: &'static str,
    pub x: f64,
    pub y: f64,
    pub color: &'static str,
    pub desc: &'static str,
    pub terraform: &'static str,
}

pub static AWS_NODES: &[AwsNode] = &[
    AwsNode {
        id: "igw",
        name: "Internet Gateway",
        service: "VPC / Networking",
        icon: "🌐",
        x: 10.0,
        y: 50.0,
        color: "#f5c518",
        desc: "Enables public internet ingress/egress to the VPC with route table mapping to public subnets.",
        terraform: "resource \"aws_internet_gateway\" \"gw\" {\n  vpc_id = aws_vpc.main.id\n  tags   = { Name = \"prod-igw\" }\n}",
    },
    AwsNode {
        id: "alb",
        name: "Application Load Balancer",
        service: "Elastic Load Balancing",
        icon: "⚖️",
        x: 32.0,
        y: 50.0,
        color: "#3b82f6",
        desc: "Distributes incoming traffic across EC2 auto-scaling targets with SSL termination and health probes.",
        terraform: "resource \"aws_lb\" \"app_alb\" {\n  name               = \"prod-alb\"\n  internal           = false\n  load_balancer_type = \"application\"\n  security_groups    = [aws_security_group.alb.id]\n  subnets            = aws_subnet.public[*].id\n}",
    },
    AwsNode {
        id: "ec2",
        name: "EC2 Auto Scaling Group",
        service: "Compute / Instances",
        icon: "⚡",
        x: 60.0,
        y: 35.0,
        color: "#10b981",
        desc: "Horizontally scalable t3.medium web application instances with dynamic CPU-utilization scaling policies.",
        terraform: "resource \"aws_autoscaling_group\" \"asg\" {\n  desired_capacity = 3\n  max_size         = 6\n  min_size         = 2\n  target_group_arns = [aws_lb_target_group.tg.arn]\n  vpc_zone_identifier = aws_subnet.private[*].id\n}",
    },
    AwsNode {
        id: "rds",
        name: "Multi-AZ RDS MySQL",
        service: "Managed Database",
        icon: "🗄️",
        x: 88.0,
        y: 35.0,
        color: "#8b5cf6",
        desc: "High-availability MySQL 8.0 with automatic failover across Availability Zones and automated snapshot backups.",
        terraform: "resource \"aws_db_instance\" \"db\" {\n  allocated_storage = 20\n  engine            = \"mysql\"\n  instance_class    = \"db.t3.medium\"\n  multi_az          = true\n  skip_final_snapshot = true\n}",
    },
    AwsNode {
        id: "s3",
        name: "Amazon S3 Storage",
        service: "Object Storage",
        icon: "📦",
        x: 60.0,
        y: 75.0,
        color: "#ec4899",
        desc: "Secure encrypted object storage for static portfolio assets, user media uploads, and remote Terraform state.",
        terraform: "resource \"aws_s3_bucket\" \"assets\" {\n  bucket = \"gowtham-portfolio-assets\"\n  tags   = { Environment = \"Production\" }\n}",
    },
];

#[component]
pub fn AwsVisualizer() -> impl IntoView {
    let selected_node_id = create_rw_signal("alb");
    let traffic_simulation = create_rw_signal(false);

    let active_node = create_memo(move |_| {
        let id = selected_node_id.get();
        AWS_NODES.iter().find(|n| n.id == id).unwrap_or(&AWS_NODES[1])
    });

    view! {
        <div class="panel p-6 bg-[#0a0a0a] border-2 border-border rounded-lg text-white font-sans flex flex-col gap-6">
            // Header Bar
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                    <div class="section-tag mb-1">"INFRASTRUCTURE AS CODE"</div>
                    <h3 class="font-comic text-2xl text-white">
                        "AWS "<span class="text-yellow">"ARCHITECTURE TOPOLOGY"</span>
                    </h3>
                </div>
                <div class="flex items-center gap-3">
                    <button
                        on:click=move |_| traffic_simulation.update(|s| *s = !*s)
                        class=move || {
                            if traffic_simulation.get() {
                                "px-3 py-1.5 font-mono text-xs rounded border border-green-500 bg-green-500/20 text-green-400 font-bold flex items-center gap-2 animate-pulse"
                            } else {
                                "px-3 py-1.5 font-mono text-xs rounded border border-yellow/50 bg-yellow/10 text-yellow hover:bg-yellow hover:text-black font-bold flex items-center gap-2 transition-all"
                            }
                        }
                    >
                        <span>{move || if traffic_simulation.get() { "⚡ SURGE TRAFFIC ACTIVE" } else { "▶ SIMULATE TRAFFIC SURGE" }}</span>
                    </button>
                    <span class="badge badge-success">"AWS us-east-1"</span>
                </div>
            </div>

            // Interactive Topology Canvas
            <div class="relative w-full h-72 sm:h-80 bg-[#070707] rounded border border-[#222] overflow-hidden">
                // Grid background
                <div
                    class="absolute inset-0 opacity-15 pointer-events-none"
                    style="background-image: linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 24px 24px;"
                />

                // SVG Connection Lines
                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                    // IGW -> ALB
                    <line x1="10%" y1="50%" x2="32%" y2="50%" stroke="#444" stroke-width="2" stroke-dasharray="4" />
                    // ALB -> EC2
                    <line x1="32%" y1="50%" x2="60%" y2="35%" stroke="#444" stroke-width="2" stroke-dasharray="4" />
                    // EC2 -> RDS
                    <line x1="60%" y1="35%" x2="88%" y2="35%" stroke="#444" stroke-width="2" stroke-dasharray="4" />
                    // ALB -> S3
                    <line x1="32%" y1="50%" x2="60%" y2="75%" stroke="#444" stroke-width="2" stroke-dasharray="4" />
                </svg>

                // Service Nodes
                {AWS_NODES.iter().map(|node| {
                    let node_id = node.id;
                    view! {
                        <button
                            on:click=move |_| selected_node_id.set(node_id)
                            class=move || {
                                let is_active = selected_node_id.get() == node_id;
                                if is_active {
                                    "absolute -translate-x-1/2 -translate-y-1/2 p-3 rounded-lg border-2 border-yellow bg-[#1a1a1a] shadow-[0_0_20px_rgba(245,197,24,0.4)] flex flex-col items-center gap-1 z-20 scale-110 transition-transform"
                                } else {
                                    "absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-lg border border-border bg-[#141414] hover:border-yellow/50 hover:bg-[#1a1a1a] flex flex-col items-center gap-1 z-10 transition-all group"
                                }
                            }
                            style=format!("left: {}%; top: {}%;", node.x, node.y)
                        >
                            <span class="text-xl">{node.icon}</span>
                            <span class="font-mono text-[10px] text-gray-300 font-bold whitespace-nowrap">{node.name}</span>
                        </button>
                    }
                }).collect_view()}
            </div>

            // Node Inspector Drawer
            {move || {
                let n = active_node.get();
                view! {
                    <div class="grid md:grid-cols-2 gap-4 p-4 rounded bg-[#111111] border border-border">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-2xl">{n.icon}</span>
                                <div>
                                    <h4 class="font-comic text-xl text-yellow">{n.name}</h4>
                                    <span class="font-mono text-xs text-gray-500">{n.service}</span>
                                </div>
                            </div>
                            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">{n.desc}</p>
                            <div class="flex items-center gap-3 font-mono text-xs text-gray-400">
                                <span class="px-2 py-1 rounded bg-[#222] border border-[#333]">
                                    {if traffic_simulation.get() { "Load: 8,420 RPS" } else { "Load: 420 RPS" }}
                                </span>
                                <span class="px-2 py-1 rounded bg-[#222] border border-[#333]">
                                    {if traffic_simulation.get() { "Latency: 14ms" } else { "Latency: 2ms" }}
                                </span>
                                <span class="text-green-400 font-bold">"● 100% HEALTHY"</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between mb-1.5">
                                <span class="font-mono text-[11px] text-gray-400 uppercase tracking-widest">"Terraform HCL Definition"</span>
                                <span class="font-mono text-[10px] text-yellow">"main.tf"</span>
                            </div>
                            <pre class="p-3 bg-black border border-[#222] rounded text-green-400 font-mono text-xs overflow-x-auto selection:bg-yellow selection:text-black">
                                {n.terraform}
                            </pre>
                        </div>
                    </div>
                }
            }}
        </div>
    }
}

