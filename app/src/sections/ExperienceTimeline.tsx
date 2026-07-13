import React, { useState } from 'react';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education' | 'certification';
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
}

export default function ExperienceTimeline() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items: TimelineItem[] = [
    {
      type: 'work',
      title: 'Web Application Developer Intern',
      subtitle: 'Skylena Info Technology Pvt. Ltd.',
      date: '2025',
      description: [
        'Developed dynamic, fully responsive web applications from scratch.',
        'Built backend REST APIs with Node.js and Express, implementing database integration.',
        'Collaborated closely in an agile development team to deliver modular, clean, and reusable frontend components.',
      ],
      icon: <Briefcase className="w-4 h-4 text-[#c8aa82]" />,
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering (B.E. CSE)',
      subtitle: 'Dr. N.G.P. Institute of Technology, Coimbatore',
      date: '2023 - Present',
      description: [
        'Specializing in Computer Science and Engineering with a focus on AI, full-stack architectures, and computer vision.',
        'Current Cumulative CGPA: 7.54 / 10',
        'Relevant coursework: Machine Learning, Database Management, Data Structures, Software Engineering.',
      ],
      icon: <GraduationCap className="w-4 h-4 text-[#c8aa82]" />,
    },
    {
      type: 'education',
      title: 'Higher Secondary School Certificate (HSC)',
      subtitle: 'Government Higher Secondary School, Krishnagiri',
      date: 'Graduated 2023',
      description: [
        'Completed class XII exams with a score of 68.8%.',
        'Major focus in Physics, Chemistry, and Mathematics.',
      ],
      icon: <GraduationCap className="w-4 h-4 text-[#c8aa82]" />,
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: '120px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
              marginBottom: 16,
            }}
          >
            Chronology
          </div>
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 56px)',
              color: '#ffffff',
              letterSpacing: '-1.5px',
              margin: 0,
            }}
          >
            Experience &amp; Education
          </h2>
        </div>

        {/* Timeline wrapper */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical line indicator */}
          <div
            style={{
              position: 'absolute',
              left: 11,
              top: 8,
              bottom: 8,
              width: 1,
              background: 'linear-gradient(180deg, rgba(200, 170, 130, 0.25) 0%, rgba(255,255,255,0.02) 100%)',
            }}
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {items.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: 'relative',
                  transition: 'transform 0.4s ease',
                  transform: hoveredIdx === idx ? 'translateX(6px)' : 'translateX(0)',
                }}
              >
                {/* Node icon connector */}
                <div
                  style={{
                    position: 'absolute',
                    left: -32,
                    top: 4,
                    transform: 'translateX(-50%)',
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: '#0a0a0a',
                    border: hoveredIdx === idx ? '1px solid rgba(200, 170, 130, 0.8)' : '1px solid rgba(255,255,255,0.12)',
                    boxShadow: hoveredIdx === idx ? '0 0 12px rgba(200, 170, 130, 0.3)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    transition: 'all 0.4s ease',
                  }}
                >
                  {item.icon}
                </div>

                {/* Info Card */}
                <div
                  style={{
                    padding: '24px 28px',
                    borderRadius: 3,
                    border: hoveredIdx === idx ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.06)',
                    background: hoveredIdx === idx ? 'rgba(255,255,255,0.02)' : 'rgba(12,12,12,0.4)',
                    boxShadow: hoveredIdx === idx ? '0 12px 32px rgba(0,0,0,0.4)' : 'none',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          fontSize: 18,
                          color: '#ffffff',
                          margin: '0 0 4px 0',
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                          fontSize: 13,
                          color: 'rgba(200, 170, 130, 0.95)',
                        }}
                      >
                        {item.subtitle}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        fontFamily: "'GeistMono', monospace",
                        fontSize: 11,
                        color: 'rgba(255,255,255,0.45)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '4px 10px',
                        borderRadius: 2,
                      }}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    {item.description.map((desc, dIdx) => (
                      <li
                        key={dIdx}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 200,
                          fontSize: 13.5,
                          lineHeight: 1.6,
                          color: '#dadada',
                        }}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
