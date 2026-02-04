import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = 'Rajesh Kumar Pal';

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    
    const typingInterval = setInterval(() => {
      if (!isDeleting && index < fullName.length) {
        // Typing forward
        setDisplayedName(fullName.substring(0, index + 1));
        index++;
        setIsTypingComplete(false);
      } else if (!isDeleting && index === fullName.length) {
        // Pause at the end before deleting
        setIsTypingComplete(true);
        setTimeout(() => {
          isDeleting = true;
        }, 2000); // Wait 2 seconds before starting to delete
      } else if (isDeleting && index > 0) {
        // Deleting backward
        index--;
        setDisplayedName(fullName.substring(0, index));
        setIsTypingComplete(false);
      } else if (isDeleting && index === 0) {
        // Reset to start typing again
        isDeleting = false;
        setTimeout(() => {
          // Small pause before restarting
        }, 500);
      }
    }, isDeleting ? 50 : 100); // Delete faster than type

    return () => clearInterval(typingInterval);
  }, []);

  const handleResumeDownload = () => {
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rajesh_Kumar_Pal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
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
                    href="https://www.linkedin.com/in/rajesh-kumar-pal-552713262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white hover:opacity-90 transition-all transform hover:scale-110 rounded-lg"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 text-white hover:opacity-90 transition-all transform hover:scale-110 rounded-lg"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/raj_pal__440?igsh=MTh3eHNzZ3F5enZraQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-600 text-white hover:opacity-90 transition-all transform hover:scale-110 rounded-lg"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image with Rotating Ring */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70 blur-sm"></div>
              </div>
              
              {/* Inner image container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shadow-blue-600/30">
                <img
                  src="/rajesh.jpg"
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