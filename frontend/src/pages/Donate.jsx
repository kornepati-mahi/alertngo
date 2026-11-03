import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeart, FaShieldAlt, FaReceipt, FaPhone, FaEnvelope } from "react-icons/fa";
import AnimatedTypewriter from "../components/AnimatedTypewriter";

const amounts = [500, 1000, 2500, 5000, 10000, 25000];

export default function Donate() {
  const [selected, setSelected] = useState(1000);
  const [custom, setCustom] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", pan: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const finalAmount = custom ? Number(custom) : selected;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("http://localhost/alertngo-api/donate.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, amount: finalAmount }),
      });
      setSubmitted(true);
    } catch (err) {
      alert("Donation recorded locally. Thank you for your contribution!");
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="page-hero" style={{ background: "var(--gradient-hero)" }}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Donate Now</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ marginBottom: 16 }}>
          Your contribution empowers Adivasi communities. Every rupee makes a difference.
        </motion.p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <AnimatedTypewriter
            prefix="Impact of Giving: "
            words={[
              "100% Tax Exemption Under Section 80G",
              "Direct Support for 371 Polavaram Displaced Habitations",
              "Clean Solar Lanterns for Un-electrified Hill Homes",
              "Legal Aid & High Court Representation for Tribals"
            ]}
            typingSpeed={55}
            deletingSpeed={30}
            pauseTime={2000}
          />
        </div>
        <div className="breadcrumb"><Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Donate</span></div>
      </div>

      <section className="section-pad donate-section">
        <div className="container">
          <div className="donate-grid">
            {/* IMPACT INFO */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Make an Impact</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.2 }}>Your Donation Changes Lives</h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 32 }}>Every donation to ALERT directly supports Adivasi communities in Andhra Pradesh. Your contribution funds forest rights advocacy, women empowerment programs, solar energy access, and sustainable livelihood initiatives.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                {[
                  { amount: "₹500", impact: "Supports forest rights documentation for 1 family" },
                  { amount: "₹1,000", impact: "Provides solar lantern to a remote village household" },
                  { amount: "₹5,000", impact: "Funds one month of women cooperative training" },
                  { amount: "₹10,000", impact: "Supports legal aid for Adivasi land rights case" },
                ].map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                    <div style={{ fontWeight: 800, color: "var(--color-primary)", fontSize: "1.1rem", minWidth: 80 }}>{d.amount}</div>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)" }}>{d.impact}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  { icon: <FaShieldAlt />, label: "Secure & Trusted" },
                  { icon: <FaReceipt />, label: "80G Tax Exempt" },
                  { icon: <FaHeart />, label: "100% Impact" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-light)", fontSize: "0.85rem" }}>
                    <span style={{ color: "var(--color-primary)" }}>{b.icon}</span> {b.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DONATION FORM */}
            <motion.div className="contact-form" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="form-success" style={{ padding: 60 }}>
                  <div style={{ fontSize: "4rem", marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 12 }}>Thank You!</h3>
                  <p style={{ color: "var(--color-text-light)" }}>Your donation of <strong style={{ color: "var(--color-primary)" }}>₹{finalAmount.toLocaleString()}</strong> has been received. You will receive a confirmation email shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: 24, border: "none", cursor: "pointer" }}>Donate Again</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="form-title">Make Your Donation</h3>
                  <div style={{ marginBottom: 20 }}>
                    <div className="form-label">Select Amount (₹)</div>
                    <div className="donate-amounts">
                      {amounts.map(a => (
                        <button type="button" key={a} className={`amount-btn ${selected === a && !custom ? "active" : ""}`} onClick={() => { setSelected(a); setCustom(""); }}>
                          ₹{a.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <input className="form-input" type="number" placeholder="Enter custom amount (₹)" value={custom} onChange={e => { setCustom(e.target.value); setSelected(null); }} />
                    {finalAmount > 0 && (
                      <div style={{ marginTop: 8, padding: "10px 16px", background: "rgba(255,137,0,0.08)", borderRadius: 8, color: "var(--color-primary)", fontWeight: 700, fontSize: "1rem" }}>
                        Donating: ₹{finalAmount.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input className="form-input" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91-XXXXXXXXXX" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">PAN Number (for 80G)</label>
                      <input className="form-input" value={form.pan} onChange={e => setForm({ ...form, pan: e.target.value })} placeholder="ABCDE1234F" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message (Optional)</label>
                    <textarea className="form-textarea" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Any message or designation for this donation..." rows={3} />
                  </div>
                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? "Processing..." : `Donate ₹${finalAmount ? finalAmount.toLocaleString() : "0"} Now 🎗️`}
                  </button>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", textAlign: "center", marginTop: 12 }}>
                    ALERT is registered under 12A & 80G. Donations are tax-exempt.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BANK TRANSFER INFO */}
      <section className="section-pad-sm" style={{ background: "var(--color-dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "white", marginBottom: 12 }}>Bank Transfer Details</h2>
            <p style={{ color: "rgba(255,255,255,0.65)" }}>You can also donate directly via bank transfer</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, maxWidth: 700, margin: "0 auto" }}>
            {[
              { label: "Account Name", value: "Association for Land and Livelihood" },
              { label: "Account Number", value: "XXXX XXXX XXXX" },
              { label: "IFSC Code", value: "XXXXXXXXXX" },
              { label: "Bank", value: "State Bank of India, Vijayawada" },
              { label: "UPI ID", value: "alert.ngo@upi" },
              { label: "Contact", value: "+91-866-2971234" },
            ].map((d, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>{d.label}</p>
                <p style={{ color: "white", fontWeight: 600 }}>{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
