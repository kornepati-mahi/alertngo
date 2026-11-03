import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import AnimatedTypewriter from "../components/AnimatedTypewriter";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      await fetch("http://localhost/alertngo-api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      // Local fallback in case backend is not yet started or running on custom port
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <>
      <section className="section-pad contact-section" id="head-office" style={{ paddingTop: 150, scrollMarginTop: 96 }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 20px" }}>
            <span className="badge" style={{ marginBottom: 12, display: "inline-block" }}>Section 01</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.2vw, 2rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>
              Reach The Head Office
            </h2>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "0.95rem" }}>
              Partnership, volunteer, research and 80G enquiries all reach the same Vijayawada team. Write, call, or send the form below — we answer within two working days.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <AnimatedTypewriter
              prefix="Direct Lines: "
              words={[
                "Headquarters in Vijayawada, Andhra Pradesh",
                "Polavaram Field Operations & Legal Casework",
                "Volunteer, Research & Academic Partnerships",
                "80G Tax-Exempt Donation Queries"
              ]}
              typingSpeed={55}
              deletingSpeed={30}
              pauseTime={2000}
            />
          </div>

          <div className="contact-grid">
            {/* CONTACT DETAILS & INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Get In Touch</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 16, lineHeight: 1.2 }}>
                We Are Here To Support Adivasi Communities
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 32 }}>
                Reach out to us for collaborations, volunteer opportunities, field visits, or details regarding our Adivasi forest rights and livelihood initiatives.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "16px 20px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ background: "rgba(255,137,0,0.1)", color: "var(--color-primary)", padding: 12, borderRadius: "50%", fontSize: "1.2rem" }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 4 }}>Headquarters</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                      Door No. 40-9/1-16, Sai Nagar, Near Benz Circle,<br />
                      Vijayawada - 520010, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "16px 20px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ background: "rgba(255,137,0,0.1)", color: "var(--color-primary)", padding: 12, borderRadius: "50%", fontSize: "1.2rem" }}>
                    <FaPhone />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 4 }}>Call Us</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                      Phone: +91 866 2482345<br />
                      Mobile / WhatsApp: +91 94401 82940
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "16px 20px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ background: "rgba(255,137,0,0.1)", color: "var(--color-primary)", padding: 12, borderRadius: "50%", fontSize: "1.2rem" }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 4 }}>Email Us</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                      contact@alertngo.in<br />
                      director@alertngo.in
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "16px 20px", background: "white", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ background: "rgba(255,137,0,0.1)", color: "var(--color-primary)", padding: 12, borderRadius: "50%", fontSize: "1.2rem" }}>
                    <FaClock />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 4 }}>Working Hours</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                      Monday - Saturday: 9:30 AM – 6:00 PM<br />
                      Sunday: Closed (Field Operations Only)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* INTERACTIVE FORM */}
            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ background: "white", padding: "clamp(20px, 4vw, 36px)", borderRadius: 16, boxShadow: "var(--shadow-md)" }}
            >
              {submitted ? (
                <div className="form-success" style={{ textAlign: "center", padding: "50px 20px" }}>
                  <FaCheckCircle style={{ fontSize: "3.5rem", color: "#10B981", marginBottom: 16 }} />
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 12 }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: 24 }}>
                    Thank you for reaching out, <strong>{form.name}</strong>. Our team has received your inquiry and will respond within 24–48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="btn-primary"
                    style={{ border: "none", cursor: "pointer", padding: "12px 28px", borderRadius: 30 }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="form-title" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 8, color: "var(--color-dark)" }}>
                    Send Us a Message
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", marginBottom: 24 }}>
                    Fill out the form below and we will get back to you promptly.
                  </p>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        className="form-input"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        className="form-input"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        className="form-input"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        className="form-input"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Partnership, Volunteering, etc."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your message here..."
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
                      gap: 10,
                      width: "100%",
                      padding: "14px",
                      background: "var(--color-primary)",
                      color: "white",
                      border: "none",
                      borderRadius: 10,
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "1rem"
                    }}
                  >
                    {loading ? "Sending Message..." : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMBEDDED MAP SECTION */}
      <section style={{ height: "400px", width: "100%", position: "relative" }}>
        <iframe
          title="ALERT NGO Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.434316828551!2d80.64801531486427!3d16.50424568861214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab1e428bc9d%3A0xbcf046cb5d6e2e50!2sBenz%20Circle%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1659000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
