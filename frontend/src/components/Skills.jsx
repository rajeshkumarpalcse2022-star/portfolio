import React from 'react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'bg-orange-500/10',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'bg-blue-500/10',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'bg-yellow-500/10',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'bg-cyan-500/10',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'bg-green-500/10',
    },
    {
      name: 'n8n',
      icon: 'https://n8n.io/favicon.ico',
      color: 'bg-pink-500/10',
    },
    {
      name: 'LLM Models',
      icon: 'https://cdn-icons-png.flaticon.com/512/8618/8618881.png',
      color: 'bg-purple-500/10',
    },
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      color: 'bg-blue-600/10',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                <div className={`w-20 h-20 rounded-lg ${skill.color} flex items-center justify-center p-3`}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold text-center">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;