import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { FaFilePdf, FaUsers, FaEye, FaBullseye, FaWater } from "react-icons/fa";
import PdfViewerModal from "../components/PdfViewerModal";
import AreaOfOperationExplorer from "../components/AreaOfOperationExplorer";
import PoliciesDirectory from "../components/PoliciesDirectory";
import InteractiveOrganogram from "../components/InteractiveOrganogram";
import InteractiveTimeline from "../components/InteractiveTimeline";
import FlipCard from "../components/FlipCard";
import ErrorBoundary from "../components/ErrorBoundary";

const sectionDividerStyle = {
  borderTop: "1px solid #e2e8f0",
  marginTop: 64,
  paddingTop: 64,
  scrollMarginTop: 96
};

const sectionHeading = (badgeText, title, sub) => (
  <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 44px" }}>
    <span className="badge" style={{ marginBottom: 12, display: "inline-block" }}>{badgeText}</span>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.2vw, 2rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>
      {title}
    </h2>
    <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "0.95rem" }}>{sub}</p>
  </div>
);

export default function About() {
  const [searchParams] = useSearchParams();
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Deep-link support for legacy links like /about?tab=operation — scroll to the matching section
  useEffect(() => {
    const qTab = searchParams.get("tab");
    if (qTab && ["profile", "organogram", "operation", "policies", "milestones"].includes(qTab)) {
      const t = setTimeout(() => {
        const el = document.getElementById(qTab);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
      return () => clearTimeout(t);
    }
  }, [searchParams]);

  return (
    <>
      <section className="section-pad" id="about-content-area" style={{ paddingTop: 150 }}>
        <div className="container">

          {/* 0. ABOUT US */}
          <section id="about-us" style={{ scrollMarginTop: 96 }}>
            {sectionHeading(
              "Section 00",
              "About Us",
              "ALERT — Association for Land and Livelihood, Environment, Research and Training — is a grassroots non-profit working with Adivasi and marginalized communities across the Fifth Scheduled Areas of Andhra Pradesh since 2004."
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "center" }}>
                <div>
                  <span className="badge" style={{ marginBottom: 14, display: "inline-block" }}>Est. 2004</span>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)", color: "var(--color-dark)", marginBottom: 18, lineHeight: 1.3 }}>
                    Association for Land and Livelihood, Environment, Research and Training
                  </h2>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
                    ALERT was established in 2004 under the Societies Registration Act (Reg. No. 307/2004) and is headquartered in Vijayawada, Andhra Pradesh. Led by founder-director <strong>YL Jayaraj</strong>, who brings 47 years of experience in grass-roots human rights and community empowerment, ALERT specializes in supporting marginalized communities in the Fifth Scheduled Areas.
                  </p>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 24, fontSize: "0.95rem" }}>
                    Our mandate spans affirmative legislation enforcement, the Forest Rights Act (RoFR 2006), the PESA Act 1996, Land Transfer Regulation 1 of 1970, and fair rehabilitation for communities displaced by mega irrigation projects like Polavaram.
                  </p>
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                  <img
                    src="/uploads/WhatsApp-Image-2021-08-19-at-6.48.06-PM-1024x768.jpeg"
                    alt="ALERT Community Field Work"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }} loading="lazy" decoding="async" />
                </div>
              </div>
            </motion.div>
          </section>

          {/* 1. ORGANIZATIONAL PROFILE */}
          <section id="profile" style={{ scrollMarginTop: 96 }}>
            {sectionHeading(
              "Section 01",
              "Organizational Profile",
              "Who we are, our statutory mandate, and the legal accreditations that underpin every ALERT intervention."
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 36, alignItems: "center" }}>
                <div>
                  <span className="badge" style={{ marginBottom: 14, display: "inline-block" }}>Reg. No. 307/2004</span>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)", color: "var(--color-dark)", marginBottom: 18, lineHeight: 1.3 }}>
                    Association for Land and Livelihood, Environment, Research and Training
                  </h2>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
                    ALERT, established in 2004 under the Societies Registration Act, is headquartered in Vijayawada, Andhra Pradesh. Led by founder-director <strong>YL Jayaraj</strong>, who brings 47 years of experience in grass-roots human rights and community empowerment, ALERT specializes in supporting marginalized communities in the Fifth Scheduled Areas.
                  </p>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 24, fontSize: "0.95rem" }}>
                    Our mandate encompasses affirmative legislation enforcement, the Forest Rights Act (RoFR 2006), the PESA Act 1996, Land Transfer Regulation 1 of 1970, and fair rehabilitation for communities displaced by mega irrigation projects like Polavaram.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14, marginBottom: 24 }}>
                    <div style={{ background: "white", padding: 18, borderRadius: 12, boxShadow: "var(--shadow-sm)", borderLeft: "4px solid var(--color-primary)" }}>
                      <div style={{ fontWeight: 700, color: "var(--color-dark)", fontSize: "0.95rem" }}>Legal Accreditations</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--color-text-light)", marginTop: 4 }}>12A, 80G Tax Exemption, FCRA Registered</div>
                    </div>
                    <div style={{ background: "white", padding: 18, borderRadius: 12, boxShadow: "var(--shadow-sm)", borderLeft: "4px solid #10B981" }}>
                      <div style={{ fontWeight: 700, color: "var(--color-dark)", fontSize: "0.95rem" }}>Governance Code</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--color-text-light)", marginTop: 4 }}>Governed by 35 Institutional Policies</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                    <button
                      type="button"
                      onClick={() => setSelectedPdf({
                        file: "/uploads/Organizational-Profile-of-ALERT.pdf",
                        title: "Organizational Profile of ALERT",
                        meta: "Official Society Record • 20-Year Dossier"
                      })}
                      className="btn-primary"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.88rem", cursor: "pointer", border: "none" }}
                    >
                      <FaFilePdf size={13} /> View Official Profile PDF
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPdf({
                        file: "/uploads/ALERT_Annual-report-from-April-2020-to-March-2021-1.pdf",
                        title: "ALERT Annual Audited Report (2020-2021)",
                        meta: "Audited Financial & Operational Statement"
                      })}
                      className="btn-outline"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.88rem", cursor: "pointer" }}
                    >
                      <FaFilePdf size={13} /> View Annual Report PDF
                    </button>
                  </div>
                </div>

                <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                  <img
                    src="/uploads/WhatsApp-Image-2021-08-19-at-6.48.06-PM-1024x768.jpeg"
                    alt="ALERT Community Field Work"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }} loading="lazy" decoding="async" />
                </div>
              </div>
            </motion.div>
          </section>

          {/* 2. ORGANOGRAM CHART */}
          <section id="organogram" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 02",
              "Organogram Chart",
              "The democratic governance hierarchy — from the sovereign General Body down to autonomous grassroots Gram Sabhas and field operational cells."
            )}
            <ErrorBoundary>
              <InteractiveOrganogram />
            </ErrorBoundary>
          </section>

          {/* 3. AREA OF OPERATION MAP */}
          <section id="operation" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 03",
              "Area of Operation Map",
              "17 mandal stations and 4 operational jurisdictions across the Fifth-Scheduled Agency Belt and Coastal Krishna Belt of Andhra Pradesh."
            )}
            <ErrorBoundary>
              <AreaOfOperationExplorer />
            </ErrorBoundary>
          </section>

          {/* 4. ALERT 35 POLICIES */}
          <section id="policies" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 04",
              "ALERT 35 Policies",
              "35 formalized statutory charters certified by the ALERT Governing Body ensuring democratic transparency, protection, and financial accountability."
            )}
            <ErrorBoundary>
              <PoliciesDirectory />
            </ErrorBoundary>
          </section>

          {/* 5. 20-YEAR MILESTONES */}
          <section id="milestones" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 05",
              "20-Year Milestones",
              "The journey from 2004 registration to two decades of transformative grassroots justice, appellate litigation, and women cooperative federations."
            )}
            <ErrorBoundary>
              <InteractiveTimeline />
            </ErrorBoundary>
          </section>

          {/* 6. GOVERNING BODY */}
          <section id="governing-body" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 06",
              "Governing Body",
              "The democratic Board of Directors that guides ALERT's mission across Andhra Pradesh since 2004."
            )}
            <p style={{ textAlign: "center", color: "var(--color-text-light)", maxWidth: 700, margin: "0 auto 40px", fontSize: "0.98rem", lineHeight: 1.7 }}>
              ALERT is governed by a dedicated Board of Directors comprising legal scholars, development activists, and community leaders. The Governing Body ensures statutory compliance (12A, 80G, FCRA) and directs all field interventions across forest rights, land acquisition & rehabilitation, women's cooperatives, and disaster relief.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
                <FlipCard
                  img="/uploads/Divakar-Babu.jpg"
                  name="Prof. Ch. Diwakar Babu"
                  role="President"
                  badge="Board of Directors"
                  bio="Renowned legal scholar and former Principal of V.R. Law College. A constitutional rights specialist guiding ALERT's legal interventions in tribal Fifth-Scheduled Areas of Andhra Pradesh."
                  highlights={["Principal VR Law College", "Constitutional Rights Expert", "Appellate Litigation Advisor"]}
                  quote="Justice is non-negotiable for the indigenous forest dwelling communities."
                />
                <FlipCard
                  img="/uploads/Ramakrishna.jpg"
                  name="Mr V. Rama Krishna"
                  role="Vice President"
                  badge="Board of Directors"
                  bio="Senior development activist specializing in rural livelihood cooperatives and natural resource stewardship for forest hamlets."
                  highlights={["Rural Livelihood Cooperatives", "Community Mobilization", "Natural Resource Policy"]}
                  quote="Self-reliance begins when communities govern their own indigenous land."
                />
                <FlipCard
                  img="/uploads/jayaraj-sir.jpg"
                  name="Mr Y.L.J.B. Jayaraj"
                  role="Executive Secretary"
                  badge="Founder & Director"
                  bio="Founder and Chief Functionary of ALERT with 47+ years of grassroots human rights experience. Specialist in FRA & PESA enforcement."
                  highlights={["47+ Years Grassroots Leadership", "FRA & PESA Enforcement Specialist"]}
                  quote="Every tribal settlement has a constitutional right to sovereignty, dignity, and flourishing."
                />
                <FlipCard
                  img="/uploads/Sirisha-1.jpg"
                  name="Ms P. Sirisha"
                  role="Treasurer"
                  badge="Board of Directors"
                  bio="Development finance specialist overseeing statutory financial auditing and 12A & 80G compliance."
                  highlights={["12A & 80G Compliances", "Statutory Financial Auditing", "Transparent Donor Reporting"]}
                  quote="Uncompromising integrity and financial transparency are our core tenets."
                />
              </div>
            </motion.div>
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <button
                type="button"
                onClick={() => setSelectedPdf({
                  file: "/uploads/Organizational-Profile-of-ALERT.pdf",
                  title: "Organizational Profile of ALERT",
                  meta: "Official Society Record • 20-Year Dossier"
                })}
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px" }}
              >
                <FaFilePdf size={13} /> View Governing Body PDF
              </button>
            </div>
          </section>

          {/* 7. VISION & MISSION */}
          <section id="vision-mission" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 07",
              "Vision & Mission",
              "Guiding principles that drive every intervention across forest rights, land rehabilitation, and tribal empowerment."
            )}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
                <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #fdfdff 100%)", border: "1px solid #D2190C25", borderRadius: 24, padding: 32, boxShadow: "0 20px 40px -10px rgba(210, 25, 12, 0.12)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "#D2190C", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                      <FaEye size={16} />
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#D2190C" }}>Vision Statement</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>Empowerment towards Prosperity &amp; Peace</h3>
                  <div style={{ marginBottom: 14, padding: 14, background: "rgba(210, 25, 12, 0.06)", borderLeft: "4px solid #D2190C", borderRadius: 8 }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-text)", fontStyle: "italic", lineHeight: 1.6 }}>"Empowerment of socially excluded and marginalized towards prosperity and peace"</span>
                  </div>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.9rem", margin: 0 }}>
                    ALERT envisions a future where every socially excluded and marginalized Adivasi family lives with dignity, self-governance, and equitable access to forest rights, land, and livelihood opportunities.
                  </p>
                </div>
                <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)", border: "1px solid #00319025", borderRadius: 24, padding: 32, boxShadow: "0 20px 40px -10px rgba(0, 49, 144, 0.12)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "#003190", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                      <FaBullseye size={16} />
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#003190" }}>Mission Statement</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>Awaken, Sensitize, Organize, Mobilize</h3>
                  <div style={{ marginBottom: 14, padding: 14, background: "rgba(0, 49, 144, 0.06)", borderLeft: "4px solid #003190", borderRadius: 8 }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-text)", fontStyle: "italic", lineHeight: 1.6 }}>"To awaken, sensitize, organize and mobilize the Adivasi communities for Self-governance, Self-reliance and Sustainable environment and development"</span>
                  </div>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.9rem", margin: 0 }}>
                    ALERT works hand-in-hand with tribal communities to secure forest rights under the RoFR Act 2006, ensure fair land acquisition and rehabilitation, and build women-led cooperative federations.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 8. CORE VALUES */}
          <section id="core-values" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 08",
              "Core Values",
              "The principles that guide every ALERT intervention — from forest rights to women's cooperatives and disaster relief."
            )}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                {[
                  { title: "Integrity", quote: "We choose our thoughts and actions based on values rather than personal gain.", icon: <FaUsers />, accent: "#D2190C" },
                  { title: "Accountability", quote: "We love to be slapped with truth than to be kissed with a lie.", icon: <FaEye />, accent: "#003190" },
                  { title: "Transparency", quote: "We build trust through transparency.", icon: <FaEye />, accent: "#3E8E0F" },
                  { title: "Gender Justice", quote: "We believe and practice equality.", icon: <FaUsers />, accent: "#F5A000" },
                  { title: "Professionalism", quote: "We don't just do it but we prefer to do it in the best way possible.", icon: <FaEye />, accent: "#003190" },
                  { title: "Excellence", quote: "It is not by accident but the result of our high intention.", icon: <FaEye />, accent: "#D2190C" },
                  { title: "Empathy", quote: "We carry the message that 'you are not alone'.", icon: <FaUsers />, accent: "#D2190C" }
                ].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    style={{
                      background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)",
                      border: `1px solid ${v.accent}15`,
                      borderRadius: 20,
                      padding: 26,
                      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden"
                    }}
                    whileHover={{ y: -6, borderColor: v.accent }}
                  >
                    <div style={{ position: "absolute", top: -30, left: -30, width: 90, height: 90, background: `radial-gradient(circle, ${v.accent}10, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }} />
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(210, 25, 12, 0.08)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: v.accent, position: "relative", zIndex: 2 }}>
                      {v.icon}
                    </div>
                    <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--color-dark)", marginBottom: 10, fontSize: "1rem", position: "relative", zIndex: 2 }}>{v.title}</h4>
                    <div style={{ position: "relative", zIndex: 2, marginBottom: 12, padding: 12, background: `rgba(210, 25, 12, 0.05)`, borderLeft: `4px solid ${v.accent}`, borderRadius: 8, flex: 1 }}>
                      <span style={{ fontSize: "0.82rem", color: "var(--color-text)", fontStyle: "italic", lineHeight: 1.5 }}>"{v.quote}"</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 9. FLOOD RELIEF MEASURES */}
          <section id="flood-relief-measures" style={sectionDividerStyle}>
            {sectionHeading(
              "Section 09",
              "Flood Relief Measures",
              "Emergency response across the Godavari agency belt — delivering rations, medical kits, rescue boats and shelter materials to vulnerable tribal families."
            )}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ background: "linear-gradient(145deg, #ffffff 0%, #fdfdff 100%)", border: "1px solid #f1f5f9", borderRadius: 24, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.08)", overflow: "hidden" }}>
                <div style={{ display: "flex", borderBottom: "1px solid #f1f5f9" }}>
                  {[
                    { id: "2023", title: "Flood Relief 2023", sub: "Godavari Basin Emergency Mission", badge: "Active" },
                    { id: "2022", title: "Flood Relief 2022", sub: "Multi-Mandal Relief Mission", badge: "Completed" },
                    { id: "2021", title: "Flood Relief 2021", sub: "Rescue Boat Deployment", badge: "Completed" },
                    { id: "2020", title: "Flood Relief 2020", sub: "Blankets & Winter Care", badge: "Completed" }
                  ].map((y, i) => (
                    <button
                      key={y.id}
                      style={{
                        flex: 1,
                        padding: "14px 16px",
                        background: i === 0 ? "linear-gradient(135deg, #D2190C 0%, #F5A000 100%)" : "transparent",
                        color: i === 0 ? "white" : "#64748b",
                        border: "none",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        cursor: "pointer"
                      }}
                    >
                      {y.title}
                      <span style={{ marginLeft: 6, fontSize: "0.6rem", opacity: 0.8, border: "1px solid rgba(255,255,255,0.4)", padding: "1px 5px", borderRadius: 6 }}>{y.badge}</span>
                    </button>
                  ))}
                </div>
                <div style={{ padding: "28px 32px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(210, 25, 12, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D2190C" }}>
                      <FaWater size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#D2190C", marginBottom: 4, display: "block" }}>Active</span>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: "var(--color-dark)", marginBottom: 6, lineHeight: 1.3 }}>Flood Relief 2023</h3>
                      <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>Godavari Basin Emergency Mission</span>
                    </div>
                  </div>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 20 }}>
                    4,200+ displaced families received emergency rations & medical kits across Alluri Sitharama Raju and Eluru districts. Mechanized boats deployed to reach the most isolated hamlets.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16, textAlign: "center" }}>
                    <div style={{ padding: "16px 12px", background: "rgba(210, 25, 12, 0.05)", borderRadius: 12, border: "1px solid #D2190C20" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: 4 }}>4,200+</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-light)", fontWeight: 600 }}>Families Relieved</div>
                    </div>
                    <div style={{ padding: "16px 12px", background: "rgba(0, 49, 144, 0.05)", borderRadius: 12, border: "1px solid #00319020" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: 4 }}>15+</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-light)", fontWeight: 600 }}>Rescue Boat Deployments</div>
                    </div>
                    <div style={{ padding: "16px 12px", background: "rgba(245, 160, 0, 0.05)", borderRadius: 12, border: "1px solid #F5A00020" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: 4 }}>48hrs</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-light)", fontWeight: 600 }}>Avg. Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </section>

      {/* INTERACTIVE PDF VIEWER MODAL */}
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
