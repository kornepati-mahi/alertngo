import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronDown, FaQuestionCircle, FaHeart, FaHandsHelping, FaFileAlt } from "react-icons/fa";
import AnimatedTypewriter from "../components/AnimatedTypewriter";
import { fetchFaqs, defaultFaqs } from "../api/client";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqItems, setFaqItems] = useState(defaultFaqs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchFaqs().then((res) => {
      if (isMounted) {
        if (res.data && res.data.length > 0) {
          setFaqItems(res.data);
        }
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);


  return (
    <>
      <div className="page-hero" style={{ background: "var(--gradient-hero)" }}>
        <motion.span className="badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ background: "rgba(255,255,255,0.2)", color: "white", marginBottom: 12 }}>
          Help Center
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Frequently Asked Questions
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ marginBottom: 16 }}>
          Clear answers regarding our Adivasi rights advocacy, Polavaram R&R assistance, donation tax receipts, and community programs.
        </motion.p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <AnimatedTypewriter
            prefix="Quick Answers: "
            words={[
              "How to File Land & R&R Grievances",
              "Section 80G Tax Exemption Certificates",
              "Forest Rights Claims Procedures under FRA 2006",
              "Volunteering & Legal Cell Collaborations"
            ]}
            typingSpeed={55}
            deletingSpeed={30}
            pauseTime={2000}
          />
        </div>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span>FAQs</span>
        </div>
      </div>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: "white",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid #f1f5f9"
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      gap: 16
                    }}
                  >
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: isOpen ? "var(--color-primary)" : "var(--color-dark)" }}>
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                    >
                      <FaChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ padding: "0 24px 24px 24px", color: "var(--color-text-light)", lineHeight: 1.8, fontSize: "0.95rem", borderTop: "1px solid #f8fafc" }}>
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CALLOUT BOX */}
          <div style={{ marginTop: 48, background: "#f8fafc", padding: 32, borderRadius: 16, textAlign: "center", border: "1px dashed #cbd5e1" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>
              Still have questions?
            </h3>
            <p style={{ color: "var(--color-text-light)", fontSize: "0.9rem", marginBottom: 20 }}>
              Can't find the answer you're looking for? Reach out to our community support and legal team directly.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary" style={{ borderRadius: 25, padding: "10px 24px" }}>
                Contact Our Team
              </Link>
              <Link to="/donate" className="btn-outline" style={{ borderRadius: 25, padding: "10px 24px" }}>
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
