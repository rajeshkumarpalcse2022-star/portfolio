import React from 'react';
import { Code, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing code that is readable, maintainable, and follows best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I enjoy tackling challenges and finding creative solutions to complex problems.',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always curious and ready to learn new technologies to stay current in the field.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a full-stack web developer with a strong foundation in modern web technologies. 
              My journey into programming started with curiosity and has grown into a genuine passion 
              for creating functional, user-friendly applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I've worked on various projects ranging from interactive web applications to AI-powered 
              tools. Each project has taught me something new and helped me improve my skills. I'm 
              particularly interested in building solutions that make a real difference.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I'm usually learning about new frameworks, contributing to open 
              source, or working on side projects. I believe in continuous improvement and staying 
              updated with industry trends.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-600 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-600/10 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;