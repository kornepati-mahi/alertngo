import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaSearchPlus, FaHeart, FaShieldAlt, FaCheckCircle, FaArrowRight, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedTypewriter from "../components/AnimatedTypewriter";
import { fetchGallery, defaultGallery } from "../api/client";

const categories = ["All", "Videos", "Community", "Forest Rights", "Education", "Relief", "Energy", "Field Work", "Women"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [images, setImages] = useState(defaultGallery);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchGallery().then((res) => {
      if (isMounted) {
        if (res.data && res.data.length > 0) {
          setImages(res.data);
        }
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  const filtered = active === "All"
    ? images
    : active === "Videos"
      ? images.filter((i) => i.type === "video")
      : images.filter((i) => i.cat === active);

  const videoCount = images.filter((i) => i.type === "video").length;


  return (
    <>
      <section className="section-pad" id="gallery-grid" style={{ background: "var(--color-bg)", paddingTop: 150, scrollMarginTop: 96 }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 20px" }}>
            <span className="badge" style={{ marginBottom: 12, display: "inline-block" }}>Section 01</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.2vw, 2rem)", color: "var(--color-dark)", marginBottom: 12, lineHeight: 1.3 }}>
              Authentic Photo Gallery
            </h2>
            <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "0.95rem" }}>
              Archival photography from forest rights claims, Gram Sabha assemblies, women's cooperatives, solar installations and disaster relief — shared with community consent.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 34 }}>
            <AnimatedTypewriter
              prefix="Archival Spotlight: "
              words={[
                "Forest Rights Claims & Gram Sabha Assemblies",
                "Antyodaya Women Fisheries Cooperatives",
                "Off-Grid Hill Habitation Solar Street Poles",
                "Godavari Basin Emergency Boat Rescues",
                "Joyful Learning Centres & School Kits"
              ]}
              typingSpeed={55}
              deletingSpeed={30}
              pauseTime={2000}
            />
          </div>

          {/* CATEGORY FILTERS */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40, justifyContent: "center" }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: "9px 20px",
                  borderRadius: 25,
                  border: active === c ? "none" : "1px solid #cbd5e1",
                  background: active === c ? "var(--color-primary)" : "white",
                  color: active === c ? "white" : "var(--color-dark)",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {c === "Videos" && videoCount > 0 ? <FaPlay size={9} style={{ marginRight: 6 }} /> : null}
                {c === "All" ? `All (${images.length})` : c === "Videos" && videoCount > 0 ? `Videos (${videoCount})` : c}
              </button>
            ))}
          </div>

          {/* GRID — plain divs keep filtering instant; layout animation was forcing a full re-measure */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {filtered.map((img) => {
              const isVideo = img.type === "video";
              return (
              <div
                key={img.src}
                className={`gallery-tile${isVideo ? " gallery-video-tile" : ""}`}
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  aspectRatio: "4/3",
                  boxShadow: "var(--shadow-sm)",
                  background: "#000"
                }}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={isVideo ? (img.poster || img.src) : img.src}
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.92 }}
                />
                {isVideo ? (
                  <>
                    <span className="gallery-video-badge"><FaPlay size={8} /> Video</span>
                    <span className="gallery-play-orb" aria-hidden="true"><span><FaPlay size={16} /></span></span>
                  </>
                ) : null}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 18
                  }}
                >
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "3px 10px",
                      background: isVideo ? "var(--logo-gold)" : "var(--color-primary)",
                      color: "white",
                      borderRadius: 20,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      marginBottom: 6
                    }}
                  >
                    {isVideo ? `Video · ${img.cat}` : img.cat}
                  </span>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "0.92rem", lineHeight: 1.3 }}>
                    {img.title}
                  </p>
                </div>
              </div>
              );
            })}
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
                <span>Photo Archive</span>
              </div>

              <h2 className="cta-title">
                Use Our Images <span className="cta-title-highlight">With Consent</span>
              </h2>

              <p className="cta-subtitle">
                Photographs show real community members in Fifth Scheduled Areas. Media, funders and partners can request high-resolution files and captions through the head office; faces of children are released only with guardian consent.
              </p>

              <div className="cta-actions">
                <Link to="/contact" className="cta-btn-donate">
                  <span>Request Images</span>
                  <span className="cta-donate-heart" aria-hidden="true"><FaHeart size={13} /></span>
                </Link>
                <Link to="/partner" className="cta-btn-volunteer">
                  <span>Partner With Us</span>
                  <FaArrowRight size={12} className="cta-btn-arrow" aria-hidden="true" />
                </Link>
              </div>

              <div className="cta-trust-strip">
                <div className="cta-trust-item">
                  <FaShieldAlt className="cta-trust-icon" aria-hidden="true" />
                  <span>Informed Community Consent</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaCheckCircle className="cta-trust-icon" aria-hidden="true" />
                  <span>Captions & Locality on Request</span>
                </div>
                <span className="cta-trust-dot" aria-hidden="true">•</span>
                <div className="cta-trust-item">
                  <FaSearchPlus className="cta-trust-icon" aria-hidden="true" />
                  <span>Full Archive in Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24
            }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "white",
                width: 44,
                height: 44,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1.2rem"
              }}
            >
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              style={{ maxWidth: 960, width: "100%", textAlign: "center" }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === "video" ? (
                <video
                  src={lightbox.src}
                  poster={lightbox.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", borderRadius: 12, maxHeight: "80vh", background: "#000", objectFit: "contain" }}
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  decoding="async"
                  style={{ width: "100%", borderRadius: 12, maxHeight: "80vh", objectFit: "contain" }}
                />
              )}
              <p style={{ color: "white", marginTop: 16, fontWeight: 700, fontSize: "1.1rem" }}>
                {lightbox.title}
              </p>
              {lightbox.type === "video" ? (
                <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 6, fontSize: "0.8rem" }}>
                  Field reel · {lightbox.cat}
                </p>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
