import { useState } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const skills = [
  { name: "HTML & CSS",     level: 88, note: "familiar" },
  { name: "JavaScript",     level: 75, note: "familiar" },
  { name: "React.js",       level: 65, note: "belajar aktif" },
  { name: "Tailwind CSS",   level: 70, note: "familiar" },
  { name: "PHP / Laravel",  level: 60, note: "belajar aktif" },
  { name: "MySQL",          level: 68, note: "familiar" },
  { name: "Git & GitHub",   level: 72, note: "familiar" },
  { name: "Figma (basic)",  level: 50, note: "dasar" },
];

const projects = [
  {
    num: "01",
    title: "Sistem Absensi Online",
    desc: "Aplikasi web absensi mahasiswa dengan fitur scan QR, rekap kehadiran, dan dashboard dosen. Dibuat sebagai proyek akhir mata kuliah Pemrograman Web.",
    tags: ["Laravel", "MySQL", "Bootstrap", "QR Code"],
    status: "live",
    statusLabel: "selesai · proyek kuliah",
    link: "#",
  },
  {
    num: "02",
    title: "Landing Page UMKM Lokal",
    desc: "Desain dan pengembangan landing page untuk usaha kecil di Malang. Responsif di semua perangkat dan dioptimasi untuk kecepatan loading.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    status: "live",
    statusLabel: "live · proyek mandiri",
    link: "#",
  },
  {
    num: "03",
    title: "To-Do App dengan React",
    desc: "Aplikasi manajemen tugas sederhana menggunakan React dan localStorage. Fitur: tambah, edit, hapus, filter berdasarkan status.",
    tags: ["React", "Tailwind", "localStorage"],
    status: "wip",
    statusLabel: "dalam pengembangan",
    link: "#",
  },
];

const canHelp = [
  "Membuat halaman web",
  "Integrasi REST API",
  "Debugging & testing",
  "Dokumentasi teknis",
  "Code review",
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function SectionLabel({ children, color = "#34d399" }) {
  return (
    <div style={{ ...s.sectionLabel, color }}>
      <span style={{ ...s.sectionLabelLine, background: color }} />
      {children}
    </div>
  );
}

function ProjectStatus({ status, label }) {
  const isLive = status === "live";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: isLive ? "#34d399" : "rgba(232,228,240,0.3)",
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          color: isLive ? "#34d399" : "rgba(232,228,240,0.35)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div style={s.portfolio}>

      {/* ── NAV ── */}
      <nav style={s.nav}>
        <span style={s.navLogo}>AR.</span>
        <ul style={s.navLinks}>
          {["about", "skills", "projects", "contact"].map((id) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)} style={s.navBtn}>
                {id}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <div style={s.hero}>
        <div style={s.badge}>
          <span style={s.badgeDot} />
          open to internship
        </div>

        <h1 style={s.h1}>
          Achmad<br />
          <span style={s.h1Gradient}>Ramadan</span>
        </h1>
        <div style={s.heroSub}>Web Development Intern</div>

        <p style={s.heroDesc}>
          Mahasiswa IT yang antusias belajar dan siap berkontribusi nyata.
          Senang membangun antarmuka web yang bersih, fungsional, dan
          menyenangkan digunakan.
        </p>

        <div style={s.heroCta}>
          <button style={s.btnPrimary} onClick={() => scrollTo("projects")}>
            Lihat Proyek Saya
          </button>
          <button style={s.btnSecondary} onClick={() => scrollTo("contact")}>
            Hubungi Saya
          </button>
        </div>
      </div>

      <div style={s.divider} />

      {/* ── ABOUT ── */}
      <section id="about" style={s.section}>
        <SectionLabel>tentang saya</SectionLabel>

        <div style={s.aboutGrid}>
          {/* left */}
          <div>
            <h2 style={s.h2}>Belajar keras,<br />siap berkontribusi.</h2>
            <p style={s.bodyText}>
              Saya adalah mahasiswa Teknologi Informasi semester akhir di UIN
              Maulana Malik Ibrahim Malang yang sedang aktif mencari kesempatan
              magang di bidang Web Development.
            </p>
            <p style={s.bodyText}>
              Saya percaya magang bukan hanya soal belajar, tapi juga soal
              memberi nilai — saya siap membawa semangat, rasa ingin tahu, dan
              dedikasi penuh ke tim yang mau berkembang bersama.
            </p>

            {/* info rows */}
            <div style={s.infoList}>
              {[
                { icon: "📍", text: "Malang, Jawa Timur" },
                { icon: "🎓", label: "UIN Maulana Malik Ibrahim Malang", sub: " — Teknik Informatika" },
                { icon: "📅", text: "Angkatan 2022 · Semester 6" },
                { icon: "🌐", text: "Indonesia, English (basic)" },
              ].map((row, i) => (
                <div key={i} style={s.infoRow}>
                  <span style={s.infoIcon}>{row.icon}</span>
                  {row.label ? (
                    <span style={s.infoText}>
                      <strong style={{ color: "#e8e4f0", fontWeight: 600 }}>{row.label}</strong>
                      {row.sub}
                    </span>
                  ) : (
                    <span style={s.infoText}>{row.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div>
            <SectionLabel>pendidikan</SectionLabel>
            <div style={s.eduCard}>
              <div style={s.eduDegree}>S1 Teknik Informatika</div>
              <div style={s.eduUniv}>UIN Maulana Malik Ibrahim Malang</div>
              <div style={s.eduYear}>2022 — sekarang · IPK 3.72</div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <SectionLabel>saya bisa bantu</SectionLabel>
              <div style={s.tagWrap}>
                {canHelp.map((t) => (
                  <span key={t} style={s.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={s.divider} />

      {/* ── SKILLS ── */}
      <section id="skills" style={s.section}>
        <SectionLabel>keahlian</SectionLabel>
        <div style={s.skillsGrid}>
          {skills.map((sk) => (
            <div key={sk.name} style={s.skillItem}>
              <div style={s.skillName}>{sk.name}</div>
              <div style={s.skillBar}>
                <div style={{ ...s.skillFill, width: `${sk.level}%` }} />
              </div>
              <div style={s.skillNote}>{sk.note}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      {/* ── PROJECTS ── */}
      <section id="projects" style={s.section}>
        <SectionLabel>proyek kuliah &amp; mandiri</SectionLabel>
        <div style={s.projectsList}>
          {projects.map((p, i) => {
            const hovered = hoveredProject === i;
            return (
              <a
                key={p.num}
                href={p.link}
                style={{
                  ...s.projectCard,
                  ...(hovered ? s.projectCardHover : {}),
                }}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div>
                  <div style={s.projectNum}>{p.num}</div>
                  <div style={s.projectTitle}>{p.title}</div>
                  <div style={s.projectDesc}>{p.desc}</div>
                  <div style={s.tagWrap}>
                    {p.tags.map((t) => (
                      <span key={t} style={s.tag}>{t}</span>
                    ))}
                  </div>
                  <ProjectStatus status={p.status} label={p.statusLabel} />
                </div>
                <div style={{ ...s.projectArrow, ...(hovered ? s.projectArrowHover : {}) }}>
                  ↗
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <div style={s.divider} />

      {/* ── CONTACT ── */}
      <section id="contact" style={s.section}>
        <div style={s.contactCard}>
          <h2 style={s.contactH2}>Cari Tempat Magang</h2>
          <p style={s.contactDesc}>
            Saya sedang aktif mencari kesempatan magang Web Development.<br />
            Durasi fleksibel · bisa mulai segera · siap kerja remote maupun onsite di Malang.
          </p>
          <a
            href="/cv-achmad-ramadan.pdf"
            style={s.btnPrimaryLink}
            download
          >
            Download CV
          </a>
          <div style={s.contactLinks}>
            <a href="mailto:achmad@email.com" style={s.contactLink}>✉ email</a>
            <a href="https://linkedin.com/in/achmadramadan" target="_blank" rel="noreferrer" style={s.contactLink}>in linkedin</a>
            <a href="https://github.com/achmadramadan" target="_blank" rel="noreferrer" style={s.contactLink}>⌥ github</a>
            <a href="https://wa.me/628xxxxxxxxx" target="_blank" rel="noreferrer" style={s.contactLink}>📱 whatsapp</a>
          </div>
        </div>
      </section>

      <footer style={s.footer}>
        © 2026 Achmad Ramadan · Web Dev Intern · UIN Malang
      </footer>
    </div>
  );
}

// ─── STYLES ─────────────────────────────────────────────────────────────────

const GREEN = "#34d399";
const ACCENT_BG  = "rgba(52,211,153,0.07)";
const ACCENT_BOR = "rgba(52,211,153,0.22)";

const s = {
  // layout
  portfolio: { fontFamily: "'Syne', sans-serif", background: "#0a0a0f", color: "#e8e4f0", minHeight: "100vh", overflowX: "hidden" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2rem 2rem", borderBottom: "0.5px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, background: "rgba(10,10,15,0.93)", backdropFilter: "blur(10px)", zIndex: 100 },
  navLogo: { fontFamily: "'Space Mono', monospace", fontSize: 14, color: GREEN, letterSpacing: "0.05em" },
  navLinks: { display: "flex", gap: "1.75rem", listStyle: "none", margin: 0, padding: 0 },
  navBtn: { fontFamily: "'Syne', sans-serif", fontSize: 13, color: "rgba(232,228,240,0.5)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.05em", padding: 0 },
  hero: { padding: "5rem 2rem 4rem", maxWidth: 860, margin: "0 auto" },
  section: { padding: "4rem 2rem", maxWidth: 860, margin: "0 auto" },
  divider: { height: "0.5px", background: "rgba(255,255,255,0.06)", margin: "0 2rem" },

  // badge
  badge: { display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(52,211,153,0.1)", border: `0.5px solid ${ACCENT_BOR}`, borderRadius: 20, padding: "5px 14px", fontFamily: "'Space Mono', monospace", fontSize: 10, color: GREEN, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.75rem" },
  badgeDot: { width: 6, height: 6, background: GREEN, borderRadius: "50%", animation: "pulse 2s infinite" },

  // hero
  h1: { fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.4rem" },
  h1Gradient: { display: "block", background: "linear-gradient(135deg, #34d399 0%, #60a5fa 60%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  heroSub: { fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 600, color: GREEN, marginBottom: "1.5rem", letterSpacing: "-0.01em" },
  heroDesc: { fontSize: "0.97rem", color: "rgba(232,228,240,0.58)", maxWidth: 500, lineHeight: 1.8, marginBottom: "2.5rem" },
  heroCta: { display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" },

  // buttons
  btnPrimary: { background: GREEN, color: "#0a0a0f", border: "none", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, borderRadius: 6, cursor: "pointer", letterSpacing: "0.03em" },
  btnPrimaryLink: { display: "inline-block", background: GREEN, color: "#0a0a0f", border: "none", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, borderRadius: 6, cursor: "pointer", letterSpacing: "0.03em", textDecoration: "none", marginBottom: "1.5rem" },
  btnSecondary: { background: "transparent", color: "#e8e4f0", border: "0.5px solid rgba(255,255,255,0.2)", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600, borderRadius: 6, cursor: "pointer" },

  // section label
  sectionLabel: { fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: 8 },
  sectionLabelLine: { display: "inline-block", width: 24, height: 1 },

  // about
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" },
  h2: { fontSize: "1.75rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem", letterSpacing: "-0.01em", color: "#e8e4f0" },
  bodyText: { fontSize: "0.93rem", color: "rgba(232,228,240,0.6)", lineHeight: 1.8, marginBottom: "0.9rem" },
  infoList: { display: "flex", flexDirection: "column", gap: 10, marginTop: "0.5rem" },
  infoRow: { display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(232,228,240,0.55)" },
  infoIcon: { fontSize: 15 },
  infoText: { color: "rgba(232,228,240,0.55)" },

  // education
  eduCard: { background: ACCENT_BG, border: `0.5px solid ${ACCENT_BOR}`, borderRadius: 12, padding: "1.4rem 1.6rem" },
  eduDegree: { fontSize: "1rem", fontWeight: 700, marginBottom: 4, color: "#e8e4f0" },
  eduUniv: { fontSize: 13, color: GREEN, marginBottom: 4 },
  eduYear: { fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(232,228,240,0.35)" },

  // tags
  tagWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  tag: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: GREEN, background: "rgba(52,211,153,0.1)", border: `0.5px solid ${ACCENT_BOR}`, padding: "3px 9px", borderRadius: 4, letterSpacing: "0.04em" },

  // skills
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 },
  skillItem: { background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "1rem 1.2rem" },
  skillName: { fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#e8e4f0" },
  skillBar: { height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" },
  skillFill: { height: "100%", borderRadius: 2, background: "linear-gradient(90deg, #34d399, #60a5fa)" },
  skillNote: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(52,211,153,0.6)", marginTop: 5 },

  // projects
  projectsList: { display: "flex", flexDirection: "column", gap: "1rem" },
  projectCard: { background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "1.5rem 1.75rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", textDecoration: "none", color: "inherit", transition: "border-color 0.2s, background 0.2s" },
  projectCardHover: { borderColor: ACCENT_BOR, background: ACCENT_BG },
  projectNum: { fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(52,211,153,0.45)", marginBottom: "0.5rem" },
  projectTitle: { fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem", color: "#e8e4f0" },
  projectDesc: { fontSize: 13, color: "rgba(232,228,240,0.5)", lineHeight: 1.65 },
  projectArrow: { fontSize: 18, color: "rgba(232,228,240,0.15)", flexShrink: 0, transition: "color 0.2s, transform 0.2s" },
  projectArrowHover: { color: GREEN, transform: "translate(2px, -2px)" },

  // contact
  contactCard: { background: ACCENT_BG, border: `0.5px solid ${ACCENT_BOR}`, borderRadius: 16, padding: "3rem 2.5rem", textAlign: "center" },
  contactH2: { fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem", color: "#e8e4f0" },
  contactDesc: { fontSize: "0.93rem", color: "rgba(232,228,240,0.52)", marginBottom: "2rem", lineHeight: 1.75 },
  contactLinks: { display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" },
  contactLink: { display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(232,228,240,0.6)", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.65rem 1.2rem", borderRadius: 8, textDecoration: "none" },

  // footer
  footer: { padding: "1.5rem 2rem", textAlign: "center", fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(232,228,240,0.18)", borderTop: "0.5px solid rgba(255,255,255,0.05)", maxWidth: 860, margin: "0 auto" },
};
