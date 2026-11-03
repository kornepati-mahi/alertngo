import { motion } from "framer-motion";
import { FaShip, FaUtensils, FaArrowRight } from "react-icons/fa";

const images = [
  "/uploads/WhatsApp-Image-2020-09-21-at-8.41.17-PM-300x225-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-21-at-8.41.22-PM-300x225-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-22-at-10.10.23-PM-300x169-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-21-at-8.41.30-PM-300x225-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-21-at-8.41.36-PM-300x225-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-21-at-8.41.42-PM-1-300x225-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-21-at-8.41.48-PM-300x225-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-21-at-8.41.57-PM-1-300x225-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-22-at-10.10.10-PM-300x169-1.jpeg",
  "/uploads/WhatsApp-Image-2020-09-22-at-10.10.17-PM-300x225-1.jpeg"
];

export default function GroceriesDistributionWestGodavari() {
  return (
    <>
      <section
        id="groceries-distribution-west-godavari"
        style={{
          paddingTop: 160,
          paddingBottom: 0,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #ffffff 0%, #f4f7fe 100%)"
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: -10, left: -10, width: 600, height: 600, background: "radial-gradient(circle, rgba(210, 25, 12, 0.06), transparent 70%)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", bottom: -10, right: -10, width: 600, height: 600, background: "radial-gradient(circle, rgba(0, 49, 144, 0.05), transparent 70%)", borderRadius: "50%" }}></div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}
          >
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Section 07</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-dark)", marginBottom: 20, lineHeight: 1.15 }}>
              Groceries Distribution – West Godavari
            </h1>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              Groceries distribution in West Godavari – Year 2020. Essential food rations delivered to forest hamlet families during COVID-19 lockdowns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -15px rgba(0,0,0,0.1)",
                  border: "1px solid #f1f5f9",
                  aspectRatio: "4/3",
                  transition: "all 0.4s ease"
                }}
                whileHover={{ y: -8, boxShadow: "0 35px 70px -20px rgba(0,49,144,0.2)" }}
              >
                <img
                  src={img}
                  alt="Groceries Distribution West Godavari"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent 0%, rgba(0,49,144,0.8) 100%)", padding: 20, borderRadius: "0 0 20px 20px" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#38BDF8", marginBottom: 4 }}>
                    Groceries Distribution
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "white", fontWeight: 600 }}>
                    West Godavari District – Year 2020
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ paddingTop: 80, paddingBottom: 90, background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Program Details</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--color-dark)", marginBottom: 16 }}>
              Emergency Food Security – COVID Lockdowns
            </h2>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>
              ALERT distributed essential grocery hampers to forest hamlet families in West Godavari district during COVID-19 lockdowns when supply chains collapsed and remote communities faced acute food insecurity.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { icon: <FaUtensils />, title: "Nutritional Hampers", desc: "Essential grocery kits delivered" },
              { icon: <FaShip />, title: "West Godavari", desc: "Forest hamlet families reached" },
              { icon: <FaUtensils />, title: "Year 2020", desc: "COVID-19 lockdown relief" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  background: "#ffffff",
                  padding: 26,
                  borderRadius: 20,
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid #f1f5f9",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  transition: "all 0.3s ease"
                }}
                whileHover={{ y: -6, boxShadow: "var(--shadow-md)", borderColor: "var(--color-primary)" }}
              >
                <div style={{ width: 48, height: 48, minWidth: 48, minHeight: 48, borderRadius: 14, background: "rgba(0, 49, 144, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#003190", overflow: "hidden" }}>
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

      <section style={{ paddingTop: 60, paddingBottom: 90, textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <a href="/flood-relief-measures" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}>
                ← Back to Flood Relief Measures
              </a>
            </div>
            <div style={{ background: "linear-gradient(135deg, var(--color-dark) 0%, #0E2B66 100%)", borderRadius: 28, padding: 48, color: "white", display: "inline-block" }}>
              <span style={{ color: "#F5A000", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: 2, marginBottom: 16, display: "block" }}>Support Relief Work</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 22, lineHeight: 1.3 }}>Feed More Families</h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 28, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                Grocery hampers prevent hunger in remote tribal hamlets during lockdowns and disasters.
              </p>
              <a href="/donate" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-primary)", color: "white", padding: "14px 32px", borderRadius: 500, fontWeight: 700, textDecoration: "none", boxShadow: "0 12px 30px -6px rgba(210,25,12,0.4)" }}>
                Donate Now <FaArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
