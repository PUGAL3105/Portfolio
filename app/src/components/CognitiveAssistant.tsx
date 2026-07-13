import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Send, Cpu, Sparkles, CheckCircle, Search, Database } from 'lucide-react';

interface ThinkingStep {
  label: string;
  delay: number;
  icon: React.ReactNode;
}

export default function CognitiveAssistant() {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingSteps, setThinkingSteps] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const SUGGESTIONS = [
    "Tell me about your Skylena internship.",
    "Explain the Brain Tumor Detection project.",
    "What is your technical skill stack?",
    "What is your degree, branch, CGPA, and academic details?",
    "Tell me about the AR Fashion Fitting project."
  ];

  const steps: ThinkingStep[] = [
    { label: "Decomposing query and mapping user intent...", delay: 600, icon: <Search className="w-4 h-4 text-amber-400" /> },
    { label: "Retrieving semantic blocks from Pugalarasan's resume vector space...", delay: 700, icon: <Database className="w-4 h-4 text-amber-400" /> },
    { label: "Validating facts: checking Skylena, projects, and academic parameters...", delay: 800, icon: <Cpu className="w-4 h-4 text-amber-400" /> },
    { label: "Synthesizing answer structure with a human tone...", delay: 500, icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
  ];

  const getResponse = (q: string): string => {
    const normalized = q.toLowerCase();
    
    if (normalized.includes('psg') || normalized.includes('9.5')) {
      return "Actually, let me correct those details for you:\n\n• **My College**: I am pursuing my BE in Computer Science and Engineering at **Dr. N.G.P. Institute of Technology, Coimbatore** (2023 - Present).\n• **My CGPA**: My actual cumulative CGPA is **7.54**.\n• **My High School**: I graduated from Government Higher Secondary School, Krishnagiri in 2023 with an HSC score of **68.8%**.\n\nFact-checking is a core engineering practice I follow, so I always make sure database variables match reality!";
    }
    if (normalized.includes('about you') || normalized.includes('about me') || normalized.includes('who are you') || normalized.includes('yourself') || normalized.includes('profile')) {
      return "I am Pugalarasan A, a dedicated and focused **Computer Science Engineering Student** pursuing my B.E. at **Dr. N.G.P. Institute of Technology, Coimbatore** (2023 - Present). I have a strong passion for learning and growth, with a current CGPA of **7.54**.\n\nMy core areas of interest and technical expertise lie across:\n• **AI / ML & Automation**: Designing prompt frameworks (Google AI Studio, Antigravity) and building pipelines (n8n).\n• **Full Stack & Web Dev**: Engineering responsive web platforms (HTML, CSS, JS) with Express/Node.js backend, database connectivity, and Flutter mobile apps.\n• **Computer Vision**: Building image processing pipelines, segmentation algorithms (Otsu threshold, Watershed), and skeletal tracking (MediaPipe, OpenCV).\n• **Cybersecurity**: Researching and developing intrusion detection tools like the CyberShield AI Suite.\n\nI recently completed a Web Application Development internship at **Skylena Info Technology Pvt. Ltd.** in 2025, where I worked on real-time full-stack projects. I am always eager to apply my skills to build high-quality digital products!";
    }
    if (normalized.includes('skylena') || normalized.includes('intern') || normalized.includes('work') || normalized.includes('experience')) {
      return "During my Web Application Development internship at Skylena Info Technology Pvt. Ltd. in 2025, I got my hands dirty building responsive, dynamic web applications from scratch. I worked on actual production-level features using frontend frameworks, Node.js APIs, and database integrations. I collaborated closely in an agile team, which really sharpened my problem-solving skills and taught me how to deliver high-quality code under fast-paced timelines.";
    }
    if (normalized.includes('tumor') || normalized.includes('brain') || normalized.includes('mri') || normalized.includes('watershed')) {
      return "For my Automated Brain Tumor Detection project (2026), I built a computer vision pipeline to analyze MRI brain scans. I used CLAHE for contrast enhancement, Gaussian filters to clear out noise, and then applied the Watershed Segmentation algorithm to isolate tumor boundaries with high pixel-level accuracy. After that, I extracted geometric and texture features to feed into SVM and Random Forest classifiers, achieving an 87%+ confidence score to help radiologists make faster, more reliable early diagnoses.";
    }
    if (normalized.includes('ar') || normalized.includes('fashion') || normalized.includes('fitting') || normalized.includes('virtual')) {
      return "My AR Style Fashion Fitting project (2025) was inspired by the high return rates in e-commerce. I wanted to let users try on outfits virtually right from their camera feed. I used MediaPipe BlazePose to track 17 skeletal joints in real-time, then mapped OpenCV coordinates to warp and overlay 2D garment meshes dynamically onto the user's frame. Building the cross-platform frontend in Flutter with rotation, drag, and scale gestures made the experience feel smooth and interactive.";
    }
    if (normalized.includes('portfolio') || normalized.includes('developer-portfolio') || normalized.includes('website') || normalized.includes('current')) {
      return "This is my Cognitive Developer Portfolio (2026)! I built it using React 19, TypeScript, and Vite 7. I wanted the visuals to feel premium, so I wrote custom Canvas digital waterfall rain with mouse click ripples and applied SVG liquid-glass displacement filters for the navbar. The chatbot you're using right now is a custom intent-mapped terminal designed to showcase my resume facts with a clean visible reasoning workflow.";
    }
    if (normalized.includes('cybershield') || normalized.includes('shield') || normalized.includes('security') || normalized.includes('threat')) {
      return "I designed the CyberShield AI Suite (2026) as an end-to-end multi-layer threat detection framework. It consists of three tiers:\n\n1. **ML Inference Service (Python & FastAPI)**: Runs a Random Forest Classifier trained on 20 network flow features (like flow duration, IAT, packet lengths) to classify traffic into 6 categories (Benign, Brute Force, DDoS, Malware, Suspicious IP, Unauthorized Access) and maps threats to MITRE ATT&CK techniques.\n2. **Backend API (Node.js & SQLite)**: Exposes Express endpoints to log alerts and save incident reports into a SQLite database (`cybershield.db`).\n3. **Frontend Dashboard (React & Tailwind)**: Visualizes real-time metrics, incident timelines, and provides security analyst actions (MFA locks, IP blocks, host isolation).\n\nAll services are orchestrated via a PowerShell startup script (`run_project.ps1`).";
    }
    if (normalized.includes('project') || normalized.includes('projects') || normalized.includes('portfolio') || normalized.includes('application') || normalized.includes('system')) {
      return "I have built several high-impact projects combining machine learning, web/mobile development, and cybersecurity:\n\n1. **CyberShield AI Suite (2026)**: An intelligent multi-layered threat detection framework. Employs a Random Forest model on Python FastAPI to classify network traffic, Express for API logging, SQLite for storage, and React for alert visualization.\n2. **Automated Brain Tumor Detection (2026)**: A medical image processing system that applies preprocessing, the Watershed Algorithm for tumor segmentation, and machine learning classifiers to assist in early diagnosis.\n3. **AR Style Fashion Fitting (2025)**: An interactive virtual shopping app using camera-based body tracking and computer vision to overlay clothes in real-time and predict sizing.\n4. **Cognitive Developer Portfolio (2026)**: A premium portfolio website displaying simulated agentic reasoning workflows, built with React, Vite, Tailwind, and custom Canvas/SVG animations.";
    }
    if (normalized.includes('skills') || normalized.includes('stack') || normalized.includes('technologies') || normalized.includes('java') || normalized.includes('flutter')) {
      return "I specialize in bridging design with development.\n\n" +
             "• **Programming**: I write Java, JavaScript (basics), and Python (basics).\n" +
             "• **Frontend & Mobile**: I build responsive client interfaces using HTML, CSS, JavaScript, and Flutter (Dart).\n" +
             "• **Backend & Databases**: I build robust servers and APIs using Node.js, Express, and FastAPI, integrating database systems like SQLite and MySQL.\n" +
             "• **AI & Automation**: I construct automated workflow pipelines using n8n, Google AI Studio, and Prompt Engineering.\n" +
             "• **UI/UX & Tools**: I design premium user interfaces in Figma and leverage developer tools like VS Code, GitHub, and Power BI for data analysis.";
    }
    if (normalized.includes('education') || normalized.includes('college') || normalized.includes('school') || normalized.includes('gpa') || normalized.includes('cgpa') || normalized.includes('institute') || normalized.includes('degree') || normalized.includes('branch')) {
      return "Here are my academic credentials and details:\n\n• **Degree**: Bachelor of Engineering (BE)\n• **Branch**: Computer Science and Engineering (CSE)\n• **CGPA**: 7.54 / 10\n• **College**: Dr. N.G.P. Institute of Technology, Coimbatore (2023 - Present)\n• **High School**: Government Higher Secondary School, Krishnagiri (Class of 2023) - HSC Score: 68.8%\n\nI am highly focused on applying this academic foundation to build responsive web apps, mobile apps, and automated workflows.";
    }
    if (normalized.includes('contact') || normalized.includes('email') || normalized.includes('phone') || normalized.includes('address') || normalized.includes('linkedin') || normalized.includes('github')) {
      return "Here are my direct contact details:\n\n• **Email**: pugalarasan0310@gmail.com\n• **Phone**: +91 8220358427\n• **Location**: Krishnagiri, Tamil Nadu, India\n• **LinkedIn**: linkedin.com/in/pugalarasan-a\n• **GitHub**: github.com/PUGAL3105\n• **LeetCode**: leetcode.com/Pugalarasan-0310";
    }
    if (normalized.includes('strength') || normalized.includes('personal') || normalized.includes('character')) {
      return "My core strengths include strong Communication, Leadership, Team Management, a Collaborative Spirit, and deep Creativity. I have a passion for continuous learning and absorbing new tools like n8n, prompt engineering, and agentic AI pipelines.";
    }

    return "Hello! I'm Pugalarasan's Cognitive Twin. Ask me anything about my internship at Skylena, my engineering projects (CyberShield, Brain Tumor Detection, AR Fashion Fitting), technical skills, or academic background. I'm here to chat!";
  };

  const handleSearch = (text: string) => {
    if (!text.trim() || isThinking) return;
    
    setIsThinking(true);
    setSubmittedQuery(text);
    setQuery('');
    setAnswer('');
    setDisplayedAnswer('');
    setThinkingSteps([]);
    setActiveStepIndex(-1);

    const isTricky = text.toLowerCase().includes('psg') || text.toLowerCase().includes('9.5');

    let currentStep = 0;
    const runStep = () => {
      if (currentStep < steps.length) {
        setActiveStepIndex(currentStep);
        
        let stepLabel = steps[currentStep].label;
        if (isTricky && currentStep === 2) {
          stepLabel = "[CONFLICT DETECTED] Mismatch: query ('PSG Tech', '9.5') vs vector cache ('Dr. N.G.P.', '7.54'). Self-correcting retrieval...";
        }
        
        setThinkingSteps(prev => [...prev, stepLabel]);
        setTimeout(() => {
          currentStep++;
          runStep();
        }, steps[currentStep].delay);
      } else {
        setIsThinking(false);
        setActiveStepIndex(-1);
        const res = getResponse(text);
        setAnswer(res);
      }
    };
    runStep();
  };

  // Typewriter effect
  useEffect(() => {
    if (!answer) return;
    let index = 0;
    setDisplayedAnswer('');
    
    const interval = setInterval(() => {
      setDisplayedAnswer(prev => prev + answer.charAt(index));
      index++;
      if (index >= answer.length) {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [answer]);

  // Scroll to bottom on updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [thinkingSteps, displayedAnswer, isThinking]);

  const renderFormattedText = (text: string) => {
    let cleanText = text;
    const astCount = (text.match(/\*\*/g) || []).length;
    if (astCount % 2 === 1) {
      cleanText += '**';
    }

    return cleanText.split('\n').map((line, idx) => {
      const parts = line.split('**');
      return (
        <div key={idx} style={{ marginBottom: line.trim() ? 4 : 8 }}>
          {parts.map((part, i) => {
            if (i % 2 === 1) {
              return <strong key={i} style={{ fontWeight: 600, color: '#ffffff' }}>{part}</strong>;
            }
            return part;
          })}
        </div>
      );
    });
  };

  return (
    <section
      id="cognitive-assistant"
      style={{
        padding: '120px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div
          className="mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#dadada',
            opacity: 0.6,
          }}
        >
          COGNITIVE AGENT ASSISTANT
        </div>
        <div
          className="mb-12"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left panel: Info & suggestions */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(24px, 3.2vw, 36px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.75px',
                  color: '#ffffff',
                  marginBottom: 20,
                }}
              >
                Interact with my Cognitive Twin
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: '#dadada',
                  marginBottom: 32,
                }}
              >
                Experience an agent-based resume navigator. This custom simulation replicates human reasoning workflows (intent categorization, entity checking, and semantic validation) to answer queries about Pugalarasan's engineering profile.
              </p>
            </div>

            {/* Quick Prompts */}
            <div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  color: 'rgba(200, 170, 130, 0.9)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                Select a sample cognitive query:
              </span>
              <div className="flex flex-col gap-2">
                {SUGGESTIONS.map((s, idx) => (
                  <button
                    key={idx}
                    disabled={isThinking}
                    onClick={() => {
                      handleSearch(s);
                    }}
                    className="text-left py-2 px-3 rounded text-sm transition-all duration-300 border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-amber-400/20 disabled:opacity-50"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      color: '#dadada',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Terminal console */}
          <div
            className="flex-1 flex flex-col rounded-lg border border-white/10 overflow-hidden"
            style={{
              background: 'rgba(15, 15, 15, 0.7)',
              backdropFilter: 'blur(12px)',
              minHeight: 420,
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Terminal Top bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 12,
                    color: '#dadada',
                    letterSpacing: '0.5px',
                  }}
                >
                  agent_reasoning_core.sh
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-5 overflow-y-auto font-mono text-xs flex flex-col gap-4"
              style={{
                fontFamily: "'GeistMono', monospace",
                lineHeight: 1.6,
                color: '#ececec',
              }}
            >
              {/* Init Message */}
              <div className="text-white/40">
                // System ready. Awaiting user input or quick-select trigger...
              </div>

              {/* Display query */}
              {submittedQuery && (
                <div className="flex items-start gap-2 text-amber-200">
                  <span className="text-amber-400/80">&gt;</span>
                  <span>{submittedQuery}</span>
                </div>
              )}

              {/* Thinking Steps logs */}
              {thinkingSteps.length > 0 && (
                <div className="flex flex-col gap-2 border-l border-amber-400/10 pl-3 py-1">
                  {thinkingSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/50">
                      {idx === activeStepIndex ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      ) : (
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500/70" />
                      )}
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Answer display */}
              {displayedAnswer && (
                <div
                  className="text-[#dadada] bg-white/[0.02] border border-white/5 rounded p-3 mt-2 whitespace-pre-wrap"
                  style={{
                    boxShadow: 'inset 0 1px 10px rgba(0,0,0,0.3)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  {renderFormattedText(displayedAnswer)}
                  {displayedAnswer.length < answer.length && (
                    <span className="inline-block w-1.5 h-4 ml-1 bg-amber-400 animate-pulse align-middle" />
                  )}
                </div>
              )}

              <div ref={terminalEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(query);
              }}
              className="flex items-center gap-2 p-3 border-t border-white/10 bg-black/40"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about my projects, skills, or internship..."
                disabled={isThinking}
                className="flex-1 bg-transparent border-0 outline-none text-white placeholder-white/20 text-xs px-2 py-1"
                style={{
                  fontFamily: "'GeistMono', monospace",
                }}
              />
              <button
                type="submit"
                disabled={isThinking || !query.trim()}
                className="p-1.5 rounded bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border border-amber-400/30 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-amber-400/10"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
