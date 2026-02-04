// Main App Component - Portfolio Website
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Header />
      
      {/* Home Section with Profile */}
      <Hero />
      
      {/* About Me Section with Code Mockup */}
      <About />
      
      {/* Skills Carousel */}
      <Skills />
      
      {/* Projects Showcase */}
      <Projects />
      
      {/* Contact Form */}
      <Contact />
      
      {/* Footer Section */}
      <Footer />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;