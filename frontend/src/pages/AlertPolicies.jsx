import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaFileContract,
  FaBalanceScale,
  FaUsers,
  FaHeart,
  FaLeaf,
  FaAward,
  FaFilePdf,
  FaQuoteLeft,
  FaStar,
  FaLandmark,
  FaGavel
} from "react-icons/fa";
import PdfViewerModal from "../components/PdfViewerModal";

const policies = [
  {
    id: "child-protection",
    title: "Child Protection Policy",
    category: "Child Rights",
    icon: <FaUsers size={26} color="#D2190C" />,
    accent: "#D2190C",
    accentGlow: "rgba(210, 25, 12, 0.1)",
    desc: "ALERT is committed to safeguarding the rights and well-being of all children in our operational areas. This policy prohibits child labor, ensures safe environments in ashram schools, and mandates reporting of any abuse or exploitation.",
    highlights: ["Zero Tolerance for Child Labor", "Safe School Environments", "Mandatory Abuse Reporting"]
  },
  {
    id: "gender-equality",
    title: "Gender Equality Policy",
    category: "Gender Justice",
    icon: <FaBalanceScale size={26} color="#003190" />,
    accent: "#003190",
    accentGlow: "rgba(0, 49, 144, 0.1)",
    desc: "ALERT promotes equal participation of women and men in all programs. Women hold leadership positions in Gram Sabhas, Matsya Mithra cooperatives, and the Governing Body. Gender discrimination is not tolerated at any level.",
    highlights: ["Women in Leadership", "Equal Participation", "Anti-Discrimination"]
  },
  {
    id: "environmental",
    title: "Environmental Protection Policy",
    category: "Ecology",
    icon: <FaLeaf size={26} color="#3E8E0F" />,
    accent: "#3E8E0F",
    accentGlow: "rgba(62, 142, 15, 0.1)",
    desc: "ALERT integrates environmental stewardship into all interventions. We promote sustainable forest management, clean solar energy, and ecological restoration while opposing environmentally destructive projects.",
    highlights: ["Sustainable Forest Management", "Clean Solar Energy", "Ecological Restoration"]
  },
  {
    id: "financial-transparency",
    title: "Financial Transparency Policy",
    category: "Governance",
    icon: <FaFileContract size={26} color="#F5A000" />,
    accent: "#F5A000",
    accentGlow: "rgba(245, 160, 0, 0.1)",
    desc: "All ALERT funds are tracked, audited, and reported publicly. Annual statutory audits, 12A & 80G compliance, and FCRA reporting ensure donors and stakeholders can verify every rupee spent.",
    highlights: ["Annual Statutory Audits", "12A & 80G Compliance", "FCRA Reporting"]
  },
  {
    id: "conflict-of-interest",
    title: "Conflict of Interest Policy",
    category: "Integrity",
    icon: <FaShieldAlt size={26} color="#003190" />,
    accent: "#003190",
    accentGlow: "rgba(0, 49, 144, 0.1)",
    desc: "Governing Body members and staff must disclose any personal interests that could conflict with ALERT's mission. Decisions are made in the best interest of the communities we serve, not individual gain.",
    highlights: ["Mandatory Disclosure", "Community-First Decisions", "Integrity Standards"]
  },
  {
    id: "whistleblower",
    title: "Whistleblower Protection Policy",
    category: "Accountability",
    icon: <FaAward size={26} color="#D2190C" />,
    accent: "#D2190C",
    accentGlow: "rgba(210, 25, 12, 0.1)",
    desc: "ALERT protects individuals who report misconduct, fraud, or policy violations in good faith. Retaliation against whistleblowers is prohibited, and all reports are investigated confidentially.",
    highlights: ["Good Faith Protection", "No Retaliation", "Confidential Investigation"]
  }
];

export default function AlertPolicies() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="alert-policies"
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
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Section 05</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.15 }}>
              ALERT Policies
            </h1>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              Formal institutional charters that govern every ALERT intervention — ensuring integrity, accountability, and community-first decision-making.
            </p>
          </motion.div>

          {/* ==================== POLICIES GRID ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
              marginBottom: 90
            }}
          >
            {policies.map((policy, i) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, boxShadow: "0 30px 60px -15px " + policy.accent + "25", borderColor: policy.accent }}
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)",
                  border: "1px solid " + policy.accent + "15",
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
                <div style={{ position: "absolute", top: -40, left: -40, width: 120, height: 120, background: "radial-gradient(circle, " + policy.accentGlow + ", transparent 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />

                {/* Category badge */}
                <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(210, 25, 12, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: policy.accent, boxShadow: "0 8px 18px " + policy.accent + "20" }}>
                    {policy.icon}
                  </div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: policy.accent }}>
                    {policy.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", color: "var(--color-dark)", marginBottom: 14, lineHeight: 1.3, position: "relative", zIndex: 2 }}>
                  {policy.title}
                </h3>

                {/* Description */}
                <p style={{ position: "relative", zIndex: 2, color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: 24, flex: 1 }}>
                  {policy.desc}
                </p>

                {/* Highlights */}
                <div style={{ position: "relative", zIndex: 2, display: "flex", gap: 10, flexWrap: "wrap", marginTop: "auto" }}>
                  {policy.highlights.map((h, hi) => (
                    <span key={hi} style={{ padding: "6px 14px", borderRadius: 500, fontSize: "0.72rem", fontWeight: 700, background: "rgba(210, 25, 12, 0.08)", color: policy.accent, border: "1px solid " + policy.accent + "40" }}>
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== POLICY COMMITMENT ==================== */}
      <section style={{ paddingTop: 80, paddingBottom: 90, background: "#ffffff" }}>
        <div className="container">
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ background: "linear-gradient(135deg, var(--color-dark) 0%, #0E2B66 100%)", borderRadius: 28, padding: 56, color: "white", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 30% 20%, rgba(245,160,0,0.15), transparent 50%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{ color: "#F5A000", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: 2, marginBottom: 16, display: "block" }}>Our Commitment</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 22, lineHeight: 1.3 }}>Principles in Practice</h2>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 28, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                  ALERT's policies are not just documents — they are lived every day in the field. From Gram Sabha meetings to courtroom advocacy, from women's cooperative governance to disaster relief operations, these principles shape every decision, relationship, and outcome.
                </p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  {["Integrity", "Accountability", "Transparency", "Gender Justice", "Professionalism", "Excellence", "Empathy"].map((v, i) => (
                    <span key={i} style={{ padding: "8px 18px", borderRadius: 500, fontSize: "0.8rem", fontWeight: 700, background: "rgba(245,160,0,0.1)", color: "#F5A000", border: "1px solid rgba(245,160,0,0.3)" }}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DOWNLOAD POLICY DOCUMENT ==================== */}
      <section style={{ textAlign: "center", marginTop: 20, paddingBottom: 40 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <button
            type="button"
            onClick={() => setSelectedPdf({
              file: "/uploads/Organizational-Profile-of-ALERT.pdf",
              title: "Organizational Profile & Policies",
              meta: "Official Society Record • Governance & Policy Document"
            })}
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px" }}
          >
            <FaFilePdf size={13} /> Download Policy Document PDF
          </button>
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
