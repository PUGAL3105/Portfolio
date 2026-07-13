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
  subtitleLine1: "Computer Science Engineering Student",
  subtitleLine2: "AI · Full Stack · Mobile Application Development · Web Development",
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
      title: "AI / ML & Automation",
      slug: "ai-ml",
      description: "Designing intelligent machine learning systems, prompt frameworks, and autonomous workflow pipelines using n8n and LLMs.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Full Stack Development",
      slug: "full-stack",
      description: "Engineering robust full-stack software, connecting frontend clients with backend APIs, database systems, and Flutter mobile apps.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Mobile Application Development",
      slug: "mobile-app",
      description: "Crafting beautiful cross-platform mobile apps with responsive native-like animations in Flutter and Dart.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Web Development",
      slug: "web-dev",
      description: "Building clean, responsive, and dynamic web interfaces with complete server integrations based on your Skylena internship.",
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
    "ai-ml": {
      title: "AI / ML & Automation",
      subtitle: "Bridging neural classifiers with automated backend execution.",
      paragraphs: [
        "Actively developing and implementing machine learning solutions to solve complex data challenges. Experienced in engineering precise prompt scripts for large language models, building input validation routines, and leveraging tools like Google AI Studio and Antigravity.",
        "Proficient in designing automated logic pipelines using n8n to integrate third-party APIs and orchestrate services. Applied ML classifiers such as Support Vector Machines (SVM) and Random Forest models to achieve high-accuracy results in predictive tasks.",
        "Focused on creating intelligent systems that demonstrate reasoning, self-correction, and context preservation, transforming raw data streams into automated decision-making engines.",
      ],
    },
    "full-stack": {
      title: "Full Stack Development",
      subtitle: "End-to-end software architectures across web and mobile.",
      paragraphs: [
        "Specializes in bridging user interface layouts with structured backend APIs and database tables. Skilled in programming in Java and developing cross-platform mobile apps using the Flutter framework.",
        "Experienced in state management mechanisms, SDK configurations, and state handling to coordinate remote database operations with local client views, delivering native performance on iOS and Android.",
        "Focuses on clean code practices, modular backend route configurations, and scalable database schemas that enable simple maintenance and robust integrations.",
      ],
    },
    "mobile-app": {
      title: "Mobile Application Development",
      subtitle: "Beautiful native-performing hybrid applications.",
      paragraphs: [
        "Specializes in mobile application development using the Flutter framework and Dart. Passionate about translating complex user requirements into highly responsive, performant mobile interfaces.",
        "Experienced with Android CLI, SDK configurations, state management, and connecting local client views with remote backend databases. Aiming to build applications that deliver native performance on both iOS and Android.",
        "Designed an AR Style Fashion Fitting application in Flutter that accesses mobile camera streams and leverages joint tracking models to overlay 2D garment meshes in real time.",
      ],
    },
    "web-dev": {
      title: "Web Development",
      subtitle: "Hands-on engineering of modern user-centric platforms.",
      paragraphs: [
        "Completed a highly practical Web Application Development internship at Skylena Info Technology Pvt. Ltd. Gained hands-on experience in building responsive, modern, and user-centric web platforms in fast-paced agile development environments.",
        "Proficient in coding clean frontends using HTML, CSS, and modern JavaScript, coupled with robust server integrations and database connectivity. Focused on ensuring cross-browser compatibility, rapid load times, and fluid transitions.",
        "Worked on real-time projects involving frontend, backend, and database integration. Prioritized modular and reusable code structures, making maintenance and scalability simple and organized.",
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
  title: "A Dedicated Computer Science Student & Engineer",
  description: "A dedicated and focused computer science individual with a strong passion for learning and growth. Eager to apply knowledge in an optimistic environment and contribute to a team's success. Proficient in absorbing new concepts and technologies, with strong professional and personal skills.",
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
      tag: "AI · Full Stack",
      year: "2026",
      slug: "cybershield-ai",
      videoUrl: "https://www.pexels.com/download/video/3130284/",
      poster: "images/research-4.jpg",
    },
    {
      title: "Brain Tumor Detection",
      subtitle: "Watershed segmentation and SVM classifier applied to MRI scan datasets.",
      tag: "AI · Mobile App · ML",
      year: "2026",
      slug: "brain-tumor-detection",
      videoUrl: "https://www.pexels.com/download/video/3045163/",
      poster: "images/research-1.jpg",
    },
    {
      title: "AR Fashion Fitting",
      subtitle: "MediaPipe skeleton tracking with real-time virtual clothing overlay.",
      tag: "Mobile Application Development · Flutter",
      year: "2025",
      slug: "ar-fashion-fitting",
      videoUrl: "https://www.pexels.com/download/video/3045163/",
      poster: "images/research-2.jpg",
    },
    {
      title: "Cognitive Portfolio",
      subtitle: "Canvas rain animations, SVG refractions, and the AI reasoning terminal.",
      tag: "Web Development · AI · Full Stack",
      year: "2026",
      slug: "developer-portfolio",
      videoUrl: "https://www.pexels.com/download/video/3130284/",
      poster: "images/research-3.jpg",
    },
    {
      title: "AI Resume Analyser",
      subtitle: "FastAPI gateway and NLP matching engine for ATS score checking and candidate ranking.",
      tag: "AI · NLP · Full Stack",
      year: "2026",
      slug: "ats-resume-analyser",
      videoUrl: "https://www.pexels.com/download/video/3045163/",
      poster: "images/research-5.jpg",
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
      discipline: "AI & Full Stack",
      image: "images/research-4.jpg",
    },
    {
      title: "Automated Brain Tumor Detection",
      slug: "brain-tumor-detection",
      year: "2026",
      discipline: "AI & Computer Vision",
      image: "images/research-1.jpg",
    },
    {
      title: "AR Style Fashion Fitting",
      slug: "ar-fashion-fitting",
      year: "2025",
      discipline: "Computer Vision & AR",
      image: "images/research-2.jpg",
    },
    {
      title: "Cognitive Developer Portfolio",
      slug: "developer-portfolio",
      year: "2026",
      discipline: "Web Dev & AI",
      image: "images/research-3.jpg",
    },
    {
      title: "AI Resume Analyser & ATS Checker",
      slug: "ats-resume-analyser",
      year: "2026",
      discipline: "AI & NLP & Full Stack",
      image: "images/research-5.jpg",
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
    },
    "ats-resume-analyser": {
      title: "AI Resume Analyser & ATS Score Checker",
      subtitle: "FastAPI-powered document parsing, OCR pipeline, and candidate matching.",
      paragraphs: [
        "Developed an AI-powered applicant tracking system (ATS) built on FastAPI and React. The application parses resumes in PDF, DOCX, and TXT formats. In the backend, a multi-stage NLP screening engine lemmatizes raw text, filters NLTK stop words, and applies a weighted scoring algorithm to match candidate credentials against target job postings.",
        "Engineered a computer vision OCR preprocessing pipeline using Python, OpenCV, and Tesseract. If a scanned or non-searchable PDF is uploaded, the system applies adaptive thresholding, noise filtering, and upscaling before character extraction, ensuring high-accuracy text conversion for scanned resumes.",
        "Implemented an analytical recruiter dashboard featuring interactive Chart.js talent distribution curves, candidate search/rank sorting, JWT authentication, bcrypt password hashing, and CORS/SQL injection guards to support secure, bias-free applicant screening at scale.",
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
