import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLandmark,
  FaTree,
  FaGavel,
  FaHandHoldingHeart,
  FaCheckCircle,
  FaSun,
  FaUsers,
  FaAward,
  FaHistory,
  FaCalendarAlt,
  FaCompass
} from "react-icons/fa";

const MILESTONES_DATA = [
  {
    year: "2004",
    title: "ALERT Founded & Registered",
    phase: "FOUNDATION & STATUTORY MANDATE",
    category: "Legal & Rights",
    color: "#1e3a8a",
    icon: <FaLandmark />,
    stat: "Registration No. 307/2004",
    desc: "ALERT was formally established in Vijayawada under the Societies Registration Act, 1860. Guided by founder-director Y.L.J.B. Jayaraj with 47 years of grassroots advocacy, ALERT dedicated its statutory mission to protecting marginalized communities across Andhra Pradesh's Fifth Scheduled Areas."
  },
  {
    year: "2008",
    title: "Forest Rights Act (RoFR 2006) Movement",
    phase: "INDIGENOUS LAND RIGHTS",
    category: "Land & Energy",
    color: "#10b981",
    icon: <FaTree />,
    stat: "Gram Sabha Community Mapping",
    desc: "Pioneered intensive legal literacy, GPS boundary demarcation, and Community Forest Rights (CFR) claim campaigns across the Godavari agency forest tracts, mobilizing Gram Sabhas to claim their ancestral homeland under the landmark RoFR Act 2006."
  },
  {
    year: "2012",
    title: "Historic Polavaram Displacement PILs",
    phase: "APPELLATE CONSTITUTIONAL LITIGATION",
    category: "Legal & Rights",
    color: "#ef4444",
    icon: <FaGavel />,
    stat: "High Court & Supreme Court Writs",
    desc: "Filed landmark Public Interest Litigations (PILs) challenging arbitrary compensation norms and forced evictions for the Polavaram Multi-Purpose Irrigation Project, demanding comprehensive land-for-land rehabilitation under constitutional guarantees."
  },
  {
    year: "2016",
    title: "Antyodaya Project for Nomadic Yenadis",
    phase: "NOMADIC COMMUNITY RESILIENCE",
    category: "Community & Women",
    color: "#0ea5e9",
    icon: <FaHandHoldingHeart />,
    stat: "6 Coastal Mandals • BftW Partnership",
    desc: "Launched the flagship Antyodaya Project across 6 coastal mandals of Krishna District with Bread for the World (BftW, Germany) partnership, securing permanent house-site pattas, civil documentation, and clean drinking water for excluded nomadic Yenadi families."
  },
  {
    year: "2019",
    title: "15,000+ Forest Acres Legally Secured",
    phase: "FOREST TENURE TRIUMPH",
    category: "Land & Energy",
    color: "#16a34a",
    icon: <FaCheckCircle />,
    stat: "15,000+ Acres Certified Pattas",
    desc: "Crossed a historic milestone: successfully securing individual and Community Forest Resource (CFR) titles over 15,000+ acres for Adivasi habitations, ending decades of eviction threats by forest authorities."
  },
  {
    year: "2021",
    title: "Solar Micro-Grids in 75+ Off-Grid Hamlets",
    phase: "DECENTRALIZED CLEAN ENERGY",
    category: "Land & Energy",
    color: "#f59e0b",
    icon: <FaSun />,
    stat: "75+ Remote Hamlets Electrified",
    desc: "Brought clean decentralized solar home lighting and solar water purification units to 75+ remote, off-grid tribal hamlets deep inside the Godavari river gorges cut off from conventional power grids."
  },
  {
    year: "2023",
    title: "Matsya Mithra Women Fisheries Crosses 3,500 Members",
    phase: "WOMEN COOPERATIVE FEDERATION",
    category: "Community & Women",
    color: "#8b5cf6",
    icon: <FaUsers />,
    stat: "3,500+ Indigenous Women Leaders",
    desc: "The Antyodaya Matsya Mithra Women Fisheries Federation expanded to over 3,500 active indigenous fisherwomen members, generating sustainable livelihood micro-enterprises and eliminating exploitation by predatory moneylenders."
  },
  {
    year: "2024",
    title: "Celebrating 20 Years of Grassroots Justice",
    phase: "TWO DECADES JUBILEE (2004–2024)",
    category: "Legal & Rights",
    color: "var(--color-primary)",
    icon: <FaAward />,
    stat: "20 Years of Unbroken Integrity",
    desc: "Two continuous decades of relentless constitutional advocacy, empowering Adivasis in Scheduled V agency mandals, securing land sovereignty, and setting high benchmarks in voluntary governance."
  }
];

export default function InteractiveTimeline() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [highlightedYear, setHighlightedYear] = useState(null);

  const categories = ["All", "Legal & Rights", "Land & Energy", "Community & Women"];

  const filtered = selectedCategory === "All"
    ? MILESTONES_DATA
    : MILESTONES_DATA.filter((m) => m.category === selectedCategory);

  const handleYearJump = (year) => {
    setHighlightedYear(year);
    const el = document.getElementById(`milestone-${year}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* HEADER CARD */}
      <div style={{ background: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: 20, boxShadow: "var(--shadow-sm)", border: "1px solid #e2e8f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span className="badge" style={{ background: "rgba(255, 137, 0, 0.12)", color: "var(--color-primary)", fontWeight: 700 }}>
                Historical Journey
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>
                2004 — 2024 • Two Decades of Impact
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--color-dark)", margin: 0 }}>
              Two Decades of Transformative Milestones
            </h3>
            <p style={{ color: "var(--color-text-light)", marginTop: 6, fontSize: "0.95rem", maxWidth: 760, lineHeight: 1.6 }}>
              Trace the evolution of ALERT from its foundational registration in 2004 to landmark appellate High Court litigation, securing 15,000+ forest acres, and building indigenous women cooperative federations.
            </p>
          </div>

          <div style={{ background: "#fff7ed", border: "1px solid #ffedd5", padding: "10px 18px", borderRadius: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <FaAward style={{ color: "var(--color-primary)", fontSize: "1.4rem" }} />
            <div>
              <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--color-dark)" }}>20 Years of Advocacy</div>
              <div style={{ fontSize: "0.76rem", color: "#c2410c" }}>2004 — 2024 Jubilee</div>
            </div>
          </div>
        </div>

        {/* METRICS ROW */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginTop: 24 }}>
          {[
            { label: "Active Field Tenure", val: "20+ Years", desc: "Continuous Grassroots Work", color: "var(--color-primary)", icon: <FaHistory /> },
            { label: "Forest Rights Secured", val: "15,000+ Ac.", desc: "RoFR 2006 Patta Titles", color: "#10b981", icon: <FaTree /> },
            { label: "Federated Women", val: "3,500+", desc: "Matsya Mithra Cooperatives", color: "#8b5cf6", icon: <FaUsers /> },
            { label: "Off-Grid Solar Hamlets", val: "75+", desc: "Clean Energy Micro-Grids", color: "#f59e0b", icon: <FaSun /> }
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#f8fafc",
                borderRadius: 14,
                padding: "16px 18px",
                borderLeft: `4px solid ${stat.color}`,
                boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                  {stat.label}
                </span>
                <span style={{ color: stat.color, fontSize: "1.1rem" }}>{stat.icon}</span>
              </div>
              <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "var(--color-dark)", margin: "4px 0" }}>
                {stat.val}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK-JUMP YEAR SCRUBBER & CATEGORY FILTER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        {/* YEAR BUTTONS */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {MILESTONES_DATA.map((m) => (
            <button
              key={m.year}
              onClick={() => handleYearJump(m.year)}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                border: highlightedYear === m.year ? "none" : "1px solid #cbd5e1",
                background: highlightedYear === m.year ? "var(--color-primary)" : "white",
                color: highlightedYear === m.year ? "white" : "var(--color-dark)",
                boxShadow: highlightedYear === m.year ? "0 4px 12px rgba(255,137,0,0.3)" : "none",
                transition: "all 0.2s ease"
              }}
            >
              {m.year}
            </button>
          ))}
        </div>

        {/* CATEGORY FILTER */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "6px 12px",
                borderRadius: 16,
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                background: selectedCategory === cat ? "var(--color-dark)" : "#f1f5f9",
                color: selectedCategory === cat ? "white" : "#475569",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CENTRAL SPINE TIMELINE CONTAINER */}
      <div style={{ position: "relative", padding: "20px 0" }}>
        {/* GLOWING VERTICAL SPINE */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 4,
            background: "linear-gradient(to bottom, #D2190C 0%, #3E8E0F 50%, #003190 100%)",
            transform: "translateX(-50%)",
            borderRadius: 4,
            boxShadow: "0 0 12px rgba(255, 137, 0, 0.4)"
          }}
          className="timeline-central-spine"
        />

        {/* TIMELINE ITEMS (ZIGZAG ON DESKTOP, STACKED ON MOBILE) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36, position: "relative" }}>
          {filtered.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isHighlighted = highlightedYear === item.year;

            return (
              <div
                key={item.year}
                id={`milestone-${item.year}`}
                style={{
                  display: "flex",
                  justifyContent: isEven ? "flex-start" : "flex-end",
                  position: "relative",
                  width: "100%"
                }}
                className={`timeline-row ${isEven ? "timeline-left" : "timeline-right"}`}
              >
                {/* TIMELINE CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: "0 16px 36px rgba(0,0,0,0.12)" }}
                  style={{
                    width: "calc(50% - 40px)",
                    background: isHighlighted ? "#fffbeb" : "white",
                    borderRadius: 18,
                    padding: "24px 26px",
                    boxShadow: isHighlighted ? "0 10px 30px rgba(245,158,11,0.25)" : "0 6px 20px rgba(0,0,0,0.06)",
                    border: isHighlighted ? "2px solid #f59e0b" : "1px solid #e2e8f0",
                    borderTop: `4px solid ${item.color}`,
                    position: "relative",
                    transition: "all 0.25s ease"
                  }}
                  className="timeline-card-box"
                >
                  {/* TOP HEADER: YEAR & PHASE */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span
                      style={{
                        background: item.color,
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        padding: "4px 12px",
                        borderRadius: 20,
                        boxShadow: `0 3px 10px ${item.color}40`,
                        letterSpacing: 0.5
                      }}
                    >
                      {item.year}
                    </span>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.5 }}>
                      {item.phase}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-dark)", margin: "0 0 10px", lineHeight: 1.35 }}>
                    {item.title}
                  </h4>

                  {/* NARRATIVE */}
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.65, margin: "0 0 16px" }}>
                    {item.desc}
                  </p>

                  {/* STAT PILL BADGE */}
                  <div style={{ borderTop: "1px dashed #e2e8f0", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: item.color,
                        background: "#f8fafc",
                        padding: "4px 10px",
                        borderRadius: 10,
                        border: "1px solid #e2e8f0",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6
                      }}
                    >
                      <FaCheckCircle size={11} /> {item.stat}
                    </span>
                    <span style={{ fontSize: "0.76rem", color: "#94a3b8", fontWeight: 600 }}>
                      {item.category}
                    </span>
                  </div>
                </motion.div>

                {/* CENTRAL SPINE NODE (CONNECTED CIRCLE) */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "32px",
                    transform: "translateX(-50%)",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: item.color,
                    border: "4px solid white",
                    boxShadow: `0 0 16px ${item.color}70`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "0.9rem",
                    zIndex: 2
                  }}
                  className="timeline-node-pin"
                >
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
