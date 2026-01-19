import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Rajesh Kumar Pal';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleResumeDownload = () => {
    // Placeholder for future resume download functionality
    alert('Resume download will be available soon. Please upload your resume PDF.');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <div className="space-y-4 md:space-y-6">
              <div>
                <p className="text-blue-400 text-sm font-medium mb-2">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
                  {displayedName}
                  <span className="animate-pulse">|</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
                  Full-Stack Web Developer
                </h2>
              </div>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I'm a passionate developer who loves building web applications that solve real problems. 
                I focus on writing clean code and creating user-friendly experiences. Currently exploring 
                modern web technologies and always eager to learn something new.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  onClick={handleResumeDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>

                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 rounded-lg"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 rounded-lg"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 rounded-lg"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image with Rotating Ring */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70 blur-sm"></div>
              </div>
              
              {/* Inner image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shadow-blue-600/30">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Rajesh Kumar Pal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Glow effect */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;