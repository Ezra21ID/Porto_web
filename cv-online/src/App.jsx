import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <div className="content-layout">
        <aside className="sidebar">
          <About />
          <Skills />
        </aside>
        <main className="main-content">
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;