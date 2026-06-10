import { useState } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const skills = [
  { name: "HTML & CSS",     level: 66, note: "familiar" },
  { name: "JavaScript",     level: 75, note: "familiar" },
  { name: "PHP",            level: 60, note: "familiar" },
  { name: "Python",         level: 80, note: "mendalami" },
  { name: "Java",           level: 50, note: "dasar" },
  { name: "MySQL",          level: 79, note: "mendalami" },
  { name: "Git & GitHub",   level: 72, note: "familiar" },
  { name: "Figma (basic)",  level: 35, note: "dasar" },
];

const projects = [
  {
    num: "01",
    title: "Web Idul Adha",
    desc: "Aplikasi berbasis web dinamis untuk menyambut perayaan Iduladha. Menyediakan platform informasi interaktif, manajemen konten seputar pelaksanaan hari raya, serta fitur pendukung perayaan keagamaan secara digital.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    status: "live",
    statusLabel: "selesai · proyek kuliah",
    link: "https://github.com/Ezra21ID/web_idhul_adha",
    image: "/web_idhul/Screenshot 2026-06-09 225926.png",
    docs: {
      overview: "Web Idul Adha adalah platform digital yang memudahkan komunitas dalam mengelola dan berbagi informasi seputar perayaan Hari Raya Idul Adha. Dibangun dengan pendekatan mobile-first untuk jangkauan yang luas.",
      goals: [
        "Menyediakan informasi jadwal dan lokasi kegiatan Idul Adha secara terpusat",
        "Memudahkan manajemen konten oleh panitia tanpa keahlian teknis",
        "Responsive di semua perangkat untuk aksesibilitas maksimal",
      ],
      challenges: "Tantangan utama adalah merancang UI yang sederhana namun informatif, serta memastikan performa tetap ringan meski memuat banyak konten dinamis.",
      techDetail: {
        "Frontend": "HTML5 semantik, CSS3 custom properties, vanilla JavaScript ES6+",
        "Desain": "Responsive grid layout, mobile-first approach",
        "Hosting": "GitHub Pages",
      },
      duration: "3 minggu",
      role: "Frontend Developer",
      screenshots: [
        "/web_idhul/Screenshot 2026-06-09 225926.png",
        "/web_idhul/Screenshot 2026-06-09 225938.png",
        "/web_idhul/Screenshot 2026-06-09 225945.png",
        "/web_idhul/Screenshot 2026-06-09 225953.png",
        "/web_idhul/Screenshot 2026-06-09 230000.png",
        "/web_idhul/Screenshot 2026-06-09 230012.png",
      ],
    },
  },
  {
    num: "02",
    title: "Smart Greenhouse IoT",
    desc: "Sistem pemantauan lingkungan rumah kaca pintar secara real-time. Mengintegrasikan mikrokontroler ESP32 dengan sensor suhu, kelembapan, dan aktuator otomatis, yang terhubung langsung ke antarmuka aplikasi mobile untuk visualisasi data log sensor.",
    tags: ["Flutter", "Node.js", "ESP32", "IoT", "MySQL"],
    status: "live",
    statusLabel: "selesai · proyek kuliah",
    link: "https://github.com/Ezra21ID/IOT_Smart-greenhouse",
    image: "/IOT/image.png",
    docs: {
      overview: "Smart Greenhouse IoT adalah sistem pemantauan rumah kaca berbasis IoT yang menggabungkan mikrokontroler ESP32 dengan aplikasi mobile Flutter. Dashboard menampilkan kartu Suhu dan Kelembaban secara real-time lengkap dengan indikator status Normal/Abnormal, serta menyimpan log histori sensor ke database MySQL untuk analisis tren lingkungan.",
      goals: [
        "Dashboard mobile Flutter menampilkan kartu Suhu (°C) dan Kelembaban (%) secara real-time",
        "Indikator status otomatis — Normal jika suhu ≤ 35°C dan kelembaban dalam rentang aman",
        "Komunikasi ESP32 ↔ backend via protokol MQTT yang ringan dan efisien",
        "Log histori sensor tersimpan di MySQL untuk analisis tren lingkungan",
        "Notifikasi otomatis saat kondisi melampaui ambang batas yang ditentukan",
      ],
      challenges: "Menjaga sinkronisasi data real-time antara ESP32 dan aplikasi Flutter melewati backend Node.js membutuhkan koneksi MQTT yang stabil. Selain itu, kalibrasi sensor DHT22 perlu dilakukan agar pembacaan suhu dan kelembaban akurat di berbagai kondisi lingkungan rumah kaca.",
      techDetail: {
        "Hardware": "ESP32, sensor DHT22 (suhu & kelembaban), sensor soil moisture",
        "Mobile": "Flutter (Android) — kartu dashboard Suhu & Kelembaban real-time",
        "Backend": "Node.js + Express, MQTT broker",
        "Database": "MySQL — log sensor time-series",
      },
      duration: "6 minggu",
      role: "Full-stack + Hardware Integration",
      screenshots: [
        "/IOT/image.png",
        "/IOT/Screenshot 2026-06-10 105555.png",
        "/IOT/Screenshot 2026-06-10 105649.png",
      ],
    },
  },
  {
    num: "03",
    title: "Cashflow Management App",
    desc: "Sistem manajemen arus kas multiuser yang dirancang untuk pelacakan keuangan dan distribusi sumber daya komunitas secara dinamis. Dilengkapi dengan dashboard tracking untuk warga, panitia, dan admin guna transparansi pencatatan keuangan.",
    tags: ["Web Dinamis", "Multiuser", "Cashflow Tracking", "MySQL"],
    status: "live",
    statusLabel: "selesai · proyek UAS",
    link: "https://github.com/Ezra21ID/cashflow-app-uas",
    image: "/cash_flow/image.png",
    docs: {
      overview: "Cashflow Management App adalah sistem pencatatan keuangan berbasis web untuk komunitas (contoh: RT/RW). Mendukung tiga peran pengguna — warga, panitia, dan admin — dengan hak akses yang berbeda-beda.",
      goals: [
        "Pencatatan pemasukan & pengeluaran dengan riwayat lengkap",
        "Dashboard per peran: warga (read-only), panitia (input), admin (full access)",
        "Laporan keuangan otomatis yang bisa diekspor",
        "Transparansi keuangan komunitas secara digital",
      ],
      challenges: "Perancangan sistem otorisasi multiuser agar setiap peran hanya bisa mengakses fitur yang relevan, sambil menjaga integritas data dari input yang tidak sah.",
      techDetail: {
        "Frontend": "PHP (templating), HTML, CSS, JavaScript",
        "Backend": "PHP native + session management",
        "Database": "firebase — transaksi, user, kategori",
        "Auth": "Role-based access control (RBAC)",
      },
      duration: "4 minggu",
      role: "full-stack developer",
      screenshots: [
        "/cash_flow/image.png",
        "/cash_flow/Screenshot 2026-06-10 110123.png",
        "/cash_flow/Screenshot 2026-06-10 110135.png",
      ],
    },
  },
  {
    num: "04", // Sesuaikan dengan urutan projek di portofoliomu
    title: "Sign Language & Hand Gesture Recognition",
    desc: "Sistem visi komputer (Computer Vision) berbasis machine learning untuk mendeteksi dan mengonversi isyarat tangan secara real-time. Menggunakan ekstraksi fitur landmark tangan untuk klasifikasi isyarat menggunakan algoritma Support Vector Machine (SVM).",
    tags: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
    status: "live",
    statusLabel: "selesai · proyek riset", // Bisa disesuaikan jadi 'proyek pribadi' atau 'kuliah'
    link: "https://github.com/Ezra21ID/konversi-isyarat-tangan",
    image: "/sign_palm/image.png", // Ganti dengan path screenshot visualisasi deteksi tanganmu
    docs: {
    overview: "Proyek ini adalah implementasi Computer Vision dan Machine Learning yang dirancang untuk mengenali dan menerjemahkan bahasa isyarat atau gerakan telapak tangan secara real-time melalui kamera (webcam). Sistem mendeteksi titik koordinat tangan dan mengklasifikasikannya ke dalam label teks tertentu.",
    goals: [
      "Melakukan prapemrosesan gambar dan ekstraksi fitur koordinat landmark tangan secara akurat",
      "Melatih model prediktif berbasis algoritma Support Vector Machine (SVM) dengan dataset kustom",
      "Mengimplementasikan deteksi dan klasifikasi gerakan tangan secara real-time dengan latensi rendah",
      "Menyediakan fondasi teknologi aksesibilitas digital bagi penyandang disabilitas"
    ],
    challenges: "Mengatasi variasi pencahayaan, rotasi tangan, dan jarak objek saat melakukan ekstraksi landmark koordinat tangan menggunakan MediaPipe/OpenCV, serta mengoptimalkan parameter model SVM agar mendapatkan akurasi klasifikasi yang tinggi pada data real-time.",
    techDetail: {
      "Bahasa Pemrograman": "Python 3.x",
      "Library Visi Komputer": "OpenCV & MediaPipe (Landmark Extraction)",
      "Model & Klasifikasi": "Scikit-Learn (Support Vector Machine - SVM)",
      "Pemrosesan Data": "NumPy & Pandas"
    },
    duration: "3 minggu", // Silakan sesuaikan durasi pengerjaan aslimu
    role: "Machine Learning & Computer Vision Developer",
    screenshots: [
      "/sign_palm/image.png",
      "/sign_palm/screenshot_deteksi_1.png",
      "/sign_palm/screenshot_deteksi_2.png"
    ]
  }
}
];

const canHelp = [
  // "Membuat halaman web",
  // "Pengembangan Aplikasi Mobile (Flutter)",
  // "Integrasi REST API",
  "Pengembangan Web (Laravel/PHP)",
  "Aplikasi Mobile Lintas Platform (Flutter)",
  "Debugging & testing",
  "Dokumentasi teknis",

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
    <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 10 }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: isLive ? "#34d399" : "rgba(232,228,240,0.3)", display: "inline-block" }} />
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: isLive ? "#34d399" : "rgba(232,228,240,0.35)" }}>
        {label}
      </span>
    </div>
  );
}

function ProjectImagePlaceholder({ num }) {
  const icons = { "01": "🌙", "02": "🌿", "03": "💰" };
  return (
    <div style={s.projectImgPlaceholder}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 32, marginBottom: 6, opacity: 0.3 }}>{icons[num] || "📁"}</div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(52,211,153,0.35)", letterSpacing: "0.08em" }}>
          no preview
        </div>
      </div>
    </div>
  );
}

// ── PROJECT DOCS MODAL ──────────────────────────────────────────────────────

function DocsModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const d = project.docs;

  const screenshots = d.screenshots || [];
  const validScreenshots = screenshots.filter((_, i) => !imgErrors[i]);
  const hasScreenshots = validScreenshots.length > 0;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const prev = () => setActiveImg((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setActiveImg((i) => (i + 1) % screenshots.length);

  return (
    <div style={s.modalBackdrop} onClick={handleBackdropClick}>
      <div style={s.modal}>
        {/* ── Header ── */}
        <div style={s.modalHeader}>
          <div>
            <span style={s.modalNum}>{project.num}</span>
            <h2 style={s.modalTitle}>{project.title}</h2>
            <ProjectStatus status={project.status} label={project.statusLabel} />
          </div>
          <button style={s.modalClose} onClick={onClose} aria-label="Tutup">✕</button>
        </div>

        {/* ── Gallery ── */}
        {hasScreenshots ? (
          <div style={{ marginBottom: "1.5rem" }}>
            {/* Gambar utama */}
            <div style={s.galleryMain}>
              <img
                src={screenshots[activeImg]}
                alt={`Screenshot ${project.title} ${activeImg + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                onError={() => setImgErrors((p) => ({ ...p, [activeImg]: true }))}
              />
              {/* Tombol navigasi — hanya tampil jika lebih dari 1 gambar */}
              {screenshots.length > 1 && (
                <>
                  <button style={{ ...s.galleryNav, left: 10 }} onClick={prev}>‹</button>
                  <button style={{ ...s.galleryNav, right: 10 }} onClick={next}>›</button>
                  <div style={s.galleryCounter}>
                    {activeImg + 1} / {screenshots.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail strip — hanya tampil jika lebih dari 1 gambar */}
            {screenshots.length > 1 && (
              <div style={s.galleryStrip}>
                {screenshots.map((src, i) => (
                  <button
                    key={i}
                    style={{
                      ...s.galleryThumb,
                      ...(activeImg === i ? s.galleryThumbActive : {}),
                    }}
                    onClick={() => setActiveImg(i)}
                  >
                    {!imgErrors[i] ? (
                      <img
                        src={src}
                        alt={`Thumb ${i + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", borderRadius: 4 }}
                        onError={() => setImgErrors((p) => ({ ...p, [i]: true }))}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "rgba(52,211,153,0.3)" }}>
                        ✕
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div style={s.modalScreenshotPlaceholder}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(52,211,153,0.3)", letterSpacing: "0.1em" }}>
              SCREENSHOT BELUM TERSEDIA
            </span>
          </div>
        )}

        {/* ── Tags ── */}
        <div style={{ ...s.tagWrap, margin: "0 0 1.5rem" }}>
          {project.tags.map((t) => <span key={t} style={s.tag}>{t}</span>)}
        </div>

        {/* ── Overview ── */}
        <div style={s.modalBlock}>
          <SectionLabel>gambaran proyek</SectionLabel>
          <p style={s.modalText}>{d.overview}</p>
        </div>

        {/* ── Tujuan ── */}
        <div style={s.modalBlock}>
          <SectionLabel>tujuan & fitur</SectionLabel>
          <ul style={s.modalList}>
            {d.goals.map((g, i) => (
              <li key={i} style={s.modalListItem}>
                <span style={s.modalListDot} />
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Tantangan ── */}
        <div style={s.modalBlock}>
          <SectionLabel color="#60a5fa">tantangan teknis</SectionLabel>
          <p style={{ ...s.modalText, borderLeft: "2px solid rgba(96,165,250,0.4)", paddingLeft: "1rem", color: "rgba(232,228,240,0.65)" }}>
            {d.challenges}
          </p>
        </div>

        {/* ── Tech Stack ── */}
        <div style={s.modalBlock}>
          <SectionLabel>tech stack detail</SectionLabel>
          <div style={s.techGrid}>
            {Object.entries(d.techDetail).map(([layer, detail]) => (
              <div key={layer} style={s.techRow}>
                <div style={s.techLayer}>{layer}</div>
                <div style={s.techDetail2}>{detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Meta ── */}
        <div style={s.modalMeta}>
          <div style={s.metaItem}>
            <span style={s.metaLabel}>durasi</span>
            <span style={s.metaValue}>{d.duration}</span>
          </div>
          <div style={s.metaItem}>
            <span style={s.metaLabel}>peran</span>
            <span style={s.metaValue}>{d.role}</span>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
          <a href={project.link} target="_blank" rel="noreferrer" style={s.btnPrimaryLink}>
            Lihat di GitHub ↗
          </a>
          <button style={s.btnSecondary} onClick={onClose}>Tutup</button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imgErrors, setImgErrors] = useState({});
  const [activeDoc, setActiveDoc] = useState(null); // proyek yang dibuka di modal

  const handleImgError = (num) => setImgErrors((prev) => ({ ...prev, [num]: true }));

  return (
    <div style={s.portfolio}>

      {/* ── MODAL ── */}
      {activeDoc && (
        <DocsModal project={activeDoc} onClose={() => setActiveDoc(null)} />
      )}

      {/* ── NAV ── */}
      <nav style={s.nav}>
        <span style={s.navLogo}>AR.</span>
        <ul style={s.navLinks}>
          {["about", "skills", "projects", "contact"].map((id) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)} style={s.navBtn}>{id}</button>
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
        <div style={s.heroSub}>Web & Mobile Developer | IoT Enthusiast</div>
        <p style={s.heroDesc}>
          Mahasiswa IT yang antusias menjembatani dunia web, perangkat mobile, dan IoT. Siap berkontribusi nyata dalam membangun solusi digital yang responsif, efisien, dan berdampak bagi pengguna.
        </p>
        <div style={s.heroCta}>
          <button style={s.btnPrimary} onClick={() => scrollTo("projects")}>Lihat Proyek Saya</button>
          <button style={s.btnSecondary} onClick={() => scrollTo("contact")}>Hubungi Saya</button>
        </div>
      </div>

      <div style={s.divider} />

      {/* ── ABOUT ── */}
      <section id="about" style={s.section}>
        <SectionLabel>tentang saya</SectionLabel>
        <div style={s.aboutGrid}>
          <div>
            <h2 style={s.h2}>Belajar keras,<br />siap berkontribusi.</h2>
            <p style={s.bodyText}>
              Belajar keras, siap berkontribusi nyata.

Saya adalah mahasiswa Teknik Informatika di UIN Maulana Malik Ibrahim Malang yang berfokus pada Web & Mobile Development. Memiliki pengalaman praktis dalam membangun aplikasi berskala kuliah hingga proyek riset, mulai dari sistem manajemen keuangan multiuser (Flutter & Firebase) hingga integrasi perangkat pintar berbasis IoT.

Saya percaya magang bukan hanya soal belajar teknologi baru, tetapi juga tentang memberikan nilai tambah (value) bagi tim. Dengan bekal logika pemrograman yang kuat, rasa ingin tahu yang tinggi, dan dedikasi penuh, saya siap berkolaborasi untuk berkembang bersama industri.
            </p>
            {/* <p style={s.bodyText}>
              Saya percaya magang bukan hanya soal belajar, tapi juga soal
              memberi nilai — saya siap membawa semangat, rasa ingin tahu, dan
              dedikasi penuh ke tim yang mau berkembang bersama.
            </p> */}
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
          <div>
            <SectionLabel>pendidikan</SectionLabel>
            <div style={s.eduCard}>
              <div style={s.eduDegree}>S1 Teknik Informatika</div>
              <div style={s.eduUniv}>UIN Maulana Malik Ibrahim Malang</div>
              <div style={s.eduYear}>2022 — sekarang · IPK 3.6</div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <SectionLabel>saya bisa bantu</SectionLabel>
              <div style={s.tagWrap}>
                {canHelp.map((t) => <span key={t} style={s.tag}>{t}</span>)}
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
            const showPlaceholder = !p.image || imgErrors[p.num];

            return (
              <div
                key={`${p.num}-${i}`}
                style={{
                  ...s.projectCard,
                  ...(hovered ? s.projectCardHover : {}),
                }}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* ── Thumbnail ── */}
                <div style={s.projectThumb}>
                  {showPlaceholder ? (
                    <ProjectImagePlaceholder num={p.num} />
                  ) : (
                    <img
                      src={p.image}
                      alt={`Preview ${p.title}`}
                      style={s.projectImg}
                      onError={() => handleImgError(p.num)}
                    />
                  )}
                  <div style={s.projectNumBadge}>{p.num}</div>
                  {hovered && <div style={s.projectThumbOverlay} />}
                </div>

                {/* ── Detail ── */}
                <div style={s.projectDetail}>
                  <div style={s.projectTitle}>{p.title}</div>
                  <div style={s.projectDesc}>{p.desc}</div>
                  <div style={{ ...s.tagWrap, marginTop: 12 }}>
                    {p.tags.map((t) => <span key={t} style={s.tag}>{t}</span>)}
                  </div>
                  <ProjectStatus status={p.status} label={p.statusLabel} />

                  {/* ── Action buttons ── */}
                  <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                    <button
                      style={s.docBtn}
                      onClick={() => setActiveDoc(p)}
                    >
                      📄 Lihat Dokumentasi
                    </button>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      style={s.githubBtn}
                      onClick={(e) => e.stopPropagation()}
                    >
                      ⌥ GitHub ↗
                    </a>
                  </div>
                </div>

                {/* ── Arrow (dekoratif, tidak klik) ── */}
                <div style={{ ...s.projectArrow, ...(hovered ? s.projectArrowHover : {}) }}>
                  ↗
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div style={s.divider} />

      {/* ── CONTACT ── */}
      <section id="contact" style={s.section}>
        <SectionLabel>hubungi saya</SectionLabel>

        <div style={s.contactWrap}>
          <div style={s.contactHeadBlock}>
            <h2 style={{ ...s.h2, marginBottom: "0.6rem" }}>
              Mari ngobrol<br />
              <span style={{ color: GREEN }}>bareng.</span>
            </h2>
            <p style={{ ...s.bodyText, maxWidth: 420, marginBottom: 0 }}>
              Punya proyek, pertanyaan, atau peluang magang?
              Hubungi saya lewat salah satu kontak di bawah — saya akan balas secepatnya.
            </p>
          </div>

          <div style={s.contactCards}>
            {[
              {
                icon: "✉",
                label: "Email",
                value: "ramadan.211004@gmail.com",
                href: "mailto:ramadan.211004@gmail.com",
                hint: "Untuk keperluan formal / magang",
              },
              {
                icon: "📱",
                label: "WhatsApp",
                value: "+62 858-4397-0010",
                href: "https://wa.me/6285843970010",
                hint: "Respon lebih cepat",
              },
              {
                icon: "⌥",
                label: "GitHub",
                value: "Ezra21ID",
                href: "https://github.com/Ezra21ID",
                hint: "Lihat semua proyek saya",
              },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={s.contactCard2}>
                <div style={s.contactCardIcon}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={s.contactCardLabel}>{c.label}</div>
                  <div style={s.contactCardValue}>{c.value}</div>
                  <div style={s.contactCardHint}>{c.hint}</div>
                </div>
                <div style={s.contactCardArrow}>↗</div>
              </a>
            ))}
          </div>

          <a href="/Achmad Ramadan-resume.pdf" style={{ ...s.btnPrimaryLink, marginTop: "0.5rem", marginBottom: 0, display: "inline-block" }} download="Achmad Ramadan-resume.pdf">
            Download CV
          </a>
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
  portfolio: { fontFamily: "'Syne', sans-serif", background: "#0a0a0f", color: "#e8e4f0", minHeight: "100vh", overflowX: "hidden" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2rem 2rem", borderBottom: "0.5px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, background: "rgba(10,10,15,0.93)", backdropFilter: "blur(10px)", zIndex: 100 },
  navLogo: { fontFamily: "'Space Mono', monospace", fontSize: 14, color: GREEN, letterSpacing: "0.05em" },
  navLinks: { display: "flex", gap: "1.75rem", listStyle: "none", margin: 0, padding: 0 },
  navBtn: { fontFamily: "'Syne', sans-serif", fontSize: 13, color: "rgba(232,228,240,0.5)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.05em", padding: 0 },
  // hero: { padding: "5rem 2rem 4rem", maxWidth: 860, margin: "0 auto" },
  hero: { padding: "5rem 4rem 4rem", maxWidth: 1200, margin: "0 auto" },
  // section: { padding: "4rem 2rem", maxWidth: 860, margin: "0 auto" },
  section: { padding: "4rem 4rem", maxWidth: 1200, margin: "0 auto" },

  // divider: { height: "0.5px", background: "rgba(255,255,255,0.06)", margin: "0 2rem" },
  divider: { height: "0.5px", background: "rgba(255,255,255,0.06)", margin: "0 4rem" },

  badge: { display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(52,211,153,0.1)", border: `0.5px solid ${ACCENT_BOR}`, borderRadius: 20, padding: "5px 14px", fontFamily: "'Space Mono', monospace", fontSize: 10, color: GREEN, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.75rem" },
  badgeDot: { width: 6, height: 6, background: GREEN, borderRadius: "50%", animation: "pulse 2s infinite" },

  h1: { fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.4rem" },
  h1Gradient: { display: "block", background: "linear-gradient(135deg, #34d399 0%, #60a5fa 60%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  heroSub: { fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 600, color: GREEN, marginBottom: "1.5rem", letterSpacing: "-0.01em" },
  heroDesc: { fontSize: "0.97rem", color: "rgba(232,228,240,0.58)", maxWidth: 500, lineHeight: 1.8, marginBottom: "2.5rem" },
  heroCta: { display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" },

  btnPrimary: { background: GREEN, color: "#0a0a0f", border: "none", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, borderRadius: 6, cursor: "pointer", letterSpacing: "0.03em" },
  btnPrimaryLink: { display: "inline-block", background: GREEN, color: "#0a0a0f", border: "none", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, borderRadius: 6, cursor: "pointer", letterSpacing: "0.03em", textDecoration: "none", marginBottom: "1.5rem" },
  btnSecondary: { background: "transparent", color: "#e8e4f0", border: "0.5px solid rgba(255,255,255,0.2)", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600, borderRadius: 6, cursor: "pointer" },

  sectionLabel: { fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: 8 },
  sectionLabelLine: { display: "inline-block", width: 24, height: 1 },

  aboutGrid: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "3rem", alignItems: "start" },
  // aboutGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" },
  h2: { fontSize: "1.75rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem", letterSpacing: "-0.01em", color: "#e8e4f0" },
  bodyText: { fontSize: "0.93rem", color: "rgba(232,228,240,0.6)", lineHeight: 1.8, marginBottom: "0.9rem" },
  infoList: { display: "flex", flexDirection: "column", gap: 10, marginTop: "0.5rem" },
  infoRow: { display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(232,228,240,0.55)" },
  infoIcon: { fontSize: 15 },
  infoText: { color: "rgba(232,228,240,0.55)" },

  eduCard: { background: ACCENT_BG, border: `0.5px solid ${ACCENT_BOR}`, borderRadius: 12, padding: "1.4rem 1.6rem" },
  eduDegree: { fontSize: "1rem", fontWeight: 700, marginBottom: 4, color: "#e8e4f0" },
  eduUniv: { fontSize: 13, color: GREEN, marginBottom: 4 },
  eduYear: { fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(232,228,240,0.35)" },

  tagWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  tag: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: GREEN, background: "rgba(52,211,153,0.1)", border: `0.5px solid ${ACCENT_BOR}`, padding: "3px 9px", borderRadius: 4, letterSpacing: "0.04em" },

  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 },
  skillItem: { background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "1rem 1.2rem" },
  skillName: { fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#e8e4f0" },
  skillBar: { height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" },
  skillFill: { height: "100%", borderRadius: 2, background: "linear-gradient(90deg, #34d399, #60a5fa)" },
  skillNote: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(52,211,153,0.6)", marginTop: 5 },

  projectsList: { display: "flex", flexDirection: "column", gap: "1rem" },
  projectCard: { background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 0, display: "flex", alignItems: "stretch", gap: 0, overflow: "hidden", color: "inherit", transition: "border-color 0.2s, background 0.2s", cursor: "default" },
  projectCardHover: { borderColor: ACCENT_BOR, background: ACCENT_BG },
  projectThumb: { width: 240, minWidth: 240, background: "#0d1f18", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 },
  // projectThumb: { width: 180, minWidth: 180, background: "#0d1f18", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 },
  projectImg: { width: "100%", height: "100%", objectFit: "contain", display: "block", minHeight: 140 },
  projectImgPlaceholder: { width: "100%", minHeight: 140, display: "flex", alignItems: "center", justifyContent: "center" },
  projectThumbOverlay: { position: "absolute", inset: 0, background: "rgba(52,211,153,0.06)", pointerEvents: "none" },
  projectNumBadge: { position: "absolute", top: 8, left: 8, background: "rgba(10,10,15,0.75)", border: "0.5px solid rgba(52,211,153,0.3)", borderRadius: 4, padding: "2px 7px", fontFamily: "'Space Mono', monospace", fontSize: 10, color: GREEN, backdropFilter: "blur(4px)" },
  projectDetail: { flex: 1, padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" },
  projectTitle: { fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem", color: "#e8e4f0" },
  projectDesc: { fontSize: 13, color: "rgba(232,228,240,0.5)", lineHeight: 1.65 },
  projectArrow: { fontSize: 18, color: "rgba(232,228,240,0.1)", flexShrink: 0, transition: "color 0.2s, transform 0.2s", alignSelf: "center", paddingRight: "1.25rem" },
  projectArrowHover: { color: GREEN, transform: "translate(2px, -2px)" },

  // Tombol aksi di kartu proyek
  docBtn: { fontFamily: "'Space Mono', monospace", fontSize: 10, background: "rgba(52,211,153,0.12)", color: GREEN, border: `0.5px solid ${ACCENT_BOR}`, padding: "5px 12px", borderRadius: 5, cursor: "pointer", letterSpacing: "0.04em", transition: "background 0.15s" },
  githubBtn: { fontFamily: "'Space Mono', monospace", fontSize: 10, background: "rgba(255,255,255,0.04)", color: "rgba(232,228,240,0.55)", border: "0.5px solid rgba(255,255,255,0.1)", padding: "5px 12px", borderRadius: 5, cursor: "pointer", textDecoration: "none", letterSpacing: "0.04em", display: "inline-flex", alignItems: "center" },

  // ── Modal ──
  modalBackdrop: { position: "fixed", inset: 0, background: "rgba(5,5,10,0.85)", backdropFilter: "blur(6px)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", overflowY: "auto" },
  modal: { background: "#0f0f18", border: "0.5px solid rgba(52,211,153,0.2)", borderRadius: 16, padding: "2rem", maxWidth: 640, width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative" },
  modalHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" },
  modalNum: { fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(52,211,153,0.5)", display: "block", marginBottom: 4 },
  modalTitle: { fontSize: "1.4rem", fontWeight: 800, color: "#e8e4f0", margin: 0 },
  modalClose: { background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(232,228,240,0.5)", borderRadius: 6, width: 32, height: 32, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },

  modalScreenshotPlaceholder: { width: "100%", height: 180, background: "#0d1f18", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", border: "0.5px solid rgba(52,211,153,0.1)" },

  // gallery
  galleryMain: { position: "relative", width: "100%", height: 220, background: "#0d1f18", borderRadius: 8, overflow: "hidden", marginBottom: 8 },
  galleryNav: { position: "absolute", top: "50%", transform: "translateY(-50%)", background: "rgba(10,10,15,0.75)", border: "0.5px solid rgba(52,211,153,0.25)", color: GREEN, borderRadius: 6, width: 30, height: 30, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", zIndex: 2 },
  galleryCounter: { position: "absolute", bottom: 8, right: 10, fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(232,228,240,0.6)", background: "rgba(10,10,15,0.7)", padding: "2px 7px", borderRadius: 4, backdropFilter: "blur(4px)" },
  galleryStrip: { display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 },
  galleryThumb: { flexShrink: 0, width: 56, height: 42, borderRadius: 5, overflow: "hidden", border: "0.5px solid rgba(255,255,255,0.08)", cursor: "pointer", background: "#0d1f18", padding: 0 },
  galleryThumbActive: { border: `1.5px solid ${GREEN}` },

  modalBlock: { marginBottom: "1.75rem" },
  modalText: { fontSize: "0.9rem", color: "rgba(232,228,240,0.6)", lineHeight: 1.8, margin: 0 },

  modalList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 },
  modalListItem: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.9rem", color: "rgba(232,228,240,0.65)", lineHeight: 1.6 },
  modalListDot: { width: 5, height: 5, background: GREEN, borderRadius: "50%", flexShrink: 0, marginTop: 7 },

  techGrid: { display: "flex", flexDirection: "column", gap: 8 },
  techRow: { display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255,255,255,0.03)", borderRadius: 6, padding: "0.65rem 1rem", border: "0.5px solid rgba(255,255,255,0.06)" },
  techLayer: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: GREEN, letterSpacing: "0.08em", minWidth: 72, flexShrink: 0, paddingTop: 2 },
  techDetail2: { fontSize: "0.87rem", color: "rgba(232,228,240,0.6)", lineHeight: 1.5 },

  modalMeta: { display: "flex", gap: "1rem", flexWrap: "wrap", background: ACCENT_BG, border: `0.5px solid ${ACCENT_BOR}`, borderRadius: 8, padding: "1rem 1.25rem" },
  metaItem: { display: "flex", flexDirection: "column", gap: 3 },
  metaLabel: { fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(52,211,153,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" },
  metaValue: { fontSize: "0.9rem", color: "#e8e4f0", fontWeight: 600 },

  // contact
  contactWrap: { display: "flex", flexDirection: "column", gap: "2rem" },
  contactHeadBlock: { display: "flex", flexDirection: "column", gap: 0 },
  contactCards: { display: "flex", flexDirection: "column", gap: 10 },
  contactCard2: { display: "flex", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "1rem 1.25rem", textDecoration: "none", color: "inherit", transition: "border-color 0.2s, background 0.2s" },
  contactCardIcon: { fontSize: 20, width: 44, height: 44, background: ACCENT_BG, border: `0.5px solid ${ACCENT_BOR}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  contactCardLabel: { fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(52,211,153,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 },
  contactCardValue: { fontSize: "0.95rem", fontWeight: 600, color: "#e8e4f0", marginBottom: 2 },
  contactCardHint: { fontSize: 12, color: "rgba(232,228,240,0.35)" },
  contactCardArrow: { fontSize: 16, color: "rgba(232,228,240,0.15)", flexShrink: 0, marginLeft: "auto" },

  footer: { padding: "1.5rem 4rem", textAlign: "center", fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(232,228,240,0.18)", borderTop: "0.5px solid rgba(255,255,255,0.05)", maxWidth: 1200, margin: "0 auto" },
  // footer: { padding: "1.5rem 2rem", textAlign: "center", fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(232,228,240,0.18)", borderTop: "0.5px solid rgba(255,255,255,0.05)", maxWidth: 860, margin: "0 auto" },
};
