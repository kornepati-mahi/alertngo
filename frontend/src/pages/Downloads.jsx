import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaDownload,
  FaFilePdf,
  FaSearch,
  FaBalanceScale,
  FaUniversity,
  FaFolderOpen
} from "react-icons/fa";
import AnimatedTypewriter from "../components/AnimatedTypewriter";
import { fetchDownloads, defaultDownloads } from "../api/client";
import PdfViewerModal from "../components/PdfViewerModal";
import { FaEye } from "react-icons/fa";

export default function Downloads() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterFromQuery = searchParams.get("filter") || "all";
  const [filter, setFilter] = useState(filterFromQuery);
  const [search, setSearch] = useState("");
  const [docList, setDocList] = useState(defaultDownloads);
  const [loading, setLoading] = useState(true);
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Sync filter when URL ?filter= changes
  useEffect(() => {
    const qFilter = searchParams.get("filter");
    if (qFilter) {
      setFilter(qFilter);
    }
  }, [searchParams]);

  useEffect(() => {
    let isMounted = true;
    fetchDownloads().then((res) => {
      if (isMounted) {
        if (res.data && res.data.length > 0) {
          setDocList(res.data);
        }
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  const handleFilterChange = (catId) => {
    setFilter(catId);
    setSearchParams(catId === "all" ? {} : { filter: catId });
  };



  const filteredDocs = docList.filter((d) => {
    const matchesCat = filter === "all" || d.category === filter;
    const matchesSearch =
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <div className="page-hero" style={{ background: "var(--gradient-hero)" }}>
        <motion.span className="badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ background: "rgba(255,255,255,0.2)", color: "white", marginBottom: 12 }}>
          Knowledge Repository
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Downloads & Legal Documents
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ marginBottom: 16 }}>
          Direct access to 20 authentic statutory Bare Acts, High Court orders, R&R Commissioner petitions, RTI data, and audited reports.
        </motion.p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <AnimatedTypewriter
            prefix="Official Repository: "
            words={[
              "RFCTLARR Act 2013 Schedules 1, 2 & 3",
              "High Court Writs & Legal Compendiums",
              "RTI Authority Award Disclosures",
              "MoTA & MGNREGA Operational Guidelines",
              "ALERT 20-Year Profiles & Audited Reports"
            ]}
            typingSpeed={55}
            deletingSpeed={30}
            pauseTime={2000}
          />
        </div>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Downloads</span>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          {/* SEARCH & FILTERS */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 36 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { id: "all", label: `All ${docList.length} Documents` },
                { id: "acts", label: "LA Act 2013 Schedules" },
                { id: "court", label: "Court Petitions & Awards" },
                { id: "faqs", label: "Statutory FAQs & Guidelines" },
                { id: "reports", label: "ALERT Organization Profile" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleFilterChange(c.id)}
                  style={{
                    padding: "9px 20px",
                    borderRadius: 25,
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: filter === c.id ? "none" : "1px solid #cbd5e1",
                    background: filter === c.id ? "var(--color-primary)" : "white",
                    color: filter === c.id ? "white" : "var(--color-dark)",
                    transition: "all 0.2s"
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div style={{ position: "relative", minWidth: 260 }}>
              <input
                type="text"
                placeholder="Search documents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 16px 10px 38px",
                  borderRadius: 25,
                  border: "1px solid #cbd5e1",
                  fontSize: "0.9rem"
                }}
              />
              <FaSearch style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
            </div>
          </div>

          {/* DOCUMENT LIST */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {filteredDocs.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                style={{
                  background: "white",
                  padding: 24,
                  borderRadius: 14,
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid #f1f5f9"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444", padding: 10, borderRadius: 8, fontSize: "1.3rem" }}>
                      <FaFilePdf />
                    </div>
                    <span style={{ fontSize: "0.78rem", background: "#f1f5f9", padding: "4px 8px", borderRadius: 6, color: "#64748b", fontWeight: 600 }}>
                      {doc.fileSize}
                    </span>
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 6, lineHeight: 1.4 }}>
                    {doc.title}
                  </h4>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-primary)", fontWeight: 600, marginBottom: 8 }}>
                    {doc.meta}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.6, marginBottom: 20 }}>
                    {doc.desc}
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: "auto" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedPdf(doc)}
                    className="btn-primary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "9px 12px",
                      borderRadius: 8,
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      border: "none"
                    }}
                  >
                    <FaEye size={12} /> View PDF
                  </button>
                  <a
                    href={doc.file}
                    download
                    className="btn-outline"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "9px 12px",
                      borderRadius: 8,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      textAlign: "center"
                    }}
                  >
                    <FaDownload size={11} /> Save
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE PDF VIEWER MODAL */}
      {selectedPdf && (
        <PdfViewerModal
          file={selectedPdf.file}
          title={selectedPdf.title}
          meta={selectedPdf.meta}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </>
  );
}
