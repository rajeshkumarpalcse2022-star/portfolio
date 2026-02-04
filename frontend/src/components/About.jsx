import React, { useState, useEffect, useRef, useMemo } from 'react';

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const [typingLine, setTypingLine] = useState(-1);
  const [typedText, setTypedText] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const codeContainerRef = useRef(null);
  const animationPhase = useRef(0);
  const charIndex = useRef(0);

  const codeLines = useMemo(() => [
    'members.push_back(name);',
    '',
    'cout << "[NEW MEMBER] \\"" << name',
    '<< " has joined the team.\\"" << endl;',
    '',
    'cout << "[INFO] \\"Total members: "',
    '<< members.size() << "\\"" << endl;',
    '}',
    '',
    'void startCoding() {',
    '  if (!lisActive) {',
    '    cout << "[WARNING] \\"Army is',
    'offline. Cannot start coding.\\"" << endl;',
    '    return;',
    '  }',
    '',
    '  cout << "[SESSION] \\"Coding'
  ], []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Phase 0: Type first line slowly
      if (animationPhase.current === 0) {
        const lineToType = 0;
        setTypingLine(lineToType);
        setActiveLine(lineToType);
        
        if (charIndex.current < codeLines[lineToType].length) {
          setTypedText(codeLines[lineToType].substring(0, charIndex.current + 1));
          charIndex.current++;
        } else {
          // Line complete, pause then move to scroll
          charIndex.current = 0;
          animationPhase.current = 1;
          setTypingLine(-1);
          setTypedText('');
        }
      }
      // Phase 1: Smooth continuous scroll
      else if (animationPhase.current === 1) {
        setScrollPosition((prev) => {
          const maxScroll = codeLines.length * 22;
          const newPos = prev + 0.4;
          
          // Seamless loop - reset when reaching near end
          if (newPos >= maxScroll - 300) {
            animationPhase.current = 0;
            charIndex.current = 0;
            return 0;
          }
          
          // Update active line based on scroll position
          const currentLine = Math.floor((newPos + 220) / 22);
          setActiveLine(Math.min(currentLine, codeLines.length - 1));
          
          return newPos;
        });
      }
    }, animationPhase.current === 0 ? 60 : 25);

    return () => clearInterval(interval);
  }, [isPaused, codeLines]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setIsHovered(false);
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-4 order-2 md:order-1">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm a full-stack web developer with a strong foundation in modern web technologies. 
              My journey into programming started with curiosity and has grown into a genuine passion 
              for creating functional, user-friendly applications.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I've worked on various projects ranging from interactive web applications to AI-powered 
              tools. Each project has taught me something new and helped me improve my skills. I'm 
              particularly interested in building solutions that make a real difference.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              When I'm not coding, I'm usually learning about new frameworks, contributing to open 
              source, or working on side projects. I believe in continuous improvement and staying 
              updated with industry trends.
            </p>
          </div>

          {/* Right - Premium Code Editor Mockup */}
          <div className="order-1 md:order-2">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ 
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                border: '2px solid',
                borderImage: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%) 1',
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.1)'
              }}
            >
              {/* Header with Tabs */}
              <div className="bg-black/40 backdrop-blur-sm px-4 py-3 border-b border-purple-900/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
                  </div>
                  <span className="text-[13px] text-white font-mono font-bold">Rajesh.cpp</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[11px] text-green-400 font-mono font-bold">Live Coding</span>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex gap-6">
                  <button className="text-[12px] text-gray-400 hover:text-white transition-colors font-mono">
                    Article
                  </button>
                  <button className="text-[12px] text-gray-400 hover:text-white transition-colors font-mono">
                    Hackathon
                  </button>
                </div>
              </div>
              
              {/* Code Editor Content */}
              <div 
                ref={codeContainerRef}
                className="relative overflow-hidden bg-black/50"
                style={{ height: '420px' }}
              >
                <div 
                  className="transition-transform ease-linear"
                  style={{ 
                    transform: `translateY(-${scrollPosition}px)`,
                    transitionDuration: '25ms'
                  }}
                >
                  <pre 
                    className="text-[13px] font-mono leading-relaxed p-0 m-0 py-2" 
                    style={{ 
                      fontFamily: "'Fira Code', 'Courier New', monospace",
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {codeLines.map((line, index) => (
                      <div 
                        key={index}
                        className={`flex transition-all duration-300 ${index === activeLine ? 'bg-purple-900/30 border-l-2 border-purple-500' : ''}`}
                        style={{ lineHeight: '24px' }}
                      >
                        {/* Line Number */}
                        <span className="text-gray-600 text-right w-12 px-3 select-none flex-shrink-0">
                          {index + 26}
                        </span>
                        
                        {/* Code Content */}
                        <span 
                          className="text-cyan-300 flex-1 pr-4"
                          dangerouslySetInnerHTML={{ 
                            __html: (index === typingLine ? typedText : line) || '&nbsp;'
                          }} 
                        />
                        
                        {/* Cursor */}
                        {index === typingLine && (
                          <span className="text-yellow-400 font-bold animate-pulse">█</span>
                        )}
                      </div>
                    ))}
                  </pre>
                </div>
                
                {/* Gradient fade effects */}
                <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Minimal Status Bar */}
              <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 px-4 py-1.5 flex items-center justify-between text-[11px] text-cyan-400 font-mono border-t border-purple-800/30">
                <span className="flex items-center gap-2">
                  <span className="text-purple-400">●</span> JavaScript
                </span>
                <span className="text-purple-300">Line {activeLine + 1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;