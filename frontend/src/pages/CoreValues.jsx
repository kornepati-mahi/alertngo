import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaEye,
  FaUsers,
  FaStar,
  FaAward,
  FaHeart,
  FaCrown,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaLeaf,
  FaStar as FaStarIcon
} from "react-icons/fa";
import PdfViewerModal from "../components/PdfViewerModal";

const coreValues = [
  {
    id: "integrity",
    title: "Integrity",
    quote: "We choose our thoughts and actions based on values rather than personal gain.",
    desc: "Integrity is the foundation of everything ALERT does. We commit to honest, ethical, and principled action in every intervention — from forest rights claims to land rehabilitation — ensuring that our work stands on moral ground.",
    icon: <FaShieldAlt size={26} color="#D2190C" />,
    accent: "#D2190C",
    accentGlow: "rgba(210, 25, 12, 0.1)"
  },
  {
    id: "accountability",
    title: "Accountability",
    quote: "We love to be slapped with truth than to be kissed with a lie.",
    desc: "ALERT holds itself answerable to the communities we serve, our donors, and the law. Every rupee spent, every decision made, and every claim filed is documented, audited, and open to scrutiny.",
    icon: <FaBalanceScale size={26} color="#003190" />,
    accent: "#003190",
    accentGlow: "rgba(0, 49, 144, 0.1)"
  },
  {
    id: "transparency",
    title: "Transparency",
    quote: "We build trust through transparency.",
    desc: "Trust is earned through openness. ALERT shares financial records, project reports, and governance decisions publicly — because the communities we work with deserve to know exactly how we operate.",
    icon: <FaEye size={26} color="#3E8E0F" />,
    accent: "#3E8E0F",
    accentGlow: "rgba(62, 142, 15, 0.1)"
  },
  {
    id: "gender-justice",
    title: "Gender Justice",
    quote: "We believe and practice equality.",
    desc: "Gender equality is non-negotiable. ALERT actively promotes women's leadership in Gram Sabhas, Matsya Mithra cooperatives, and all community institutions — ensuring women are decision-makers, not just participants.",
    icon: <FaUsers size={26} color="#F5A000" />,
    accent: "#F5A000",
    accentGlow: "rgba(245, 160, 0, 0.1)"
  },
  {
    id: "professionalism",
    title: "Professionalism",
    quote: "We don't just do it but we prefer to do it in the best way possible.",
    desc: "Excellence in execution is our standard. From legal documentation to field surveys, ALERT applies professional rigor, trained staff, and proven methodologies to every project we undertake.",
    icon: <FaStar size={26} color="#003190" />,
    accent: "#003190",
    accentGlow: "rgba(0, 49, 144, 0.1)"
  },
  {
    id: "excellence",
    title: "Excellence",
    quote: "It is not by accident but the result of our high intention.",
    desc: "Excellence is intentional. ALERT sets high standards for impact, quality, and sustainability — because marginalized communities deserve nothing less than our absolute best effort.",
    icon: <FaAward size={26} color="#D2190C" />,
    accent: "#D2190C",
    accentGlow: "rgba(210, 25, 12, 0.1)"
  },
  {
    id: "empathy",
    title: "Empathy",
    quote: "We carry the message that 'you are not alone'.",
    desc: "Behind every case file is a human being. ALERT approaches every Adivasi family, every displaced villager, and every woman cooperative member with compassion, listening first and acting with care.",
    icon: <FaHeart size={26} color="#D2190C" />,
    accent: "#D2190C",
    accentGlow: "rgba(210, 25, 12, 0.1)"
  }
];

export default function CoreValues() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="core-values"
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
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Section 02</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.15 }}>
              Core Values
            </h1>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              The principles that guide every ALERT intervention — from forest rights to land rehabilitation, from women's cooperatives to disaster relief.
            </p>
          </motion.div>

          {/* ==================== VALUES GRID ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginBottom: 90
            }}
          >
            {coreValues.map((value, i) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, boxShadow: `0 30px 60px -15px ${value.accent}25`, borderColor: value.accent }}
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)",
                  border: `1px solid ${value.accent}15`,
                  borderRadius: 28,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)",
                  padding: 40,
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Top accent glow */}
                <div style={{ position: "absolute", top: -40, left: -40, width: 120, height: 120, background: `radial-gradient(circle, ${value.accentGlow}, transparent 70%)`, borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />

                {/* Icon */}
                <div style={{ position: "relative", zIndex: 2, width: 52, height: 52, borderRadius: 14, background: `rgba(210, 25, 12, 0.08)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, color: value.accent, boxShadow: `0 8px 18px ${value.accent}20` }}>
                  {value.icon}
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3, position: "relative", zIndex: 2 }}>
                  {value.title}
                </h3>

                {/* Quote */}
                <div style={{ position: "relative", zIndex: 2, marginBottom: 16, padding: 16, background: `rgba(210, 25, 12, 0.05)`, borderLeft: `4px solid ${value.accent}`, borderRadius: 10 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <FaQuoteLeft size={12} style={{ color: value.accent, marginTop: 1, opacity: 0.7 }} />
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text)", fontStyle: "italic", lineHeight: 1.6 }}>"{value.quote}"</span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ position: "relative", zIndex: 2, color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: 24, flex: 1 }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== VALUES MANIFESTO ==================== */}
      <section style={{ paddingTop: 80, paddingBottom: 90, background: "#ffffff" }}>
        <div className="container">
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ background: "linear-gradient(135deg, var(--color-dark) 0%, #0E2B66 100%)", borderRadius: 28, padding: 56, color: "white", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 30% 20%, rgba(245,160,0,0.15), transparent 50%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{ color: "#F5A000", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: 2, marginBottom: 16, display: "block" }}>Our Manifesto</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 22, lineHeight: 1.3 }}>Values in Action</h2>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 28, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                  These seven values are not just words on a page — they are lived every day in the field. From the Gram Sabha meetings in agency mandals to the courtrooms defending forest rights, from the women's cooperative meetings to the disaster relief operations, ALERT's values shape every decision, every relationship, and every outcome.
                </p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  {["Integrity", "Accountability", "Transparency", "Gender Justice", "Professionalism", "Excellence", "Empathy"].map((v, i) => (
                    <span
                      key={i}
                      style={{ padding: "8px 18px", borderRadius: 500, fontSize: "0.8rem", fontWeight: 700, background: "rgba(245,160,0,0.1)", color: "#F5A000", border: "1px solid rgba(245,160,0,0.3)" }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
