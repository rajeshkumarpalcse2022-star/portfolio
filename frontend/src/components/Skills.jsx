// Skills Component - Infinite Scrolling Tech Stack
import React from 'react';

const Skills = () => {
  // List of skills with CDN icons
  const skills = [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'n8n',
      icon: 'https://n8n.io/favicon.ico',
    },
    {
      name: 'LLM Models',
      icon: 'https://cdn-icons-png.flaticon.com/512/8618/8618881.png',
    },
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    },
  ];

  // Duplicate skills for seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-12 md:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications
          </p>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Scrolling wrapper */}
          <div className="skills-carousel-wrapper">
            <div className="skills-carousel">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item flex-shrink-0 w-32 md:w-40 mx-4 md:mx-6"
                >
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center space-y-3 md:space-y-4 hover:border-blue-600 transition-all duration-300 h-32 md:h-40">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-center text-sm md:text-base">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-carousel-wrapper {
          overflow: hidden;
          padding: 20px 0;
        }

        .skills-carousel {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .skills-carousel:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @media (max-width: 768px) {
          .skills-carousel {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;