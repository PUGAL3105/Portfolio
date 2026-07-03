// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "PUGALARASAN A",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Expertise", href: "#curriculum" },
    { label: "Projects", href: "#alumni" },
    { label: "Showcase", href: "/showcase-video.html" },
    { label: "AI Assistant", href: "#cognitive-assistant" },
    { label: "Contact", href: "#footer" },
  ],
  ctaText: "Contact Me",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "PUGALARASAN A",
  subtitleLine1: "B.E. Computer Science Engineer — building intelligent, scalable digital products",
  subtitleLine2: "across Web, Mobile & AI, with a passion for clean code and human-centred design.",
  ctaText: "Explore My Work",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Expertise",
  items: [
    {
      title: "Web Development",
      slug: "web-development",
      description: "Developing dynamic, performant web applications with complete database integrations and responsive layouts.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Mobile Development",
      slug: "mobile-development",
      description: "Crafting beautiful cross-platform mobile apps with responsive native-like animations in Flutter.",
      image: "images/capability-2.jpg",
    },
    {
      title: "AI & Automation",
      slug: "ai-automation",
      description: "Orchestrating workflow pipelines using n8n and engineering reliable prompt frameworks for LLMs.",
      image: "images/capability-3.jpg",
    },
    {
      title: "UI/UX & Analytics",
      slug: "ui-ux-design-analytics",
      description: "Designing interactive high-fidelity wireframes in Figma and analyzing data using Power BI.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Skill Detail",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Skill not found.",
  capabilities: {
    "web-development": {
      title: "Web Development",
      subtitle: "Hands-on engineering of modern full-stack web applications.",
      paragraphs: [
        "Completed a highly practical Web Application Development internship at Skylena Info Technology Pvt. Ltd. in 2025. Gained hands-on experience in building responsive, modern, and user-centric web platforms in fast-paced agile development environments.",
        "Proficient in coding clean frontends using HTML, CSS, and modern JavaScript, coupled with robust server integrations and database connectivity. Focused on ensuring cross-browser compatibility, rapid load times, and fluid transitions.",
        "Experienced in working on real-time projects that bridge user interface layouts with structured backend APIs. Prioritized modular and reusable code structures, making maintenance and scalability simple and organized.",
      ],
    },
    "mobile-development": {
      title: "Mobile Development",
      subtitle: "Beautiful hybrid applications tailored for iOS and Android.",
      paragraphs: [
        "Specializes in mobile application development using the Flutter framework and Dart. Passionate about translating complex user requirements into highly responsive, performant mobile interfaces.",
        "Experienced with Android CLI, SDK configurations, and state management mechanisms to coordinate remote data calls with local views. Aims to build high-performance applications that maintain a unified codebase while delivering native performance.",
        "Focuses on tactile micro-interactions, smooth animations, and clean layouts that align with modern Material Design and Cupertino principles, keeping mobile users engaged and satisfied.",
      ],
    },
    "ai-automation": {
      title: "AI & Automation",
      subtitle: "Connecting Large Language Models with autonomous workflows.",
      paragraphs: [
        "Skilled in prompt engineering, designing systemic instructions, input contexts, and validation routines to yield reliable, structured answers from LLMs. Experienced with Google AI Studio and Antigravity.",
        "Proficient in automation using n8n to integrate third-party APIs, data streams, and agentic workflows, significantly reducing manual operational overhead and human errors.",
        "Passionate about building software that mimics human reasoning, implementing multi-turn agent processes, self-correction, and context preservation to deliver smart digital assistants.",
      ],
    },
    "ui-ux-design-analytics": {
      title: "UI/UX & Analytics",
      subtitle: "Data-driven design systems that optimize user satisfaction.",
      paragraphs: [
        "Combines visual design with analytic telemetry. Skilled in Figma to construct detailed wireframes, high-fidelity mockups, and interactive prototype systems that guide front-end development.",
        "Experienced in using data visualization tools like Power BI and Excel to create interactive reporting dashboards that help stakeholders track key metrics and make data-driven decisions.",
        "Advocates for user-centric design principles, validating layouts and user flows through telemetry data, and iterating design components based on user feedback and usability metrics.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Showcase",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "Engineering with Precision, Logic, and Creative Vision",
  description: "As a Computer Science Engineer, I approach code through systematic logic and structural design. Every application is built with a focus on optimized rendering, clean states, and interactive animation, providing visitors with a premium digital experience.",
};

// ============================================================
// Project Video Showcase (CinematicVision video grid)
// ============================================================

export interface ShowcaseVideo {
  title: string;
  subtitle: string;
  tag: string;
  year: string;
  slug: string;
  videoUrl: string;
  poster: string;
}

export interface ShowcaseConfig {
  sectionLabel: string;
  heading: string;
  subheading: string;
  videos: ShowcaseVideo[];
}

export const showcaseConfig: ShowcaseConfig = {
  sectionLabel: "Project Showcase",
  heading: "Watch the Projects in Action",
  subheading: "Demo clips generated to represent each project's core experience — from AI imaging to augmented reality.",
  videos: [
    {
      title: "CyberShield AI Suite",
      subtitle: "Real-time threat detection dashboard with ML-powered alert classification.",
      tag: "AI · Cybersecurity",
      year: "2026",
      slug: "cybershield-ai",
      videoUrl: "https://www.pexels.com/download/video/3130284/",
      poster: "images/research-4.jpg",
    },
    {
      title: "Brain Tumor Detection",
      subtitle: "Watershed segmentation and SVM classifier applied to MRI scan datasets.",
      tag: "AI · Medical Imaging",
      year: "2026",
      slug: "brain-tumor-detection",
      videoUrl: "https://www.pexels.com/download/video/3045163/",
      poster: "images/research-1.jpg",
    },
    {
      title: "AR Fashion Fitting",
      subtitle: "MediaPipe skeleton tracking with real-time virtual clothing overlay.",
      tag: "AR · Computer Vision",
      year: "2025",
      slug: "ar-fashion-fitting",
      videoUrl: "https://www.pexels.com/download/video/3045163/",
      poster: "images/research-2.jpg",
    },
    {
      title: "Cognitive Portfolio",
      subtitle: "Canvas rain animations, SVG refractions, and the AI reasoning terminal.",
      tag: "Web · AI",
      year: "2026",
      slug: "developer-portfolio",
      videoUrl: "https://www.pexels.com/download/video/3130284/",
      poster: "images/research-3.jpg",
    },
  ],
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  slug: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Projects",
  projects: [
    {
      title: "CyberShield AI Suite",
      slug: "cybershield-ai",
      year: "2026",
      discipline: "AI & Cybersecurity",
      image: "images/research-4.jpg",
    },
    {
      title: "Automated Brain Tumor Detection",
      slug: "brain-tumor-detection",
      year: "2026",
      discipline: "AI & Image Processing",
      image: "images/research-1.jpg",
    },
    {
      title: "AR Style Fashion Fitting",
      slug: "ar-fashion-fitting",
      year: "2025",
      discipline: "Augmented Reality / CV",
      image: "images/research-2.jpg",
    },
    {
      title: "Cognitive Developer Portfolio",
      slug: "developer-portfolio",
      year: "2026",
      discipline: "Web Application / AI",
      image: "images/research-3.jpg",
    },
  ],
};

// ============================================================
// Project Detail (sub-pages)
// ============================================================

export interface ProjectDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface ProjectDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  projects: Record<string, ProjectDetailData>;
}

export const projectDetailConfig: ProjectDetailConfig = {
  sectionLabel: "Project Detail",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Project not found.",
  projects: {
    "cybershield-ai": {
      title: "CyberShield AI Suite",
      subtitle: "Intelligent multi-layer threat classification and response system.",
      paragraphs: [
        "Developed a comprehensive cyber threat detection suite featuring a three-tiered architecture. The core machine learning service (`ml_service`) is built in Python using FastAPI (running on port 8000), which loads and executes a Random Forest Classifier trained on 20 network flow attributes (such as Flow Duration, Total Fwd/Bwd Packets, Packet Length Mean, and IAT time metrics). The service classifies traffic logs into six distinct categories: BENIGN, BRUTE_FORCE, DDOS, MALWARE, SUSPICIOUS_IP, and UNAUTHORIZED_ACCESS.",
        "The backend API layer is constructed using Node.js and Express (running on port 3001) connected to a SQLite database (`cybershield.db`). It records logged alerts, stores security incident profiles, and triggers automated containment workflows (such as firewall IP blocklists, Multi-Factor Authentication requests, or isolated host containment).",
        "The user dashboard is implemented in React and Tailwind CSS (running on port 5173) to present security analysts with real-time incident timelines, comparative category charts, and actionable containment switches. All microservices are orchestrated and run concurrently using a PowerShell script (`run_project.ps1`) for seamless local deployment.",
      ]
    },
    "brain-tumor-detection": {
      title: "Automated Brain Tumor Detection",
      subtitle: "Precision MRI segmentation and computer-aided diagnosis.",
      paragraphs: [
        "Designed and implemented an automated medical imaging system for brain tumor detection. The preprocessing pipeline is written in Python, utilizing OpenCV and NumPy for skull-stripping, contrast enhancement via CLAHE (Contrast Limited Adaptive Histogram Equalization), noise removal through Gaussian filters, and intensity normalization.",
        "Implemented the Watershed Segmentation Algorithm to perform pixel-level clustering on MRI scans. This algorithm calculates topological gradients to locate boundaries and isolate tumorous tissue regions from surrounding healthy grey and white brain matter with high structural accuracy.",
        "Applied machine learning classifiers—specifically Support Vector Machines (SVM) and Random Forest models—to evaluate features (such as area, perimeter, circularity, and texture indices) extracted from the segmented regions. The system achieves high sensitivity and classification accuracy, providing radiologists with an objective diagnostic tool for early detection.",
      ]
    },
    "ar-fashion-fitting": {
      title: "AR Style Fashion Fitting",
      subtitle: "Holographic clothing overlays via real-time body tracking.",
      paragraphs: [
        "Created an augmented reality virtual try-on system written in Dart and built on the Flutter mobile framework. The application accesses the mobile camera stream to track user body joints in real-time, mapping coordinates to anchor overlay points.",
        "Integrated computer vision algorithms (OpenCV and MediaPipe) to detect body contours and track skeletal points (shoulder-to-shoulder, waistline, and hips). This enables 2D and 3D digital garment assets to scale, rotate, and warp dynamically to align with the user's distance, perspective, and motion.",
        "Optimized for virtual retail, the app simulates sizing predictions to help consumers visualize clothing fits before checking out. By offering an interactive try-on experience, the solution boosts buying confidence and helps e-commerce sites reduce sizing-related return rates.",
      ]
    },
    "developer-portfolio": {
      title: "Cognitive Developer Portfolio",
      subtitle: "A premium portfolio showcasing simulated agentic reasoning.",
      paragraphs: [
        "Designed and engineered this responsive, high-end developer portfolio website using React 19, TypeScript, and Vite 7. The site uses a sleek dark mode layout with custom canvas-rendered math cascades falling rain effect that simulates waterline boundaries, ripple rings, and mouse interaction disturbance waves.",
        "Built an interactive Cognitive Resume Assistant terminal (`src/components/CognitiveAssistant.tsx`) utilizing a simulated agent workflow. The assistant parses search terms, outputs visual reasoning steps (intent mapping, vector data block extraction, fact checking, and self-correction), and types answers using a real-time typewriter script.",
        "Integrated dynamic client-side sub-routing using React Router DOM. Visitors can click on expertise cards or project grid items to route to dedicated sub-pages (`/capability/:slug` and `/project/:slug`) with smooth scroll-restoration, responsive navigation columns, and full mobile optimization.",
      ]
    }
  }
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
  urls?: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Let's construct the next digital leap together.",
  columns: [
    {
      title: "Information",
      links: [
        "Email: pugalarasan0310@gmail.com",
        "Phone: +91 8220358427",
        "Location: TamilNadu, India",
      ],
    },
    {
      title: "Connect",
      links: ["GitHub", "LinkedIn", "LeetCode"],
      urls: [
        "https://github.com/PUGAL3105",
        "https://www.linkedin.com/in/pugalarasan-a",
        "https://leetcode.com/u/Pugalarasan-0310/",
      ],
    },
  ],
  copyright: "\u00A9 2026 PUGALARASAN A. All rights reserved.",
  bottomLinks: [
    { label: "Vite + React + TS Portfolio", href: "#" },
  ],
};
