// Typed Portfolio Resume Models

#[derive(Clone, Debug, PartialEq)]
pub struct SocialLink {
    pub label: &'static str,
    pub href: &'static str,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Profile {
    pub name: &'static str,
    pub first_name: &'static str,
    pub last_name: &'static str,
    pub title: &'static str,
    pub location: &'static str,
    pub phone: &'static str,
    pub email: &'static str,
    pub profile_picture: &'static str,
    pub summary: &'static str,
    pub socials: &'static [SocialLink],
}

pub static PROFILE: Profile = Profile {
    name: "GOUTHAMA HEGDE",
    first_name: "GOUTHAMA",
    last_name: "HEGDE",
    title: "Cloud Architect & Full-Stack Developer",
    location: "Bengaluru, Karnataka",
    phone: "+91-7760190064",
    email: "gowthamhegde606@gmail.com",
    profile_picture: "/profilepic.jpg",
    summary: "Passionate Computer Science Engineering student with hands-on experience in cloud architecture, full-stack development, and DevOps practices. Specialized in AWS cloud solutions, modern web technologies, and automated deployment pipelines.",
    socials: &[
        SocialLink {
            label: "GitHub",
            href: "https://github.com/Gowthamhegde",
        },
        SocialLink {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/gowtham-hegde-3bb374320",
        },
    ],
};

#[derive(Clone, Debug, PartialEq)]
pub struct SkillGroup {
    pub label: &'static str,
    pub icon: &'static str,
    pub category: &'static str,
    pub skills: &'static [&'static str],
}

pub static SKILL_GROUPS: &[SkillGroup] = &[
    SkillGroup {
        label: "CLOUD INFRASTRUCTURE",
        icon: "☁️",
        category: "Cloud",
        skills: &[
            "AWS EC2",
            "S3 / RDS",
            "VPC & Networking",
            "IAM & Security",
            "CloudWatch",
            "Auto Scaling",
            "Lambda",
            "EKS",
            "ECR",
        ],
    },
    SkillGroup {
        label: "DEVOPS & AUTOMATION",
        icon: "⚙️",
        category: "DevOps",
        skills: &[
            "Docker",
            "Kubernetes",
            "Jenkins",
            "GitHub Actions",
            "Terraform",
            "Ansible",
            "AWS",
            "Helm",
        ],
    },
    SkillGroup {
        label: "DEVELOPMENT",
        icon: "💻",
        category: "Full-Stack",
        skills: &[
            "Rust / WASM",
            "Python",
            "React / TypeScript",
            "Node.js",
            "PHP",
            "MySQL",
            "MongoDB",
            "Bash",
        ],
    },
    SkillGroup {
        label: "SECURITY & MONITORING",
        icon: "🛡️",
        category: "Security",
        skills: &[
            "Linux Admin",
            "Network Security",
            "Prometheus",
            "Grafana",
            "Bash Scripting",
            "Nginx",
            "SSL/TLS",
        ],
    },
];

#[derive(Clone, Debug, PartialEq)]
pub struct Project {
    pub dep_id: &'static str,
    pub name: &'static str,
    pub href: &'static str,
    pub description: &'static str,
    pub tech: &'static [&'static str],
    pub status: &'static str,
    pub arch: &'static str,
    pub category: &'static str,
}

pub static PROJECTS: &[Project] = &[
    Project {
        dep_id: "DEP-801",
        name: "Expense Tracker",
        href: "https://github.com/Gowthamhegde/expence-tracker",
        description: "Full-stack expense management application deployed on AWS EC2 with PHP backend and JavaScript frontend. Features include CRUD operations, category-based expense tracking, user authentication, and responsive design.",
        tech: &["PHP", "JavaScript", "CSS", "AWS EC2", "MySQL"],
        status: "DEPLOYED",
        arch: "AWS EC2 + MySQL",
        category: "Cloud",
    },
    Project {
        dep_id: "DEP-802",
        name: "YOLO Object Detection App",
        href: "https://github.com/Gowthamhegde/object-Detction",
        description: "Real-time object detection application using YOLOv8 models with Gradio web interface. Supports multiple model variants (n/s/m/l/x), OpenCV integration, and live camera feed processing.",
        tech: &["Python", "YOLOv8", "Gradio", "OpenCV", "Computer Vision"],
        status: "RUNNING",
        arch: "Python + Gradio + OpenCV",
        category: "AI/ML",
    },
    Project {
        dep_id: "DEP-803",
        name: "Vehicle Management System",
        href: "https://github.com/Gowthamhegde/vehical.git",
        description: "Comprehensive web-based vehicle management system built with PHP and MySQL. Features user authentication, vehicle registration, maintenance tracking, and administrative dashboard.",
        tech: &["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
        status: "DEPLOYED",
        arch: "PHP + MySQL + Bootstrap",
        category: "Full-Stack",
    },
    Project {
        dep_id: "DEP-804",
        name: "Fashion Hub E-commerce",
        href: "https://github.com/Gowthamhegde/Fashion-Hub.git",
        description: "Modern e-commerce platform built with React.js and Chakra UI. Features responsive design, product catalog with filtering, shopping cart functionality, and smooth animations.",
        tech: &["React.js", "Chakra UI", "Framer Motion", "Vite", "JavaScript"],
        status: "LIVE",
        arch: "React + Vite + Chakra UI",
        category: "Frontend",
    },
    Project {
        dep_id: "DEP-805",
        name: "Portfolio Website (Rust/WASM)",
        href: "https://github.com/Gowthamhegde/portfolio.git",
        description: "Personal portfolio website engineered in 100% Rust compiled to WebAssembly via Leptos. Features Windows 11 desktop metaphor, interactive CLI terminal, cloud architecture visualizer, and CI/CD simulator.",
        tech: &["Rust", "WebAssembly", "Leptos", "Tailwind CSS", "Trunk"],
        status: "LIVE",
        arch: "Rust + WASM + Trunk",
        category: "Systems",
    },
    Project {
        dep_id: "DEP-806",
        name: "Air Writing Recognition",
        href: "https://github.com/Gowthamhegde/handwriting-detection-air",
        description: "Deep learning air-writing recognition system that tracks hand gestures through a webcam and converts written letters and words into text with voice feedback.",
        tech: &["Python", "TensorFlow", "CNN-BiLSTM", "MediaPipe", "OpenCV"],
        status: "RUNNING",
        arch: "Python + TensorFlow + MediaPipe",
        category: "AI/ML",
    },
    Project {
        dep_id: "DEP-807",
        name: "lazyk8s",
        href: "https://github.com/Gowthamhegde/lazyk8s",
        description: "Interactive Kubernetes terminal UI for monitoring pods, nodes, deployments, services, events, resource usage, and cluster contexts without running individual kubectl commands.",
        tech: &["Python", "Kubernetes", "kubectl", "Textual", "TUI"],
        status: "RUNNING",
        arch: "Python + Kubernetes TUI",
        category: "Cloud",
    },
    Project {
        dep_id: "DEP-808",
        name: "PayScope",
        href: "https://github.com/Gowthamhegde/CareerScope",
        description: "MERN career intelligence platform for exploring jobs, analyzing salary trends, visualizing market data, and predicting salaries from skills and experience.",
        tech: &["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
        status: "LIVE",
        arch: "MERN + Salary Analytics",
        category: "Full-Stack",
    },
    Project {
        dep_id: "DEP-809",
        name: "RinseUp Laundry Service",
        href: "https://github.com/Gowthamhegde/lundry",
        description: "Full-stack laundry service application with service browsing, pickup booking, order tracking, admin management, Supabase authentication, and Razorpay payment integration.",
        tech: &["Next.js", "React", "TypeScript", "Supabase", "Razorpay"],
        status: "LIVE",
        arch: "Next.js + Supabase",
        category: "Full-Stack",
    },
];

#[derive(Clone, Debug, PartialEq)]
pub struct Experience {
    pub role: &'static str,
    pub company: &'static str,
    pub period: &'static str,
    pub location: &'static str,
    pub details: &'static [&'static str],
    pub tech_used: &'static [&'static str],
}

pub static EXPERIENCE: &[Experience] = &[
    Experience {
        role: "Cloud Architect Intern",
        company: "GTTC (Government Tool Room & Training Centre)",
        period: "2024",
        location: "Hubli, Karnataka",
        details: &[
            "Designed and implemented AWS cloud architecture solutions for scalable applications",
            "Worked extensively with EC2 instances, VPC configuration, and security groups",
            "Collaborated on secure, cost-effective cloud infrastructure designs",
            "Gained hands-on experience with AWS services including S3, RDS, and CloudWatch",
            "Participated in cloud migration projects and best practices implementation",
        ],
        tech_used: &[
            "AWS EC2",
            "S3",
            "VPC",
            "RDS",
            "CloudWatch",
            "IAM",
            "Security Groups",
            "Cloud Architecture",
        ],
    },
];

#[derive(Clone, Debug, PartialEq)]
pub struct Education {
    pub degree: &'static str,
    pub school: &'static str,
    pub period: &'static str,
    pub coursework: &'static [&'static str],
    pub status: &'static str,
}

pub static EDUCATION: &[Education] = &[
    Education {
        degree: "Bachelor of Engineering in Computer Science",
        school: "Global Academy of Technology",
        period: "2023 - 2026 (Expected)",
        coursework: &[
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Software Engineering",
            "Operating Systems",
            "Computer Networks",
            "Cloud Computing",
        ],
        status: "IN PROGRESS",
    },
    Education {
        degree: "Diploma in Computer Science Engineering",
        school: "Government Polytechnic",
        period: "2020 - 2023",
        coursework: &[
            "Programming in Java",
            "Database Management",
            "Computer Networks",
            "Web Development",
            "Software Testing",
            "System Administration",
        ],
        status: "COMPLETED",
    },
];

#[derive(Clone, Debug, PartialEq)]
pub struct Certification {
    pub name: &'static str,
    pub href: &'static str,
    pub category: &'static str,
    pub year: &'static str,
    pub issuer: &'static str,
    pub verified: bool,
}

pub static CERTIFICATIONS: &[Certification] = &[
    Certification {
        name: "AWS Associate Solutions Architect: EC2 Instance Management",
        href: "https://drive.google.com/file/d/138La71KpRxpD4L9AKqroPdBHEeaFVsg9/view",
        category: "CLOUD",
        year: "2020",
        issuer: "Amazon Web Services",
        verified: true,
    },
    Certification {
        name: "Introduction to Cloud Computing",
        href: "https://drive.google.com/file/d/1w3v-KSUQg8JEf6Ita-XksV1UmYGBg5wE/view",
        category: "CLOUD",
        year: "2023",
        issuer: "Professional Institute",
        verified: true,
    },
    Certification {
        name: "Full Stack Web Development",
        href: "https://drive.google.com/file/d/165h_FwO_nI1hFpU4Y-n7jV0iGj1Z_4k5/view",
        category: "WEB DEV",
        year: "2023",
        issuer: "TechA Academy",
        verified: true,
    },
    Certification {
        name: "Network Security & Cyber Defense",
        href: "https://drive.google.com/file/d/188i_JkL_mO2pQrS5T-o8kU1jHk2Y_5m6/view",
        category: "SECURITY",
        year: "2023",
        issuer: "Professional Institute",
        verified: true,
    },
];
