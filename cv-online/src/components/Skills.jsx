import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      items: ['React.js', 'Responsive UI', 'CSS Modern'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'PHP', 'REST API'],
    },
    {
      title: 'Tools',
      items: ['Flutter / Dart', 'Python', 'MySQL', 'Git'],
    },
  ];

  return (
    <section className="section-card">
      <span className="section-kicker">Toolkit</span>
      <h3>Keahlian</h3>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <div className="skills-grid">
              {group.items.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
