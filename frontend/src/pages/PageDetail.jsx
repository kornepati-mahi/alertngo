import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFilePdf,
  FaDownload,
  FaTable,
  FaImages,
  FaArrowLeft,
  FaSearch,
  FaTimes,
  FaEye,
  FaFileAlt
} from "react-icons/fa";
import { fetchPageBySlug } from "../api/client";
import PdfViewerModal from "../components/PdfViewerModal";

export default function PageDetail() {
  const categoryColorMap = {
    "Polavaram LA & R&R": "#D2190C",
    "Land Acquisition": "#003190",
    "Court Cases": "#7C2D12",
    "RoFR": "#3E8E0F",
    "Grievance": "#D2190C",
    "Download": "#003190"
  };
  const params = useParams();
  const location = useLocation();
  // /page/:slug and /:slug give a route param; hardcoded routes like /quick-links don't —
  // fall back to the pathname so those pages fetch their real slug instead of an empty one.
  const slug = params.slug || location.pathname.replace(/^\/+/, "").replace(/^page\//, "").replace(/\/+$/, "");
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tableSearch, setTableSearch] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchPageBySlug(slug).then((res) => {
      if (isMounted) {
        setPage(res.data);
        setLoading(false);
      }
    });

    window.scrollTo(0, 0);

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 170 }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ textAlign: "center" }}
        >
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--gradient-primary)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 20, animation: "spin 1s linear infinite" }}>
            <FaDownload size={20} />
          </div>
          <div style={{ fontSize: "1.25rem", color: "var(--color-primary)", fontWeight: 800, marginBottom: 12 }}>
            Loading Content…
          </div>
          <p style={{ color: "var(--color-text-light)" }}>Fetching page data from ALERT repository</p>
        </motion.div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="section-pad" style={{ paddingTop: 170 }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 600 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 20 }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444" }}>
              <FaTimes size={18} />
            </div>
          </motion.div>
          <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>Document Not Found</h2>
          <p style={{ color: "var(--color-text-light)", marginBottom: 24 }}>
            The requested document slug <code>{slug}</code> could not be located.
          </p>
          <Link to="/downloads" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <FaArrowLeft /> Browse All Documents
          </Link>
        </div>
      </div>
    );
  }

  const categoryColor = categoryColorMap[page.category] || "#64748b";

  const isRealImg = (img) =>
    img.src &&
    !img.src.includes("wps-visitor-counter") &&
    !img.src.endsWith(".gif") &&
    !img.src.includes("alert-logo") &&
    !img.src.toLowerCase().includes("logo") &&
    !img.src.includes("embed-any-document") &&
    !["loading", "reload", "open"].includes((img.name || "").toLowerCase());

  const hasContent =
    (page.paragraphs?.length || 0) > 0 ||
    (page.downloads?.length || 0) > 0 ||
    (page.tables?.length || 0) > 0 ||
    (page.images?.filter(isRealImg).length || 0) > 0;

  return (
    <>
      {/* CONTENT SECTION */}
      <section className="section-pad" style={{ background: "var(--color-bg)", paddingTop: 140 }}>
        <div className="container" style={{ maxWidth: 1100, paddingTop: 20 }}>

          {/* PARAGRAPHS / OVERVIEW */}
          {page.paragraphs && page.paragraphs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ background: "#ffffff", borderRadius: 24, boxShadow: "var(--shadow-lg)", border: "1px solid #f1f5f9", marginBottom: 48, overflow: "hidden" }}
            >
              <div style={{ padding: "clamp(24px, 4vw, 40px) clamp(24px, 4vw, 40px) 24px", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: `rgba(${categoryColor === "#D2190C" ? "210,25,12" : categoryColor === "#003190" ? "0,49,144" : "100,100,100"}, 0.1)`, display: "flex", alignItems: "center", justifyContent: "center", color: categoryColor }}>
                    <FaFileAlt size={18} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-dark)", margin: 0, letterSpacing: -0.5 }}>Overview & Description</h3>
                </div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: categoryColor, marginTop: 4 }}>Official Record • ALERT Legal Cell</div>
              </div>
              <div style={{ padding: "24px clamp(24px, 4vw, 40px) clamp(24px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                {page.paragraphs.map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                      <span style={{ color: categoryColor, fontWeight: 800, fontSize: "0.85rem", marginTop: 2, flexShrink: 0 }}>{idx + 1}</span>
                      <p style={{ color: "var(--color-text)", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>{p}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* DOWNLOADS SECTION */}
          {page.downloads && page.downloads.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 48 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26, paddingBottom: 16, borderBottom: "2px solid #e2e8f0" }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg, #D2190C 0%, #F5A000 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 8px 20px rgba(210,25,12,0.35)" }}>
                  <FaDownload size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-dark)", margin: 0, letterSpacing: -0.5 }}>Attached Official Documents</h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-light)", fontWeight: 600 }}>{page.downloads.length} file{page.downloads.length !== 1 ? "s" : ""} available</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
                {page.downloads.map((dl, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.5 }}
                    whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(210,25,12,0.25)", borderColor: "#D2190C" }}
                    style={{
                      background: "#ffffff",
                      padding: 24,
                      borderRadius: 20,
                      boxShadow: "var(--shadow-sm)",
                      border: "1px solid #f1f5f9",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <div style={{ position: "absolute", top: 0, right: 0, width: 48, height: 48, background: "rgba(210,25,12,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <FaFilePdf size={16} color="#D2190C" style={{ opacity: 0.6 }} />
                    </div>
                    <div style={{ zIndex: 2 }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#D2190C", marginBottom: 10 }}>Official PDF</div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: 8, lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {dl.text || dl.filename}
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", marginBottom: 20, lineHeight: 1.5, flex: 1 }}>{dl.filename}</p>
                      <div style={{ display: "flex", gap: 10 }}>
                        <button
                          onClick={() => setSelectedPdf({ url: dl.url, title: dl.text || dl.filename })}
                          className="btn-primary"
                          style={{ flex: 1, padding: "12px 20px", fontSize: "0.85rem", fontWeight: 700, justifyContent: "center", display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 12, background: "linear-gradient(135deg, #D2190C 0%, #F5A000 100%)", color: "white", border: "none", boxShadow: "0 8px 20px rgba(210,25,12,0.35)" }}
                        >
                          <FaEye size={12} /> View
                        </button>
                        <a
                          href={dl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          style={{ flex: 1, padding: "12px 20px", fontSize: "0.85rem", fontWeight: 700, justifyContent: "center", textDecoration: "none", color: categoryColor, border: `2px solid ${categoryColor}`, borderRadius: 12, display: "inline-flex", alignItems: "center", gap: 6 }}
                        >
                          <FaDownload size={12} /> Download
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STRUCTURED TABLES */}
          {page.tables && page.tables.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 48 }}
            >
              {page.tables.map((tbl, tIdx) => {
                const filteredRows = tbl.rows.filter(row =>
                  row.some(cell => String(cell).toLowerCase().includes(tableSearch.toLowerCase()))
                );

                return (
                  <div key={tIdx} style={{ background: "#ffffff", borderRadius: 24, boxShadow: "var(--shadow-sm)", border: "1px solid #f1f5f9", marginBottom: 32, overflow: "hidden" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, padding: "24px 28px", borderBottom: "1px solid #f1f5f9", background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(210,25,12,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D2190C" }}>
                          <FaTable size={16} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-dark)", margin: 0, letterSpacing: -0.5 }}>Official Records & Data Table</h3>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-text-light)", fontWeight: 600 }}>Statutory Data & Records</div>
                        </div>
                      </div>
                      <div style={{ position: "relative", minWidth: 240 }}>
                        <input
                          type="text"
                          placeholder="Filter table rows…"
                          value={tableSearch}
                          onChange={(e) => setTableSearch(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "11px 16px 11px 42px",
                            borderRadius: 14,
                            border: "1px solid #cbd5e1",
                            fontSize: "0.85rem",
                            outline: "none",
                            boxShadow: "none",
                            background: "#ffffff"
                          }}
                        />
                        <FaSearch style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.88rem" }}>
                        <thead>
                          <tr style={{ background: "#f1f5f9", borderBottom: "3px solid #cbd5e1" }}>
                            {tbl.headers.map((h, hIdx) => (
                              <th key={hIdx} style={{ padding: "10px 16px", fontWeight: 800, color: "var(--color-dark)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 0.8, borderBottom: "2px solid #e2e8f0", textAlign: "left" }}>
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {filteredRows.length > 0 ? (
                            filteredRows.map((r, rIdx) => (
                              <tr key={rIdx} style={{ borderBottom: "1px solid #f1f5f9", background: rIdx % 2 === 0 ? "#ffffff" : "#fafbfc", transition: "all 0.2s ease" }}>
                                {r.map((c, cIdx) => {
                                  const isUrl = c.toLowerCase().includes("http");
                                  const isEmpty = String(c).trim() === "";
                                  const colTitle = tbl.headers?.[cIdx] || `Document ${cIdx + 1}`;
                                  return (
                                    <td
                                      key={cIdx}
                                      style={{
                                        padding: "0",
                                        color: "var(--color-text)",
                                        verticalAlign: "top",
                                        borderBottom: "1px solid #f1f5f9"
                                      }}
                                    >
                                      {isEmpty ? null : isUrl ? (
                                        <button
                                          type="button"
                                          onClick={() => setSelectedPdf({ url: c, title: colTitle })}
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            alignItems: "center",
                                            gap: 6,
                                            padding: "10px 16px",
                                            background: "rgba(210,25,12,0.05)",
                                            color: "#D2190C",
                                            fontWeight: 800,
                                            fontSize: "0.8rem",
                                            border: "none",
                                            borderRadius: 0,
                                            cursor: "pointer",
                                            textAlign: "left",
                                            transition: "all 0.15s ease"
                                          }}
                                        >
                                          <FaFilePdf size={13} style={{ flexShrink: 0 }} />{" "}
                                          View PDF
                                        </button>
                                      ) : (
                                        <span style={{ display: "block", padding: "10px 16px", fontSize: "0.85rem" }}>{c}</span>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={tbl.headers.length || 1} style={{ textAlign: "center", padding: 40, color: "#94a3b8" }}>
                                No rows matching search filter.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div style={{ padding: "16px 28px", fontSize: "0.8rem", color: "var(--color-text-light)", borderTop: "1px solid #f1f5f9", background: "#f8fafc" }}>
                      Showing <strong style={{ color: categoryColor }}>{filteredRows.length}</strong> of <strong>{tbl.rows.length}</strong> records.
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* IMAGES & CHARTS */}
          {page.images && page.images.filter(isRealImg).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 48 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: "2px solid #e2e8f0" }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg, #003190 0%, #38BDF8 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 8px 20px rgba(0,49,144,0.35)" }}>
                  <FaImages size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-dark)", margin: 0, letterSpacing: -0.5 }}>Field Evidence & Media</h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-light)", fontWeight: 600 }}>{page.images.filter((img) => img.src && !img.src.includes("wps-visitor-counter") && !img.src.endsWith(".gif") && !img.src.includes("alert-logo") && !img.src.toLowerCase().includes("logo") && !img.src.includes("embed-any-document") && !["loading", "reload", "open"].includes((img.name || "").toLowerCase())).length} image{page.images.filter((img) => img.src && !img.src.includes("wps-visitor-counter") && !img.src.endsWith(".gif") && !img.src.includes("alert-logo") && !img.src.toLowerCase().includes("logo") && !img.src.includes("embed-any-document") && !["loading", "reload", "open"].includes((img.name || "").toLowerCase())).length !== 1 ? "s" : ""} available</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
                {page.images.map((img, idx) => {
                  const isCounterGif = !isRealImg(img);
                  if (isCounterGif) return null;
                  return (
                    <motion.div
                      key={img.src || idx}
                      whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(0,49,144,0.2)" }}
                      onClick={() => setSelectedImg(img)}
                      style={{
                        background: "#ffffff",
                        borderRadius: 20,
                        overflow: "hidden",
                        boxShadow: "var(--shadow-sm)",
                        border: "1px solid #f1f5f9",
                        cursor: "pointer",
                        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative"
                      }}
                    >
                      <div style={{ height: 240, overflow: "hidden", background: "#f8fafc", position: "relative" }}>
                        <img
                          src={img.src}
                          alt={img.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                        <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.6)", color: "white", padding: "6px 10px", borderRadius: 8, fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Image</div>
                      </div>
                      <div style={{ padding: "18px 18px 20px", borderTop: "1px solid #f1f5f9", flex: 1, display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 6, lineHeight: 1.4 }}>{img.name}</p>
                        <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>Click to enlarge & explore</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* EMPTY STATE — page exists but has no published content yet */}
          {!hasContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "#ffffff",
                borderRadius: 24,
                boxShadow: "var(--shadow-sm)",
                border: "1px solid #f1f5f9",
                padding: "clamp(40px, 7vw, 72px) 28px",
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 48px",
              }}
            >
              <div style={{ width: 60, height: 60, borderRadius: 18, background: "rgba(0,49,144,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#003190", margin: "0 auto 20px" }}>
                <FaFileAlt size={24} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: 10 }}>Nothing published here yet</h3>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: 24 }}>
                This page is set up, but its documents, tables or images have not been added yet.
                Please check back soon — or reach out to ALERT's office if you need this record urgently.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/downloads" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, width: "auto", padding: "11px 22px", fontSize: "0.85rem" }}>
                  <FaArrowLeft size={12} /> Browse All Documents
                </Link>
                <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", fontSize: "0.85rem", fontWeight: 700, color: "#003190", border: "2px solid #003190", borderRadius: 12, textDecoration: "none" }}>
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}

          {/* BACK TO DIRECTORY */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <motion.a
              href="/downloads"
              whileHover={{ scale: 1.05 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 34px", background: "var(--color-dark)", color: "white", textDecoration: "none", borderRadius: 14, fontWeight: 700, fontSize: "0.95rem", boxShadow: "0 20px 40px -10px rgba(6,24,66,0.35)", transition: "all 0.3s ease" }}
            >
              <FaArrowLeft size={14} /> View All Downloads & Acts
            </motion.a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(8,10,14,0.92)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              backdropFilter: "blur(4px)"
            }}
          >
            <div style={{ position: "relative", maxWidth: "92vw", maxHeight: "92vh", onClick: (e) => e.stopPropagation() }}>
              <button
                onClick={() => setSelectedImg(null)}
                style={{
                  position: "absolute",
                  top: -48,
                  right: 0,
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.2s ease"
                }}
              >
                <FaTimes />
              </button>
              <img
                src={selectedImg.src}
                alt={selectedImg.name}
                style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 16, display: "block", boxShadow: "0 40px 100px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
                loading="lazy"
                decoding="async" />
              <p style={{ color: "rgba(255,255,255,0.8)", textAlign: "center", marginTop: 14, fontSize: "0.95rem", fontWeight: 600 }}>
                {selectedImg.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Modal Viewer */}
      {selectedPdf && (
        <PdfViewerModal
          isOpen={true}
          file={selectedPdf.file || selectedPdf.url || selectedPdf.fileUrl}
          title={selectedPdf.title}
          meta={selectedPdf.meta}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </>
  );
}
