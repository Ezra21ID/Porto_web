import React from 'react';
import { Briefcase, Code, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="hero-info">
        <span className="availability">Available for internship & freelance projects</span>
        <h1>Nama Lengkap Anda</h1>
        <h2>Software Engineer / Web Developer</h2>
        <p>
          Saya membangun pengalaman digital yang bersih, cepat, dan mudah dipakai,
          dari dashboard web sampai aplikasi mobile berbasis data real-time.
        </p>
        <div className="hero-actions">
          <a href="mailto:emailkamu@gmail.com" className="btn-primary">Diskusi Project</a>
          <a href="#projects" className="btn-secondary">Lihat Karya</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/usernamekamu" target="_blank" rel="noreferrer" aria-label="GitHub"><Code size={20} /></a>
          <a href="https://linkedin.com/in/usernamekamu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={20} /></a>
          <a href="mailto:emailkamu@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="profile-orbit">
          <div className="avatar-mark">NL</div>
          <span className="orbit-tag tag-react">React</span>
          <span className="orbit-tag tag-node">Node</span>
          <span className="orbit-tag tag-flutter">Flutter</span>
        </div>
        <div className="hero-stats">
          <div>
            <strong>7+</strong>
            <span>Tech stack</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Featured projects</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
