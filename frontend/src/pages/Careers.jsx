import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaCheckCircle,
  FaEnvelope,
  FaShieldAlt,
  FaHeart
} from "react-icons/fa";

const sectionDividerStyle = { borderTop: "1px solid #e2e8f0", marginTop: 64, paddingTop: 64, scrollMarginTop: 96 };

const APPLY_EMAIL = "contact@alertngo.in";

const sectionHeading = (badgeText, title, sub) => (
  <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 44px" }}>
    <span className="badge" style={{ marginBottom: 12, display: "inline-block" }}>{badgeText}</span>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.2vw, 2rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>
      {title}
    </h2>
    <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "0.95rem" }}>{sub}</p>
  </div>
);

const openings = [
  {
    role: "Field Coordinator — Polavaram R&R",
    type: "Full-time",
    place: "Vijayawada HQ with field travel, ASR & Eluru districts",
    icon: <FaMapMarkerAlt />,
    about: "Lead household surveys and social audits across the submergence belt, verify RFCTLARR Act 2013 entitlements, and carry findings into meetings with the R&R Commissioner and Gram Sabhas.",
    fit: "Field research experience with tribal communities, Telugu fluency, comfort with long mandal travel."
  },
  {
    role: "Legal Aid & RTI Researcher",
    type: "Full-time",
    place: "Vijayawada HQ",
    icon: <FaShieldAlt />,
    about: "Draft RTI representations, writ petition documentation and RoFR / LTR case files with the Legal Cell, and prepare village-level legal literacy material on the Bare Acts.",
    fit: "Law degree or legal-research background; writing in plain Telugu and English; familiarity with forest and land law."
  },
  {
    role: "Women Cooperatives Manager",
    type: "Full-time",
    place: "Krishna District coastal mandals",
    icon: <FaUsers />,
    about: "Work with Matsya Mithra groups on savings discipline, market linkages, fish handling and leadership training for Yenadi members across the six coastal mandals.",
    fit: "Experience with SHGs or cooperatives, fisheries or livelihood programmes, and community mobilisation."
  },
  {
    role: "Monitoring, Evaluation & Learning Officer",
    type: "Full-time",
    place: "Vijayawada HQ with field visits",
    icon: <FaGraduationCap />,
    about: "Maintain the MEL framework behind ALERT's 35 institutional policies — beneficiary tracking, outcome harvesting, donor reporting and the evidence used in our public impact pages.",
    fit: "M&E or development-economics background, data cleaning and reporting discipline, Kannada/Telugu an advantage."
  },
  {
    role: "Solar & Green Energy Technician",
    type: "Contract / Project",
    place: "Eastern Ghats agency habitations",
    icon: <FaBriefcase />,
    about: "Install and service solar home lighting and street poles, train local youth maintenance teams, and keep the spares and warranty record for each hamlet.",
    fit: "ITI or diploma in electrical work, solar system experience, willingness to stay in field locations."
  }
];

const pathways = [
  {
    title: "Field Volunteering",
    who: "Students and early-career practitioners",
    body: "Join a mandal team for relief distribution, school support, documentation drives or civil-documentation camps. Short stints of two to four weeks, longer placements by arrangement."
  },
  {
    title: "Research Internships",
    who: "Postgraduate researchers in law, development, anthropology, data",
    body: "Work with verified programme records on land rights, displacement rehabilitation or cooperative livelihoods. We ask for a research design cleared by your guide and a plain-language summary for the community."
  },
  {
    title: "Skilled Pro-Bono Support",
    who: "Lawyers, accountants, designers, developers, translators",
    body: "Legal opinion support, audit readiness, translation of Bare Acts into Koya and Telugu, photography and archive digitisation — contributed on your own schedule."
  }
];

const values = [
  "Volunteer & Intern Professional Code for work inside Fifth Scheduled Adivasi habitations",
  "POSH Act 2013 compliance with an active Internal Complaints Committee",
  "Child Protection & Safeguarding Policy — background checks and no unsupervised access",
  "Human Resource Policy with merit recruitment and affirmative induction of tribal youth",
  "Do No Harm and conflict-sensitive community practice",
  "Grievance Redressal Mechanism with a 15-day resolution pathway"
];

const applySteps = [
  { n: "01", t: "Write to us", d: `Email ${APPLY_EMAIL} with the role or pathway in the subject line — for example "Application — MEL Officer".` },
  { n: "02", t: "Send your file", d: "CV or resume, a short note on why this work, and contacts for two referees. Certificates can follow later." },
  { n: "03", t: "Conversation", d: "A first call with the programme team, then a field or task-based exercise that reflects the actual work." },
  { n: "04", t: "Decision", d: "Written offer or honest feedback. Vacancies are filled as project funding allows; we keep strong applicants in a talent pool." }
];

export default function Careers() {
  return (
    <>
      <section className="section-pad" id="work-with-alert" style={{ paddingTop: 150, scrollMarginTop: 96 }}>
        <div className="container">
          {sectionHeading(
            "Section 01",
            "Working With ALERT",
            "ALERT is a Vijayawada-based society working in the Fifth Scheduled Areas of Andhra Pradesh since 2004. Our teams are small, field-first, and answerable to Gram Sabhas — so the work is close to the community and rarely desk-bound."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 36, alignItems: "center" }}>
            <div>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 16 }}>
                Founded and led by <strong>Y.L.J.B. Jayaraj</strong>, ALERT runs four operational wings — Legal Cell, Polavaram LA & R&R Field Unit, Antyodaya Livelihoods & Women Cooperatives, and Finance, Administration & Compliance. Each needs people who can hold a file, a conversation and a village meeting on the same day.
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 24 }}>
                Openings below are the roles we recruit for regularly. Availability depends on project funding cycles — if a post is closed when you write, we keep your file for the next cycle.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href={`mailto:${APPLY_EMAIL}?subject=Application%20to%20ALERT`} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <FaEnvelope size={12} /> Send Your Profile
                </a>
                <Link to="/partner" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Partner With Us <FaArrowRight size={11} />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <img
                src="/uploads/PHOTO-2023-02-15-19-20-56_2-1.jpg"
                alt="ALERT field team meeting with community members"
                style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — CURRENT OPENINGS */}
      <section className="section-pad" id="openings" style={sectionDividerStyle}>
        <div className="container">
          {sectionHeading(
            "Section 02",
            "Roles We Recruit For",
            "Five core positions across the legal, field, livelihood and compliance wings."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 22 }}>
            {openings.map((o) => (
              <article key={o.role} className="career-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(210,25,12,0.08)", color: "var(--color-primary)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {o.icon}
                  </span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-dark)", lineHeight: 1.35 }}>{o.role}</h3>
                    <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--logo-green)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{o.type}</span>
                  </div>
                </div>
                <p style={{ display: "flex", alignItems: "center", gap: 7, fontSize: "0.78rem", color: "var(--color-text-light)", marginBottom: 12 }}>
                  <FaMapMarkerAlt size={10} style={{ color: "var(--color-primary)" }} /> {o.place}
                </p>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: 14 }}>{o.about}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text)", lineHeight: 1.6, marginBottom: 16, paddingTop: 12, borderTop: "1px dashed #e2e8f0" }}>
                  <strong style={{ color: "var(--color-dark)" }}>What fits:</strong> {o.fit}
                </p>
                <a href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`Application — ${o.role}`)}`} style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.82rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Apply for this role <FaArrowRight size={10} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — INTERNSHIPS & VOLUNTEER PATHWAYS */}
      <section className="section-pad" id="pathways" style={sectionDividerStyle}>
        <div className="container">
          {sectionHeading(
            "Section 03",
            "Internships & Volunteer Pathways",
            "Three ways to work with ALERT without a paid post — each governed by our Volunteer & Intern Professional Code."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
            {pathways.map((p) => (
              <div key={p.title} style={{ background: "white", padding: 24, borderRadius: 16, boxShadow: "var(--shadow-sm)", borderTop: "3px solid var(--logo-gold)", display: "flex", flexDirection: "column", gap: 10 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-dark)" }}>{p.title}</h3>
                <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.who}</span>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — HOW TO APPLY */}
      <section className="section-pad" id="how-to-apply" style={sectionDividerStyle}>
        <div className="container">
          {sectionHeading(
            "Section 04",
            "How To Apply",
            "One email, four steps. We never charge any fee at any stage of recruitment."
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20, marginBottom: 32 }}>
            {applySteps.map((s) => (
              <div key={s.n} style={{ background: "#f8fafc", padding: 22, borderRadius: 14, border: "1px solid #e2e8f0" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-primary)", display: "block", marginBottom: 8 }}>{s.n}</span>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>{s.t}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "white", padding: "clamp(20px, 3vw, 28px)", borderRadius: 16, boxShadow: "var(--shadow-sm)", border: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <FaShieldAlt style={{ color: "var(--logo-green)" }} /> What you can expect from us
            </h3>
            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
              {values.map((v) => (
                <li key={v} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: "0.86rem", color: "var(--color-text)", lineHeight: 1.6 }}>
                  <FaCheckCircle size={13} style={{ color: "var(--logo-green)", marginTop: 3, flexShrink: 0 }} /> {v}
                </li>
              ))}
            </ul>
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
                <span>Careers</span>
              </div>

              <h2 className="cta-title">
                Do Work That Reaches <span className="cta-title-highlight">the Last Hamlet</span>
              </h2>

              <p className="cta-subtitle">
                If none of the roles above fit you yet, send your profile anyway. Field coordinators, legal researchers and MEL staff are recruited as project funding opens.
              </p>

              <div className="cta-actions">
                <a href={`mailto:${APPLY_EMAIL}?subject=Profile%20for%20ALERT%20talent%20pool`} className="cta-btn-donate">
                  <span>Email Your Profile</span>
                  <span className="cta-donate-heart" aria-hidden="true"><FaHeart size={13} /></span>
                </a>
                <Link to="/contact" className="cta-btn-volunteer">
                  <span>Talk to the Head Office</span>
                  <FaArrowRight size={12} className="cta-btn-arrow" aria-hidden="true" />
                </Link>
              </div>

              <div className="cta-trust-strip">
                <div className="cta-trust-item">
                  <FaShieldAlt className="cta-trust-icon" aria-hidden="true" />
                  <span>No Recruitment Fee</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaCheckCircle className="cta-trust-icon" aria-hidden="true" />
                  <span>POSH Compliant Workplace</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaUsers className="cta-trust-icon" aria-hidden="true" />
                  <span>Tribal Youth Induction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
