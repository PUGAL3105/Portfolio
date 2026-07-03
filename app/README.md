# PUGALARASAN A - Cognitive Developer Portfolio

A high-end, cinematic developer portfolio for **Pugalarasan A**, built using React, TypeScript, Vite, Tailwind CSS, and custom Canvas/SVG visual effects. It features a canvas-based amber digital rain animation (falling mathematical symbols splashing into a simulated water surface) and an interactive **Cognitive Resume Assistant** terminal.

---

## 🌟 Key Features

- **Amber Matrix Digital Rain (Canvas):** A canvas-rendered falling numbers/symbols animation with full water line collision physics, ripple rings, and interactive click/touch wave propagation.
- **Liquid Glass Button:** An SVG-filtered refraction button simulating heavy glass displacement.
- **Cognitive Resume Assistant:** A custom terminal chatbot that simulates AI agent reasoning (intent categorization, vector search logs, fact validation, and reasoning state) before typing answers in real-time.
- **Expertise Hover-Reveal:** A curriculum grid displaying skill categories that cross-fades text descriptions to customized high-resolution gold/amber theme illustrations upon hovering.
- **Project Archives:** A 4-column grayscale-to-color transition grid displaying custom projects.
- **Dynamic Routing:** Built-in client-side routing using React Router DOM for detailed capability sub-pages.
- **Functional Social Profiles:** Fully wired connect links for email, phone, GitHub, LinkedIn, and LeetCode.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite 7
- **Styling:** Tailwind CSS 3.4
- **Animations:** GSAP 3 (ScrollTrigger effects), Canvas API (Digital Rain), CSS keyframes
- **Routing:** React Router DOM 7
- **Icons:** Lucide React
- **Asset Rendering:** Custom AI-generated amber-gold tech thematic illustrations

---

## 📂 Project Structure

```
app/
├── public/
│   ├── images/
│   │   ├── capability-1.jpg    # Web Development (glow workspace)
│   │   ├── capability-2.jpg    # Mobile App Dev (amber phone mockup)
│   │   ├── capability-3.jpg    # AI & Automation (complex neural grid)
│   │   ├── capability-4.jpg    # UI/UX & Analytics (figma dashboard wireframe)
│   │   ├── research-1.jpg      # Brain Tumor Detection (glowing MRI scan)
│   │   ├── research-2.jpg      # AR Style Fashion Fitting (body tracking overlay)
│   │   ├── research-3.jpg      # IoT Smart Gateway (abstract gateway circuit)
│   │   └── research-4.jpg      # Full-Stack Enterprise Portal (database connections)
│   └── videos/
│       └── cinematic-vision.mp4 # Looping ultrawide background video
└── src/
    ├── config.ts               # Custom resume content & links configuration
    ├── App.tsx                  # Core router and HomePage layout
    ├── index.css                # Global base classes, Geist Mono fonts, animations
    ├── components/
    │   ├── CognitiveAssistant.tsx # Custom Simulated AI reasoning console
    │   ├── LiquidGlassButton.tsx  # SVG-displacement glass refraction button
    │   └── ui/                    # Radix / shadcn UI primitive components
    └── sections/
        ├── Navigation.tsx       # Scrolling navigation bar
        ├── Hero.tsx             # Canvas hero section
        ├── AmberCascades.tsx    # Canvas digital rain calculations
        ├── Curriculum.tsx       # Capabilities hover-reveal grid
        ├── CinematicVision.tsx  # Looping video architecture description
        ├── AlumniArchives.tsx   # Research project showcase
        └── Footer.tsx           # Contact & profile connect menu
```

---

## 🚀 Quick Start

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Launch Dev Server:**
   ```bash
   npm run dev
   ```
3. **Build for Production:**
   ```bash
   npm run build
   ```
   *The optimized static assets will compile into the `dist/` directory, ready to be hosted on Vercel, Netlify, or GitHub Pages.*

---

## 🧠 Cognitive Assistant Logic

The **Cognitive Resume Assistant** component (`src/components/CognitiveAssistant.tsx`) is designed to showcase "human-like thinking" workflows:
1. **Query Input:** Receives text query (or quick-select button trigger).
2. **Intent Parsing:** Maps the prompt keywords to resume domains (e.g. *Skylena, Brain Tumor, AR Fitting, Skill Stack, Education*).
3. **Reasoning Pipeline Logs:** Prints sequential logs displaying the steps taken to process the query:
   - `Decomposing query and mapping user intent...`
   - `Retrieving semantic blocks from Pugalarasan's resume vector space...`
   - `Validating facts: checking Skylena, projects, and academic parameters...`
   - `Synthesizing answer structure with a human tone...`
4. **Typewriter Printout:** Outputs the final response character-by-character with a blinking cursor effect.
