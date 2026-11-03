import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaDownload,
  FaExternalLinkAlt,
  FaFilePdf,
  FaSearchPlus,
  FaSearchMinus,
  FaExpand,
  FaCompress
} from "react-icons/fa";

export default function PdfViewerModal({ isOpen, file, fileUrl, url, title, meta, onClose }) {
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);

  // Safely resolve file path whether passed as a string or an object
  const actualFile = typeof file === "string"
    ? file
    : (file?.file || file?.fileUrl || file?.url || fileUrl || url || "");

  const actualTitle = title || (typeof file === "object" ? file?.title : null) || "Official Document";
  const actualMeta = meta || (typeof file === "object" ? file?.meta : null);

  // Convert Google Drive view URLs to preview format for iframe embedding
  const driveMatch = actualFile.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  const drivePreviewUrl = driveMatch
    ? `https://drive.google.com/file/d/${driveMatch[1]}/preview`
    : actualFile;
  const driveDownloadUrl = driveMatch
    ? `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`
    : actualFile;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (actualFile && (isOpen === undefined || isOpen === true)) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, actualFile, isOpen]);

  if (isOpen === false || !actualFile) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="pdf-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`pdf-modal-container ${fullscreen ? "fullscreen" : ""}`}
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* TOP TOOLBAR */}
          <div className="pdf-modal-header">
            <div className="pdf-modal-info">
              <div className="pdf-icon-badge">
                <FaFilePdf />
              </div>
              <div>
                <h3 className="pdf-modal-title">{actualTitle}</h3>
                {actualMeta && <span className="pdf-modal-meta">{actualMeta}</span>}
              </div>
            </div>

            <div className="pdf-modal-actions">
              {/* ZOOM CONTROLS */}
              <div className="pdf-zoom-group">
                <button
                  type="button"
                  title="Zoom Out"
                  onClick={() => setZoom((z) => Math.max(70, z - 15))}
                  className="pdf-btn"
                >
                  <FaSearchMinus size={13} />
                </button>
                <span className="pdf-zoom-label">{zoom}%</span>
                <button
                  type="button"
                  title="Zoom In"
                  onClick={() => setZoom((z) => Math.min(160, z + 15))}
                  className="pdf-btn"
                >
                  <FaSearchPlus size={13} />
                </button>
              </div>

              {/* FULLSCREEN TOGGLE */}
              <button
                type="button"
                title={fullscreen ? "Exit Fullscreen" : "Fullscreen"}
                onClick={() => setFullscreen(!fullscreen)}
                className="pdf-btn"
              >
                {fullscreen ? <FaCompress size={13} /> : <FaExpand size={13} />}
              </button>

              {/* OPEN IN NEW TAB */}
              <a
                href={drivePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in new browser tab"
                className="pdf-btn"
              >
                <FaExternalLinkAlt size={13} />
              </a>

              {/* DIRECT DOWNLOAD */}
              <a
                href={driveDownloadUrl}
                download
                title="Download PDF"
                className="pdf-btn-primary"
              >
                <FaDownload size={13} /> <span>Download</span>
              </a>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={onClose}
                title="Close Viewer (Esc)"
                className="pdf-btn-close"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* VIEWER BODY */}
          <div className="pdf-modal-body">
            <div
              className="pdf-frame-wrapper"
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: "top center",
                transition: "transform 0.2s ease"
              }}
            >
              <iframe
                src={`${drivePreviewUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                title={title || "PDF Document"}
                className="pdf-iframe"
              />
            </div>
          </div>

          {/* FOOTER BAR */}
          <div className="pdf-modal-footer">
            <span>Official Repository Record • Association for Land and Livelihood (ALERT)</span>
            <span className="pdf-badge-tag">Statutory Document</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
