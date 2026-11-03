import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTimes,
  FaChevronDown,
  FaHeart,
  FaChevronRight,
  FaLinkedin
} from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/share/1CKPiocND8/", icon: FaFacebook },
  { name: "X (Twitter)", url: "https://x.com/AlertapIn", icon: FaTwitter },
  { name: "Instagram", url: "https://www.instagram.com/alertngo/", icon: FaInstagram },
  { name: "YouTube", url: "https://www.youtube.com/@alertvja", icon: FaYoutube },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/107938041/", icon: FaLinkedin },
];
import { fetchFlashNews, defaultFlashNews } from "../api/client";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about", dropdown: [
    { label: "Governing Body", path: "/governing-body" },
    { label: "Vision & Mission", path: "/vision-mission-2" },
    { label: "Core Values", path: "/core-values" },
    { label: "Org Profile", path: "/organizational-profile" },
    { label: "Organogram", path: "/organogram" },
    { label: "ALERT Policies", path: "/alert-policies" },
    { label: "Area of Operation", path: "/area-of-operation" },
  ]},
  { label: "Flood Relief", path: "/flood-relief-measures", dropdown: [
    { label: "2023", path: "/2023-2" },
    { label: "2022", path: "/flood-relief-measures-2022" },
    { label: "2021", path: "/flood-relief-measures-2021-2" },
    { label: "2020", path: "/flood-relief-measures-2020", dropdown: [
      { label: "Blankets – East G.", path: "/blankets-distribution-in-east-godavari" },
      { label: "Groceries – West G.", path: "/groceries-distribution-in-west-godavari" },
    ]},
  ]},
  { label: "Polavaram", path: "/legislative-acts-2", dropdown: [
    { label: "Submergence Map", path: "/submergence-area-map" },
    { label: "PIP Progress", path: "/chronological-order-of-pip-progress" },
    { label: "PIP Issues", path: "/issues-of-pip" },
    { label: "PPA Minutes", path: "/polavaram-project-authority-minutes" },
    { label: "SLMC Meetings", path: "/slmc-meetings" },
    { label: "PIP Review", path: "/review-meeting-presentations-on-pip" },
  ]},
  { label: "LA & RR", path: "/la-rr", dropdown: [
    { label: "Land Acquisition", path: "/land-acquisition-la", dropdown: [
      { label: "LA Flow Chart", path: "/la-flow-chart" },
      { label: "LA Act 2013 Schedules", path: "/la-act-2013-3-schdules" },
      { label: "LA & RR Status", path: "/la-rr-status" },
    ]},
    { label: "Court Cases", path: "/cases", dropdown: [
      { label: "R&R Commissioner", path: "/cases-rr-commissioner-office" },
      { label: "Cases @ LA & RR Court", path: "/legal-compliances" },
      { label: "High Court WG", path: "/high-court-cases-wg" },
      { label: "High Court EG", path: "/high-court-cases-eg" },
    ]},
    { label: "RR Packages", path: "/rr-package" },
    { label: "R&R Colony Layouts", path: "/rr-colony-layouts" },
    { label: "Submergence Villages", path: "/submergence-villages-abstract" },
    { label: "DPR's", path: "/dprs" },
    { label: "Award Copies", path: "/award-copies" },
    { label: "Housing Colonies", path: "/housing-colonies-construction-status" },
  ]},
  { label: "RoFR & LTR", path: "/rofr", dropdown: [
    { label: "Abstract RoFR", path: "/abstract-rofr" },
    { label: "Rejection Reasons", path: "/reasons-for-rejections" },
    { label: "RoFR Judgements", path: "/compendium-of-judgements-rofr" },
    { label: "RoFR Rules-G.Os", path: "/rofr-g-os" },
    { label: "LTR ASR", path: "/ltr" },
    { label: "LTR ELURU", path: "/ltr-eluru" },
    { label: "LTR Disposal", path: "/ltr-disposal-meanings" },
  ]},
  { label: "Achievements", path: "/achievements", dropdown: [
    { label: "Child Interventions", path: "/child-interventions" },
    { label: "Child Bare Acts", path: "/child-bare-acts" },
    { label: "Reports", path: "/reports" },
    { label: "PORTFOLIO", path: "/portfolio-3" },
  ]},
];

// Everything that doesn't fit the main row lives in the "More" flyout
const moreLinks = [
  { label: "Grievances", path: "/grievances", dropdown: [
    { label: "R&R Grievances", path: "/abstract" },
    { label: "Land Rights Grievance", path: "/rr-grievances" },
    { label: "Types of Grievances", path: "/types-of-grievances" },
    { label: "R&R Forms", path: "/rr-grievance-full-forms" },
  ]},
  { label: "Downloads", path: "/downloads", dropdown: [
    { label: "Legislative Acts", path: "/legislative-acts-2" },
    { label: "GO's", path: "/gos", dropdown: [
      { label: "R&R G.Os", path: "/rr-gos" },
    ]},
    { label: "Others", path: "/others" },
  ]},
  { label: "Our Work", path: "/programs" },
  { label: "Stories", path: "/stories" },
  { label: "Gallery", path: "/gallery-9" },
  { label: "News & Views", path: "/news-views" },
  { label: "FAQ’s", path: "/faqs" },
  { label: "Quick Links", path: "/quick-links" },
  { label: "Careers", path: "/careers" },
  { label: "Partner", path: "/partner" },
  { label: "Contact Us", path: "/contact" },
];

const moreItem = { label: "More", dropdown: moreLinks };

const FLYOUT_WIDTH = 280;
const DESKTOP_NAV_MIN_WIDTH = 1141;
const MENU_GAP = 10;

function measureTopRect(label, refs) {
  const el = refs.current[label];
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const navEl = el.closest(".navbar") || document.querySelector(".navbar");
  const navBottom = navEl ? navEl.getBoundingClientRect().bottom : r.bottom;
  const maxLeft = Math.max(12, window.innerWidth - FLYOUT_WIDTH - 12);
  return { left: Math.min(Math.max(12, r.left), maxLeft), top: navBottom + MENU_GAP };
}

function measureSubRect(label, refs) {
  const el = refs.current[label];
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const flyoutEl = el.closest(".nav-flyout");
  const flyoutRect = flyoutEl ? flyoutEl.getBoundingClientRect() : r;

  let left = flyoutRect.right + MENU_GAP;
  if (left + FLYOUT_WIDTH > window.innerWidth - 12) {
    left = Math.max(12, flyoutRect.left - FLYOUT_WIDTH - MENU_GAP);
  }

  // Align submenu cleanly: match parent flyout top for the first item,
  // or align with item top minus container padding (8px), never higher than parent flyout
  const parentTop = flyoutRect.top;
  const itemTop = r.top;
  const top = Math.max(parentTop, Math.min(itemTop - 8, window.innerHeight - 200));

  return { left, top };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [openTop, setOpenTop] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const [topPos, setTopPos] = useState(null);
  const [subPos, setSubPos] = useState(null);
  const [flashNews, setFlashNews] = useState(defaultFlashNews);
  const topRefs = useRef({});
  const subRefs = useRef({});
  const closeTimer = useRef(0);
  const location = useLocation();

  useEffect(() => {
    let active = true;
    fetchFlashNews().then((res) => {
      if (active && Array.isArray(res.data) && res.data.length > 0) {
        setFlashNews(res.data);
      }
    });
    return () => { active = false; };
  }, []);

  const tickerItems = flashNews.length > 0 ? [...flashNews, ...flashNews] : [];
  const tickerDuration = Math.max(22, flashNews.length * 12);

  useEffect(() => {
    let raf = 0;
    const handler = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled((prev) => {
          const next = window.scrollY > 30;
          return prev === next ? prev : next;
        });
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobileItem(null);
    setOpenTop(null);
    setOpenSub(null);
    setTopPos(null);
    setSubPos(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleMobileSubmenu = (label) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  const closeDesktopMenus = useCallback(() => {
    setOpenTop(null);
    setOpenSub(null);
    setTopPos(null);
    setSubPos(null);
  }, []);

  const holdDesktopMenu = () => {
    window.clearTimeout(closeTimer.current);
  };

  const scheduleDesktopMenuClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(closeDesktopMenus, 280);
  };

  const openDesktopMenu = (label) => {
    window.clearTimeout(closeTimer.current);
    setOpenTop(label);
    setOpenSub(null);
    setSubPos(null);
    setTopPos(measureTopRect(label, topRefs));
  };

  const openDesktopSub = (label) => {
    window.clearTimeout(closeTimer.current);
    setOpenSub(label);
    setSubPos(measureSubRect(label, subRefs));
  };

  // Keep the fixed flyouts glued to their triggers while the page moves.
  useEffect(() => {
    if (!openTop) return undefined;
    let frame = 0;
    const reposition = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setTopPos(measureTopRect(openTop, topRefs));
        if (openSub) setSubPos(measureSubRect(openSub, subRefs));
      });
    };
    window.addEventListener("scroll", reposition, { passive: true, capture: true });
    window.addEventListener("resize", reposition);
    return () => {
      window.removeEventListener("scroll", reposition, { capture: true });
      window.removeEventListener("resize", reposition);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [openTop, openSub]);

  useEffect(() => {
    if (!openTop) return undefined;
    const dismiss = (event) => {
      if (event.target?.closest?.(".nav-flyout") || event.target?.closest?.(".navbar-links")) return;
      closeDesktopMenus();
    };
    const onKey = (event) => {
      if (event.key === "Escape") closeDesktopMenus();
    };
    const onNarrow = () => {
      if (window.innerWidth < DESKTOP_NAV_MIN_WIDTH) closeDesktopMenus();
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onNarrow);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onNarrow);
    };
  }, [openTop, closeDesktopMenus]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function renderDesktopItem(link) {
    if (link.dropdown) {
      const ddOpen = openTop === link.label;
      return (
        <Link
          key={link.label}
          to={link.path}
          ref={(el) => { topRefs.current[link.label] = el; }}
          className={`nav-link nav-link-menu ${location.pathname === link.path ? "active" : ""} ${ddOpen ? "is-open" : ""}`}
          style={{ display: "flex", alignItems: "center", gap: 5 }}
          onMouseEnter={() => openDesktopMenu(link.label)}
          onMouseLeave={scheduleDesktopMenuClose}
          onClick={closeDesktopMenus}
        >
          {link.label}
          <FaChevronDown size={9} style={{ transform: ddOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
        </Link>
      );
    }
    return (
      <Link
        key={link.label}
        to={link.path}
        className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
        onMouseEnter={() => { if (openTop) closeDesktopMenus(); }}
      >
        {link.label}
      </Link>
    );
  }

  function renderFlyoutItems(items) {
    return items.map((item) => {
      const isActive = location.pathname === item.path;
      if (item.dropdown) {
        const subOpen = openSub === item.label;
        return (
          <Link
            key={item.label}
            to={item.path}
            ref={(el) => { subRefs.current[item.label] = el; }}
            className={`nav-flyout-item nav-flyout-parent ${subOpen ? "is-open" : ""} ${isActive ? "active" : ""}`}
            onMouseEnter={() => openDesktopSub(item.label)}
            onClick={closeDesktopMenus}
          >
            <span>{item.label}</span>
            <FaChevronRight size={8} style={{ transform: subOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
          </Link>
        );
      }
      return (
        <Link
          key={item.label}
          to={item.path}
          className={`nav-flyout-item ${isActive ? "active" : ""}`}
          onClick={closeDesktopMenus}
        >
          {item.label}
        </Link>
      );
    });
  }

  const activeTopLink = openTop ? [...navLinks, moreItem].find((l) => l.label === openTop) : null;
  const activeSubLink = activeTopLink?.dropdown?.find((d) => d.label === openSub) || null;
  const viewportH = typeof window !== "undefined" ? window.innerHeight : 800;

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-topbar">
          <div className="container topbar-inner">
            <div className="topbar-flash" aria-label="Latest announcements">
              <span className="topbar-flash-label"><FaBullhorn size={10} /> Updates</span>
              <div className="topbar-flash-viewport">
                <div className="topbar-flash-track" style={{ animationDuration: `${tickerDuration}s` }}>
                  {tickerItems.map((item, i) => (
                    <span className="topbar-flash-item" key={`${item.id}-${i}`}>{item.message}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="topbar-actions">
              <div className="topbar-social">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer" title={s.name}><Icon /></a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-main">
          <div className="container navbar-inner">
            <Link to="/" className="navbar-logo">
              <img src="/alert-logo.png" alt="ALERT logo" className="navbar-logo-img" />
            </Link>

            <div className="navbar-links">
              {navLinks.map((link) => renderDesktopItem(link))}
              <span
                ref={(el) => { topRefs.current["More"] = el; }}
                className={`nav-link nav-link-menu ${openTop === "More" ? "is-open" : ""} ${moreLinks.some((l) => l.path === location.pathname || l.dropdown?.some((d) => d.path === location.pathname)) ? "active" : ""}`}
                style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}
                onMouseEnter={() => openDesktopMenu("More")}
                onMouseLeave={scheduleDesktopMenuClose}
              >
                More
                <FaChevronDown size={9} style={{ transform: openTop === "More" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
              </span>
            </div>

            <div className="navbar-actions">
              <Link to="/donate" className="btn-primary donate-nav-btn" style={{ padding: "8px 18px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
                <FaHeart size={11} /> Donate
              </Link>
              <button
                className="navbar-hamburger"
                onClick={() => setMobileOpen(!mobileOpen)}
                id="hamburger-btn"
                aria-label="Toggle navigation menu"
                style={{ background: "none", border: "none" }}
              >
                {mobileOpen ? (
                  <FaTimes size={24} color="#003190" />
                ) : (
                  <>
                    <div className="hamburger-line" />
                    <div className="hamburger-line" />
                    <div className="hamburger-line" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeTopLink && topPos && createPortal(
        <div
          className="nav-flyout"
          style={{
            left: `${topPos.left}px`,
            top: `${topPos.top}px`,
            width: `${FLYOUT_WIDTH}px`,
            maxHeight: `${Math.max(200, viewportH - topPos.top - 16)}px`,
          }}
          onMouseEnter={holdDesktopMenu}
          onMouseLeave={scheduleDesktopMenuClose}
        >
          {renderFlyoutItems(activeTopLink.dropdown)}
        </div>,
        document.body
      )}

      {activeSubLink && subPos && createPortal(
        <div
          className="nav-flyout nav-flyout-nested"
          style={{
            left: `${subPos.left}px`,
            top: `${subPos.top}px`,
            width: `${FLYOUT_WIDTH}px`,
          }}
          onMouseEnter={holdDesktopMenu}
          onMouseLeave={scheduleDesktopMenuClose}
        >
          {renderFlyoutItems(activeSubLink.dropdown)}
        </div>,
        document.body
      )}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{ display: "flex" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img src="/alert-icon.png" alt="ALERT" style={{ width: 40, height: 40, borderRadius: 10, objectFit: "contain", background: "white", padding: 2 }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "white", letterSpacing: 1 }}>ALERT</div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)" }}>EST. 2004</div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", color: "white", cursor: "pointer" }}
                aria-label="Close menu"
              >
                <FaTimes size={16} />
              </button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", paddingRight: 4 }}>
              {[...navLinks, ...moreLinks].map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <div
                        onClick={() => toggleMobileSubmenu(link.label)}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 8px", color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer" }}
                      >
                        <span>{link.label}</span>
                        <FaChevronDown size={11} style={{ color: "var(--color-primary)", transform: expandedMobileItem === link.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
                      </div>
                      <AnimatePresence>
                        {expandedMobileItem === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: "hidden", background: "rgba(255,255,255,0.03)", borderRadius: 8, margin: "0 0 10px 0", padding: "6px 0" }}
                          >
                            {link.dropdown.map((sub) => {
                              if (sub.dropdown) {
                                return (
                                  <div key={sub.label} style={{ marginBottom: 6 }}>
                                    <div
                                      onClick={() => toggleMobileSubmenu(sub.label)}
                                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}
                                    >
                                      <span>{sub.label}</span>
                                      <FaChevronDown size={10} style={{ color: "var(--color-primary)", transform: expandedMobileItem === sub.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
                                    </div>
                                    <AnimatePresence>
                                      {expandedMobileItem === sub.label && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          style={{ overflow: "hidden", background: "rgba(255,255,255,0.02)", borderRadius: 6, margin: "4px 0", padding: "4px 0" }}
                                        >
                                          {sub.dropdown.map((ss) => (
                                            <Link key={ss.label} to={ss.path} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", color: "rgba(255,255,255,0.75)", fontSize: "0.8rem", textDecoration: "none" }}>
                                              <span style={{ color: "var(--color-primary)", fontSize: "0.7rem" }}>•</span>
                                              <span>{ss.label}</span>
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              }
                              return (
                                <Link key={sub.label} to={sub.path} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", textDecoration: "none" }}>
                                  <span style={{ color: "var(--color-primary)", fontSize: "0.7rem" }}>•</span>
                                  <span>{sub.label}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <div key={link.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <Link to={link.path} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "14px 8px", color: location.pathname === link.path ? "var(--color-primary)" : "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
                      {link.label}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, paddingBottom: 4 }}>
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer" title={s.name} style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", transition: "color 0.2s ease" }}>
                      <Icon />
                    </a>
                  );
                })}
              </div>
              <Link to="/donate" onClick={() => setMobileOpen(false)} className="btn-primary" style={{ textAlign: "center", justifyContent: "center", width: "100%", padding: "12px", borderRadius: 25 }}>
                <FaHeart size={12} /> Donate Now (80G)
              </Link>
              <div style={{ textAlign: "center", fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Update: {flashNews[0].message}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", zIndex: 1000 }} />
      )}
    </>
  );
}
