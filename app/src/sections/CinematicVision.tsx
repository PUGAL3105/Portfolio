import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface Project {
  num: string;
  tag: string;
  year: string;
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  highlights: string[];
  architecture: { label: string; value: string }[];
  tech: string[];
  image: string;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    tag: 'AI · Full Stack',
    year: '2026',
    slug: 'cybershield-ai',
    title: 'CyberShield AI Suite',
    subtitle: 'Intelligent Multi-Layer Threat Detection & Real-Time Response System',
    overview:
      'A full-stack cybersecurity platform built with a three-tier microservices architecture. The system analyses live network traffic using a Random Forest Classifier trained on 20 precise network flow attributes — detecting and classifying threats in milliseconds with MITRE ATT&CK technique mapping.',
    highlights: [
      'Random Forest model trained on 20 network flow metrics: Flow Duration, Fwd/Bwd Packets, Packet Length Mean, IAT time, Header Lengths, and more',
      'Classifies threats into 6 categories: BENIGN, BRUTE_FORCE, DDOS, MALWARE, SUSPICIOUS_IP, UNAUTHORIZED_ACCESS',
      'Automated containment: firewall IP blocklist, MFA trigger, host isolation — all fired from API endpoints',
      'React + Tailwind dashboard with live alert timelines, comparative bar charts, and security analyst action buttons',
      'All 3 services (ML on port 8000, Express on 3001, React on 5173) orchestrated via PowerShell run_project.ps1',
    ],
    architecture: [
      { label: 'ML Service', value: 'Python · FastAPI · port 8000' },
      { label: 'Backend API', value: 'Node.js · Express · SQLite' },
      { label: 'Frontend', value: 'React · Tailwind · port 5173' },
      { label: 'Database', value: 'cybershield.db (SQLite)' },
    ],
    tech: ['Python', 'FastAPI', 'Random Forest', 'Node.js', 'Express', 'React', 'Tailwind', 'SQLite', 'MITRE ATT&CK'],
    image: 'images/research-4.jpg',
    accent: 'rgba(239,68,68,0.15)',
  },
  {
    num: '02',
    tag: 'AI · Mobile App · ML',
    year: '2026',
    slug: 'brain-tumor-detection',
    title: 'Brain Tumor Detection',
    subtitle: 'Automated MRI Segmentation & Computer-Aided Diagnostic System',
    overview:
      'Developed an automated brain tumor detection system using MRI scans with image preprocessing and segmentation techniques. Implemented the Watershed Algorithm for accurate tumor region extraction. Applied machine learning methods to improve classification accuracy and support early medical diagnosis.',
    highlights: [
      'Preprocessing pipeline: skull stripping → CLAHE contrast enhancement → Gaussian noise removal → intensity normalization',
      'Watershed Segmentation Algorithm calculates topological gradients to isolate tumour tissue boundaries pixel-by-pixel',
      'Feature extraction: area, perimeter, circularity, texture indices from segmented tumour regions',
      'SVM and Random Forest ensemble classifiers distinguish benign vs malignant with 87%+ confidence score',
      'Streamlit web interface for MRI upload, live scan-line preview, and step-by-step diagnostic output',
    ],
    architecture: [
      { label: 'Preprocessing', value: 'OpenCV · NumPy · CLAHE' },
      { label: 'Segmentation', value: 'Watershed Algorithm' },
      { label: 'Classifier', value: 'SVM + Random Forest' },
      { label: 'Interface', value: 'Streamlit · Python' },
    ],
    tech: ['Python', 'OpenCV', 'NumPy', 'SVM', 'Random Forest', 'CLAHE', 'Watershed', 'Streamlit'],
    image: 'images/research-1.jpg',
    accent: 'rgba(59,130,246,0.15)',
  },
  {
    num: '03',
    tag: 'Mobile Application Development · Flutter',
    year: '2025',
    slug: 'ar-fashion-fitting',
    title: 'AR Style Fashion Fitting',
    subtitle: 'Holographic Virtual Try-On via Real-Time Body Tracking',
    overview:
      'Developed an AR-based virtual fashion fitting system that allows users to try on outfits in real time using camera-based body tracking. Integrated augmented reality and computer vision techniques to overlay clothing accurately. Enhanced online shopping experience by improving size prediction, reducing returns, and increasing customer engagement.',
    highlights: [
      'MediaPipe Pose Detection tracks 17 skeletal landmarks: shoulders, elbows, wrists, hips, knees in real-time',
      'OpenCV contour mapping scales garment mesh to match user body proportions dynamically with rotation/resize/drag',
      'Flutter mobile framework provides cross-platform iOS & Android with Dart camera stream integration',
      'Outfit switching between multiple garment assets without re-uploading — built-in wardrobe carousel',
      'Download final composed image with overlay baked in — reduces e-commerce return rates by improving size confidence',
    ],
    architecture: [
      { label: 'Body Tracking', value: 'MediaPipe · 17 landmarks' },
      { label: 'CV Pipeline', value: 'OpenCV · Contour Mapping' },
      { label: 'Mobile App', value: 'Flutter · Dart' },
      { label: 'Backend', value: 'Python · REST API' },
    ],
    tech: ['Flutter', 'Dart', 'Python', 'MediaPipe', 'OpenCV', 'JavaScript', 'HTML', 'CSS'],
    image: 'images/research-2.jpg',
    accent: 'rgba(168,85,247,0.15)',
  },
  {
    num: '04',
    tag: 'Web Development · AI · Full Stack',
    year: '2026',
    slug: 'developer-portfolio',
    title: 'Cognitive Developer Portfolio',
    subtitle: 'Premium Portfolio with Simulated Agentic AI Reasoning Terminal',
    overview:
      'This portfolio website — built with React 19, TypeScript, and Vite 7 — showcases projects through a premium dark-mode interface with custom canvas animations, SVG liquid-glass button refractions, and a simulated AI reasoning terminal that answers HR and interview questions using resume data.',
    highlights: [
      'Custom Canvas falling-rain digital waterfall with dynamic ripple rings triggered by mouse click interactions',
      'SVG liquid-glass refractions in the navigation buttons — turbulence filter applied as real-time displacement map',
      'Cognitive Resume Assistant terminal with 4-step visible reasoning: intent mapping → vector retrieval → fact checking → synthesis',
      'Dynamic React Router sub-routing for /capability/:slug and /project/:slug — smooth scroll-restoration on all routes',
      'Self-correcting Cognitive Twin: detects factual mismatches in queries and logs [CONFLICT DETECTED] with corrected facts',
    ],
    architecture: [
      { label: 'Frontend', value: 'React 19 · TypeScript · Vite 7' },
      { label: 'Animation', value: 'GSAP · Canvas API · SVG Filters' },
      { label: 'Routing', value: 'React Router DOM' },
      { label: 'AI Twin', value: 'CognitiveAssistant.tsx' },
    ],
    tech: ['React 19', 'TypeScript', 'Vite 7', 'GSAP', 'Canvas API', 'SVG', 'React Router', 'Tailwind'],
    image: 'images/research-3.jpg',
    accent: 'rgba(251,191,36,0.12)',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.set(el, { opacity: 0, y: 50 });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.to(el, { opacity: 1, y: 0, duration: 1, delay: (index % 2) * 0.2, ease: 'power3.out' });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 3,
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)'}`,
        background: '#0c0c0c',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        boxShadow: hovered ? '0 24px 80px rgba(0,0,0,0.5)' : '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${project.accent.replace('0.15', '0.8')}, transparent)` }} />

      {/* Image + number header */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'grayscale(60%) brightness(0.4)',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.6s ease, filter 0.6s ease',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, ${project.accent} 0%, rgba(12,12,12,0.95) 100%)`,
        }} />
        <div style={{
          position: 'absolute', top: 20, left: 24,
          fontFamily: "'EB Garamond', serif",
          fontSize: 80, fontWeight: 400,
          color: 'rgba(255,255,255,0.07)',
          lineHeight: 1, letterSpacing: -3,
        }}>{project.num}</div>
        <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', gap: 8 }}>
          <span style={{
            padding: '4px 12px', borderRadius: 2, fontSize: 10,
            letterSpacing: '2px', textTransform: 'uppercase',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.5)',
          }}>{project.tag}</span>
          <span style={{
            padding: '4px 10px', borderRadius: 2, fontSize: 10,
            letterSpacing: '2px', color: 'rgba(255,255,255,0.3)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>{project.year}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24 }}>
          <h3 style={{
            fontFamily: "'EB Garamond', serif", fontWeight: 400,
            fontSize: 30, color: '#fff', letterSpacing: '-0.5px',
            margin: '0 0 4px 0', lineHeight: 1.2,
          }}>{project.title}</h3>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 300,
            fontSize: 12, color: 'rgba(255,255,255,0.45)',
            margin: 0, lineHeight: 1.5,
          }}>{project.subtitle}</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '28px 28px 0' }}>
        {/* Overview */}
        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 300,
          fontSize: 13, lineHeight: 1.9, color: 'rgba(218,218,218,0.55)',
          marginBottom: 24,
        }}>{project.overview}</p>

        {/* Architecture mini-table */}
        <div style={{
          marginBottom: 24, padding: '16px 20px',
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.05)', borderRadius: 2,
        }}>
          <div style={{
            fontFamily: "'GeistMono', monospace", fontSize: 9,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(218,218,218,0.25)', marginBottom: 12,
          }}>Architecture</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
            {project.architecture.map((a) => (
              <div key={a.label}>
                <div style={{ fontFamily: "'GeistMono', monospace", fontSize: 9, letterSpacing: '1.5px', color: 'rgba(218,218,218,0.3)', textTransform: 'uppercase', marginBottom: 3 }}>{a.label}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>{a.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            fontFamily: "'GeistMono', monospace", fontSize: 9,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(218,218,218,0.25)', marginBottom: 12,
          }}>Key Highlights</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {project.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, marginTop: 5,
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'rgba(218,218,218,0.3)',
                  display: 'inline-block',
                }} />
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 300,
                  fontSize: 12, color: 'rgba(218,218,218,0.5)', lineHeight: 1.7,
                }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech stack footer */}
      <div style={{
        padding: '16px 28px 20px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', flex: 1 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: 2, fontSize: 10,
              letterSpacing: '1px', textTransform: 'uppercase',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(218,218,218,0.4)',
            }}>{t}</span>
          ))}
        </div>
        <button
          onClick={() => { navigate(`/project/${project.slug}`); window.scrollTo(0, 0); }}
          style={{
            flexShrink: 0, marginLeft: 16,
            padding: '8px 20px', borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'transparent', color: 'rgba(255,255,255,0.45)',
            fontFamily: "'GeistMono', monospace", fontSize: 10,
            letterSpacing: '2px', textTransform: 'uppercase',
            cursor: 'pointer', whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)';
            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.45)';
          }}
        >
          Read More →
        </button>
      </div>
    </div>
  );
}

// ─── 3D Interactive Showcase Card with Canvas Particles Background ───────────
function Showcase3DButton() {
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 8;
    const angleY = (x - xc) / 8;
    setRotate({ x: angleX, y: angleY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setHovered(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth || 300);
    let height = (canvas.height = canvas.offsetHeight || 60);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Rotating 3D nodes
    interface Node3D {
      x: number;
      y: number;
      z: number;
    }
    const nodes: Node3D[] = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 350,
      y: (Math.random() - 0.5) * 180,
      z: (Math.random() - 0.5) * 350,
    }));

    let rotationAngle = 0.003;
    const fov = 200;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid overlay
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 16;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const cos = Math.cos(rotationAngle);
      const sin = Math.sin(rotationAngle);

      nodes.forEach((n) => {
        // Rotate around Y axis
        const rx = n.x * cos - n.z * sin;
        const rz = n.z * cos + n.x * sin;
        n.x = rx;
        n.z = rz;

        // Project
        const scale = fov / (fov + n.z);
        const projX = n.x * scale + width / 2;
        const projY = n.y * scale + height / 2;

        const size = Math.max(0.6, scale * 1.8);
        ctx.fillStyle = hovered 
          ? `rgba(96, 165, 250, ${Math.max(0.15, Math.min(scale - 0.4, 0.8))})`
          : `rgba(255, 255, 255, ${Math.max(0.08, Math.min((scale - 0.5) * 0.5, 0.4))})`;
        ctx.beginPath();
        ctx.arc(projX, projY, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      onClick={() => window.open('/showcase-video.html', '_blank')}
      style={{
        position: 'relative',
        cursor: 'pointer',
        padding: '12px 24px',
        borderRadius: 3,
        background: hovered ? 'rgba(59, 130, 246, 0.07)' : 'rgba(255, 255, 255, 0.01)',
        border: hovered ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)',
        transition: 'background 0.3s, border-color 0.3s, transform 0.1s ease',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${hovered ? 1.025 : 1})`,
        transformStyle: 'preserve-3d',
        boxShadow: hovered ? '0 12px 30px rgba(59, 130, 246, 0.15)' : 'none',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 240,
        height: 48,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        transform: 'translateZ(15px)',
      }}>
        <span style={{
          color: hovered ? '#60a5fa' : 'rgba(218, 218, 218, 0.5)',
          fontSize: 9,
          transition: 'color 0.3s',
        }}>▶</span>
        <span style={{
          fontFamily: "'GeistMono', monospace",
          fontSize: 9,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: hovered ? '#fff' : 'rgba(218, 218, 218, 0.5)',
          transition: 'color 0.3s',
        }}>
          Watch Cinematic Showcase
        </span>
      </div>
    </div>
  );
}

export default function CinematicVision() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    gsap.set(el, { opacity: 0, y: 30 });
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="showcase"
      style={{
        padding: '120px 5vw 100px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, fontWeight: 300,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: '#dadada', opacity: 0.5, marginBottom: 20,
          }}>
            Project Showcase
          </div>
          <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 48 }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div style={{ maxWidth: 540 }}>
              <h2 style={{
                fontFamily: "'EB Garamond', serif", fontWeight: 400,
                fontSize: 'clamp(28px, 3.2vw, 44px)',
                lineHeight: 1.15, letterSpacing: '-1px',
                color: '#ffffff', margin: '0 0 12px 0',
              }}>
                Projects — In Depth
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 200,
                fontSize: 14, lineHeight: 1.7,
                color: 'rgba(218,218,218,0.45)', margin: 0,
              }}>
                Each project is built end-to-end with a clear architecture, real datasets, and production-ready tooling.
                Click any project to read the complete technical breakdown.
              </p>
            </div>

            {/* Watch showcase 3D button */}
            <Showcase3DButton />
          </div>
        </div>

        {/* 2-column project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(580px, 1fr))',
          gap: 28,
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Bottom divider note */}
        <div style={{
          marginTop: 56,
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <span style={{
            fontFamily: "'GeistMono', monospace", fontSize: 9,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(218,218,218,0.15)',
          }}>4 Projects · 2025 – 2026</span>
          <span style={{
            fontFamily: "'GeistMono', monospace", fontSize: 9,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(218,218,218,0.15)',
          }}>Click any card → Full Breakdown</span>
        </div>
      </div>
    </section>
  );
}

