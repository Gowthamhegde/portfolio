# Requirements Document

## Introduction

This document specifies a full rewrite of an existing React/TypeScript portfolio website (Gouthama Hegde — Cloud Architect & Full-Stack Developer) into Rust compiled to WebAssembly using the Leptos framework. The rewrite must preserve all existing functionality, visual design, and user experience while leveraging the performance and type-safety benefits of Rust/WASM. The current app features a scroll-driven cinematic intro with video scrubbing, a Windows 11 desktop metaphor UI (LaptopOS) with draggable/maximizable windows, comic-book aesthetic styling, and seven content sections (Hero, Skills, Projects, Experience, Education, Certifications, Contact) with a Formspree contact form.

## Glossary

- **Portfolio_App**: The complete Rust/WASM portfolio application compiled from Rust to WebAssembly
- **Cinematic_Intro**: The scroll-driven intro sequence component featuring a profile image fade-out, video fade-in/scrub, zoom transition, and final fade-to-content
- **Laptop_OS**: The Windows 11 desktop metaphor UI component that hosts content windows, a taskbar, a start menu, and desktop icons
- **Content_Window**: An individual window within Laptop_OS that displays a content section (Skills, Projects, etc.) with title bar controls (minimize, maximize, close)
- **App_Registry**: The central registry of available applications (Skills, Projects, Experience, Education, Certifications, Contact) and their associated metadata
- **Hero_Section**: The profile overview component with animated role cycling, stats grid, social links, and AWS badge
- **Skills_Section**: The technical skills display component with four skill groups and skill chips
- **Projects_Section**: The project portfolio grid with deployment metadata and tech tags
- **Experience_Section**: The work history timeline with internship details and an "Open to Opportunities" CTA
- **Education_Section**: The education history display with coursework tags and status badges
- **Certifications_Section**: The certification grid with category, year, issuer, and verification links
- **Contact_Section**: The contact info and form component with Formspree integration
- **Design_System**: The collection of CSS classes, color variables, fonts, and animation keyframes defining the comic-book aesthetic
- **Scroll_Progress**: The scroll position value (0.0–1.0) mapped against the cinematic intro container's height, used to drive opacity, scale, and video scrub transforms
- **Formspree**: The third-party form backend service that receives contact form submissions
- **Leptos**: The Rust web framework (SSR-capable, reactive signals) chosen for this rewrite, compiling to WASM for client-side rendering
- **Trunk**: The WASM build tool that bundles Rust crates into static web assets (HTML, JS, WASM)
- **WASM**: WebAssembly binary format that the Rust code compiles to for in-browser execution

## Requirements

### Requirement 1: Framework and Build Pipeline

**User Story:** As a developer, I want the portfolio built with Rust compiled to WASM using Leptos and Trunk, so that the app benefits from type safety, small binary size, and fast client-side rendering.

#### Acceptance Criteria

1. THE Portfolio_App SHALL be built using the Leptos framework with the CSR (Client-Side Rendering) feature set
2. THE Portfolio_App SHALL use Trunk as the build tool to produce static web assets (HTML, WASM, JS glue, CSS)
3. THE Portfolio_App SHALL compile to WASM with a binary size small enough to load within 3 seconds on a standard broadband connection
4. WHEN the build command is executed, THE Trunk SHALL produce a `dist/` directory containing the final static assets ready for deployment
5. THE Portfolio_App SHALL support a development server with hot-reload capability during development

### Requirement 2: Cinematic Scroll Intro

**User Story:** As a visitor, I want a scroll-driven cinematic intro sequence, so that I experience a visually engaging entrance to the portfolio content.

#### Acceptance Criteria

1. THE Cinematic_Intro SHALL render a 400vh-tall scroll track container to provide scroll room for the sequence
2. THE Cinematic_Intro SHALL render a fixed overlay (z-index 50) that stays on screen during the scroll sequence and fades out at 95–100% scroll progress
3. WHEN scroll progress is 0–15%, THE Cinematic_Intro SHALL display a profile image layer (me-removebg-preview.png) with opacity transitioning from 1 to 0, scale from 1 to 1.2, and Y-offset from 0 to -50px
4. WHEN scroll progress is 10–20%, THE Cinematic_Intro SHALL fade in a video layer (Timeline 1.mp4) from opacity 0 to 1
5. WHEN scroll progress is 20–80%, THE Cinematic_Intro SHALL scrub the video's currentTime proportionally to scroll progress (mapping 0.2–0.6 of scroll to 0.0–1.0 of video duration)
6. WHEN scroll progress is 80–95%, THE Cinematic_Intro SHALL scale the video layer from 1 to 15 to create a zoom-into-laptop-screen effect
7. WHEN scroll progress reaches 100%, THE Cinematic_Intro SHALL set pointer events to none on the overlay, allowing interaction with content beneath
8. THE Cinematic_Intro SHALL apply a spring smoothing (stiffness 100, damping 30, rest delta 0.001) to the raw scroll progress before driving transforms
9. THE Cinematic_Intro SHALL render the content (Laptop_OS) after a 400vh top padding so it is revealed when the user scrolls past the sequence
10. THE Cinematic_Intro SHALL display a left-side title block with "Welcome to the portfolio of", "GOUTHAMA HEGDE" in comic font, and a subtitle with a yellow left border, plus a pulsing "SCROLL TO EXPLORE" indicator

### Requirement 3: LaptopOS Desktop Metaphor

**User Story:** As a visitor, I want the portfolio content presented within a Windows 11 desktop metaphor, so that I can interact with portfolio sections as if they were desktop applications.

#### Acceptance Criteria

1. THE Laptop_OS SHALL render a full-screen desktop area with a dark background (#0a0a0a) and a radial-gradient wallpaper (circle at 50% 120%, #1a365d to #000000)
2. THE Laptop_OS SHALL render decorative glow elements: a yellow glow (500px, opacity 0.1, blur 150px) at top-right and a blue glow (400px, opacity 0.1, blur 150px) at bottom-left
3. THE Laptop_OS SHALL render desktop icons for each app in App_Registry, each with a colored icon box, title label, and hover highlight
4. THE Laptop_OS SHALL manage a list of open apps and track which app is active and which is fullscreen
5. WHEN a desktop icon is clicked, THE Laptop_OS SHALL open the corresponding Content_Window, set it as active, and close the start menu
6. THE Laptop_OS SHALL render a taskbar at the bottom (height 48px) with glassmorphism (backdrop-blur 20px, rgba(25,25,25,0.85) background)
7. THE Laptop_OS SHALL render a Start button in the taskbar that toggles a start menu, a search icon, and open-app indicators with active-state highlighting
8. THE Laptop_OS SHALL render a system tray on the right side of the taskbar showing the current time and date
9. WHEN the start menu is open, THE Laptop_OS SHALL render a glassmorphic panel (backdrop-blur 30px) containing a search bar, a pinned-apps grid, a recommended profile section rendering Hero_Section at 80% scale, and a user account footer with profile picture and name
10. THE Laptop_OS SHALL apply a spring animation (damping 25, stiffness 300) to Content_Window open, close, and start-menu transitions
11. WHERE the viewport width is 768px or less, THE Laptop_OS SHALL render Content_Windows in fullscreen mode (no border radius, full width and height)

### Requirement 4: Content Window Management

**User Story:** As a visitor, I want to open, minimize, maximize, close, and switch between content windows, so that I can navigate portfolio sections like desktop applications.

#### Acceptance Criteria

1. WHEN a Content_Window opens, THE Laptop_OS SHALL animate it from opacity 0, scale 0.95, Y-offset 20 to opacity 1, scale 1, Y-offset 0
2. WHEN a Content_Window closes, THE Laptop_OS SHALL animate it from visible to opacity 0, scale 0.95, Y-offset 20
3. THE Content_Window SHALL render a title bar (height 32px) with an app icon and title on the left and window control buttons on the right
4. THE Content_Window SHALL render minimize, maximize, and close buttons in the title bar with hover states (minimize/maximize hover: white/10 background; close hover: red-500 background with white text)
5. WHEN the close button is clicked, THE Laptop_OS SHALL remove the app from open apps and clear active and fullscreen states for that app
6. WHEN the maximize button is clicked, THE Laptop_OS SHALL toggle the app between its cascaded position and fullscreen mode
7. WHEN a Content_Window is clicked, THE Laptop_OS SHALL set that app as active and bring it to front (z-index 50)
8. WHEN multiple windows are open, THE Laptop_OS SHALL cascade them with incremental top/left offsets (10% + index×3%) and size 70%×75%
9. THE Content_Window SHALL have a glassmorphism background (rgba(25,25,25,0.85), backdrop-blur 20px) with a white/10 border
10. THE Content_Window SHALL render a scrollable content area (#111111 background) below the title bar with a custom scrollbar (6px width, yellow thumb)

### Requirement 5: Hero Section

**User Story:** As a visitor, I want to see a profile overview with my name, animated role, bio, stats, and social links, so that I can quickly understand who Gouthama is.

#### Acceptance Criteria

1. THE Hero_Section SHALL render a status pill with "AVAILABLE FOR HIRE" text, a pulsing yellow dot, and a yellow border with yellow/10 background
2. THE Hero_Section SHALL render the name "GOUTHAMA HEGDE" in comic font (Bangers) at responsive sizes (clamp 3rem to 5.5rem), white for first name and yellow for last name
3. THE Hero_Section SHALL cycle through roles ["Cloud Engineer", "DevOps Engineer", "AWS Architect", "Infrastructure Engineer"] every 3 seconds with a fade transition and a blinking cursor
4. THE Hero_Section SHALL render the profile summary text from the data layer with a yellow left border (4px)
5. THE Hero_Section SHALL render CTA buttons: "VIEW PROJECTS" (primary yellow), "GITHUB" (secondary outlined), and "LINKEDIN" (secondary outlined)
6. THE Hero_Section SHALL render location and email contact info with yellow SVG icons in monospace font
7. THE Hero_Section SHALL render a profile picture (profilepic.jpg) in a 256px circular frame with a 4px yellow border, a 6px yellow hard shadow, and a status dot
8. THE Hero_Section SHALL render a 2×2 stats grid with values (5+ projects, 4 certifications, 1 YR experience, 20+ skills) in comic font with monospace labels
9. THE Hero_Section SHALL render an AWS badge panel with icon, "AWS Solutions Architect" text, service list, and a "CERT" badge
10. THE Hero_Section SHALL render lightning bolt SVG decorations at three positions with varying rotations and opacity levels
11. THE Hero_Section SHALL render a halftone dot background pattern (radial-gradient, 28px spacing, opacity 0.04)
12. THE Hero_Section SHALL apply entrance animations: left content slides in from X-offset -40, right content slides in from X-offset 40 with a 0.15s delay

### Requirement 6: Skills Section

**User Story:** As a visitor, I want to see grouped technical skills with visual chips, so that I can assess Gouthama's capabilities at a glance.

#### Acceptance Criteria

1. THE Skills_Section SHALL render a section header with tag "02 / CAPABILITIES", title "TECHNICAL STACK" (white with yellow accent), and a status indicator "ALL SYSTEMS NOMINAL" with a pulsing yellow dot
2. THE Skills_Section SHALL render four skill groups: "CLOUD INFRASTRUCTURE" (☁️), "DEVOPS & AUTOMATION" (⚙️), "DEVELOPMENT" (💻), "SECURITY & MONITORING" (🛡️)
3. THE Skills_Section SHALL render each group as a panel with a yellow left border (4px), a yellow icon box with hard shadow (2px 2px 0px #000), a group label in comic font, and an "ACTIVE" badge
4. THE Skills_Section SHALL render each skill as a chip with a yellow dot indicator, hover border transition to yellow, and monospace text
5. THE Skills_Section SHALL apply scroll-triggered entrance animations (opacity 0→1, Y 24→0) with staggered delays per group and per chip
6. THE Skills_Section SHALL render groups in a 2-column grid on desktop and single-column on mobile

### Requirement 7: Projects Section

**User Story:** As a visitor, I want to browse a grid of project cards with metadata and links, so that I can explore Gouthama's work.

#### Acceptance Criteria

1. THE Projects_Section SHALL render a section header with tag "03 / DEPLOYMENTS", title "PROJECT REGISTRY", and a deployment count indicator
2. THE Projects_Section SHALL render a grid of project cards (2 columns on desktop, 3 columns on XL screens) from the projects data array
3. THE Projects_Section SHALL render each card as a link to the project's GitHub URL, opening in a new tab with noopener/noreferrer
4. THE Projects_Section SHALL render each card with a deployment ID badge (DEP-801, DEP-802, etc.), a status badge (DEPLOYED/RUNNING/LIVE), and a folder icon in a yellow box with hard shadow
5. THE Projects_Section SHALL render each card with a project name (comic font), architecture metadata in monospace, description text, and tech stack tags
6. THE Projects_Section SHALL apply hover effects on cards: yellow border, 4px yellow hard shadow, translate -1px/-1px
7. THE Projects_Section SHALL render a "VIEW SOURCE" footer with an external-link icon
8. THE Projects_Section SHALL apply scroll-triggered entrance animations with staggered delays per card

### Requirement 8: Experience Section

**User Story:** As a visitor, I want to see a timeline of work experience, so that I can understand Gouthama's professional background.

#### Acceptance Criteria

1. THE Experience_Section SHALL render a section header with tag "04 / WORK HISTORY", title "PROFESSIONAL EXPERIENCE"
2. THE Experience_Section SHALL render a vertical timeline with a yellow line (opacity 0.3, 2px width) on the left
3. THE Experience_Section SHALL render each experience entry with a yellow square marker (10×10px, hard shadow 2px 2px 0px #000) on the timeline
4. THE Experience_Section SHALL render each entry as a panel with yellow left border, role title (comic font), company name (yellow), period and location in monospace, and an "INTERNSHIP" badge
5. THE Experience_Section SHALL render key responsibilities as a list with yellow ▸ markers and hover border transition
6. THE Experience_Section SHALL render a "TECHNOLOGIES USED" section with tech tags for each entry
7. THE Experience_Section SHALL render an "Open to New Opportunities" CTA panel with yellow border (2px), 4px yellow hard shadow, a checkmark icon, description text, and a "CONTACT ME" primary button
8. THE Experience_Section SHALL apply scroll-triggered entrance animations (opacity, X-offset) with staggered delays

### Requirement 9: Education Section

**User Story:** As a visitor, I want to see education history with coursework, so that I can understand Gouthama's academic background.

#### Acceptance Criteria

1. THE Education_Section SHALL render a section header with tag "05 / BACKGROUND", title "EDUCATION HISTORY"
2. THE Education_Section SHALL render education entries as panels with yellow left borders (4px)
3. THE Education_Section SHALL render each entry with a graduation cap icon in a yellow box (48×48px, hard shadow), degree title (comic font), school name (yellow), and period in monospace
4. THE Education_Section SHALL render a status badge ("IN PROGRESS" or "COMPLETED") for each entry
5. THE Education_Section SHALL render relevant coursework as tech tags below each entry
6. THE Education_Section SHALL apply scroll-triggered entrance animations (opacity, Y-offset) with staggered delays per entry
7. THE Education_Section SHALL render entries in a single-column vertical stack

### Requirement 10: Certifications Section

**User Story:** As a visitor, I want to see a grid of certifications with verification links, so that I can validate Gouthama's credentials.

#### Acceptance Criteria

1. THE Certifications_Section SHALL render a section header with tag "06 / CREDENTIALS", title "CERTIFICATIONS & BADGES", and a credential count indicator
2. THE Certifications_Section SHALL render certification cards in a 2-column grid from the certifications data array
3. THE Certifications_Section SHALL render each card with a yellow icon box (hard shadow 2px 2px 0px #000), a category badge, year in monospace, certification name, issuer, and a "VERIFIED" badge
4. THE Certifications_Section SHALL render a "VIEW CERTIFICATE" link for each card that opens the certificate URL in a new tab with noopener/noreferrer
5. THE Certifications_Section SHALL render each card as a panel with a yellow left border (4px)
6. THE Certifications_Section SHALL apply scroll-triggered entrance animations (opacity, Y-offset) with staggered delays per card

### Requirement 11: Contact Section

**User Story:** As a visitor, I want to see contact information and send a message through a form, so that I can reach out to Gouthama.

#### Acceptance Criteria

1. THE Contact_Section SHALL render a section header with tag "07 / CONNECT", title "INIT CONNECTION"
2. THE Contact_Section SHALL render a two-column layout: contact info on the left, contact form on the right
3. THE Contact_Section SHALL render a "CONTACT ENDPOINTS" panel with email, phone, and location entries, each with a yellow accent bar, monospace label, and clickable link (mailto/tel)
4. THE Contact_Section SHALL render a "SOCIAL LINKS" panel with GitHub and LinkedIn buttons that open in new tabs with noopener/noreferrer and have hover fill effects (yellow background, black text)
5. THE Contact_Section SHALL render a contact form with name (text), email (email), and message (textarea) fields, each with a comic-font yellow label and dark input with yellow focus border
6. WHEN the contact form is submitted, THE Contact_Section SHALL POST the form data to the Formspree endpoint (https://formspree.io/f/mykkjnza) with a hidden subject field "New Portfolio Contact"
7. WHEN the contact form submission succeeds, THE Contact_Section SHALL display a success confirmation to the user
8. WHEN the contact form submission fails, THE Contact_Section SHALL display an error message to the user
9. THE Contact_Section SHALL render a "SEND MESSAGE" primary button that submits the form

### Requirement 12: Design System and Styling

**User Story:** As a developer, I want the comic-book aesthetic design system preserved in the Rust/WASM rewrite, so that the portfolio maintains its distinctive visual identity.

#### Acceptance Criteria

1. THE Design_System SHALL define CSS color variables: --yellow (#f5c518), --yellow-dark (#e6b800), --black (#0d0d0d), --card (#1a1a1a), --border (#2a2a2a)
2. THE Design_System SHALL load three fonts: Bangers (comic headings), Inter (body), JetBrains Mono (code/technical)
3. THE Design_System SHALL define a `.panel` class with #1a1a1a background, 2px #2a2a2a border, 8px border radius, overflow hidden, and hover effects (yellow border, 4px yellow hard shadow, -2px/-2px translate)
4. THE Design_System SHALL define `.btn-primary` (yellow background, Bangers font, 3px black hard shadow, hover: darker yellow, 5px shadow, -2px translate) and `.btn-secondary` (transparent with yellow border, 3px yellow shadow, hover: yellow fill, 5px black shadow)
5. THE Design_System SHALL define `.section-header` (flex, 3px yellow bottom border, 48px bottom margin), `.section-tag` (Bangers font, yellow, uppercase), and `.badge` / `.badge-success` / `.tech-tag` classes
6. THE Design_System SHALL define keyframe animations: `blink` (opacity toggle 1s), `float` (Y-offset 4s), `pulse-ring` (scale/opacity 2s)
7. THE Design_System SHALL define a custom scrollbar (6px width, #0d0d0d track, yellow thumb with 3px radius)
8. THE Design_System SHALL apply a dark base body style (#0d0d0d background, #f1f1f1 text, Inter font, smooth scrolling, hidden horizontal overflow)

### Requirement 13: Data Layer

**User Story:** As a developer, I want a typed data layer in Rust matching the existing resume data, so that all content is statically compiled and type-safe.

#### Acceptance Criteria

1. THE Portfolio_App SHALL define Rust structs for Profile (name, title, location, phone, email, profile_picture, summary, socials), Skills (programming, libraries, tools, soft), Project (name, href, description, tech), Experience (role, company, period, details), Education (degree, school, period, coursework), and Certification (name, href)
2. THE Portfolio_App SHALL define a SocialLink struct with label and href fields
3. THE Portfolio_App SHALL populate all structs with the exact data values from the existing resume.ts data file
4. THE Portfolio_App SHALL define static metadata arrays for project statuses/architectures, certification categories/years/issuers, and experience tech-used lists, matching the existing hardcoded values in the React components
5. THE Portfolio_App SHALL make all data available to components through Leptos signals or context providers without runtime fetching

### Requirement 14: Static Assets

**User Story:** As a developer, I want the existing static assets (images, video, PDF, SVG) served correctly in the WASM build, so that the portfolio displays all media properly.

#### Acceptance Criteria

1. THE Portfolio_App SHALL include the profile image (me-removebg-preview.png), profile picture (profilepic.jpg), intro video (Timeline 1.mp4), resume PDF (resume.pdf), and profile-picture.svg in the Trunk static assets directory
2. WHEN the Portfolio_App references an asset path, THE path SHALL match the existing URL paths (/me-removebg-preview.png, /profilepic.jpg, /Timeline 1.mp4, /resume.pdf, /profile-picture.svg)
3. THE Portfolio_App SHALL preload the intro video metadata before attempting to scrub its currentTime
4. THE Portfolio_App SHALL render the video element with muted, playsInline, and preload="auto" attributes

### Requirement 15: Responsive Design

**User Story:** As a visitor on a mobile device, I want the portfolio to be fully responsive, so that I can navigate and view content on small screens.

#### Acceptance Criteria

1. WHERE the viewport width is 768px or less, THE Laptop_OS SHALL render Content_Windows in fullscreen mode
2. THE Portfolio_App SHALL render the Hero_Section in a single-column layout on mobile and two-column on large screens
3. THE Portfolio_App SHALL render skill groups, project cards, certification cards, and education entries in single-column on mobile and multi-column on desktop
4. THE Cinematic_Intro SHALL render readable title text at mobile sizes (text-4xl on mobile, scaling to text-9xl on large screens)
5. THE Portfolio_App SHALL hide the Cinematic_Intro profile image at low opacity (0.3) on mobile screens below the medium breakpoint, while showing it at full opacity on medium and above

### Requirement 16: Scroll-Linked Animations

**User Story:** As a visitor, I want smooth scroll-linked animations throughout the portfolio, so that the experience feels polished and dynamic.

#### Acceptance Criteria

1. THE Portfolio_App SHALL provide a scroll-progress reactive signal that reports the scroll position (0.0–1.0) relative to a target element
2. THE Portfolio_App SHALL support interpolating CSS properties (opacity, scale, translate Y) from scroll progress with configurable input/output ranges
3. THE Portfolio_App SHALL apply spring smoothing to scroll-driven values with configurable stiffness, damping, and rest delta
4. THE Portfolio_App SHALL support scroll-triggered entrance animations that trigger once when an element enters the viewport (opacity 0→1, Y/X offset→0)
5. THE Portfolio_App SHALL support staggered animation delays for lists of elements (cards, chips, entries)
6. THE Portfolio_App SHALL support keyframe loop animations (blink, float, pulse-ring, pulse) driven by CSS or requestAnimationFrame
7. THE Portfolio_App SHALL support animated role text cycling with fade transitions on index change

### Requirement 17: Performance

**User Story:** As a developer, I want the WASM portfolio to perform at least as well as the React app, so that users experience no degradation in responsiveness.

#### Acceptance Criteria

1. THE Portfolio_App SHALL achieve a Lighthouse performance score of at least 80 on desktop
2. THE Portfolio_App SHALL lazy-load content sections that are not immediately visible (Projects, Experience, Education, Certifications, Contact) using Leptos lazy component loading or equivalent code-splitting
3. THE Portfolio_App SHALL debounce scroll event handlers to avoid excessive re-renders during the cinematic intro
4. THE Portfolio_App SHALL use `will-change: transform, opacity` CSS hints on animated elements during the cinematic intro to promote GPU compositing
5. THE Portfolio_App SHALL minimize WASM binary size by enabling LTO (link-time optimization) and opting into `panic = "abort"` in the release profile
6. THE Portfolio_App SHALL use requestAnimationFrame for video currentTime updates during scroll scrubbing to avoid layout thrashing

### Requirement 18: Deployment

**User Story:** As a developer, I want the built WASM portfolio to be deployable as static files, so that I can host it on any static file host or CDN.

#### Acceptance Criteria

1. WHEN the release build is executed, THE Trunk SHALL produce a `dist/` directory with index.html, the WASM binary, JS glue, and CSS suitable for static hosting
2. THE Portfolio_App SHALL be deployable to any static file host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3+CloudFront) without server-side code
3. THE Portfolio_App SHALL include all static assets (images, video, fonts, PDF) in the build output
4. THE Portfolio_App SHALL set appropriate cache headers via a deployment configuration for WASM and static assets