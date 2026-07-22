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
    "Tell me about your AI Crop Market Analyzer project.",
    "Tell me about your Skylena internship.",
    "Explain the CyberShield AI threat detection suite.",
    "Explain the Brain Tumor Detection MRI project.",
    "What are your core technical skills and tools?",
    "What are your academic credentials (college, CGPA)?"
  ];

  const steps: ThinkingStep[] = [
    { label: "Decomposing query and mapping user intent...", delay: 600, icon: <Search className="w-4 h-4 text-amber-400" /> },
    { label: "Retrieving semantic blocks from Pugalarasan's vector memory...", delay: 700, icon: <Database className="w-4 h-4 text-amber-400" /> },
    { label: "Validating facts against repository parameters & ground truth...", delay: 800, icon: <Cpu className="w-4 h-4 text-amber-400" /> },
    { label: "Synthesizing humanized, structured answer...", delay: 500, icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
  ];

  const getResponse = (q: string): string => {
    const normalized = q.toLowerCase();
    
    if (normalized.includes('psg') || normalized.includes('9.5')) {
      return "Fact-check verified! Here are my exact academic details:\n\n" +
             "• **College**: **Dr. N.G.P. Institute of Technology, Coimbatore** (2023 - Present)\n" +
             "• **Degree & Branch**: **B.E. Computer Science and Engineering (CSE)**\n" +
             "• **Cumulative CGPA**: **7.54 / 10**\n" +
             "• **High School**: **Government Higher Secondary School, Krishnagiri** (HSC Score: **68.8%**)";
    }

    if (normalized.includes('market') || normalized.includes('crop') || normalized.includes('agri') || normalized.includes('analyzer') || normalized.includes('agrovision') || normalized.includes('agripredict')) {
      return "The **AI Crop Market Analyzer (AgriPredict Pro)** is an end-to-end explainable AI platform designed to predict crop prices and optimize sell timing for farmers:\n\n" +
             "• **Machine Learning Engine**: Evaluates 6 algorithms (**LSTM Neural Networks**, **XGBoost**, **Random Forest**, Decision Trees, Linear Regression, and a Hybrid Model) to achieve the lowest RMSE price forecast.\n" +
             "• **SHAP Feature Explainability**: Integrates **SHAP (SHapley Additive exPlanations)** to quantify the financial impact (+ / - ₹/quintal) of weather variables (rainfall, humidity, temperature) on future prices.\n" +
             "• **Backend & Database**: Built with **Python FastAPI**, **Uvicorn**, and a **SQLite Star-Schema Data Warehouse** (`agripredict.db`).\n" +
             "• **Frontend Dashboard**: Developed using **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Chart.js** for real-time trend visualization.\n" +
             "• **GitHub Repository**: **github.com/PUGAL3105/AI-Crop-Market-Analyzer**";
    }

    if (normalized.includes('about you') || normalized.includes('about me') || normalized.includes('who are you') || normalized.includes('yourself') || normalized.includes('profile')) {
      return "Hi! I am **Pugalarasan A**, a passionate **Computer Science Engineering Student** at **Dr. N.G.P. Institute of Technology, Coimbatore** (CGPA: **7.54**).\n\n" +
             "I specialize in bridging machine learning algorithms with full-stack web and mobile applications:\n" +
             "• **AI / ML & Automation**: Building predictive models (**LSTM**, **XGBoost**, **Random Forest**), XAI (**SHAP**), and automated workflow pipelines (**n8n**, **Google AI Studio**).\n" +
             "• **Full Stack & Web Dev**: Crafting modern web applications with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Node.js/Express**, and **FastAPI**.\n" +
             "• **Mobile Development**: Creating cross-platform mobile apps using **Flutter (Dart)**.\n" +
             "• **Computer Vision & Security**: Building MRI segmentation pipelines (**Watershed Algorithm**), pose tracking (**MediaPipe**, **OpenCV**), and threat detection suites (**CyberShield AI**).\n\n" +
             "I recently completed a Web Application Development internship at **Skylena Info Technology Pvt. Ltd.** in 2025.";
    }

    if (normalized.includes('skylena') || normalized.includes('intern') || normalized.includes('work') || normalized.includes('experience')) {
      return "During my **Web Application Development Internship** at **Skylena Info Technology Pvt. Ltd.** (2025), I gained hands-on full-stack development experience:\n\n" +
             "• **Production Features**: Engineered responsive web interfaces using HTML, CSS, JavaScript, and Node.js APIs.\n" +
             "• **Database Connectivity**: Connected backend REST APIs with database systems to manage dynamic application state.\n" +
             "• **Agile Teamwork**: Collaborated in fast-paced sprint cycles, adhering to clean, modular code practices for easy scalability.";
    }

    if (normalized.includes('tumor') || normalized.includes('brain') || normalized.includes('mri') || normalized.includes('watershed')) {
      return "My **Automated Brain Tumor Detection** project (2026) assists radiologists in early medical diagnosis:\n\n" +
             "• **Image Preprocessing**: Applied **CLAHE contrast enhancement** and **Gaussian noise filters** to raw brain MRI scans.\n" +
             "• **Watershed Segmentation**: Clustering algorithm to isolate tumor boundaries with high pixel-level accuracy.\n" +
             "• **ML Classification**: Extracted geometric and texture features for **SVM (RBF Kernel)** and **Random Forest** models, achieving **87%+ classification confidence**.\n" +
             "• **GitHub Repository**: **github.com/PUGAL3105/Automated-Brain-Tumor-Detection-using-MRI-imaging**";
    }

    if (normalized.includes('ar') || normalized.includes('fashion') || normalized.includes('fitting') || normalized.includes('virtual')) {
      return "My **AR Style Fashion Fitting** project (2025) brings virtual clothing try-ons to mobile shopping:\n\n" +
             "• **Real-Time Pose Tracking**: Integrated **MediaPipe BlazePose** to detect 17 skeletal body joints at **30fps**.\n" +
             "• **OpenCV Garment Overlay**: Applied affine transformations to scale, rotate, and warp 2D garment meshes dynamically onto camera feeds.\n" +
             "• **Flutter App**: Built a smooth cross-platform mobile UI in **Flutter (Dart)** with drag, pinch-to-scale, and rotation controls.\n" +
             "• **GitHub Repository**: **github.com/PUGAL3105/AR-Style-Fashion-Fitting**";
    }

    if (normalized.includes('cybershield') || normalized.includes('shield') || normalized.includes('security') || normalized.includes('threat')) {
      return "The **CyberShield AI Suite** (2026) is a multi-tier threat detection and security analytics platform:\n\n" +
             "• **ML Inference (FastAPI)**: Evaluates 20 network flow attributes using a **Random Forest Classifier** to detect 6 threat categories with **97.8% accuracy**.\n" +
             "• **Backend API (Node.js/Express)**: Logs incident alerts into a **SQLite database** (`cybershield.db`) and maps events to MITRE ATT&CK techniques.\n" +
             "• **Analyst Dashboard (React)**: Interactive alert timelines with automated containment switches (IP blocks, MFA locks, host isolation).\n" +
             "• **GitHub Repository**: **github.com/PUGAL3105/CyberShiedAi-**";
    }

    if (normalized.includes('ats') || normalized.includes('resume analyser') || normalized.includes('ocr')) {
      return "The **AI Resume Analyser & ATS Score Checker** (2026) streamlines candidate screening:\n\n" +
             "• **Multi-Format Parsing**: Extracts structured text from PDF, DOCX, and TXT files.\n" +
             "• **Computer Vision OCR**: Uses **OpenCV** thresholding and **Tesseract OCR** to extract text from non-searchable scanned PDFs.\n" +
             "• **NLP Scoring Engine**: Evaluates TF-IDF cosine similarity, keyword coverage, and credential alignment across 7 weighted criteria.\n" +
             "• **GitHub Repository**: **github.com/PUGAL3105/ATS-Resume-Analyser**";
    }

    if (normalized.includes('project') || normalized.includes('projects') || normalized.includes('application') || normalized.includes('system')) {
      return "Here are my key engineering projects:\n\n" +
             "1. **AI Crop Market Analyzer**: Explainable price forecasting (LSTM, XGBoost, SHAP, FastAPI, React).\n" +
             "2. **CyberShield AI Suite**: Multi-layer network threat detection (Random Forest, Node.js, Express, SQLite, React).\n" +
             "3. **Automated Brain Tumor Detection**: MRI computer vision pipeline (CLAHE, Watershed Algorithm, SVM).\n" +
             "4. **AR Style Fashion Fitting**: Real-time virtual try-on mobile app (Flutter, MediaPipe, OpenCV).\n" +
             "5. **AI Resume Analyser**: ATS candidate scoring engine (FastAPI, OpenCV OCR, Tesseract, NLP).\n\n" +
             "All repositories are accessible on my GitHub: **github.com/PUGAL3105**";
    }

    if (normalized.includes('skills') || normalized.includes('stack') || normalized.includes('technologies') || normalized.includes('java') || normalized.includes('flutter') || normalized.includes('python')) {
      return "Here is my core technical stack:\n\n" +
             "• **Programming Languages**: **Java**, **Python**, **JavaScript**, **TypeScript**, **Dart**, **SQL**\n" +
             "• **Frontend & Mobile**: **React.js**, **Vite**, **Flutter**, **HTML5**, **CSS3 / Tailwind CSS**\n" +
             "• **Backend & Databases**: **FastAPI**, **Node.js**, **Express**, **SQLite**, **MySQL**, **SQLAlchemy**\n" +
             "• **AI / ML & Computer Vision**: **LSTM**, **XGBoost**, **scikit-learn**, **SHAP**, **OpenCV**, **MediaPipe**, **n8n**, **Google AI Studio**\n" +
             "• **Engineering Tools**: **VS Code**, **Git / GitHub**, **Docker Compose**, **Figma**, **Power BI**";
    }

    if (normalized.includes('education') || normalized.includes('college') || normalized.includes('school') || normalized.includes('gpa') || normalized.includes('cgpa') || normalized.includes('institute') || normalized.includes('degree') || normalized.includes('branch')) {
      return "Here are my academic credentials:\n\n" +
             "• **Degree**: **Bachelor of Engineering (B.E.)**\n" +
             "• **Branch**: **Computer Science and Engineering (CSE)**\n" +
             "• **College**: **Dr. N.G.P. Institute of Technology, Coimbatore** (2023 - Present)\n" +
             "• **Cumulative CGPA**: **7.54 / 10**\n" +
             "• **Higher Secondary (HSC)**: **Government Higher Secondary School, Krishnagiri** (Class of 2023) - Score: **68.8%**";
    }

    if (normalized.includes('contact') || normalized.includes('email') || normalized.includes('phone') || normalized.includes('linkedin') || normalized.includes('github')) {
      return "Here is how you can connect with me directly:\n\n" +
             "• **Email**: **pugalarasan0310@gmail.com**\n" +
             "• **Phone**: **+91 8220358427**\n" +
             "• **Location**: **Tamil Nadu, India**\n" +
             "• **GitHub**: **github.com/PUGAL3105**\n" +
             "• **LinkedIn**: **linkedin.com/in/pugalarasan-a**\n" +
             "• **LeetCode**: **leetcode.com/u/Pugalarasan-0310/**";
    }

    return "Hello! I am Pugalarasan's Cognitive Twin. Ask me about my AI Crop Market Analyzer, CyberShield AI, Brain Tumor Detection, AR Fashion Fitting, Skylena internship, or technical skills!";
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
          stepLabel = "[CONFLICT DETECTED] Query vs vector cache. Correcting to Dr. N.G.P. IT & CGPA 7.54...";
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
    }, 12);

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
      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
      const lineContent = isBullet ? line.trim().substring(1).trim() : line;
      const parts = lineContent.split('**');

      return (
        <div
          key={idx}
          style={{
            marginBottom: line.trim() ? (isBullet ? 6 : 8) : 10,
            paddingLeft: isBullet ? 18 : 0,
            position: 'relative',
            lineHeight: 1.75,
          }}
        >
          {isBullet && (
            <span
              style={{
                position: 'absolute',
                left: 2,
                top: 0,
                color: '#fbbf24',
                fontWeight: 'bold',
              }}
            >
              •
            </span>
          )}
          {parts.map((part, i) => {
            if (i % 2 === 1) {
              return (
                <strong
                  key={i}
                  style={{
                    fontWeight: 600,
                    color: '#fbbf24',
                    textShadow: '0 0 10px rgba(251, 191, 36, 0.25)',
                    padding: '0 2px',
                  }}
                >
                  {part}
                </strong>
              );
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
