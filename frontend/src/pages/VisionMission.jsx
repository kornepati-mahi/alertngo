import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaBullseye,
  FaSeedling,
  FaUsers,
  FaHeart,
  FaLeaf,
  FaBullhorn,
  FaQuoteLeft,
  FaAward,
  FaMapMarkerAlt,
  FaStar,
  FaCrown
} from "react-icons/fa";
import PdfViewerModal from "../components/PdfViewerModal";

export default function VisionMission() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="section-pad"
        id="vision-mission"
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #ffffff 0%, #f4f7fe 100%)"
        }}
      >
        {/* Background decoration */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: -10, left: -10, width: 600, height: 600, background: "radial-gradient(circle, rgba(210, 25, 12, 0.06), transparent 60%)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", bottom: -10, right: -10, width: 600, height: 600, background: "radial-gradient(circle, rgba(0, 49, 144, 0.05), transparent 60%)", borderRadius: "50%" }}></div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 80px" }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Section 01</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.15 }}>
              Vision &amp; Mission
            </h1>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              Guiding principles that drive every intervention across forest rights, land rehabilitation, and tribal empowerment since 2004.
            </p>
          </motion.div>

          {/* ==================== VISION | MISSION GRID ==================== */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
            {/* VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #fdfdff 100%)",
                border: "1px solid #D2190C25",
                borderRadius: 32,
                boxShadow: "0 30px 60px -15px rgba(210, 25, 12, 0.12)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}
            >
            {/* Image */}
            <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden" }}>
              <img
                src="/uploads/cropped-12.jpg"
                alt="ALERT Vision"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 0%, rgba(210, 25, 12, 0.3) 100%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 24, zIndex: 2 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#F5A000", background: "rgba(255,255,255,0.85)", padding: "6px 14px", borderRadius: 500, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                  OUR VISION
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 40, flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#D2190C", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 8px 18px rgba(210, 25, 12, 0.35)" }}>
                  <FaEye size={18} />
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#D2190C" }}>
                  Vision Statement
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--color-dark)", marginBottom: 14, lineHeight: 1.3 }}>
                Empowerment towards Prosperity &amp; Peace
              </h2>
              <div style={{ marginBottom: 22, padding: 18, background: "rgba(210, 25, 12, 0.06)", borderLeft: "4px solid #D2190C", borderRadius: 10 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <FaQuoteLeft size={12} style={{ color: "#D2190C", marginTop: 1, opacity: 0.8 }} />
                  <span style={{ fontSize: "0.9rem", color: "var(--color-text)", fontStyle: "italic", lineHeight: 1.6 }}>
                    "Empowerment of socially excluded and marginalized towards prosperity and peace"
                  </span>
                </div>
              </div>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: 26, flex: 1 }}>
                ALERT envisions a future where every socially excluded and marginalized Adivasi family lives with dignity, self-governance, and equitable access to forest rights, land, and livelihood opportunities across the Fifth Scheduled Areas of Andhra Pradesh.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "auto" }}>
                {["Social Inclusion", "Community Prosperity", "Peaceful Coexistence", "Equitable Access"].map((h, i) => (
                  <span key={i} style={{ padding: "6px 14px", borderRadius: 500, fontSize: "0.72rem", fontWeight: 700, background: "rgba(210, 25, 12, 0.08)", color: "#D2190C", border: "1px solid #D2190C40" }}>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ==================== MISSION CARD (RIGHT) ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
              border: "1px solid #00319025",
              borderRadius: 32,
              boxShadow: "0 30px 60px -15px rgba(0, 49, 144, 0.12)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "100%"
            }}
          >
            <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden" }}>
              <img
                src="/uploads/cropped-4.jpg"
                alt="ALERT Mission"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 0%, rgba(0, 49, 144, 0.3) 100%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 24, zIndex: 2 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#38BDF8", background: "rgba(255,255,255,0.85)", padding: "6px 14px", borderRadius: 500, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                  OUR MISSION
                </span>
              </div>
            </div>

            <div style={{ padding: 40, flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#003190", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 8px 18px rgba(0, 49, 144, 0.35)" }}>
                  <FaBullseye size={18} />
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#003190" }}>
                  Mission Statement
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--color-dark)", marginBottom: 14, lineHeight: 1.3 }}>
                Awaken, Sensitize, Organize, Mobilize
              </h2>
              <div style={{ marginBottom: 22, padding: 18, background: "rgba(0, 49, 144, 0.06)", borderLeft: "4px solid #003190", borderRadius: 10 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <FaQuoteLeft size={12} style={{ color: "#003190", marginTop: 1, opacity: 0.8 }} />
                  <span style={{ fontSize: "0.9rem", color: "var(--color-text)", fontStyle: "italic", lineHeight: 1.6 }}>
                    "To awaken, sensitize, organize and mobilize the Adivasi communities for Self-governance, Self-reliance and Sustainable environment and development"
                  </span>
                </div>
              </div>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: 26, flex: 1 }}>
                To awaken, sensitize, organize and mobilize the Adivasi communities for self-governance, self-reliance, and sustainable environment and development. ALERT works hand-in-hand with tribal communities to secure forest rights under the RoFR Act 2006, ensure fair land acquisition and rehabilitation under the RFCTLARR Act 2013, and build women-led cooperative federations for lasting economic independence.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "auto" }}>
                {["Community Mobilization", "Self-Governance (PESA)", "Sustainable Development", "Women's Cooperatives"].map((h, i) => (
                  <span key={i} style={{ padding: "6px 14px", borderRadius: 500, fontSize: "0.72rem", fontWeight: 700, background: "rgba(0, 49, 144, 0.08)", color: "#003190", border: "1px solid #00319040" }}>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          </div> {/* close grid */}
        </div>
      </section>

      {/* ==================== IMPACT STATS ==================== */}
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 60px" }}>
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Our Impact</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--color-dark)", marginBottom: 16 }}>Numbers That Speak</h2>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>
              Two decades of grassroots work across the Fifth Scheduled Areas of Andhra Pradesh — measured in lives touched, rights secured, and communities empowered.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { num: "20+", label: "Years of Service", icon: <FaAward size={24} color="#F5A000" />, color: "#F5A000", desc: "Rooted in tribal empowerment since 2004" },
              { num: "25,000+", label: "Adivasi Families", icon: <FaUsers size={24} color="#38BDF8" />, color: "#38BDF8", desc: "Households supported across three regions" },
              { num: "15,000+", label: "Forest Rights Acres", icon: <FaSeedling size={24} color="#3E8E0F" />, color: "#3E8E0F", desc: "Individual & community forest titles secured" },
              { num: "371", label: "Submergence Villages", icon: <FaMapMarkerAlt size={24} color="#D2190C" />, color: "#D2190C", desc: "Polavaram belt habitations defended" },
              { num: "75+", label: "Solar Hamlets", icon: <FaLeaf size={24} color="#F5A000" />, color: "#F5A000", desc: "Off-grid villages electrified" }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{
                  padding: "32px 24px",
                  background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)",
                  borderRadius: 24,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)",
                  border: `1px solid ${s.color}15`,
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 30px 60px -15px ${s.color}25`,
                  borderColor: s.color
                }}
              >
                {/* Top accent glow */}
                <div style={{ position: "absolute", top: -40, left: -40, width: 120, height: 120, background: `radial-gradient(circle, ${s.color}20, transparent 70%)`, borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />
                
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(${s.color === "#F5A000" ? "245,160,0" : s.color === "#38BDF8" ? "56,189,248" : s.color === "#3E8E0F" ? "62,142,15" : "210,25,12"}, 0.08)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: s.color, boxShadow: `0 8px 18px ${s.color}20` }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1, marginBottom: 10, fontFamily: "var(--font-serif)", display: "block" }}>{s.num}</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-light)", lineHeight: 1.4, fontWeight: 500 }}>{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CORE BELIEFS ==================== */}
      <section style={{ paddingTop: 90, paddingBottom: 40, background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Core Beliefs</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--color-dark)", marginBottom: 16 }}>What We Stand For</h2>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>
              ALERT's work is anchored in these core beliefs that shape every project, partnership, and policy advocacy we undertake.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {[
              { icon: <FaEye size={20} color="#003190" />, title: "Rights First", desc: "Every tribal family has a constitutional right to ancestral forest land." },
              { icon: <FaBullseye size={20} color="#D2190C" />, title: "Self-Reliance", desc: "Building Gram Sabha sovereignty and women-led cooperatives." },
              { icon: <FaSeedling size={20} color="#3E8E0F" />, title: "Sustainable Ecology", desc: "Protecting forests and natural resources for future generations." },
              { icon: <FaUsers size={20} color="#F5A000" />, title: "Collective Action", desc: "Strengthening community-based organizations across agency mandals." },
              { icon: <FaHeart size={20} color="#D2190C" />, title: "Gender Justice", desc: "Empowering Yenadi and tribal women through cooperatives." },
              { icon: <FaLeaf size={20} color="#3E8E0F" />, title: "Clean Energy", desc: "Bringing solar lighting to off-grid tribal hamlets." },
              { icon: <FaBullhorn size={20} color="#003190" />, title: "Legal Advocacy", desc: "Fighting for fair compensation and R&R packages." },
              { icon: <FaAward size={20} color="#F5A000" />, title: "Transparency", desc: "12A & 80G certified, FCRA registered, annual audits." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                style={{ background: "#ffffff", padding: 26, borderRadius: 20, boxShadow: "var(--shadow-sm)", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "all 0.3s ease" }}
                whileHover={{ y: -6, boxShadow: "var(--shadow-md)", borderColor: "var(--color-primary)" }}
              >
                <div style={{ width: 48, height: 48, minWidth: 48, minHeight: 48, borderRadius: 14, background: "rgba(210, 25, 12, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, color: "var(--color-primary)", overflow: "hidden" }}>
                  {item.icon}
                </div>
                <h4 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 8, fontSize: "0.95rem" }}>{item.title}</h4>
                <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APPROACH CARD ==================== */}
      <section style={{ paddingTop: 60, paddingBottom: 90, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, var(--color-dark) 0%, #0E2B66 100%)", borderRadius: 28, padding: 56, color: "white", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 30% 20%, rgba(245,160,0,0.15), transparent 50%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <span style={{ color: "#F5A000", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: 2, marginBottom: 16, display: "block" }}>Our Approach</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 22, lineHeight: 1.3 }}>From Rights to Resilience</h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 28, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                ALERT follows a rights-based development approach: we awaken communities to their constitutional entitlements, sensitize duty-bearers to their obligations, organize Gram Sabhas into collective decision-making bodies, and mobilize resources for sustainable forest rights, land justice, and livelihood security.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <span style={{ padding: "8px 16px", border: "1px solid rgba(245,160,0,0.4)", borderRadius: 500, color: "#F5A000", fontSize: "0.8rem", fontWeight: 700, background: "rgba(245,160,0,0.1)" }}>Community-Led</span>
                <span style={{ padding: "8px 16px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 500, color: "white", fontSize: "0.8rem", fontWeight: 700, background: "rgba(255,255,255,0.05)" }}>Rights-Based</span>
                <span style={{ padding: "8px 16px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 500, color: "white", fontSize: "0.8rem", fontWeight: 700, background: "rgba(255,255,255,0.05)" }}>Sustainable</span>
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
