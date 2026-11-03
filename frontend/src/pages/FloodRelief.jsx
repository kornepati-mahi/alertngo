import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWater,
  FaMapMarkedAlt,
  FaClock,
  FaUtensils,
  FaTint,
  FaMedkit,
  FaBed,
  FaShip,
  FaHandHoldingHeart,
  FaChevronRight,
  FaArrowRight,
  FaHome,
  FaHeart
} from "react-icons/fa";

export default function FloodRelief() {
  const [activeYear, setActiveYear] = useState("2023");

  const reliefYears = [
    {
      id: "2023",
      title: "Flood Relief 2023",
      sub: "Godavari Basin Emergency Mission",
      desc: "4,200+ displaced families received emergency rations & medical kits across Alluri Sitharama Raju and Eluru districts. Mechanized boats deployed to reach the most isolated hamlets.",
      items: [],
      badge: "Active",
      badgeColor: "#3E8E0F",
      link: "/2023-2"
    },
    {
      id: "2022",
      title: "Flood Relief 2022",
      sub: "Multi-Mandal Relief Mission",
      desc: "Ration packets and hygiene supplies reached Kunavaram, VR Puram and Chintoor mandals — areas where flood waters inundated roads and isolated tribal hamlets for weeks.",
      items: [],
      badge: "Completed",
      badgeColor: "#003190",
      link: "/flood-relief-measures-2022"
    },
    {
      id: "2021",
      title: "Flood Relief 2021",
      sub: "Rescue Boat Deployment",
      desc: "Relief bases established in remote hill areas serving tribal children, nursing mothers and elderly residents cut off by the 2021 floods, deploying rescue boats across inaccessible terrains.",
      items: [],
      badge: "Completed",
      badgeColor: "#003190",
      link: "/flood-relief-measures-2021-2"
    },
    {
      id: "2020",
      title: "Flood Relief 2020",
      sub: "Blankets & Winter Care",
      desc: "Blankets distribution in East Godavari and groceries distribution in West Godavari — thermal wool blankets and essential grocery kits delivered to forest hamlet families during COVID lockdowns.",
      items: [
        { label: "Blankets Distribution — East Godavari", link: "/blankets-distribution-in-east-godavari", desc: "3,000+ thermal wool blankets to Konda Reddi tribal households" },
        { label: "Groceries Distribution — West Godavari", link: "/groceries-distribution-in-west-godavari", desc: "Essential grocery hampers to forest hamlet families during COVID-19 lockdown" }
      ],
      badge: "Completed",
      badgeColor: "#003190",
      link: "/flood-relief-measures-2020"
    }
  ];

  const impactStats = [
    { icon: <FaWater />, value: "4,200+", label: "Families Emergency Relieved", color: "var(--color-primary)" },
    { icon: <FaMapMarkedAlt />, value: "5", label: "Major Flood Operations (2019–2023)", color: "var(--color-secondary)" },
    { icon: <FaClock />, value: "48hrs", label: "Average Response Time", color: "#F5A000" },
    { icon: <FaShip />, value: "15+", label: "Rescue Boat Deployments", color: "#3E8E0F" }
  ];

  const activeYearData = reliefYears.find(y => y.id === activeYear) || reliefYears[0];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section
        id="flood-relief"
        style={{
          paddingTop: 160,
          paddingBottom: 0,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #ffffff 0%, #f4f7fe 100%)"
        }}
      >
        {/* Background decoration */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: -10, left: -10, width: 600, height: 600, background: "radial-gradient(circle, rgba(210, 25, 12, 0.06), transparent 70%)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", bottom: -10, right: -10, width: 600, height: 600, background: "radial-gradient(circle, rgba(0, 49, 144, 0.05), transparent 70%)", borderRadius: "50%" }}></div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 80px" }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Section 07</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.15 }}>
              Flood Relief Measures
            </h1>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              Emergency response across the Godavari agency belt — delivering rations, medical kits, rescue boats and shelter materials to vulnerable tribal families when disaster strikes.
            </p>
          </motion.div>

          {/* ==================== YEAR NAVIGATION (DROPDOWN-STYLE) ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)",
              border: "1px solid #f1f5f9",
              borderRadius: 32,
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.08)",
              overflow: "hidden",
              marginBottom: 90
            }}
          >
            {/* Year tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #f1f5f9" }}>
              {reliefYears.map((year, i) => (
                <button
                  key={year.id}
                  onClick={() => setActiveYear(year.id)}
                  style={{
                    flex: 1,
                    padding: "18px 24px",
                    background: activeYear === year.id ? "linear-gradient(135deg, #D2190C 0%, #F5A000 100%)" : "transparent",
                    color: activeYear === year.id ? "white" : "#64748b",
                    border: "none",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative"
                  }}
                >
                  {year.title}
                  {year.items.length > 0 && (
                    <span style={{ marginLeft: 8, fontSize: "0.65rem", opacity: 0.9, border: "1px solid rgba(255,255,255,0.5)", padding: "2px 6px", borderRadius: 8 }}>
                      {year.items.length} sub-items
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Active year content */}
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ padding: "36px 40px" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(210, 25, 12, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D2190C" }}>
                  <FaWater size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#D2190C", marginBottom: 4, display: "block" }}>
                    {activeYearData.badge}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 3vw, 1.8rem)", color: "var(--color-dark)", marginBottom: 8, lineHeight: 1.3 }}>
                    {activeYearData.title}
                  </h3>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>{activeYearData.sub}</span>
                </div>
              </div>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: 28 }}>
                {activeYearData.desc}
              </p>

              {activeYearData.items.length > 0 && (
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>
                    Sub-Programmes
                  </span>
                  <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
                    {activeYearData.items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.link}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 20px",
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          borderRadius: 14,
                          textDecoration: "none",
                          color: "var(--color-dark)",
                          transition: "all 0.2s ease",
                          fontSize: "0.9rem",
                          fontWeight: 600
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(210, 25, 12, 0.05)"; e.currentTarget.style.borderColor = "#D2190C"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
                      >
                        <span>{item.label}</span>
                        <FaChevronRight size={12} style={{ color: "#D2190C" }} />
                        <span style={{ fontSize: "0.75rem", color: "#64748b", marginTop: 2, display: "block" }}>{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link
                to={activeYearData.link}
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", fontSize: "0.9rem" }}
              >
                View Full Report <FaArrowRight size={12} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== IMPACT STATS ==================== */}
      <section style={{ background: "linear-gradient(135deg, var(--color-dark) 0%, #0E2B66 100%)", padding: "70px 0", borderRadius: 32, margin: "0 -16px", color: "white", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 20% 20%, rgba(245,160,0,0.15), transparent 50%)", pointerEvents: "none" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, textAlign: "center" }}>
            {impactStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{ textAlign: "center", padding: "24px 16px", background: "rgba(255,255,255,0.07)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: s.color }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-serif)" }}>{s.value}</div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: 0.4 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== QUICK LINKS TO SUB-PAGES ==================== */}
      <section style={{ paddingTop: 80, paddingBottom: 90, background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>All Relief Operations</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--color-dark)", marginBottom: 16 }}>Explore Every Relief Mission</h2>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>
              Browse detailed reports for each year of flood relief — from rescue operations to rehabilitation efforts across Andhra Pradesh.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {reliefYears.map((year, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)",
                  border: "1px solid #f1f5f9",
                  borderRadius: 24,
                  padding: 32,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ y: -6, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.12)", borderColor: "var(--color-primary)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(210, 25, 12, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D2190C" }}>
                    <FaShip size={18} />
                  </div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#D2190C", background: "rgba(210, 25, 12, 0.08)", padding: "4px 10px", borderRadius: 500 }}>
                    {year.badge}
                  </span>
                </div>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>
                  {year.title}
                </h4>
                <p style={{ color: "var(--color-text-light)", lineHeight: 1.6, fontSize: "0.88rem", marginBottom: 20, flex: 1 }}>
                  {year.desc}
                </p>
                <Link
                  to={year.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#D2190C",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textDecoration: "none"
                  }}
                >
                  Open Report <FaArrowRight size={11} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section style={{ paddingTop: 60, paddingBottom: 90, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, var(--color-dark) 0%, #0E2B66 100%)", borderRadius: 28, padding: 56, color: "white", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 30% 20%, rgba(245,160,0,0.15), transparent 50%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <span style={{ color: "#F5A000", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: 2, marginBottom: 16, display: "block" }}>Support Relief Work</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 22, lineHeight: 1.3 }}>Be First Responders</h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 28, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                Every contribution helps ALERT reach more families in the critical 48-hour window after a flood — providing food, clean water and medical care to those who need it most.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/donate" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", fontSize: "1rem" }}>
                  Donate Now <FaArrowRight size={12} />
                </Link>
                <Link to="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 30px", fontSize: "1rem", borderColor: "rgba(255,255,255,0.4)", color: "white", background: "rgba(255,255,255,0.05)" }}>
                  Contact Us <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
