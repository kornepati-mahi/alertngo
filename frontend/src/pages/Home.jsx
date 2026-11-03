import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaPlay,
  FaLeaf,
  FaHeart,
  FaQuoteLeft,
  FaUniversity,
  FaStickyNote,
  FaCloud,
  FaTree,
  FaWater,
  FaFish,
  FaMapMarkerAlt,
  FaMapMarkedAlt,
  FaAward,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaInstagram,
  FaGraduationCap,
  FaTimes,
  FaCheckCircle
} from "react-icons/fa";
import AnimatedTypewriter from "../components/AnimatedTypewriter";
import FlipCard from "../components/FlipCard";

const heroSlides = [
  { bg: "/uploads/submergence-area-map-1.jpg", sub: "Defending Adivasi Forest & Land Rights" },
  { bg: "/uploads/all2023.jpeg", sub: "Flood Relief & Emergency Provisioning" },
  { bg: "/uploads/WhatsApp-Image-2021-08-19-at-6.48.06-PM-1024x768.jpeg", sub: "Empowering Marginalized Communities" },
  { bg: "/uploads/PHOTO-2023-02-15-19-20-55_1.jpg", sub: "Revitalizing Gram Sabha Self-Governance" },
  { bg: "/uploads/WhatsApp-Image-2021-09-16-at-7.50.55-PM-1024x461.jpeg", sub: "Project Green Energy: Solar Future" },
];

// Generated once so the 5s hero slider re-render doesn't rebuild particles.
const heroParticles = Array.from({ length: 10 }, (_, i) => ({
  size: Math.random() * 6 + 3,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  color:
    i % 3 === 0
      ? "rgba(210,25,12,0.6)"
      : i % 3 === 1
      ? "rgba(245,160,0,0.6)"
      : "rgba(62,142,15,0.45)",
  delay: `${Math.random() * 6}s`,
  duration: `${Math.random() * 4 + 4}s`,
}));

const alertTeamMembers = [
  {
    name: "Prof. Ch. Diwakar Babu",
    role: "President",
    img: "/uploads/Divakar-Babu.jpg",
    bio: "Renowned legal scholar, former Principal of V.R. Law College, and constitutional rights specialist guiding ALERT's legal interventions in tribal fifth-scheduled areas.",
    highlights: ["Principal VR Law College", "Constitutional Rights Expert", "Appellate Litigation Advisor"],
    quote: "Justice is non-negotiable for the indigenous forest dwelling communities."
  },
  {
    name: "Mr V. Rama Krishna",
    role: "Vice President",
    img: "/uploads/Ramakrishna.jpg",
    bio: "Senior development activist specializing in rural livelihood cooperatives, grassroots agrarian sustainability, and natural resource stewardship for forest hamlets.",
    highlights: ["Rural Livelihood Cooperatives", "Community Mobilization", "Natural Resource Policy"],
    quote: "Self-reliance begins when communities govern their own indigenous land."
  },
  {
    name: "Mr Y.L.J.B. Jayaraj",
    role: "Secretary & Director",
    img: "/uploads/jayaraj-sir.jpg",
    bio: "Founder & Chief Functionary with 47+ years of grass-roots human rights, affirmative tribal advocacy, and institutional leadership across Andhra Pradesh.",
    highlights: ["47+ Years Grassroots Leadership", "FRA & PESA Enforcement Specialist", "Disaster Relief Coordinator"],
    quote: "Every tribal settlement has a constitutional right to sovereignty, dignity, and flourishing."
  },
  {
    name: "Ms P. Sirisha",
    role: "Treasurer",
    img: "/uploads/Sirisha-1.jpg",
    bio: "Development finance specialist overseeing statutory financial auditing, reporting, and regulatory compliances under FCRA and Indian Income Tax regulations.",
    highlights: ["12A & 80G Compliances", "Statutory Financial Auditing", "Transparent Donor Reporting"],
    quote: "Uncompromising integrity and financial transparency are our core tenets."
  },
  {
    name: "Mr J. Prasad",
    role: "Executive Member",
    img: "/uploads/Jillela-Prasad-1-3.png",
    bio: "Community organizer actively directing field campaigns on Forest Rights (RoFR 2006), GPS boundary demarcation, and Gram Sabha empowerment across Godavari agency mandals.",
    highlights: ["RoFR Patta Verification", "Gram Sabha Mobilizer", "Youth Leadership Training"],
    quote: "The Gram Sabha is the true sovereign custodian of our ancestral forests."
  },
  {
    name: "Ms K.L. Nancharamma",
    role: "Executive Member",
    img: "/uploads/Nancharamma-1-1.png",
    bio: "Indigenous community leader championing Yenadi women rights, healthcare access, and the Antyodaya Matsya Mithra fisheries cooperative federation.",
    highlights: ["Antyodaya Women Leader", "Fisheries Cooperative Builder", "Indigenous Gender Rights"],
    quote: "When women lead economic cooperatives, entire tribal habitations rise."
  },
  {
    name: "Ms N. Silpa",
    role: "Executive Member",
    img: "/uploads/silpa-1.png",
    bio: "Field intervention coordinator focusing on tribal youth digital informatics, ashram school education equity, and flood disaster relief logistical operations.",
    highlights: ["Tribal Youth Informatics", "Ashram School Advocacy", "Emergency Relief Operations"],
    quote: "Education and digital access are the strongest equalizers for tribal youth."
  },
];

function GoogleMark({ size = 20 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" focusable="false">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

function StatCounter({ end, suffix = "", label, note, icon, accent = "#F5A000" }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const duration = 2200;
    let animId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      className="impact-card"
      style={{ "--impact-accent": accent }}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="impact-icon">{icon}</div>
      <div className="impact-number">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="impact-label">{label}</div>
      {note && <p className="impact-note">{note}</p>}
    </motion.div>
  );
}

const programs = [
  { img: "/uploads/PHOTO-2023-02-15-19-20-56_2-1.jpg", cat: "Forest Rights", title: "Forest Rights & Land Advocacy", desc: "Securing individual (IFR) and community forest rights (CFR) for Adivasi families under the Forest Rights Act, protecting thousands of acres." },
  { img: "/uploads/PHOTO-2023-02-15-19-20-52_1.jpg", cat: "Governance", title: "Self-Governance & PESA Act", desc: "Mobilizing Adivasi communities for self-governance through Gram Sabha empowerment and PESA Act implementation." },
  { img: "/uploads/submergence-area-map-1.jpg", cat: "Polavaram PIP", title: "Land Acquisition & R&R Advocacy", desc: "Defending rights of 1,05,000+ Project Displaced Families across 371 habitations under the RFCTLARR Act 2013." },
  { img: "/uploads/PHOTO-2023-02-15-19-21-00_1.jpg", cat: "Empowerment", title: "Matsya Mithra Women Federation", desc: "Forming and strengthening women-led cooperatives for Yenadi tribal women across 6 coastal mandals of Krishna District." },
  { img: "/uploads/all2023.jpeg", cat: "Disaster Relief", title: "Godavari Flood Relief Missions", desc: "Essential grocery provisions, rescue boat operations, and emergency supplies to flood-affected Adivasi communities." },
  { img: "/uploads/WhatsApp-Image-2021-09-16-at-7.50.55-PM-1024x461.jpeg", cat: "Clean Energy", title: "Project Green Energy: Solar Lighting", desc: "Installing solar street poles and distributing solar home lanterns in remote off-grid tribal villages." },
];

const INSTAGRAM_PROFILE = "https://www.instagram.com/alert.ngo/";

const reels = [
  { img: "/uploads/reel-1-dhimsa.jpg", video: "/uploads/reel-1-dhimsa.mp4", label: "Reel 1", duration: "0:08", topic: "Culture & Identity", title: "Dhimsa dance at a community gathering" },
  { img: "/uploads/reel-2-learning.jpg", video: "/uploads/reel-2-learning.mp4", label: "Reel 2", duration: "0:08", topic: "Education", title: "Digital learning reaches agency schools" },
  { img: "/uploads/reel-3-school-kits.jpg", video: "/uploads/reel-3-school-kits.mp4", label: "Reel 3", duration: "0:08", topic: "Child Support", title: "School kits for children in hill villages" },
  { img: "/uploads/reel-4-women.jpg", video: "/uploads/reel-4-women.mp4", label: "Reel 4", duration: "0:08", topic: "Women's Collectives", title: "Yenadi women's federation convention" },
];

const testimonials = [
  { text: "ALERT has transformed our village. We finally have our forest rights documents and can access the forest resources that belong to us.", name: "Ramaiah G.", role: "Village Leader, Khammam District" },
  { text: "Thanks to ALERT's women cooperative, I can now earn independently through fishing. My children are in school and our lives have changed.", name: "Lakshmi Devi", role: "Matsya Mithra Group Member" },
  { text: "The solar poles installed by ALERT mean our children can study at night. Education opportunities have improved dramatically.", name: "Venkat Rao", role: "Tribal Community Member" },
  { text: "Our Gram Sabha finally has the powers the PESA Act promised. Decisions about our forests are made in the village, not in an office far away.", name: "Sanna Koya", role: "Gram Sabha Member, ASR Agency" },
  { text: "When the Godavari flooded, ALERT's boat reached us with rice, water and medicines before any other help arrived.", name: "Mutta Raju", role: "Flood-Affected Farmer, Eluru Agency" },
  { text: "The Matsya Mithra cooperative gave fisherwomen in our village a collective voice, better prices and a steady income.", name: "Durgamma P.", role: "Matsya Mithra Federation Member" },
  { text: "I learned to use a computer for the first time at the ALERT learning centre. Now I help my younger sister with her schoolwork.", name: "Ravi Kumar", role: "Digital Learning Student, Khammam" },
  { text: "The school kit my children received at the start of the year meant they could attend class with everything they needed.", name: "Meenakshi V.", role: "Parent, Rampachodavaram ITDA" },
  { text: "With ALERT's legal support our village filed for community forest rights together. The title is in the name of the whole community.", name: "Buchamma K.", role: "Community Forest Rights Holder" },
  { text: "ALERT helped our family understand the rehabilitation package we were owed and follow up until the papers were cleared.", name: "Prasad Naidu", role: "Project Displaced Family, Polavaram Belt" },
];

const regions = [
  {
    title: "ASR Hill Agency",
    tag: "Rampachodavaram & Chinturu ITDAs",
    desc: "PESA Gram Sabha sovereignty, community forest rights (CFR) and individual forest pattas across the Eastern Ghats agency mandals.",
    mandals: "6 mandals",
    tribes: "Koya · Konda Reddi (PVTG) · Valmiki",
    stat: "6 Mandals",
    img: "/uploads/region-asr-culture.jpg",
    alt: "Adivasi cultural gathering in the agency hills",
    accent: "#3E8E0F",
    tint: "rgba(62,142,15,0.12)",
    icon: <FaTree size={20} />,
  },
  {
    title: "Eluru Agency & Polavaram",
    tag: "K.R. Puram ITDA · Dam Belt",
    desc: "LTR 1/70 land restitution, fair RFCTLARR compensation and rehabilitation support for families facing Polavaram submergence.",
    mandals: "5 mandals · 371 habitations",
    tribes: "Koya · Konda Dora · Nayaks",
    stat: "371 Habitations",
    img: "/uploads/submergence-area-map-1.jpg",
    alt: "Polavaram submergence contour map along the Godavari",
    accent: "#D97706",
    tint: "rgba(217,119,6,0.12)",
    icon: <FaWater size={20} />,
  },
  {
    title: "Coastal Krishna Belt",
    tag: "Machilipatnam Coastal Cell",
    desc: "Land and housing entitlements for nomadic Yenadi families, the Matsya Mithra women's fisheries federation, and mangrove resilience.",
    mandals: "6 coastal mandals",
    tribes: "Yenadi · Fisher communities",
    stat: "3,500+ Women",
    img: "/uploads/coastal-krishna-fishing.jpg",
    alt: "Traditional fishing crews on the Krishna coast",
    accent: "#0ea5e9",
    tint: "rgba(14,165,233,0.12)",
    icon: <FaFish size={20} />,
  },
];

export default function HomePage() {
  const [slideIdx, setSlideIdx] = useState(0);
  // Only the visible slide (plus the next one) downloads up front instead of all five.
  const [readySlides, setReadySlides] = useState([0, 1]);
  const [playingReel, setPlayingReel] = useState(null);
  const reelTrackRef = useRef(null);
  const [reelSlide, setReelSlide] = useState(0);

  const handleReelScroll = () => {
    const el = reelTrackRef.current;
    if (!el) return;
    const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    [...el.children].forEach((child, i) => {
      const r = child.getBoundingClientRect();
      const dist = Math.abs((r.left + r.right) / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setReelSlide(best);
  };

  const goToReel = (i) => {
    const el = reelTrackRef.current;
    const child = el?.children[i];
    if (!el || !child) return;
    const left = child.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
    el.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    if (playingReel === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setPlayingReel(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [playingReel]);

  useEffect(() => {
    const next = (slideIdx + 1) % heroSlides.length;
    setReadySlides((prev) =>
      prev.includes(next) && prev.includes(slideIdx) ? prev : [...new Set([...prev, slideIdx, next])]
    );
  }, [slideIdx]);

  useEffect(() => {
    const t = setInterval(() => setSlideIdx((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);


  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-slider">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={`hero-slide ${i === slideIdx ? "active" : ""}`}
              style={readySlides.includes(i) ? { backgroundImage: `url(${s.bg})` } : undefined}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-particles">
          {heroParticles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                top: p.top,
                background: p.color,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
        <div className="hero-content container">
          <div className="hero-grid">
            <div>
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <FaLeaf /> Est. 2004 - Reg. No. 307/2004
              </motion.div>
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Association for Land<br />& <span className="text-gradient">Livelihood</span>
              </motion.h1>
              <motion.div
                className="hero-subtitle"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                style={{ minHeight: "2.6rem", lineHeight: 1.35 }}
              >
                <AnimatedTypewriter
                  prefix="Dedicated to "
                  words={[
                    "Adivasi Forest & Land Rights",
                    "Polavaram Displaced Rehabilitation",
                    "Gram Sabha Self-Governance (PESA)",
                    "Antyodaya Women Cooperatives",
                    "Clean Solar Energy for Tribal Hamlets",
                    "Emergency Godavari Flood Relief"
                  ]}
                  typingSpeed={60}
                  deletingSpeed={30}
                  pauseTime={2000}
                />
              </motion.div>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Empowering Adivasi communities in the Fifth Scheduled Areas of Andhra Pradesh through forest rights, self-governance, and sustainable development since 2004.
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link to="/about" className="btn-primary">
                  <FaPlay size={12} /> Our Story
                </Link>
                <Link
                  to="/donate"
                  className="btn-outline"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  Donate Now <FaHeart size={12} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="hero-slider-dots">
          {heroSlides.map((_, i) => (
            <div
              key={i}
              className={`slider-dot ${i === slideIdx ? "active" : ""}`}
              onClick={() => setSlideIdx(i)}
            />
          ))}
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="section-pad features-section">
        <div className="container">
          <div className="features-grid">
            {[
              {
                icon: <FaUniversity size={28} color="var(--color-primary)" />,
                title: "Our Work",
                desc: "ALERT, established in 2004, specializes in empowering Adivasis in the Fifth Scheduled Areas of Andhra Pradesh through rights-based approaches.",
                link: "/about"
              },
              {
                icon: <FaStickyNote size={28} color="var(--color-secondary)" />,
                title: "Our Vision",
                desc: "Empowerment of socially excluded and marginalized communities towards prosperity and peace through constitutional rights-based development.",
                link: "/about"
              },
              {
                icon: <FaCloud size={28} color="#22c55e" />,
                title: "Our Mission",
                desc: "To awaken, sensitize, organize and mobilize Adivasi communities for Self-governance, self-reliance, and sustainable environment.",
                link: "/about"
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
                <Link to={f.link} className="feature-link">
                  Read more <FaArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-pad about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-image">
                <img
                  src="/uploads/WhatsApp-Image-2021-08-19-at-6.48.06-PM-1024x768.jpeg"
                  alt="ALERT Team" loading="lazy" decoding="async" />
              </div>
              <div className="about-image-badge">
                <div className="years">20+</div>
                <div className="years-label">Years of Service</div>
              </div>
            </motion.div>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="about-tag">Who We Are</p>
              <h2 className="about-title">Championing Adivasi Rights and Sustainable Development</h2>
              <p className="about-lead">
                Led by YL Jayaraj with 47 years of NGO experience, ALERT specializes in empowering Adivasis in Andhra Pradesh.
              </p>
              <p className="about-text">
                ALERT, established in 2004, is a South India-based not-for-profit organization headquartered in Vijayawada. The organization focuses on ensuring effective implementation of affirmative legislations, securing forest rights, and promoting self-governance.
              </p>
              <p className="about-text">
                ALERT partners with Adivasi Mahasabha, advocating for Adivasi rights and sustainable development, supporting thousands of acres of individual and community forest rights besides facilitating effective service delivery.
              </p>
              <div className="about-features">
                {[
                  "Forest Rights Secured",
                  "Women Empowerment",
                  "Sustainable Livelihoods",
                  "Self-Governance",
                  "Natural Resources",
                  "Disaster Relief"
                ].map((f, i) => (
                  <div key={i} className="about-feature-item">
                    <div className="check">✓</div> {f}
                  </div>
                ))}
              </div>
              <div className="about-actions">
                <Link to="/about" className="btn-primary">
                  Learn More <FaArrowRight size={12} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get Involved
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="section-pad regions-section" id="regions">
        <div className="container">
          <motion.div
            className="regions-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Where We Work</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Three Regions, One Commitment</h2>
            <p className="section-subtitle">
              From the Eastern Ghats agency hills to the Godavari submergence belt and the Krishna coast, ALERT stands with Adivasi communities wherever rights are at stake.
            </p>
          </motion.div>
          <div className="regions-grid">
            {regions.map((r, i) => (
              <motion.article
                key={r.title}
                className="region-card"
                style={{ "--region-accent": r.accent }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <div className="region-media">
                  <img src={r.img} alt={r.alt} loading="lazy" decoding="async" />
                  <div className="region-media-shade" />
                  <span className="region-media-stat">{r.stat}</span>
                </div>
                <div className="region-card-icon" style={{ background: r.tint }}>{r.icon}</div>
                <div className="region-body">
                  <span className="region-card-tag">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p className="region-desc">{r.desc}</p>
                  <div className="region-meta">
                    <span><FaMapMarkerAlt size={11} /> {r.mandals}</span>
                    <span><FaUsers size={11} /> {r.tribes}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="regions-footer">
            <Link to="/about">
              Explore our interactive area map <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT GREEN ENERGY */}
      <section className="section-pad" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 40, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="badge" style={{ marginBottom: 14, display: "inline-block" }}>Clean Energy Initiative</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 16 }}>
                Project Green Energy
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 16 }}>
                Bridging the energy divide across isolated tribal hill habitations that never had electric grid infrastructure. ALERT works hand-in-hand with village youth to install decentralized clean solar street poles and distribute durable solar home lanterns.
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 24 }}>
                This initiative ensures children can study after dark, mitigates human-wildlife encounters during night hours, and replaces toxic kerosene lamps with clean, zero-emission lighting.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 14 }}>
                {[
                  { n: "75+", l: "Hamlets Electrified" },
                  { n: "3,500+", l: "Solar Lanterns" },
                  { n: "100%", l: "Clean Energy" },
                ].map((s, i) => (
                  <div key={i} style={{ background: "white", padding: "16px 12px", borderRadius: 12, textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--color-primary)" }}>{s.n}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-light)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                <img
                  src="/uploads/WhatsApp-Image-2021-09-16-at-7.50.55-PM-1024x461.jpeg"
                  alt="Project Green Energy Solar Erection"
                  style={{ width: "100%", height: "360px", objectFit: "cover" }} loading="lazy" decoding="async" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC ALERT TEAM SECTION */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <motion.div
            className="text-center"
            style={{ marginBottom: 48 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: 12, display: "inline-block" }}>Board of Directors</span>
            <h2 className="section-title">ALERT Team</h2>
            <p className="section-subtitle">Leadership dedicated to justice, dignity, and sustainable prosperity for Adivasis.</p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }}>
            {alertTeamMembers.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <FlipCard
                  img={m.img}
                  name={m.name}
                  role={m.role}
                  bio={m.bio}
                  badge="Board of Directors"
                  highlights={m.highlights}
                  quote={m.quote}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="section-pad impact-section" id="impact">
        <div className="container">
          <motion.div
            className="impact-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Our Impact</span>
            <h2 className="section-title" style={{ color: "white", marginBottom: 16 }}>Two Decades of Transformative Change</h2>
            <p className="section-subtitle">Measurable impact across Adivasi communities in Andhra Pradesh</p>
          </motion.div>
          <div className="impact-grid">
            <StatCounter end={20} suffix="+" label="Years of Service" note="Rooted in the Fifth Scheduled Areas since 2004" icon={<FaAward size={20} />} />
            <StatCounter end={25000} suffix="+" label="Families Impacted" note="Adivasi households across three operating regions" icon={<FaUsers size={20} />} accent="#38BDF8" />
            <StatCounter end={15000} suffix="+" label="Acres Forest Rights" note="Individual and community forest titles secured" icon={<FaTree size={20} />} accent="#7BC043" />
            <StatCounter end={371} label="Habitations Defended" note="Polavaram submergence villages under R&R advocacy" icon={<FaMapMarkedAlt size={20} />} accent="#FF7A5C" />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section-pad programs-section" id="programs">
        <div className="container">
          <motion.div
            className="programs-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>What We Do</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Our Key Programs</h2>
            <p className="section-subtitle">Comprehensive programs addressing the needs of Adivasi and marginalized communities</p>
          </motion.div>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                className="program-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="program-image">
                  <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
                  <div className="program-image-overlay" />
                  <span className="program-category">{p.cat}</span>
                </div>
                <div className="program-content">
                  <h3 className="program-title">{p.title}</h3>
                  <p className="program-desc">{p.desc}</p>
                  <Link to="/programs" className="program-link">
                    Learn More <FaArrowRight size={11} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM REELS */}
      <section className="section-pad reels-section" id="reels">
        <div className="container">
          <motion.div
            className="reels-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>
              <FaInstagram size={10} style={{ marginRight: 6, verticalAlign: "-1px" }} />
              Instagram
            </span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Stories from the Field</h2>
            <p className="section-subtitle">Short videos from our work across Andhra Pradesh — follow us for the latest from the communities we serve.</p>
          </motion.div>

          <motion.div
            className="reels-shell"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="reels-profile">
              <a className="reels-avatar-ring" href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer" aria-label="ALERT NGO on Instagram">
                <img src="/uploads/alert-logo-transparent-cropped-removebg-preview-2.png" alt="ALERT NGO logo" width="64" height="64" />
              </a>
              <div className="reels-profile-copy">
                <div className="reels-handle">alert.ngo</div>
                <div className="reels-profile-meta">@alert.ngo · Instagram</div>
                <p className="reels-profile-bio">Adivasi rights, forest governance &amp; women's collectives across Andhra Pradesh.</p>
              </div>
              <div className="reels-profile-actions">
                <a className="reels-follow" href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer">
                  <FaInstagram size={13} /> Follow
                </a>
                <a className="reels-outline" href={`${INSTAGRAM_PROFILE}reels/`} target="_blank" rel="noreferrer">
                  <FaPlay size={9} /> View Reels
                </a>
              </div>
            </div>

            <div className="reels-track" ref={reelTrackRef} onScroll={handleReelScroll}>
              {reels.map((r, i) => (
                <motion.div
                  key={r.label}
                  className={`reel-card${playingReel === i ? " is-playing" : ""}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <img src={r.img} alt={r.title} loading="lazy" decoding="async" />
                  {playingReel === i && (
                    <video
                      className="reel-video-inline"
                      src={r.video}
                      poster={r.img}
                      controls
                      autoPlay
                      playsInline
                      muted
                      preload="metadata"
                      onEnded={() => setPlayingReel(null)}
                    />
                  )}
                  <span className="reel-shade" aria-hidden="true" />
                  <span className="reel-tag"><FaPlay size={7} /> {r.label}</span>
                  <span className="reel-duration" aria-hidden="true">{r.duration}</span>
                  {playingReel === i ? (
                    <button
                      type="button"
                      className="reel-stop"
                      onClick={() => setPlayingReel(null)}
                      aria-label={`Stop ${r.label}`}
                    >
                      <FaTimes size={12} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="reel-play"
                      onClick={() => setPlayingReel(i)}
                      aria-label={`Play ${r.label}: ${r.title}`}
                    >
                      <FaPlay size={15} />
                    </button>
                  )}
                  <span className="reel-info">
                    <span className="reel-topic">{r.topic}</span>
                    <span className="reel-title">{r.title}</span>
                    {playingReel !== i && (
                      <span className="reel-open">Tap to play <FaPlay size={6} /></span>
                    )}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="reels-dots">
              {reels.map((r, i) => (
                <button
                  key={r.label}
                  type="button"
                  className={`reels-dot${reelSlide === i ? " is-active" : ""}`}
                  onClick={() => goToReel(i)}
                  aria-label={`Show ${r.label}`}
                  aria-current={reelSlide === i ? "true" : undefined}
                />
              ))}
            </div>

            <div className="reels-footer">
              <p className="reels-caption">
                <FaInstagram size={13} /> Enjoying our content? Follow us for field updates and stories from the communities we serve.
              </p>
              <a className="reels-cta" href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer">
                Visit our profile <FaArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad testimonials-section">
        <div className="container">
          <motion.div
            className="testimonials-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Testimonials</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Voices from the Community</h2>
            <a
              className="google-review-badge"
              href="https://www.google.com/search?q=ALERT+NGO+Vijayawada+reviews"
              target="_blank"
              rel="noreferrer"
              aria-label="Read ALERT NGO reviews on Google"
            >
              <span className="google-review-logo" aria-hidden="true">
                <GoogleMark size={20} />
              </span>
              <span className="google-review-copy">
                <span className="google-review-title">
                  <span className="google-review-name">
                    <span className="g-blue">G</span><span className="g-red">o</span><span className="g-yellow">o</span><span className="g-blue">g</span><span className="g-green">l</span><span className="g-red">e</span> Reviews
                  </span>
                  <span className="google-stars" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((s) => <FaStar key={s} size={10} />)}
                  </span>
                </span>
                <span className="google-review-meta">See what our community says on Google</span>
              </span>
              <FaArrowRight className="google-review-arrow" size={12} />
            </a>
          </motion.div>
          <div className="testimonials-marquee">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="testimonial-card marquee-card"
                  aria-hidden={i >= testimonials.length ? "true" : undefined}
                >
                  <div>
                    <div className="testimonial-top">
                      <FaQuoteLeft className="testimonial-quote" />
                      <span className="testimonial-google" title="Google review">
                        <GoogleMark size={13} />
                        <span className="testimonial-google-word">Google</span>
                        <span className="testimonial-google-stars" aria-hidden="true">
                          {[0, 1, 2, 3, 4].map((s) => <FaStar key={s} size={8} />)}
                        </span>
                      </span>
                    </div>
                    <p className="testimonial-text">{t.text}</p>
                  </div>
                  <div className="testimonial-author" style={{ marginTop: 20 }}>
                    <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section cta-section--home" id="get-involved">
        <div className="container cta-container">
          <motion.div
            className="cta-shell"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Ambient lighting accents */}
            <div className="cta-shell-glow cta-shell-glow-1" aria-hidden="true" />
            <div className="cta-shell-glow cta-shell-glow-2" aria-hidden="true" />

            <div className="cta-copy">
              <div className="cta-badge">
                <span className="cta-badge-dot" aria-hidden="true" />
                <span>Get Involved</span>
              </div>

              <h2 className="cta-title">
                Ready to Make a <span className="cta-title-highlight">Lasting Difference?</span>
              </h2>

              <p className="cta-subtitle">
                Join ALERT in empowering Adivasi communities. Your support directly funds legal advocacy for ancestral forest rights, women-led cooperatives, agency school education, and emergency flood relief across Andhra Pradesh.
              </p>

              <div className="cta-actions">
                <Link to="/donate" className="cta-btn-donate">
                  <span>Donate Now</span>
                  <span className="cta-donate-heart" aria-hidden="true">
                    <FaHeart size={13} />
                  </span>
                </Link>
                <Link to="/contact" className="cta-btn-volunteer">
                  <span>Volunteer with Us</span>
                  <FaArrowRight size={12} className="cta-btn-arrow" aria-hidden="true" />
                </Link>
              </div>

              <div className="cta-trust-strip">
                <div className="cta-trust-item">
                  <FaShieldAlt className="cta-trust-icon" aria-hidden="true" />
                  <span>100% Grassroots Work</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaCheckCircle className="cta-trust-icon" aria-hidden="true" />
                  <span>80G Tax Exemption</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaAward className="cta-trust-icon" aria-hidden="true" />
                  <span>30+ Years of Impact</span>
                </div>
              </div>
            </div>

            <div className="cta-panel">
              <div className="cta-panel-head">
                <div>
                  <span className="cta-panel-eyebrow">Where Your Support Goes</span>
                  <h3 className="cta-panel-heading">Direct Impact Breakdown</h3>
                </div>
                <span className="cta-panel-count">4 Key Missions</span>
              </div>

              <div className="cta-panel-list">
                <div className="cta-panel-card">
                  <div className="cta-panel-icon cta-icon-green" aria-hidden="true">
                    <FaTree size={18} />
                  </div>
                  <div className="cta-panel-info">
                    <div className="cta-panel-row">
                      <strong>Forest &amp; Land Rights</strong>
                      <span className="cta-impact-badge cta-impact-green">5,000+ Acres</span>
                    </div>
                    <span className="cta-panel-desc">Legal aid for IFR &amp; CFR community claims</span>
                  </div>
                </div>

                <div className="cta-panel-card">
                  <div className="cta-panel-icon cta-icon-gold" aria-hidden="true">
                    <FaUsers size={18} />
                  </div>
                  <div className="cta-panel-info">
                    <div className="cta-panel-row">
                      <strong>Women's Collectives</strong>
                      <span className="cta-impact-badge cta-impact-gold">1,200+ Women</span>
                    </div>
                    <span className="cta-panel-desc">Matsya Mithra cooperatives &amp; livelihoods</span>
                  </div>
                </div>

                <div className="cta-panel-card">
                  <div className="cta-panel-icon cta-icon-blue" aria-hidden="true">
                    <FaGraduationCap size={18} />
                  </div>
                  <div className="cta-panel-info">
                    <div className="cta-panel-row">
                      <strong>Education &amp; Learning</strong>
                      <span className="cta-impact-badge cta-impact-blue">800+ Students</span>
                    </div>
                    <span className="cta-panel-desc">Digital classrooms &amp; agency school kits</span>
                  </div>
                </div>

                <div className="cta-panel-card">
                  <div className="cta-panel-icon cta-icon-red" aria-hidden="true">
                    <FaCloud size={18} />
                  </div>
                  <div className="cta-panel-info">
                    <div className="cta-panel-row">
                      <strong>Disaster Relief</strong>
                      <span className="cta-impact-badge cta-impact-red">Immediate Aid</span>
                    </div>
                    <span className="cta-panel-desc">Godavari flood rescue &amp; food provisions</span>
                  </div>
                </div>
              </div>

              <Link to="/programs" className="cta-panel-link">
                <span>Explore all 6 impact programmes</span>
                <span className="cta-panel-arrow" aria-hidden="true">
                  <FaArrowRight size={12} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
