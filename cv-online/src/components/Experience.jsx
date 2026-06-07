import React from 'react';

const Experience = () => {
  const projects = [
    {
      title: "Sistem Manajemen Smart Greenhouse",
      role: "Full-Stack Developer",
      period: "2026",
      desc: "Membangun sistem pemantauan sensor real-time dengan backend Node.js dan mobile UI menggunakan Flutter.",
      stack: ["Node.js", "Flutter", "Realtime"],
    },
    {
      title: "Aplikasi E-Auction (Sistem Terdistribusi)",
      role: "Backend Engineer",
      period: "2025",
      desc: "Merancang arsitektur RESTful API yang aman untuk menangani proses lelang online multi-user.",
      stack: ["REST API", "Security", "MySQL"],
    }
  ];

  return (
    <section className="section-card projects-section" id="projects">
      <span className="section-kicker">Selected Work</span>
      <h3>Proyek & Pengalaman</h3>
      <div className="projects-grid">
        {projects.map((item, index) => (
          <article key={index} className="project-card">
            <div className="project-top">
              <span className="project-number">0{index + 1}</span>
              <span className="period">{item.period}</span>
            </div>
            <div className="project-body">
              <h4>{item.title}</h4>
              <h5>{item.role}</h5>
              <p>{item.desc}</p>
            </div>
            <div className="project-stack">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
