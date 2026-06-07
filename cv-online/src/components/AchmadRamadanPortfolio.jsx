import { useState } from "react";

const skills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 82 },
  { name: "Python", level: 78 },
  { name: "React", level: 75 },
  { name: "Database (SQL)", level: 80 },
  { name: "Networking", level: 70 },
  { name: "Linux / Server", level: 72 },
  { name: "Git / Version Control", level: 85 },
];

const projects = [
  {
    num: "01",
    title: "Sistem Manajemen Data",
    desc: "Aplikasi web untuk mengelola dan memvisualisasikan data secara real-time dengan antarmuka yang intuitif.",
    tags: ["Python", "React", "PostgreSQL"],
    link: "#",
  },
  {
    num: "02",
    title: "Infrastruktur Jaringan",
    desc: "Perancangan dan implementasi infrastruktur jaringan untuk lingkungan kantor dengan keamanan tinggi.",
    tags: ["Networking", "Linux", "Security"],
    link: "#",
  },
  {
    num: "03",
    title: "Aplikasi Mobile Internal",
    desc: "Pengembangan aplikasi mobile untuk kebutuhan operasional internal perusahaan berbasis Android.",
    tags: ["JavaScript", "REST API", "Android"],
    link: "#",
  },
];

const stats = [
  { num: "3+", label: "Tahun pengalaman di bidang IT" },
  { num: "15+", label: "Proyek yang telah diselesaikan" },
  { num: "10+", label: "Teknologi yang dikuasai" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div style={styles.portfolio}>
      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.navLogo}>AR.</span>
        <ul style={styles.navLinks}>
          {["about", "skills", "projects", "contact"].map((s) => (
            <li key={s}>
              <button onClick={() => scrollTo(s)} style={styles.navLink}>
                {s}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroTag}>
          <span style={styles.heroTagLine} />
          available for work
        </div>
        <h1 style={styles.heroH1}>
          Achmad
          <br />
          <span style={styles.heroGradient}>Ramadan.</span>
        </h1>
        <p style={styles.heroDesc}>
          Profesional IT yang bersemangat membangun solusi teknologi yang
          berdampak. Fokus pada pengembangan sistem yang efisien, skalabel, dan
          berorientasi pengguna.
        </p>
        <div style={styles.heroCta}>
          <button style={styles.btnPrimary} onClick={() => scrollTo("projects")}>
            Lihat Proyek
          </button>
          <button style={styles.btnSecondary} onClick={() => scrollTo("contact")}>
            Hubungi Saya
          </button>
        </div>
      </div>

      <div style={styles.divider} />

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <SectionLabel>tentang saya</SectionLabel>
        <div style={styles.aboutGrid}>
          <div>
            <h2 style={styles.aboutH2}>Membangun hal-hal yang bermakna.</h2>
            <p style={styles.aboutP}>
              Saya adalah seorang profesional di bidang Teknologi Informasi yang
              berdomisili di Malang, Jawa Timur. Dengan pengalaman di berbagai
              aspek IT, saya berdedikasi untuk menciptakan solusi teknologi yang
              memberikan nilai nyata.
            </p>
            <p style={styles.aboutP}>
              Ketika tidak sedang bekerja, saya senang mengeksplorasi teknologi
              baru dan terus mengembangkan diri di bidang yang terus berevolusi
              ini.
            </p>
          </div>
          <div style={styles.statsCol}>
            {stats.map((s) => (
              <div key={s.num} style={styles.statCard}>
                <div style={styles.statNum}>{s.num}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={styles.divider} />

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <SectionLabel>keahlian</SectionLabel>
        <div style={styles.skillsGrid}>
          {skills.map((sk) => (
            <div key={sk.name} style={styles.skillItem}>
              <div style={styles.skillName}>{sk.name}</div>
              <div style={styles.skillBar}>
                <div style={{ ...styles.skillFill, width: `${sk.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={styles.divider} />

      {/* PROJECTS */}
      <section id="projects" style={styles.section}>
        <SectionLabel>proyek</SectionLabel>
        <div style={styles.projectsList}>
          {projects.map((p, i) => (
            <a
              key={p.num}
              href={p.link}
              style={{
                ...styles.projectCard,
                ...(hoveredProject === i ? styles.projectCardHover : {}),
              }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div>
                <div style={styles.projectNum}>{p.num}</div>
                <div style={styles.projectTitle}>{p.title}</div>
                <div style={styles.projectDesc}>{p.desc}</div>
                <div style={styles.projectTags}>
                  {p.tags.map((t) => (
                    <span key={t} style={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  ...styles.projectArrow,
                  ...(hoveredProject === i ? styles.projectArrowHover : {}),
                }}
              >
                ↗
              </div>
            </a>
          ))}
        </div>
      </section>

      <div style={styles.divider} />

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.contactCard}>
          <h2 style={styles.contactH2}>Mari Berkolaborasi</h2>
          <p style={styles.contactP}>
            Punya proyek atau ide yang ingin diwujudkan?
            <br />
            Jangan ragu untuk menghubungi saya.
          </p>
          <a href="mailto:achmad@email.com" style={{ ...styles.btnPrimary, display: "inline-block", marginBottom: "1.5rem", textDecoration: "none" }}>
            Kirim Pesan
          </a>
          <div style={styles.contactLinks}>
            <a href="mailto:achmad@email.com" style={styles.contactLink}>
              ✉ email
            </a>
            <a href="https://linkedin.com/in/achmadramadan" target="_blank" rel="noreferrer" style={styles.contactLink}>
              in linkedin
            </a>
            <a href="https://github.com/achmadramadan" target="_blank" rel="noreferrer" style={styles.contactLink}>
              ⌥ github
            </a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Achmad Ramadan — dibuat dengan ♥ di Malang
      </footer>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={styles.sectionLabel}>
      <span style={styles.sectionLabelLine} />
      {children}
    </div>
  );
}

const styles = {
  portfolio: {
    fontFamily: "'Syne', sans-serif",
    background: "#0a0a0f",
    color: "#e8e4f0",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem 2rem",
    borderBottom: "0.5px solid rgba(255,255,255,0.08)",
    position: "sticky",
    top: 0,
    background: "rgba(10,10,15,0.92)",
    backdropFilter: "blur(10px)",
    zIndex: 100,
  },
  navLogo: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 14,
    color: "#a78bfa",
    letterSpacing: "0.05em",
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 13,
    color: "rgba(232,228,240,0.55)",
    background: "none",
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.05em",
    padding: 0,
  },
  hero: {
    padding: "5rem 2rem 4rem",
    maxWidth: 860,
    margin: "0 auto",
  },
  heroTag: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "#a78bfa",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  heroTagLine: {
    display: "inline-block",
    width: 24,
    height: 1,
    background: "#a78bfa",
  },
  heroH1: {
    fontSize: "clamp(2.8rem, 6vw, 5rem)",
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    marginBottom: "1.5rem",
  },
  heroGradient: {
    display: "block",
    background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 60%, #34d399 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroDesc: {
    fontSize: "1.05rem",
    color: "rgba(232,228,240,0.6)",
    maxWidth: 520,
    lineHeight: 1.75,
    marginBottom: "2.5rem",
  },
  heroCta: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#a78bfa",
    color: "#0a0a0f",
    border: "none",
    padding: "0.75rem 1.75rem",
    fontFamily: "'Syne', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    borderRadius: 6,
    cursor: "pointer",
    letterSpacing: "0.03em",
  },
  btnSecondary: {
    background: "transparent",
    color: "#e8e4f0",
    border: "0.5px solid rgba(255,255,255,0.2)",
    padding: "0.75rem 1.75rem",
    fontFamily: "'Syne', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 6,
    cursor: "pointer",
  },
  divider: {
    height: "0.5px",
    background: "rgba(255,255,255,0.06)",
    margin: "0 2rem",
  },
  section: {
    padding: "4rem 2rem",
    maxWidth: 860,
    margin: "0 auto",
  },
  sectionLabel: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "#a78bfa",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  sectionLabelLine: {
    display: "inline-block",
    width: 24,
    height: 1,
    background: "#a78bfa",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  aboutH2: {
    fontSize: "1.8rem",
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: "1rem",
    letterSpacing: "-0.01em",
    color: "#e8e4f0",
  },
  aboutP: {
    fontSize: "0.95rem",
    color: "rgba(232,228,240,0.62)",
    lineHeight: 1.8,
    marginBottom: "1rem",
  },
  statsCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  statCard: {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "1.2rem 1.4rem",
  },
  statNum: {
    fontSize: "2rem",
    fontWeight: 800,
    color: "#a78bfa",
    lineHeight: 1,
    marginBottom: "0.25rem",
  },
  statLabel: {
    fontSize: 12,
    color: "rgba(232,228,240,0.45)",
    letterSpacing: "0.05em",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 10,
  },
  skillItem: {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    padding: "1rem 1.2rem",
  },
  skillName: {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 6,
    color: "#e8e4f0",
  },
  skillBar: {
    height: 3,
    background: "rgba(255,255,255,0.1)",
    borderRadius: 2,
    overflow: "hidden",
  },
  skillFill: {
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
  },
  projectsList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  projectCard: {
    background: "rgba(255,255,255,0.03)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: "1.5rem 1.75rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 0.2s, background 0.2s",
  },
  projectCardHover: {
    borderColor: "rgba(167,139,250,0.3)",
    background: "rgba(167,139,250,0.05)",
  },
  projectNum: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "rgba(167,139,250,0.5)",
    marginBottom: "0.5rem",
  },
  projectTitle: {
    fontSize: "1.05rem",
    fontWeight: 700,
    marginBottom: "0.4rem",
    color: "#e8e4f0",
  },
  projectDesc: {
    fontSize: 13,
    color: "rgba(232,228,240,0.5)",
    lineHeight: 1.65,
  },
  projectTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginTop: "1rem",
  },
  tag: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10,
    color: "#a78bfa",
    background: "rgba(167,139,250,0.12)",
    border: "0.5px solid rgba(167,139,250,0.25)",
    padding: "3px 9px",
    borderRadius: 4,
    letterSpacing: "0.04em",
  },
  projectArrow: {
    fontSize: 20,
    color: "rgba(232,228,240,0.2)",
    flexShrink: 0,
    marginTop: 2,
    transition: "color 0.2s, transform 0.2s",
  },
  projectArrowHover: {
    color: "#a78bfa",
    transform: "translate(2px, -2px)",
  },
  contactCard: {
    background: "rgba(167,139,250,0.07)",
    border: "0.5px solid rgba(167,139,250,0.25)",
    borderRadius: 16,
    padding: "3rem 2.5rem",
    textAlign: "center",
  },
  contactH2: {
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: "0.75rem",
    letterSpacing: "-0.01em",
    color: "#e8e4f0",
  },
  contactP: {
    fontSize: "0.95rem",
    color: "rgba(232,228,240,0.55)",
    marginBottom: "2rem",
    lineHeight: 1.7,
  },
  contactLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  contactLink: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    fontSize: 13,
    color: "rgba(232,228,240,0.65)",
    background: "rgba(255,255,255,0.05)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    padding: "0.65rem 1.2rem",
    borderRadius: 8,
    textDecoration: "none",
  },
  footer: {
    padding: "1.5rem 2rem",
    textAlign: "center",
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "rgba(232,228,240,0.2)",
    borderTop: "0.5px solid rgba(255,255,255,0.06)",
    maxWidth: 860,
    margin: "0 auto",
  },
};
