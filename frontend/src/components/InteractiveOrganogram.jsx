import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSitemap,
  FaUsers,
  FaBalanceScale,
  FaWater,
  FaHandHoldingHeart,
  FaLock,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle
} from "react-icons/fa";

const organogramData = {
  id: "general_body",
  title: "General Body of ALERT",
  subtitle: "Supreme Sovereign Authority",
  desc: "Comprises founding members, legal experts, academics, and grassroots indigenous representatives. Convenes annually to ratify organizational policy, review audits, and elect the Governing Body.",
  color: "#061842",
  icon: <FaUsers />,
  badge: "Constitutional Core",
  children: [
    {
      id: "governing_body",
      title: "Governing Body / Board of Directors",
      subtitle: "Executive Governance & Policy Trusteeship",
      desc: "7-member elected body steering policy formulation, legal intervention strategy, FCRA compliance, and 35 institutional governance frameworks.",
      color: "var(--color-primary)",
      icon: <FaSitemap />,
      badge: "Policy Leadership",
      children: [
        {
          id: "secretary_director",
          title: "Chief Functionary / Secretary & Director",
          subtitle: "Mr. Y.L.J.B. Jayaraj (Founder & Executive Leader)",
          desc: "47+ years of grassroots human rights leadership. Directs day-to-day operations, state-level advocacy, donor coordination, and high court legal strategy.",
          color: "#1e3a8a",
          icon: <FaBalanceScale />,
          badge: "Executive Functionary",
          children: [
            {
              id: "legal_wing",
              title: "Legal Cell & Constitutional Advocacy",
              subtitle: "PESA, RoFR & LTR Legal Aid Unit",
              desc: "Drafts High Court PILs, RTI representations, Forest Rights Act (RoFR 2006) community claims, and Land Transfer Regulation 1/70 land restitution suits.",
              color: "#10b981",
              icon: <FaBalanceScale />,
              badge: "Legal Cell",
              lead: "Paralegal Team & Constitutional Scholars"
            },
            {
              id: "polavaram_wing",
              title: "Polavaram LA & R&R Field Unit",
              subtitle: "371 Submerged Villages Relief Command",
              desc: "Monitors statutory rehabilitation under RFCTLARR Act 2013, conducts field surveys across Godavari gorge hamlets, and verifies land-for-land entitlements.",
              color: "#f59e0b",
              icon: <FaWater />,
              badge: "R&R Cell",
              lead: "Field Surveyors & Community Organizers"
            },
            {
              id: "antyodaya_wing",
              title: "Antyodaya Livelihoods & Women Cooperatives",
              subtitle: "Nomadic Yenadi & Coastal Fisheries Directorate",
              desc: "Manages the 3,500-member Matsya Mithra Women Fisheries Federation, nomadic tribal housing pattas, and solar micro-grid installations.",
              color: "#0ea5e9",
              icon: <FaHandHoldingHeart />,
              badge: "Community Co-ops",
              lead: "Cooperative Managers & Field Mobilizers"
            },
            {
              id: "finance_wing",
              title: "Finance, Administration & Compliance",
              subtitle: "Statutory Governance & 35 Policies Registry",
              desc: "Oversees 12A, 80G, FCRA statutory compliance, quarterly double-entry audits, POSH Internal Complaints Committee, and procurement standards.",
              color: "#8b5cf6",
              icon: <FaLock />,
              badge: "Compliance Cell",
              lead: "Chartered Accountants & Internal Auditors"
            }
          ]
        }
      ]
    }
  ]
};

export default function InteractiveOrganogram() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeTab, setActiveTab] = useState("chart"); // 'chart' | 'wings'

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* HEADER CARD */}
      <div style={{ background: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: 20, boxShadow: "var(--shadow-sm)", border: "1px solid #e2e8f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span className="badge" style={{ background: "rgba(30, 58, 138, 0.12)", color: "#1e3a8a", fontWeight: 700 }}>
                Organizational Architecture
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>
                Democratic Governance Hierarchy
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--color-dark)", margin: 0 }}>
              Interactive Institutional Organogram
            </h3>
            <p style={{ color: "var(--color-text-light)", marginTop: 6, fontSize: "0.95rem", maxWidth: 760, lineHeight: 1.6 }}>
              Visualizing ALERT's transparent governance framework: from the sovereign General Body down to autonomous grassroots Gram Sabhas and field operational cells.
            </p>
          </div>

          <div style={{ display: "inline-flex", background: "#f8fafc", padding: 4, borderRadius: 20, border: "1px solid #cbd5e1" }}>
            <button
              type="button"
              onClick={() => setActiveTab("chart")}
              style={{
                border: "none",
                padding: "8px 16px",
                borderRadius: 16,
                background: activeTab === "chart" ? "var(--color-dark)" : "transparent",
                color: activeTab === "chart" ? "white" : "#64748b",
                cursor: "pointer",
                fontSize: "0.84rem",
                fontWeight: 600,
                transition: "all 0.2s ease"
              }}
            >
              Hierarchical Flow
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("wings")}
              style={{
                border: "none",
                padding: "8px 16px",
                borderRadius: 16,
                background: activeTab === "wings" ? "var(--color-dark)" : "transparent",
                color: activeTab === "wings" ? "white" : "#64748b",
                cursor: "pointer",
                fontSize: "0.84rem",
                fontWeight: 600,
                transition: "all 0.2s ease"
              }}
            >
              4 Operational Wings
            </button>
          </div>
        </div>
      </div>

      {/* HIERARCHICAL TREE VIEW */}
      {activeTab === "chart" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          {/* LEVEL 1: GENERAL BODY */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            onClick={() => setSelectedNode(organogramData)}
            style={{
              width: "100%",
              maxWidth: 580,
              background: "white",
              borderRadius: 16,
              padding: 20,
              border: "2px solid #061842",
              boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
              cursor: "pointer",
              textAlign: "center",
              position: "relative"
            }}
          >
            <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#061842", color: "white", fontSize: "0.72rem", padding: "3px 12px", borderRadius: 12, fontWeight: 700, textTransform: "uppercase" }}>
              Tier 1 • Supreme Authority
            </span>
            <h4 style={{ fontSize: "1.2rem", color: "#061842", fontWeight: 800, margin: "6px 0 2px" }}>
              General Body of ALERT
            </h4>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-light)", margin: 0 }}>
              Founders, Legal Scholars, Academics & Tribal Representatives
            </p>
          </motion.div>

          {/* CONNECTOR LINE */}
          <div style={{ width: 2, height: 26, background: "#cbd5e1" }} />

          {/* LEVEL 2: GOVERNING BODY */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            onClick={() => setSelectedNode(organogramData.children[0])}
            style={{
              width: "100%",
              maxWidth: 620,
              background: "white",
              borderRadius: 16,
              padding: 22,
              border: "2px solid var(--color-primary)",
              boxShadow: "0 8px 24px rgba(255,137,0,0.12)",
              cursor: "pointer",
              textAlign: "center",
              position: "relative"
            }}
          >
            <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--color-primary)", color: "white", fontSize: "0.72rem", padding: "3px 12px", borderRadius: 12, fontWeight: 700, textTransform: "uppercase" }}>
              Tier 2 • Executive Board
            </span>
            <h4 style={{ fontSize: "1.25rem", color: "var(--color-dark)", fontWeight: 800, margin: "6px 0 2px" }}>
              Governing Body (7 Board Members)
            </h4>
            <p style={{ fontSize: "0.84rem", color: "var(--color-text-light)", margin: 0 }}>
              President, Vice President, Secretary, Treasurer & 3 Executive Members
            </p>
          </motion.div>

          {/* CONNECTOR LINE */}
          <div style={{ width: 2, height: 26, background: "#cbd5e1" }} />

          {/* LEVEL 3: SECRETARY & DIRECTOR */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            onClick={() => setSelectedNode(organogramData.children[0].children[0])}
            style={{
              width: "100%",
              maxWidth: 660,
              background: "linear-gradient(135deg, #1e3a8a 0%, #061842 100%)",
              color: "white",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 10px 30px rgba(30,58,138,0.25)",
              cursor: "pointer",
              textAlign: "center",
              position: "relative"
            }}
          >
            <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#f59e0b", color: "#061842", fontSize: "0.72rem", padding: "3px 12px", borderRadius: 12, fontWeight: 800, textTransform: "uppercase" }}>
              Tier 3 • Chief Functionary
            </span>
            <h4 style={{ fontSize: "1.3rem", color: "white", fontWeight: 800, margin: "6px 0 2px" }}>
              Secretary & Executive Director
            </h4>
            <div style={{ color: "#93c5fd", fontSize: "0.9rem", fontWeight: 600 }}>Mr. Y.L.J.B. Jayaraj</div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", margin: "4px 0 0" }}>
              Executive Programmatic Leadership • 47+ Years Grassroots Stewardship
            </p>
          </motion.div>

          {/* CONNECTOR LINE */}
          <div style={{ width: 2, height: 26, background: "#cbd5e1" }} />

          {/* LEVEL 4: 4 OPERATIONAL WINGS */}
          <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {organogramData.children[0].children[0].children.map((wing) => (
              <motion.div
                key={wing.id}
                whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.08)" }}
                onClick={() => setSelectedNode(wing)}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid #e2e8f0",
                  borderTop: `4px solid ${wing.color}`,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: "0.74rem", fontWeight: 700, padding: "2px 8px", borderRadius: 8, background: "#f8fafc", color: wing.color, border: "1px solid #e2e8f0" }}>
                      {wing.badge}
                    </span>
                    <span style={{ color: wing.color, fontSize: "1.1rem" }}>{wing.icon}</span>
                  </div>
                  <h5 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 6px" }}>
                    {wing.title}
                  </h5>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-primary)", fontWeight: 600, margin: "0 0 10px" }}>
                    {wing.subtitle}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.5, margin: 0 }}>
                    {wing.desc}
                  </p>
                </div>

                <div style={{ marginTop: 14, paddingTop: 10, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.76rem", color: "#64748b" }}>{wing.lead}</span>
                  <span style={{ fontSize: "0.78rem", color: wing.color, fontWeight: 700 }}>Details →</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CONNECTOR LINE */}
          <div style={{ width: 2, height: 26, background: "#cbd5e1" }} />

          {/* LEVEL 5: GRASSROOTS GRAM SABHAS */}
          <div
            style={{
              width: "100%",
              maxWidth: 720,
              background: "#f0fdf4",
              border: "2px dashed #10b981",
              borderRadius: 16,
              padding: "16px 24px",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#059669", textTransform: "uppercase", letterSpacing: 0.5 }}>
              Grassroots Sovereign Base
            </div>
            <h5 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)", margin: "4px 0 2px" }}>
              Gram Sabhas, Tribal Habitations & Women Cooperatives
            </h5>
            <p style={{ fontSize: "0.84rem", color: "#475569", margin: 0 }}>
              Under PESA 1996 and RoFR 2006, all ALERT programmatic interventions remain strictly answerable to the Gram Sabha.
            </p>
          </div>
        </div>
      )}

      {/* 4 WINGS DETAILED ACCORDION */}
      {activeTab === "wings" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {organogramData.children[0].children[0].children.map((wing) => (
            <div
              key={wing.id}
              style={{
                background: "white",
                borderRadius: 16,
                padding: 24,
                boxShadow: "var(--shadow-sm)",
                border: "1px solid #e2e8f0",
                borderLeft: `5px solid ${wing.color}`
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ color: wing.color, fontSize: "1.4rem" }}>{wing.icon}</span>
                <div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-dark)", margin: 0 }}>
                    {wing.title}
                  </h4>
                  <span style={{ fontSize: "0.82rem", color: "var(--color-primary)", fontWeight: 600 }}>
                    {wing.subtitle}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6, marginBottom: 16 }}>
                {wing.desc}
              </p>

              <div style={{ background: "#f8fafc", padding: "10px 14px", borderRadius: 10, border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 8 }}>
                <FaCheckCircle style={{ color: "#10b981", flexShrink: 0 }} />
                <span style={{ fontSize: "0.82rem", color: "#475569", fontWeight: 600 }}>
                  Led by: {wing.lead}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL MODAL FOR ANY SELECTED NODE */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNode(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              backdropFilter: "blur(6px)"
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "white",
                borderRadius: 20,
                maxWidth: 550,
                width: "100%",
                padding: 28,
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{ fontSize: "0.76rem", fontWeight: 800, textTransform: "uppercase", padding: "3px 10px", borderRadius: 12, background: "#f1f5f9", color: "var(--color-primary)" }}>
                  {selectedNode.badge || "ALERT Leadership"}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedNode(null)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: "1.2rem" }}
                >
                  ✕
                </button>
              </div>

              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--color-dark)", marginBottom: 4 }}>
                {selectedNode.title}
              </h4>
              <div style={{ fontSize: "0.9rem", color: "var(--color-primary)", fontWeight: 700, marginBottom: 14 }}>
                {selectedNode.subtitle}
              </div>

              <p style={{ fontSize: "0.92rem", color: "var(--color-text-light)", lineHeight: 1.65, marginBottom: 20 }}>
                {selectedNode.desc}
              </p>

              {selectedNode.lead && (
                <div style={{ background: "#f8fafc", padding: 14, borderRadius: 12, border: "1px solid #e2e8f0", marginBottom: 20, fontSize: "0.85rem", color: "#475569" }}>
                  <strong>Operational Command: </strong> {selectedNode.lead}
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedNode(null)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "10px 0" }}
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
