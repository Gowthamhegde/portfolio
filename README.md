# 🦀 Gowthama Hegde - Rust + WebAssembly Portfolio (v2.0)

[![Built with Rust](https://img.shields.io/badge/Built%20with-Rust%201.99-orange?logo=rust)](https://www.rust-lang.org/)
[![Framework: Leptos](https://img.shields.io/badge/Framework-Leptos%200.6.15-red)](https://leptos.dev/)
[![Target: WASM](https://img.shields.io/badge/Target-WASM32-purple?logo=webassembly)](https://webassembly.org/)
[![Bundler: Trunk](https://img.shields.io/badge/Bundled%20with-Trunk-blue)](https://trunkrs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-TailwindCSS%203.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A high-performance, next-generation portfolio engineered in **100% pure Rust compiled to WebAssembly (WASM)**. Built from scratch with the **Leptos** framework and bundled with **Trunk**, this application eliminates traditional JavaScript runtime overhead, achieving near-native performance, fine-grained reactivity without a Virtual DOM, and an authentic Windows 11 desktop environment ("LaptopOS").

---

## ⚡ Why Rust + WebAssembly?

| Metric / Dimension | Traditional JS/React App | GowthamaOS (Rust + WASM) |
| :--- | :--- | :--- |
| **Runtime Language** | Interpreted JavaScript | Native WebAssembly bytecode |
| **Reactivity** | Virtual DOM diffing & re-renders | Fine-grained signals with direct DOM updates |
| **Thread Safety & Types** | Dynamic / Compile-time TS only | Strong static Rust compiler guarantees |
| **Memory Footprint** | Garbage-collected JS heap | Linear WebAssembly memory buffer |
| **Release WASM Size** | ~1.5 - 3 MB JS bundle | **~669 KB** (opt-level 3, LTO, panic=abort) |
| **Compute Execution** | Single-threaded JS engine | Near-native CPU throughput |

---

## 🚀 Advanced Architecture & Features

### 1. 🎬 Cinematic Scroll Intro Sequence
- **Spring-mass-damper physics** computed in pure Rust driving video scrubbing via `requestAnimationFrame`.
- Seamless scroll-linked transitions mapping 0–100% scroll progress:
  - Entrance 3D avatar layer with smooth scale, opacity, and Y-offset.
  - Laptop hardware mockup with synchronous MP4 video timeline scrubbing.
  - Cinematic 15x zoom into screen transitioning into the desktop OS.
- Quick **"Skip Intro"** control for instant navigation.

### 2. 💻 LaptopOS — Windows 11 Desktop Metaphor
- **Multi-Window Management System**:
  - Drag, cascade, maximize/restore, minimize, and close windows.
  - Active window focus with dynamic z-index stacking.
  - Custom comic-book aesthetic styling with yellow accents (`#f5c518`) and acrylic backdrop blur.
- **Glassmorphic Taskbar**:
  - Windows Start button with fluid launch animation.
  - Live running application tabs with active indicator dots.
  - Real-time system tray with hours/minutes/seconds AM/PM clock and calendar.
  - Sound effects toggle (Synthesized Web Audio API).
  - Rust WASM status badge.
- **Start Menu**:
  - Live fuzzy search filtering across all portfolio apps and capabilities.
  - Pinned applications grid.
  - Profile overview card and user account footer.

### 3. ⌨️ GowthamOS Interactive Virtual Terminal (CLI)
- Built-in virtual Linux shell written in Rust:
  - `help`: System commands inspection.
  - `neofetch`: Custom ASCII art system monitor showing kernel, uptime, and host environment.
  - `whoami`: Operator identity and bio.
  - `skills` & `projects`: Formatted terminal data matrices.
  - `aws [ec2|s3]`: Simulated AWS CLI operations.
  - `docker [ps]` & `kubectl [get]`: Infrastructure container & pod queries.
  - `terraform`: Simulated plan & apply infrastructure state.
  - `cat <file>`: Virtual filesystem reading (`Dockerfile`, `main.tf`, `resume.pdf`).
  - `bench`: Real-time WebAssembly CPU compute benchmark.
  - `matrix`: Digital falling rain visualizer mode.
  - `clear`: Terminal buffer clear.
- Full arrow-key command history (Up/Down) navigation.

### 4. ☁️ AWS Cloud Architecture Visualizer
- Interactive topological network graph representing a production AWS cloud architecture:
  - **Internet Gateway ➔ Application Load Balancer ➔ EC2 Auto Scaling Group ➔ Multi-AZ RDS MySQL & Amazon S3**.
- Clickable nodes with inspector drawer showing:
  - Service descriptions and High Availability details.
  - Real Terraform HCL code configurations.
  - Live simulated latency, RPS, and health metrics.
- **"Simulate Traffic Surge"** mode with packet visualizer and auto-scaling response.

### 5. 🛠️ Live CI/CD Deployment Pipeline Simulator
- Real-time simulated deployment runner:
  - Steps: Cargo Test & Lint ➔ Trunk WASM Build ➔ Docker Containerize ➔ Trivy Vulnerability Scan ➔ Terraform Apply ➔ Production Health Verification.
- Real-time streaming console logs with step-by-step progress spinners and duration telemetry.

### 6. 📊 Rust WASM Native Benchmark & Diagnostics Engine
- Live diagnostics panel showing WebAssembly target architecture (`wasm32-unknown-unknown`), frame rate, and signal reactivity model.
- **CPU Hash Stress Test**: Executes 500,000 non-linear mixing loops in pure WebAssembly, reporting elapsed milliseconds and million operations per second (MOPS).

### 7. 🌌 Interactive Particle Constellation Canvas
- 60 FPS HTML5 canvas particle simulation computed in Rust via `web-sys`.
- Dynamic distance-based constellation links and gravitational drift.

### 8. 🔊 Web Audio API Procedural Sound Synthesizer
- Procedurally synthesized futuristic UI audio (clicks, window chimes, terminal keystroke blips) using `web_sys::AudioContext` and oscillators — zero external MP3 assets needed.
- Mute/unmute toggle in the taskbar.

---

## 📁 Project Directory Structure

```text
portfolio/
├── Cargo.toml                  # Rust package manifest (Leptos, web-sys, wasm-bindgen)
├── Trunk.toml                  # Trunk build bundler configuration
├── input.css                   # Tailwind CSS root stylesheet with comic styling
├── tailwind.config.js          # Tailwind configuration for Rust .rs content
├── index.html                  # Trunk HTML template and entrypoint
├── public/                     # Static media assets (images, video, PDF)
│   ├── me-removebg-preview.png
│   ├── Timeline 1.mp4
│   ├── profilepic.jpg
│   └── resume.pdf
├── dist/                       # Trunk release build output (HTML, WASM, JS, CSS)
├── src/                        # Rust Application Source Code
│   ├── main.rs                 # Application entrypoint & Leptos mount
│   ├── app.rs                  # Root component
│   ├── data/
│   │   ├── mod.rs
│   │   └── resume.rs           # Strongly typed portfolio data structures
│   └── components/
│       ├── mod.rs              # Component module exports
│       ├── audio.rs            # Web Audio API procedural sound engine
│       ├── canvas_particles.rs # High-fps 2D constellation canvas in WASM
│       ├── cinematic_sequence.rs# Scroll-linked video & 3D intro sequence
│       ├── hero.rs             # Hero section with role cycling & stats
│       ├── skills.rs           # Technical stack matrices with filter pills
│       ├── projects.rs         # Deployment registry with architecture tags
│       ├── experience.rs       # Work timeline & opportunities CTA
│       ├── education.rs        # Academic background & coursework
│       ├── certifications.rs   # Verified credential cards & links
│       ├── contact.rs          # Formspree message dispatcher in Rust
│       ├── terminal.rs         # GowthamOS interactive virtual shell
│       ├── aws_visualizer.rs   # AWS architecture topology & Terraform inspector
│       ├── pipeline_runner.rs  # DevOps CI/CD pipeline simulator
│       ├── benchmark.rs        # Rust WASM performance benchmark suite
│       └── laptop_os.rs        # Windows 11 Desktop metaphor & window manager
└── legacy-react/               # Preserved legacy React/TypeScript codebase
```

---

## 🛠️ Build & Development Commands

### Prerequisites
1. **Rust Toolchain**: Install from [rustup.rs](https://rustup.rs/)
2. **WASM Target**:
   ```bash
   rustup target add wasm32-unknown-unknown
   ```
3. **Trunk**:
   ```bash
   cargo install trunk
   ```
4. **Tailwind CSS CLI**: Standalone binary or via npm (`tailwindcss`)

### Development Server
Run the local dev server with hot-reload:
```bash
trunk serve
```
Open your browser at `http://127.0.0.1:8080`.

### Production Release Build
Compile an optimized production build into `dist/`:
```bash
trunk build --release
```
The output `dist/` directory contains:
- `index.html`: Optimized HTML entrypoint.
- `*.wasm`: Stripped, optimized WebAssembly binary (~669 KB).
- `*.js`: Lightweight wasm-bindgen JS glue code.
- `*.css`: Purged, minified Tailwind CSS.
- Static media assets (`Timeline 1.mp4`, images, `resume.pdf`).

### Deployment
The contents of `dist/` are static files ready for deployment on any CDN or hosting platform:
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Vercel** / **Cloudflare Pages** / **Netlify**

---

## 👤 Author

**Gowthama Hegde**
- **Role:** Cloud Architect, DevOps Engineer & Systems Developer
- **Location:** Bengaluru, Karnataka
- **Email:** [gowthamhegde606@gmail.com](mailto:gowthamhegde606@gmail.com)
- **LinkedIn:** [gowtham-hegde](https://www.linkedin.com/in/gowtham-hegde-3bb374320)
- **GitHub:** [@Gowthamhegde](https://github.com/Gowthamhegde)
