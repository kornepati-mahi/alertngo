import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaAward,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaCrown,
  FaQuoteLeft,
  FaLandmark,
  FaCalendar
} from "react-icons/fa";
import PdfViewerModal from "../components/PdfViewerModal";

export default function OrganizationalProfile() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="organizational-profile"
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
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Section 03</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.15 }}>
              Organizational Profile
            </h1>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              Who we are, our statutory mandate, and the legal accreditations that underpin every ALERT intervention since 2004.
            </p>
          </motion.div>

          {/* ==================== ORG INFO CARDS ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 90
            }}
          >
            {[
              {
                title: "Organization Name",
                value: "Association for Land and Livelihood, Environment, Research and Training (ALERT)",
                icon: <FaLandmark size={24} color="#003190" />
              },
              {
                title: "Established",
                value: "2004",
                subtitle: "Registration No. 307/2004",
                icon: <FaCalendar size={24} color="#D2190C" />
              },
              {
                title: "Headquarters",
                value: "Vijayawada, Andhra Pradesh, India",
                icon: <FaMapMarkerAlt size={24} color="#3E8E0F" />
              },
              {
                title: "Founder-Director",
                value: "YL Jayaraj",
                subtitle: "47+ Years of Grassroots Experience",
                icon: <FaUsers size={24} color="#F5A000" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)",
                  border: "1px solid #f1f5f9",
                  borderRadius: 24,
                  padding: 32,
                  textAlign: "center",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ y: -6, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.12)", borderColor: "var(--color-primary)" }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(210, 25, 12, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: "#D2190C" }}>
                  {item.icon}
                </div>
                <div style={{ fontWeight: 700, color: "var(--color-dark)", fontSize: "0.8rem", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-dark)", fontWeight: 700, marginBottom: item.subtitle ? 4 : 0, lineHeight: 1.3 }}>
                  {item.value}
                </div>
                {item.subtitle && (
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-light)", fontWeight: 600 }}>
                    {item.subtitle}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* ==================== ABOUT ALERT SECTION ==================== */}
          <section style={{ paddingTop: 0, paddingBottom: 90 }}>
            <div className="container">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", marginBottom: 80 }}>
                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                >
                  <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Who We Are</span>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.3 }}>
                    Association for Land and Livelihood, Environment, Research and Training
                  </h2>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "0.98rem", marginBottom: 20 }}>
                    ALERT, established in 2004 under the Societies Registration Act, is headquartered in Vijayawada, Andhra Pradesh. Led by founder-director <strong>YL Jayaraj</strong>, who brings 47 years of experience in grass-roots human rights and community empowerment, ALERT specializes in supporting marginalized communities in the Fifth Scheduled Areas.
                  </p>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "0.98rem", marginBottom: 24 }}>
                    Our mandate encompasses affirmative legislation enforcement, the Forest Rights Act (RoFR 2006), the PESA Act 1996, Land Transfer Regulation 1 of 1970, and fair rehabilitation for communities displaced by mega irrigation projects like Polavaram.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedPdf({
                      file: "/uploads/Organizational-Profile-of-ALERT.pdf",
                      title: "Organizational Profile of ALERT",
                      meta: "Official Society Record • 20-Year Dossier"
                    })}
                    className="btn-primary"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px" }}
                  >
                    <FaFilePdf size={13} /> Download Official Profile PDF
                  </button>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  style={{ position: "relative", width: "100%", height: 340, overflow: "hidden", borderRadius: 24, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.15)" }}
                >
                  <img
                    src="/uploads/WhatsApp-Image-2021-08-19-at-6.48.06-PM-1024x768.jpeg"
                    alt="ALERT Community Field Work"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent 0%, rgba(0,0,0,0.7) 100%)", padding: 24, borderRadius: "0 0 24px 24px" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#F5A000", marginBottom: 4 }}>
                      ALERT Field Operations
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "white", fontWeight: 600 }}>
                      Empowering Adivasi Communities in Andhra Pradesh
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ==================== LEGAL ACCREDITATIONS ==================== */}
          <section style={{ paddingTop: 80, paddingBottom: 40, background: "#ffffff" }}>
            <div className="container">
              <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
                <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Statutory Mandate</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--color-dark)", marginBottom: 16 }}>Legal Accreditations &amp; Governance</h2>
                <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>
                  ALERT is governed by formal statutes and holds key registrations that ensure transparency, accountability, and legal compliance in all our work.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
                {[
                  {
                    icon: <FaAward size={24} color="#D2190C" />,
                    title: "12A Registration",
                    desc: "Income Tax registration for charitable activities under Section 12A."
                  },
                  {
                    icon: <FaStar size={24} color="#F5A000" />,
                    title: "80G Certification",
                    desc: "Donors can claim tax deductions on contributions under Section 80G."
                  },
                  {
                    icon: <FaShieldAlt size={24} color="#003190" />,
                    title: "FCRA Registered",
                    desc: "Authorized to receive foreign contributions for social development work."
                  },
                  {
                    icon: <FaCrown size={24} color="#3E8E0F" />,
                    title: "Reg. No. 307/2004",
                    desc: "Registered under the Societies Registration Act since 2004."
                  },
                  {
                    icon: <FaUsers size={24} color="#F5A000" />,
                    title: "35 Institutional Policies",
                    desc: "Formalized charters ensuring democratic governance and transparency."
                  },
                  {
                    icon: <FaLandmark size={24} color="#003190" />,
                    title: "Headquarters: Vijayawada",
                    desc: "ALERT office serves as the nerve center for all field operations."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    style={{ background: "#ffffff", padding: 26, borderRadius: 20, boxShadow: "var(--shadow-sm)", border: "1px solid #f1f5f9", display: "flex", alignItems: "flex-start", gap: 14, transition: "all 0.3s ease" }}
                    whileHover={{ y: -6, boxShadow: "var(--shadow-md)", borderColor: "var(--color-primary)" }}
                  >
                    <div style={{ width: 48, height: 48, minWidth: 48, minHeight: 48, borderRadius: 14, background: "rgba(210, 25, 12, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", overflow: "hidden" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 4, fontSize: "0.95rem" }}>{item.title}</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
