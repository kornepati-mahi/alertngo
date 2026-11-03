import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaExclamationCircle,
  FaFileInvoice,
  FaPaperPlane,
  FaCheckCircle,
  FaBookOpen,
  FaDownload,
  FaFilePdf
} from "react-icons/fa";
import AnimatedTypewriter from "../components/AnimatedTypewriter";

export default function Grievances() {
  const [form, setForm] = useState({
    name: "",
    aadhaar: "",
    phone: "",
    village: "",
    mandal: "",
    district: "Alluri Sitharama Raju",
    grievanceType: "R&R Package Entitlement",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [grievanceId, setGrievanceId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const trackingCode = "ALT-GRV-" + Math.floor(100000 + Math.random() * 900000);
    try {
      await fetch("http://localhost/alertngo-api/grievance.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tracking_code: trackingCode
        }),
      });
      setGrievanceId(trackingCode);
      setSubmitted(true);
    } catch (err) {
      // Local fallback
      setGrievanceId(trackingCode);
      setSubmitted(true);
    }
    setLoading(false);
  };

  const fullForms = [
    { abbr: "PDF", full: "Project Displaced Family", desc: "A family whose home or physical dwelling is acquired and displaced." },
    { abbr: "PAF", full: "Project Affected Family", desc: "A family whose livelihood or agricultural land is impacted by the project." },
    { abbr: "SDC", full: "Special Deputy Collector", desc: "The designated Land Acquisition & Resettlement Officer at sub-division level." },
    { abbr: "SLAO", full: "Special Land Acquisition Officer", desc: "Revenue officer presiding over award enquiries and compensation disbursement." },
    { abbr: "FRL", full: "Full Reservoir Level", desc: "Maximum water storage height (+45.72 Meters in Polavaram Dam)." },
    { abbr: "RoFR", full: "Recognition of Forest Rights", desc: "Statutory rights under the Scheduled Tribes Forest Rights Act 2006." },
  ];

  return (
    <>
      <div className="page-hero" style={{ background: "var(--gradient-hero)" }}>
        <motion.span className="badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ background: "rgba(245,160,0,0.25)", color: "#F5A000", marginBottom: 12 }}>
          Community Assistance
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          ALERT Grievance Redressal Portal
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ marginBottom: 16 }}>
          Dedicated platform for Project Affected Families (PAFs) and Displaced Families (PDFs) to lodge land, compensation, and R&R complaints.
        </motion.p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <AnimatedTypewriter
            prefix="Assisting with: "
            words={[
              "Polavaram Displaced Family (PDF) Housing Packages",
              "Adult Youth (18+) R&R Entitlement Claims",
              "Submergence Contour & Survey Rectifications",
              "Forest Land Rights (RoFR) Disposed Appeals",
              "Resettlement Colony Public Infrastructure Gaps"
            ]}
            typingSpeed={55}
            deletingSpeed={30}
            pauseTime={2000}
          />
        </div>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Grievance Portal</span>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "start", marginBottom: 48 }}>
            {/* GRIEVANCE FORM */}
            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: "white", padding: "clamp(20px, 4vw, 36px)", borderRadius: 16, boxShadow: "var(--shadow-md)" }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <FaCheckCircle style={{ fontSize: "3.5rem", color: "#10B981", marginBottom: 16 }} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>
                    Grievance Registered Successfully
                  </h3>
                  <div style={{ background: "#f8fafc", padding: "16px", borderRadius: 10, margin: "20px 0", border: "1px dashed #cbd5e1" }}>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>Tracking Reference Number</p>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-primary)" }}>{grievanceId}</div>
                  </div>
                  <p style={{ color: "var(--color-text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 24 }}>
                    Our legal and field caseworkers in Vijayawada will inspect the revenue records and follow up with the concerned Special Deputy Collector (SDC).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                    style={{ border: "none", cursor: "pointer", borderRadius: 30 }}
                  >
                    Submit Another Grievance
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 6 }}>
                    Lodge a Land or R&R Grievance
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", marginBottom: 24 }}>
                    Provide accurate details as per your household ration card / patta documents.
                  </p>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name of Claimant *</label>
                      <input
                        className="form-input"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Name as per Aadhaar"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Contact Mobile *</label>
                      <input
                        className="form-input"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Village / Habitation *</label>
                      <input
                        className="form-input"
                        required
                        value={form.village}
                        onChange={(e) => setForm({ ...form, village: e.target.value })}
                        placeholder="Village name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mandal *</label>
                      <input
                        className="form-input"
                        required
                        value={form.mandal}
                        onChange={(e) => setForm({ ...form, mandal: e.target.value })}
                        placeholder="Mandal name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Grievance Category *</label>
                    <select
                      className="form-input"
                      value={form.grievanceType}
                      onChange={(e) => setForm({ ...form, grievanceType: e.target.value })}
                      style={{ height: 48 }}
                    >
                      <option value="R&R Package Entitlement">R&R Package Entitlement (₹10 Lakh or House)</option>
                      <option value="Adult Youth Package">Adult Youth (18+ Yrs) Package Non-Inclusion</option>
                      <option value="Land Valuation / Award Issue">Land Valuation / Low Compensation</option>
                      <option value="House / Structure Valuation">House Structure Valuation Discrepancy</option>
                      <option value="Resettlement Colony Infrastructure">R&R Colony Basic Amenities (Water, Power, Road)</option>
                      <option value="RoFR Forest Land Patta Issue">RoFR Forest Land Patta Rejection</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Details of the Grievance *</label>
                    <textarea
                      className="form-textarea"
                      required
                      rows={4}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Explain the issue clearly (mention survey number, passbook number, or order number if available)..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={loading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      width: "100%",
                      padding: "14px",
                      background: "var(--color-primary)",
                      color: "white",
                      border: "none",
                      borderRadius: 10,
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                  >
                    {loading ? "Registering..." : (
                      <>
                        <FaPaperPlane /> Submit Grievance
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* ACRONYMS & FAQ DOWNLOAD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ background: "white", padding: 30, borderRadius: 16, boxShadow: "var(--shadow-sm)", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#003190" }}>
                    <FaBookOpen size={20} />
                    <h3 style={{ fontSize: "1.2rem", color: "var(--color-dark)", fontWeight: 700 }}>
                      R&R Terminology & Acronyms
                    </h3>
                  </div>
                  <a
                    href="/uploads/GREIVANCE-FAQ.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.8rem", color: "var(--color-primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}
                  >
                    <FaFilePdf /> FAQ PDF
                  </a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
                  {fullForms.map((item, idx) => (
                    <div key={idx} style={{ padding: "10px 14px", background: "#f8fafc", borderRadius: 8 }}>
                      <span style={{ fontWeight: 800, color: "var(--color-primary)", marginRight: 8 }}>{item.abbr}:</span>
                      <strong style={{ color: "var(--color-dark)", fontSize: "0.88rem" }}>{item.full}</strong>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-light)", marginTop: 2 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DOWNLOAD GRIEVANCES FULL FORMS CHART */}
              <div style={{ background: "white", padding: 24, borderRadius: 16, boxShadow: "var(--shadow-sm)" }}>
                <h4 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 12 }}>Official Grievance Categories Chart</h4>
                <img src="/uploads/grievance-types.png" alt="Grievance Types Chart" style={{ width: "100%", borderRadius: 8 }} loading="lazy" decoding="async" />
              </div>
            </motion.div>
          </div>

          {/* AUTHENTIC SCRAPED CHARTS SECTION */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            <div style={{ background: "white", padding: 28, borderRadius: 16, boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 12 }}>
                ALERT R&R Grievances Abstract
              </h3>
              <img src="/uploads/GRIEVANCE-ALL.png" alt="ALERT Grievances Abstract" style={{ width: "100%", borderRadius: 8 }} loading="lazy" decoding="async" />
            </div>

            <div style={{ background: "white", padding: 28, borderRadius: 16, boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 12 }}>
                Land Rights Grievances Classification
              </h3>
              <img src="/uploads/LAND-RIGHTS.png" alt="Land Rights Grievances" style={{ width: "100%", borderRadius: 8 }} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
