import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Whiteboard',
      description: 'An interactive Smart Whiteboard web application that allows users to draw, write, erase, and clear content on a digital canvas using the HTML5 Canvas API.',
      features: [
        'Real-time drawing using canvas',
        'Color selection and eraser tool',
        'Clear board functionality',
        'Responsive UI',
        'DOM manipulation and event handling',
      ],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://example.com/smart-whiteboard',
      codeLink: 'https://github.com/username/smart-whiteboard',
      image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=800&h=400&fit=crop',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built using React with reusable components, smooth navigation, and a clean UI.',
      features: [
        'Responsive design',
        'Reusable React components',
        'Smooth scroll navigation',
        'Modern UI/UX',
        'Project showcase',
      ],
      techStack: ['React.js', 'CSS', 'JavaScript'],
      demoLink: 'https://example.com/portfolio',
      codeLink: 'https://github.com/username/portfolio',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    },
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot that simulates human-like conversations using Large Language Model concepts.',
      features: [
        'Chat-based UI',
        'API-driven responses',
        'Real-time interaction',
        'Context-aware conversations',
        'Clean message interface',
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'LLM API'],
      demoLink: 'https://example.com/ai-chatbot',
      codeLink: 'https://github.com/username/ai-chatbot',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-600 transition-all duration-300 flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg md:text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-400 text-sm md:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-xs md:text-sm text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 md:gap-3 pt-4">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                        View Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 text-xs md:text-sm"
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;