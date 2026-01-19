import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const currentIndexRef = useRef(0);
  const codeContainerRef = useRef(null);

  const fullCode = `// Full-Stack Developer
const developer = {
  name: "Rajesh Kumar Pal",
  role: "Full-Stack Developer",
  skills: [
    "React", "JavaScript",
    "Node.js", "MongoDB",
    "HTML/CSS", "C++"
  ],
  
  workExperience: () => {
    return {
      frontend: "React.js",
      backend: "FastAPI, Node.js",
      database: "MongoDB",
      tools: "n8n, LLM APIs"
    };
  },
  
  passion: "Building scalable web apps",
  learning: "Always exploring new tech",
  coffee: true
};

export default developer;`;

  useEffect(() => {
    let typingInterval;

    if (!isPaused && currentIndexRef.current < fullCode.length) {
      typingInterval = setInterval(() => {
        if (currentIndexRef.current < fullCode.length) {
          setDisplayedCode(fullCode.substring(0, currentIndexRef.current + 1));
          currentIndexRef.current++;
          
          // Auto-scroll to bottom as code types
          if (codeContainerRef.current && !isHovered) {
            codeContainerRef.current.scrollTop = codeContainerRef.current.scrollHeight;
          }
        } else {
          clearInterval(typingInterval);
        }
      }, 30); // Typing speed - 30ms per character
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [isPaused, fullCode, isHovered]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setIsHovered(false);
  };

  const handleScroll = () => {
    if (!isPaused) {
      setIsPaused(true);
    }
  };

  const renderSyntaxHighlightedCode = (code) => {
    // Simple syntax highlighting
    return code.split('\n').map((line, lineIndex) => {
      let highlightedLine = line;

      // Comments
      if (line.trim().startsWith('//')) {
        return (
          <div key={lineIndex}>
            <span className="text-gray-500">{line}</span>
          </div>
        );
      }

      // Keywords
      const keywords = ['const', 'return', 'export', 'default'];
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlightedLine = highlightedLine.replace(regex, `<span class="text-purple-400">${keyword}</span>`);
      });

      // Strings
      highlightedLine = highlightedLine.replace(/"([^"]*)"/g, '<span class="text-yellow-300">"$1"</span>');

      // Properties
      highlightedLine = highlightedLine.replace(/(\w+):/g, '<span class="text-green-400">$1</span>:');

      // Functions and variables
      highlightedLine = highlightedLine.replace(/(\w+)\s*=/g, '<span class="text-blue-400">$1</span> =');
      highlightedLine = highlightedLine.replace(/(\w+)\s*\(/g, '<span class="text-blue-400">$1</span>(');

      // Booleans
      highlightedLine = highlightedLine.replace(/\btrue\b/g, '<span class="text-orange-400">true</span>');
      highlightedLine = highlightedLine.replace(/\bfalse\b/g, '<span class="text-orange-400">false</span>');

      return (
        <div key={lineIndex} dangerouslySetInnerHTML={{ __html: highlightedLine || '&nbsp;' }} />
      );
    });
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

          {/* Right - Code Mockup with Auto-Typing */}
          <div className="order-1 md:order-2">
            <div 
              className="relative bg-gray-950 border border-gray-800 rounded-lg shadow-2xl shadow-blue-600/10 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Editor Header */}
              <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-xs ml-3 font-mono">developer.js</span>
              </div>
              
              {/* Code Content with Auto-Typing */}
              <div 
                ref={codeContainerRef}
                className={`p-4 md:p-6 overflow-y-auto code-container ${isHovered ? 'show-scrollbar' : ''}`}
                style={{ 
                  maxHeight: '400px',
                  scrollBehavior: 'smooth'
                }}
                onScroll={handleScroll}
              >
                <pre className="text-xs md:text-sm font-mono text-white">
                  {renderSyntaxHighlightedCode(displayedCode)}
                  {currentIndexRef.current < fullCode.length && !isPaused && (
                    <span className="animate-pulse text-white">|</span>
                  )}
                </pre>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .code-container {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .code-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .code-container.show-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4b5563 #1f2937;
        }

        .code-container.show-scrollbar::-webkit-scrollbar {
          display: block;
          width: 8px;
        }

        .code-container.show-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
        }

        .code-container.show-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }

        .code-container.show-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </section>
  );
};

export default About;