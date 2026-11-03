import { motion } from "framer-motion";
import { FaWater, FaMapMarkedAlt, FaClock, FaShip, FaHeart, FaArrowRight } from "react-icons/fa";

const images = [
  { src: "/uploads/all2023.jpeg", alt: "Godavari Flood Relief 2023 - Unified Operation Base", caption: "Godavari Flood Relief Unified Operation Base" },
  { src: "/uploads/f2023.jpeg", alt: "F2023", caption: "F2023 - Flood Relief Field Work" },
  { src: "/uploads/m2023.jpeg", alt: "M2023", caption: "M2023 - Relief Materials Distribution" },
  { src: "/uploads/all2023-1024x576-640x480.jpeg", alt: "All2023", caption: "All2023 - Community Support" },
  { src: "/uploads/f2023-1024x461-640x480.jpeg", alt: "F2023 Detail", caption: "F2023 - Detail View" },
  { src: "/uploads/m2023-1024x461-640x480.jpeg", alt: "M2023 Detail", caption: "M2023 - Detail View" }
];

const stats = [
  { num: "4,200+", label: "Families Relieved", icon: <FaWater size={22} color="#F5A000" />, color: "#D2190C" },
  { num: "2023", label: "Relief Year", icon: <FaClock size={22} color="#38BDF8" />, color: "#003190" },
  { num: "Godavari", label: "Basin Coverage", icon: <FaMapMarkedAlt size={22} color="#3E8E0F" />, color: "#3E8E0F" },
  { num: "15+", label: "Boat Deployments", icon: <FaShip size={22} color="#F5A000" />, color: "#D2190C" }
];

export default function FloodRelief2023() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="flood-relief-2023"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ffffff"
        }}
      >
        {/* Background decor */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10%", left: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(210, 25, 12, 0.08), transparent 70%)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(0, 49, 144, 0.08), transparent 70%)", borderRadius: "50%" }}></div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 160, paddingBottom: 80 }}>
          {/* Hero Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, alignItems: "center", marginBottom: 100 }}
          >
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>Flood Relief 2023</span>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 7vw, 4rem)", color: "var(--color-dark)", marginBottom: 24, lineHeight: 1.1 }}>
                Emergency Relief<br />Godavari Basin
              </h1>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 30, maxWidth: 480 }}>
                Emergency relief operations across the Godavari agency belt — delivering rations, medical kits, rescue boats and shelter materials to 4,200+ displaced families in tribal hamlets cut off by floodwaters.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="/donate" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-primary)", color: "white", padding: "14px 32px", borderRadius: 500, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 12px 30px -6px rgba(210,25,12,0.4)", transition: "all 0.3s ease" }}>
                  <FaArrowRight size={12} /> Donate Now
                </a>
                <a href="/flood-relief-measures" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.8)", color: "var(--color-dark)", padding: "13px 28px", borderRadius: 500, fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", border: "1px solid rgba(0,0,0,0.05)" }}>
                  View All Years <FaArrowRight size={10} />
                </a>
              </div>
            </motion.div>

            {/* Right: Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ position: "relative", borderRadius: 32, overflow: "hidden", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.15)", border: "1px solid rgba(210,25,12,0.1)", height: 520 }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%)", padding: 32, borderRadius: "0 0 32px 32px" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#F5A000", marginBottom: 4 }}>
                    Community Security
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 3vw, 1.6rem)", color: "white", marginBottom: 8, lineHeight: 1.3 }}>
                    Solar Street Lights – 2023
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                    Solar street lights erected across flood-affected tribal hamlets to ensure safety after dark.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16, marginBottom: 100 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: 24,
                  padding: "24px 16px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ y: -6, background: "rgba(255,255,255,0.9)", borderColor: s.color }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: s.color, boxShadow: `0 4px 12px ${s.color}20` }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1, marginBottom: 6, fontFamily: "var(--font-serif)" }}>{s.num}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-text-light)", fontWeight: 600, letterSpacing: 0.3 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== IMAGE GALLERY ==================== */}
      <section style={{ paddingTop: 0, paddingBottom: 100, background: "#f4f7fe" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <span className="badge" style={{ marginBottom: 12, display: "inline-block" }}>Field Images</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--color-dark)", marginBottom: 12 }}>
              On the Ground
            </h2>
            <p style={{ color: "var(--color-text-light)", fontSize: "0.95rem" }}>
              Archival photography from flood relief operations — rescue boats, solar street lights, and community support across the Godavari basin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}
          >
            {images.slice(1).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -15px rgba(0,0,0,0.08)",
                  border: "1px solid #f1f5f9",
                  aspectRatio: "4/3",
                  transition: "all 0.4s ease",
                  cursor: "pointer"
                }}
                whileHover={{ y: -8, boxShadow: "0 35px 70px -20px rgba(210,25,12,0.2)" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent 0%, rgba(0,0,0,0.7) 100%)", padding: 18, borderRadius: "0 0 24px 24px" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#F5A000", marginBottom: 4 }}>
                    Flood Relief 2023
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "white", fontWeight: 600 }}>{img.caption}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== DONATE CTA ==================== */}
      <section style={{ paddingTop: 80, paddingBottom: 100, textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ background: "linear-gradient(135deg, var(--color-dark) 0%, #0E2B66 100%)", borderRadius: 32, padding: 64, color: "white", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 30% 20%, rgba(245,160,0,0.15), transparent 50%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{ color: "#F5A000", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: 2, marginBottom: 16, display: "block" }}>Support Relief Work</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 22, lineHeight: 1.3 }}>Be First Responders</h2>
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.8, marginBottom: 32, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                  Every contribution helps ALERT reach more families in the critical 48-hour window after a flood — providing food, clean water and medical care to those who need it most.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <a href="/donate" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--color-primary)", color: "white", padding: "16px 34px", borderRadius: 500, fontWeight: 700, fontSize: "1rem", textDecoration: "none", boxShadow: "0 12px 30px -6px rgba(210,25,12,0.4)", transition: "all 0.3s ease" }}>
                    <FaArrowRight size={12} /> Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BACK TO PARENT ==================== */}
      <section style={{ paddingTop: 40, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <a href="/flood-relief-measures" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#64748b", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, transition: "all 0.3s ease" }}>
            ← Back to Flood Relief Measures
          </a>
        </div>
      </section>
    </>
  );
}
