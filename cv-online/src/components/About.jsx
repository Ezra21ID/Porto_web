import React from 'react';

const About = () => {
  return (
    <section className="section-card">
      <span className="section-kicker">Profile</span>
      <h3>Tentang Saya</h3>
      <p>
        Saya adalah seorang mahasiswa Teknologi Informasi yang memiliki ketertarikan kuat dalam pengembangan web dan mobile. 
        Berpengalaman dalam membangun beberapa proyek aplikasi menggunakan ekosistem modern dan selalu bersemangat untuk mempelajari teknologi baru.
      </p>
      <div className="quick-facts">
        <span>Frontend detail</span>
        <span>Backend logic</span>
        <span>Mobile ready</span>
      </div>
    </section>
  );
};

export default About;
