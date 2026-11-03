import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFilePdf,
  FaDownload,
  FaHandHoldingHeart,
  FaBuilding,
  FaSeedling,
  FaUsers,
  FaGavel,
  FaWater,
  FaGraduationCap,
  FaCheckCircle,
  FaShieldAlt,
  FaHeart,
  FaEnvelope
} from "react-icons/fa";

const sectionDividerStyle = { borderTop: "1px solid #e2e8f0", marginTop: 64, paddingTop: 64, scrollMarginTop: 96 };

const CONTACT_EMAIL = "director@alertngo.in";

const sectionHeading = (badgeText, title, sub) => (
  <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 44px" }}>
    <span className="badge" style={{ marginBottom: 12, display: "inline-block" }}>{badgeText}</span>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.2vw, 2rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>
      {title}
    </h2>
    <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "0.95rem" }}>{sub}</p>
  </div>
);

const routes = [
  {
    icon: <FaBuilding />,
    title: "CSR & Section 80G Support",
    body: "Company CSR contributions to ALERT's registered programmes, with 80G tax exemption, a project-specific utilization certificate and audit-ready reporting for your CSR committee and Section 135 filings.",
    fits: "CSR committees, trusts of corporate foundations"
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Institutional & FCRA Grants",
    body: "Multi-year grants from international foundations and development agencies. ALERT has implemented Brot für die Welt (BftW), Germany-supported work through the Antyodaya Project in the coastal Krishna District.",
    fits: "Foundations, embassies, multilateral funds"
  },
  {
    icon: <FaUsers />,
    title: "Foundation & Community Partnerships",
    body: "Co-designed work with district administrations, Gram Sabhas, forest committees, universities and other NGOs — joint surveys, legal literacy drives, restoration and livelihood programmes with shared ownership.",
    fits: "PRIs, departments, academic institutions"
  },
  {
    icon: <FaSeedling />,
    title: "In-Kind & Skilled Support",
    body: "Solar kits, school and learning material, books, blankets and relief supplies, or pro-bono legal, accounting, translation, design and monitoring expertise contributed against a defined scope.",
    fits: "Suppliers, professional firms, individual experts"
  }
];

const missions = [
  {
    icon: <FaGavel />,
    title: "Land & Forest Rights",
    body: "Recognition of Forest Rights Act and LTR 1970 claims, Community Forest Resource mapping, title-suit recovery, and legal aid for habitation-level rights disputes across the Eastern Ghats agency zones.",
    tell: "Tell us if you want to fund legal aid, claim facilitation or document recovery."
  },
  {
    icon: <FaWater />,
    title: "Polavaram Rehabilitation",
    body: "Household surveys, RFCTLARR Act 2013 entitlement tracking, R&R social audits and grievance redressal support for families in the submergence belt of Godavari and Krishna districts.",
    tell: "Tell us if you want to back field research, social audits or victim support."
  },
  {
    icon: <FaUsers />,
    title: "Antyodaya Livelihoods",
    body: "Women's cooperatives and SHGs — micro-savings, revolving credit, estuarine fishing and mangrove work, house-site pattas and market linkage for coastal Krishna mandals.",
    tell: "Tell us if you want to seed a cooperative, a revolving fund or skills training."
  },
  {
    icon: <FaGraduationCap />,
    title: "Child Rights & Basic Services",
    body: "Joyful learning centres, digital classrooms and kits, school kits and kits for out-of-school children, alongside child-protection and nutrition monitoring at the village level.",
    tell: "Tell us if you want to equip a classroom, a centre or a batch of students."
  }
];

const diligence = [
  {
    title: "Organizational Profile & 20-Year Report of ALERT",
    file: "/uploads/Organizational-Profile-of-ALERT.pdf",
    meta: "Registration 307/2004 · 12A & 80G certificates",
    icon: <FaFilePdf />
  },
  {
    title: "ALERT Annual Report (April 2020 – March 2021)",
    file: "/uploads/ALERT_Annual-report-from-April-2020-to-March-2021-1.pdf",
    meta: "Audited operational and financial report",
    icon: <FaFilePdf />
  },
  {
    title: "Governance & Statutory Compliances for NGOs in India",
    file: "/uploads/FAQS-ON-NGO.pdf",
    meta: "Societies Registration, FCRA and 80G compliance manual",
    icon: <FaFilePdf />
  }
];

const commitments = [
  "Project-scoped agreement with clear deliverables, budget heads and a reporting calendar",
  "Social audit and beneficiary-level verification before a grant is renewed",
  "Named field officer and a site visit for every funded intervention",
  "Donations and grants reported publicly in our News & Views and annual report",
  "Zero tolerance on diversion: 12A & 80G, FCRA and POSH compliant operations"
];

export default function Partner() {
  return (
    <>
      <section className="section-pad" id="why-partner" style={{ paddingTop: 150, scrollMarginTop: 96 }}>
        <div className="container">
          {sectionHeading(
            "Section 01",
            "Why Partner With ALERT",
            "ALERT is a Vijayawada-based society registered in 2004, working with Adivasi and coastal communities in the Fifth Scheduled Areas of Andhra Pradesh. We combine a legal cell, field research units and community institutions — so a partnership here reaches a habitation, not only a report."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 36, alignItems: "center" }}>
            <div>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 16 }}>
                Our mandate runs from forest and land rights through displacement rehabilitation to livelihoods and education. Work is delivered through Gram Sabhas, forest rights committees and women's cooperatives, led by <strong>Y.L.J.B. Jayaraj</strong> with 35 institutional policies governing compliance, safeguarding and monitoring.
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 24 }}>
                We welcome funders who want the messier, slower work — title recovery, entitlement audits, legal literacy — as well as those who prefer a single school kit or solar pole. Both are scoped, reported and audited.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href={`mailto:${CONTACT_EMAIL}?subject=Partnership%20enquiry%20to%20ALERT`} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <FaEnvelope size={12} /> Start a Conversation
                </a>
                <Link to="/donate" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Give Directly <FaArrowRight size={11} />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <img
                src="/uploads/reel-4-women.jpg"
                alt="ALERT women's cooperative members at a meeting"
                style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PARTNERSHIP ROUTES */}
      <section className="section-pad" id="routes" style={sectionDividerStyle}>
        <div className="container">
          {sectionHeading(
            "Section 02",
            "Four Ways to Partner",
            "Pick the route that matches your mandate, your budget cycle and your reporting needs."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 22 }}>
            {routes.map((r) => (
              <article key={r.title} className="career-card">
                <span style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(62,142,15,0.10)", color: "var(--logo-green)", display: "grid", placeItems: "center", marginBottom: 12 }}>
                  {r.icon}
                </span>
                <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--color-dark)", lineHeight: 1.35, marginBottom: 10 }}>{r.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: 14 }}>{r.body}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text)", paddingTop: 12, borderTop: "1px dashed #e2e8f0" }}>
                  <strong style={{ color: "var(--color-dark)" }}>Best suited to:</strong> {r.fits}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — WHERE SUPPORT GOES */}
      <section className="section-pad" id="missions" style={sectionDividerStyle}>
        <div className="container">
          {sectionHeading(
            "Section 03",
            "Where Support Goes",
            "Four missions we can ring-fence a grant around. Every funded intervention gets a named officer, a field visit and a written close-out."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 22 }}>
            {missions.map((m) => (
              <div key={m.title} style={{ background: "white", borderRadius: 16, padding: 22, boxShadow: "var(--shadow-sm)", border: "1px solid #f1f5f9", borderLeft: "3px solid var(--color-primary)", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <span style={{ color: "var(--color-primary)", fontSize: "1.1rem" }}>{m.icon}</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-dark)" }}>{m.title}</h3>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.7 }}>{m.body}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--logo-green)", fontWeight: 600, lineHeight: 1.6, marginTop: "auto" }}>{m.tell}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — DUE DILIGENCE PACK */}
      <section className="section-pad" id="due-diligence" style={sectionDividerStyle}>
        <div className="container">
          {sectionHeading(
            "Section 04",
            "Due Diligence Pack",
            "Registration, tax and audit documents your compliance team can verify before any money moves."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18, marginBottom: 32 }}>
            {diligence.map((d) => (
              <a key={d.title} href={d.file} target="_blank" rel="noreferrer" className="career-card" style={{ display: "flex", flexDirection: "column", gap: 10, color: "inherit" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(210,25,12,0.08)", color: "var(--color-primary)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {d.icon}
                  </span>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--logo-gold)", textTransform: "uppercase", letterSpacing: "0.07em" }}>PDF document</span>
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-dark)", lineHeight: 1.45 }}>{d.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>{d.meta}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-primary)", fontWeight: 700, fontSize: "0.8rem", marginTop: "auto" }}>
                  <FaDownload size={10} /> Open document
                </span>
              </a>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
            <div style={{ background: "white", padding: "clamp(20px, 3vw, 28px)", borderRadius: 16, boxShadow: "var(--shadow-sm)", border: "1px solid #f1f5f9" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <FaShieldAlt style={{ color: "var(--logo-green)" }} /> What we commit to
              </h3>
              <ul style={{ display: "grid", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {commitments.map((c) => (
                  <li key={c} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: "0.86rem", color: "var(--color-text)", lineHeight: 1.6 }}>
                    <FaCheckCircle size={13} style={{ color: "var(--logo-green)", marginTop: 3, flexShrink: 0 }} /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "#f8fafc", padding: "clamp(20px, 3vw, 28px)", borderRadius: 16, border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 14 }}>Registration & tax details</h3>
              <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 16px", margin: 0, fontSize: "0.86rem" }}>
                <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>Legal form</dt>
                <dd style={{ margin: 0, color: "var(--color-text-light)" }}>Registered Society, Andhra Pradesh</dd>
                <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>Reg. No.</dt>
                <dd style={{ margin: 0, color: "var(--color-text-light)" }}>307/2004</dd>
                <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>Tax status</dt>
                <dd style={{ margin: 0, color: "var(--color-text-light)" }}>12A & 80G — donations tax-exempt</dd>
                <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>Foreign contributions</dt>
                <dd style={{ margin: 0, color: "var(--color-text-light)" }}>FCRA-compliant institutional grants</dd>
                <dt style={{ fontWeight: 700, color: "var(--color-dark)" }}>Head office</dt>
                <dd style={{ margin: 0, color: "var(--color-text-light)" }}>Vijayawada, Krishna District, Andhra Pradesh</dd>
              </dl>
              <p style={{ fontSize: "0.8rem", color: "var(--color-text-light)", lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>
                Certificates, PAN, FCRA sanction and audited statements are shared on request against a signed enquiry. Full document list:{" "}
                <Link to="/downloads" style={{ color: "var(--color-primary)", fontWeight: 600 }}>Downloads</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-shell cta-shell--single">
            <div className="cta-shell-glow cta-shell-glow-1" aria-hidden="true" />
            <div className="cta-shell-glow cta-shell-glow-2" aria-hidden="true" />

            <div className="cta-copy">
              <div className="cta-badge">
                <span className="cta-badge-dot" aria-hidden="true" />
                <span>Partner With Us</span>
              </div>

              <h2 className="cta-title">
                Fund Work That Is <span className="cta-title-highlight">Verified in the Field</span>
              </h2>

              <p className="cta-subtitle">
                Send us your mandate and budget cycle. We will come back with a scoped proposal, a realistic timeline, and the names of the habitation and officer who will do the work.
              </p>

              <div className="cta-actions">
                <a href={`mailto:${CONTACT_EMAIL}?subject=Partnership%20proposal%20request`} className="cta-btn-donate">
                  <span>Request a Proposal</span>
                  <span className="cta-donate-heart" aria-hidden="true"><FaHeart size={13} /></span>
                </a>
                <Link to="/contact" className="cta-btn-volunteer">
                  <span>Book a Site Visit</span>
                  <FaArrowRight size={12} className="cta-btn-arrow" aria-hidden="true" />
                </Link>
              </div>

              <div className="cta-trust-strip">
                <div className="cta-trust-item">
                  <FaShieldAlt className="cta-trust-icon" aria-hidden="true" />
                  <span>12A &amp; 80G Registered</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaCheckCircle className="cta-trust-icon" aria-hidden="true" />
                  <span>Social Audited Programmes</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaFilePdf className="cta-trust-icon" aria-hidden="true" />
                  <span>Audited Annual Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
