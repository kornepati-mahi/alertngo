import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaSitemap,
  FaFilePdf,
  FaQuoteLeft,
  FaShieldAlt,
  FaAward,
  FaLandmark
} from "react-icons/fa";
import PdfViewerModal from "../components/PdfViewerModal";

export default function Organogram() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const hierarchyLevels = [
    {
      level: "Level 01",
      title: "General Body",
      desc: "The sovereign supreme authority of ALERT comprising all registered members.",
      icon: <FaUsers size={24} color="#003190" />
    },
    {
      level: "Level 02",
      title: "Governing Body",
      desc: "Elected board of directors providing strategic oversight and governance.",
      icon: <FaShieldAlt size={24} color="#D2190C" />
    },
    {
      level: "Level 03",
      title: "Executive Committee",
      desc: "Manages day-to-day operations and program implementation.",
      icon: <FaAward size={24} color="#F5A000" />
    },
    {
      level: "Level 04",
      title: "Program Cells",
      desc: "Forest Rights, Land & RR, Women's Cooperatives, Disaster Relief, Education.",
      icon: <FaLandmark size={24} color="#3E8E0F" />
    },
    {
      level: "Level 05",
      title: "Gram Sabhas & Field Cells",
      desc: "Village-level community organizations and operational field teams.",
      icon: <FaSitemap size={24} color="#003190" />
    }
  ];

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="organogram"
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
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Section 04</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.15 }}>
              Organogram
            </h1>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              The democratic governance hierarchy of ALERT — from the sovereign General Body down to grassroots Gram Sabhas and field operational cells.
            </p>
          </motion.div>

          {/* ==================== ORGANOGRAM IMAGE CARD ==================== */}
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
              marginBottom: 90,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            whileHover={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.12)", borderColor: "var(--color-primary)" }}
          >
            <div style={{ position: "relative", width: "100%", height: 520, overflow: "hidden" }}>
              <img
                src="/uploads/Alert-Organogram.jpg"
                alt="ALERT Organogram Chart"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", background: "#f8fafc" }}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, zIndex: 2, background: "rgba(255,255,255,0.9)", borderRadius: 14, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "#003190", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <FaSitemap size={16} />
                  </div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#003190" }}>
                    ALERT Governance Structure
                  </span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.5 }}>
                  Click or zoom to view the full organizational chart showing reporting lines from General Body to field operational cells.
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================== HIERARCHY LEVELS ==================== */}
          <section style={{ paddingTop: 0, paddingBottom: 90 }}>
            <div className="container">
              <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
                <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Governance Levels</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--color-dark)", marginBottom: 16 }}>Five-Tier Governance Structure</h2>
                <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>
                  ALERT follows a democratic, bottom-up governance model where authority flows from the community level up to the General Body.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
                {hierarchyLevels.map((level, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    style={{
                      background: "#ffffff",
                      padding: 26,
                      borderRadius: 20,
                      boxShadow: "var(--shadow-sm)",
                      border: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      transition: "all 0.3s ease",
                      position: "relative"
                    }}
                    whileHover={{ y: -6, boxShadow: "var(--shadow-md)", borderColor: "var(--color-primary)" }}
                  >
                    <div style={{ width: 48, height: 48, minWidth: 48, minHeight: 48, borderRadius: 14, background: `rgba(210, 25, 12, 0.08)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#D2190C", overflow: "hidden", flexShrink: 0 }}>
                      {level.icon}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "#D2190C", background: "rgba(210, 25, 12, 0.08)", padding: "4px 10px", borderRadius: 500 }}>
                          {level.level}
                        </div>
                        <h4 style={{ fontWeight: 700, color: "var(--color-dark)", fontSize: "1rem" }}>{level.title}</h4>
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.5 }}>{level.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== DOWNLOAD PDF ==================== */}
          <section style={{ textAlign: "center", marginTop: 20, paddingBottom: 40 }}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <button
                type="button"
                onClick={() => setSelectedPdf({
                  file: "/uploads/Organizational-Profile-of-ALERT.pdf",
                  title: "Organizational Profile of ALERT",
                  meta: "Official Society Record • Governance Document"
                })}
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px" }}
              >
                <FaFilePdf size={13} /> Download Governance Document PDF
              </button>
            </div>
          </section>
        </div>
      </section>

      {selectedPdf && (
        <PdfViewerModal
          file={selectedPdf.file}
          title={selectedPdf.title}
          meta={selectedPdf.meta}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </>
  );
}
