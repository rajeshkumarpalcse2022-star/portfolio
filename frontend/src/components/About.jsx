import React from 'react';

const About = () => {
  const codeSnippet = `// Full-Stack Developer
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

          {/* Right - Code Mockup */}
          <div className="order-1 md:order-2">
            <div className="relative bg-gray-950 border border-gray-800 rounded-lg shadow-2xl shadow-blue-600/10 overflow-hidden">
              {/* Editor Header */}
              <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-xs ml-3 font-mono">developer.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-4 md:p-6 overflow-x-auto">
                <pre className="text-xs md:text-sm font-mono">
                  <code>
                    <span className="text-gray-500">// Full-Stack Developer</span>{'\n'}
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> {'{\n'}
                    {'  '}<span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-yellow-300">"Rajesh Kumar Pal"</span><span className="text-white">,</span>{'\n'}
                    {'  '}<span className="text-green-400">role</span><span className="text-white">:</span> <span className="text-yellow-300">"Full-Stack Developer"</span><span className="text-white">,</span>{'\n'}
                    {'  '}<span className="text-green-400">skills</span><span className="text-white">:</span> {'[\n'}
                    {'    '}<span className="text-yellow-300">"React"</span><span className="text-white">,</span> <span className="text-yellow-300">"JavaScript"</span><span className="text-white">,</span>{'\n'}
                    {'    '}<span className="text-yellow-300">"Node.js"</span><span className="text-white">,</span> <span className="text-yellow-300">"MongoDB"</span><span className="text-white">,</span>{'\n'}
                    {'    '}<span className="text-yellow-300">"HTML/CSS"</span><span className="text-white">,</span> <span className="text-yellow-300">"C++"</span>{'\n'}
                    {'  '}<span className="text-white">],</span>{'\n'}
                    {'\n'}
                    {'  '}<span className="text-blue-400">workExperience</span><span className="text-white">:</span> <span className="text-purple-400">() =&gt;</span> {'{\n'}
                    {'    '}<span className="text-purple-400">return</span> {'{\n'}
                    {'      '}<span className="text-green-400">frontend</span><span className="text-white">:</span> <span className="text-yellow-300">"React.js"</span><span className="text-white">,</span>{'\n'}
                    {'      '}<span className="text-green-400">backend</span><span className="text-white">:</span> <span className="text-yellow-300">"FastAPI, Node.js"</span><span className="text-white">,</span>{'\n'}
                    {'      '}<span className="text-green-400">database</span><span className="text-white">:</span> <span className="text-yellow-300">"MongoDB"</span><span className="text-white">,</span>{'\n'}
                    {'      '}<span className="text-green-400">tools</span><span className="text-white">:</span> <span className="text-yellow-300">"n8n, LLM APIs"</span>{'\n'}
                    {'    '}{'}'}<span className="text-white">;</span>{'\n'}
                    {'  '}{'}'}<span className="text-white">,</span>{'\n'}
                    {'\n'}
                    {'  '}<span className="text-green-400">passion</span><span className="text-white">:</span> <span className="text-yellow-300">"Building scalable apps"</span><span className="text-white">,</span>{'\n'}
                    {'  '}<span className="text-green-400">learning</span><span className="text-white">:</span> <span className="text-yellow-300">"Always exploring"</span><span className="text-white">,</span>{'\n'}
                    {'  '}<span className="text-green-400">coffee</span><span className="text-white">:</span> <span className="text-orange-400">true</span>{'\n'}
                    {'}'}<span className="text-white">;</span>{'\n'}
                    {'\n'}
                    <span className="text-purple-400">export default</span> <span className="text-blue-400">developer</span><span className="text-white">;</span>
                  </code>
                </pre>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;