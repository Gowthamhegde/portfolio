export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const portfolioData = {
  personal: {
    name: "Gowtham Hegde",
    title: "Cloud & DevOps Engineer",
    email: "gowthamhegde606@gmail.com",
    githubUrl: "https://github.com/Gowthamhegde",
    linkedinUrl: "https://www.linkedin.com/in/gowtham-hegde-3bb374320",
    resumeUrl: "/resume.pdf",
  },
  hero: {
    introduction: "HELLO, I'M GOWTHAM HEGDE",
    headline: "Building Reliable Infrastructure. Automating What's Next.",
    description:
      "I'm a Cloud & DevOps enthusiast focused on AWS, infrastructure automation, CI/CD pipelines, and building scalable systems.",
    status: "Available for opportunities",
  },
  about: {
    heading: "Engineering Beyond Just Writing Code.",
    description:
      "I'm an engineering graduate passionate about cloud computing and DevOps. I enjoy understanding how systems work behind the scenes, automating repetitive processes, and making infrastructure more reliable. From deploying applications on AWS to experimenting with infrastructure automation and CI/CD pipelines, I'm continuously building practical solutions and improving my engineering skills.",
    highlights: ["Cloud Infrastructure", "DevOps Automation", "Linux & Scripting", "Continuous Learning"],
  },
  skills: [
    { name: "Cloud", items: ["AWS", "EC2", "S3", "VPC", "IAM", "RDS", "CloudWatch", "Load Balancers", "Auto Scaling"] },
    { name: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "CI/CD"] },
    { name: "Programming", items: ["Python", "Bash", "Linux Shell Scripting"] },
    { name: "Monitoring", items: ["Prometheus", "Grafana", "CloudWatch"] },
    { name: "Tools", items: ["Git", "GitHub", "Linux", "VS Code"] },
  ],
  projects: [
    {
      id: "infrafix-ai",
      title: "InfraFix AI",
      description: "AI-assisted infrastructure troubleshooting and automated repair platform.",
      problem: "Infrastructure issues are difficult to diagnose consistently across environments.",
      solution: "A focused workflow for inspecting infrastructure configuration and assisting with repeatable repairs.",
      technologies: ["Infrastructure automation", "Terraform", "Python", "AI integration"],
      githubUrl: "https://github.com/Gowthamhegde/infrafix-ai",
    },
    {
      id: "ai-recoverops",
      title: "AI-RecoverOps",
      description: "An intelligent CI/CD recovery system designed to identify and assist in resolving pipeline failures.",
      problem: "Pipeline failures often interrupt delivery and require time-consuming manual investigation.",
      solution: "A recovery-oriented automation concept for identifying failure patterns and guiding corrective actions.",
      technologies: ["CI/CD", "automation", "Python", "DevOps"],
      githubUrl: "https://github.com/Gowthamhegde/ai-recoverops",
    },
    {
      id: "aws-cloud-infrastructure",
      title: "AWS Cloud Infrastructure",
      description: "Practical AWS infrastructure deployment and automation project.",
      problem: "Secure, scalable infrastructure requires careful network, access, and deployment design.",
      solution: "A reusable architecture covering compute, networking, security, scaling, load balancing, and monitoring.",
      technologies: ["EC2", "VPC", "IAM", "Security Groups", "NAT Gateway", "Auto Scaling", "Load Balancer", "CloudWatch"],
      githubUrl: "https://github.com/Gowthamhegde/aws-cloud-infrastructure",
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      description: "Full-stack application for recording, organizing, and reviewing personal expenses.",
      problem: "Tracking expenses manually makes it difficult to maintain consistent records and understand spending categories.",
      solution: "A responsive expense management workflow with CRUD operations, authentication, and category-based tracking.",
      technologies: ["PHP", "JavaScript", "MySQL", "CSS", "AWS EC2"],
      githubUrl: "https://github.com/Gowthamhegde/expence-tracker",
    },
    {
      id: "vehicle-management",
      title: "Vehicle Management System",
      description: "Web application for vehicle registration, maintenance tracking, and administration.",
      problem: "Vehicle records and maintenance history need a centralized system for users and administrators.",
      solution: "A PHP and MySQL application with authentication, vehicle records, maintenance workflows, and an admin dashboard.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
      githubUrl: "https://github.com/Gowthamhegde/vehical",
    },
    {
      id: "yolo-object-detection",
      title: "YOLO Object Detection",
      description: "Real-time computer vision app for detecting objects from images and live camera input.",
      problem: "Running and testing object detection models can be difficult without an accessible interactive interface.",
      solution: "A Gradio application that combines YOLOv8 model variants with OpenCV and live camera processing.",
      technologies: ["Python", "YOLOv8", "Gradio", "OpenCV", "Computer Vision"],
      githubUrl: "https://github.com/Gowthamhegde/object-Detction",
    },
    {
      id: "air-writing-recognition",
      title: "Air Writing Recognition",
      description: "Deep learning system that recognizes letters and words written in the air using hand gestures.",
      problem: "Converting natural air-writing gestures into text requires accurate tracking and temporal recognition.",
      solution: "A webcam-based MediaPipe tracking pipeline with CNN-BiLSTM recognition, confidence filtering, and voice feedback.",
      technologies: ["Python", "TensorFlow", "CNN-BiLSTM", "MediaPipe", "OpenCV"],
      githubUrl: "https://github.com/Gowthamhegde/handwriting-detection-air",
    },
    {
      id: "lazyk8s",
      title: "lazyk8s",
      description: "Interactive terminal UI for viewing Kubernetes cluster resources from one place.",
      problem: "Inspecting cluster health through individual kubectl commands is repetitive and difficult to scan quickly.",
      solution: "A Textual-based dashboard for pods, nodes, deployments, services, events, resource usage, and context switching.",
      technologies: ["Python", "Kubernetes", "kubectl", "Textual", "TUI"],
      githubUrl: "https://github.com/Gowthamhegde/lazyk8s",
    },
    {
      id: "payscope",
      title: "PayScope",
      description: "Career intelligence platform for job discovery, salary analytics, and salary prediction.",
      problem: "Career and salary research is fragmented across job listings and difficult-to-compare market data.",
      solution: "A MERN platform with job filtering, salary trends, interactive visualizations, and profile-based predictions.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/Gowthamhegde/CareerScope",
    },
    {
      id: "rinseup",
      title: "RinseUp Laundry Service",
      description: "Full-stack laundry service platform for browsing services, booking pickups, and tracking orders.",
      problem: "Laundry businesses need a simple digital workflow for customer orders, operations, payments, and administration.",
      solution: "A Next.js and Supabase application with authentication, pickup booking, order tracking, admin management, and Razorpay payments.",
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "Razorpay"],
      githubUrl: "https://github.com/Gowthamhegde/lundry",
    },
  ] satisfies Project[],
  experience: {
    position: "AWS Cloud Intern",
    company: "GTTC",
    dates: "Jan 2024 — Jun 2024",
    description:
      "Gained practical exposure to AWS infrastructure, Linux administration, Docker, EC2 deployments, networking and security configurations, and cloud monitoring.",
    skills: ["AWS", "Linux", "Docker", "EC2", "Networking", "Security", "CloudWatch"],
  },
  principles: [
    ["01", "Automate First", "Reduce repetitive manual work through automation."],
    ["02", "Build for Reliability", "Design infrastructure that is stable and maintainable."],
    ["03", "Understand the System", "Debug problems by understanding what's happening underneath."],
    ["04", "Keep Learning", "Continuously experiment with new technologies and engineering practices."],
  ],
} as const;
