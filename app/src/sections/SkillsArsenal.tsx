import React, { useState } from 'react';
import { Code, Server, BrainCircuit, Database, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: string; // e.g. "Core" or "Familiar" or "Tools"
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function SkillsArsenal() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code className="w-5 h-5 text-[#c8aa82]" />,
      skills: [
        { name: 'Python', level: 'Core' },
        { name: 'Java', level: 'Core' },
        { name: 'JavaScript', level: 'Core' },
        { name: 'Dart', level: 'Familiar' },
      ],
    },
    {
      title: 'Full Stack & Mobile',
      icon: <Server className="w-5 h-5 text-[#c8aa82]" />,
      skills: [
        { name: 'React.js', level: 'Core' },
        { name: 'FastAPI', level: 'Core' },
        { name: 'Node.js & Express', level: 'Core' },
        { name: 'Flutter', level: 'Familiar' },
        { name: 'HTML & CSS', level: 'Core' },
      ],
    },
    {
      title: 'AI, ML & Computer Vision',
      icon: <BrainCircuit className="w-5 h-5 text-[#c8aa82]" />,
      skills: [
        { name: 'OpenCV', level: 'Core' },
        { name: 'Tesseract OCR', level: 'Core' },
        { name: 'MediaPipe', level: 'Core' },
        { name: 'Scikit-Learn', level: 'Core' },
        { name: 'spaCy & NLTK', level: 'Core' },
        { name: 'NumPy', level: 'Core' },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-[#c8aa82]" />,
      skills: [
        { name: 'SQLite', level: 'Core' },
        { name: 'MySQL', level: 'Core' },
        { name: 'SQLAlchemy', level: 'Core' },
      ],
    },
    {
      title: 'Tools & Automation',
      icon: <Wrench className="w-5 h-5 text-[#c8aa82]" />,
      skills: [
        { name: 'n8n Workflow', level: 'Core' },
        { name: 'Figma', level: 'Familiar' },
        { name: 'Git & GitHub', level: 'Core' },
        { name: 'Vercel', level: 'Core' },
        { name: 'Google AI Studio', level: 'Core' },
      ],
    },
  ];

  return (
    <div style={{ marginTop: 120 }}>
      {/* Header */}
      <div style={{ marginBottom: 50 }}>
        <h3
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 400,
            fontSize: 'clamp(24px, 3vw, 42px)',
            color: '#ffffff',
            letterSpacing: '-1px',
            marginBottom: 12,
          }}
        >
          Technical Arsenal
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 200,
            fontSize: 14,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          A categorized inventory of my core engineering competencies, framework proficiencies, and developer tooling.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(10,10,10,0.3)',
        }}
      >
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              padding: '36px 30px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              borderRight: '1px solid rgba(255, 255, 255, 0.08)',
              background: hoveredCard === idx ? 'rgba(200, 170, 130, 0.025)' : 'transparent',
              transition: 'background 0.4s ease',
            }}
          >
            {/* Header category info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(200, 170, 130, 0.06)',
                  border: '1px solid rgba(200, 170, 130, 0.12)',
                }}
              >
                {cat.icon}
              </div>
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 15,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {cat.title}
              </h4>
            </div>

            {/* List skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      color: 'rgba(218,218,218,0.85)',
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 8,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      color: skill.level === 'Core' ? '#86efac' : '#93c5fd',
                      opacity: 0.65,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
