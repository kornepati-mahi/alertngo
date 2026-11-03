import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaCompass,
  FaTree,
  FaWater,
  FaBalanceScale,
  FaSearch,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaInfoCircle
} from "react-icons/fa";

const operationalRegions = [
  {
    id: "asr",
    name: "ASR District (Alluri Sitharama Raju)",
    shortName: "ASR District",
    badgeColor: "#10b981", // Green matching original official map
    itda: ["Rampachodavaram ITDA", "Chinturu ITDA"],
    focus: "PESA Gram Sabha sovereignty, RoFR Community Forest Rights (CFR), and forest dwelling tribal land titles.",
    tribes: ["Koya", "Konda Reddi (PVTG)", "Valmiki"],
    center: [17.55, 81.55],
    zoom: 9.5,
    polygonCoords: [
      [17.85, 81.25],
      [17.82, 81.55],
      [17.65, 81.85],
      [17.35, 81.88],
      [17.25, 81.65],
      [17.48, 81.35],
      [17.75, 81.25]
    ],
    mandals: [
      {
        id: "chinturu",
        name: "1. Chinturu",
        fullName: "Chinturu Mandal",
        itda: "Chinturu ITDA",
        lat: 17.747,
        lng: 81.393,
        river: "Sabari & Godavari Basin",
        activities: "Gram Sabha Patta titling under RoFR 2006, flash flood warning system, emergency relief distribution."
      },
      {
        id: "devipatnam",
        name: "2. Devipatnam",
        fullName: "Devipatnam Mandal",
        itda: "Rampachodavaram ITDA",
        lat: 17.291,
        lng: 81.673,
        river: "Godavari Gorge Area",
        activities: "Polavaram submergence R&R package entitlement verification, youth cooperative training."
      },
      {
        id: "kunavaram",
        name: "3. Kunavaram",
        fullName: "Kunavaram Mandal",
        itda: "Chinturu ITDA",
        lat: 17.585,
        lng: 81.272,
        river: "Sabari-Godavari Confluence",
        activities: "Monsoon disaster risk reduction, tribal healthcare camps, forest produce value addition."
      },
      {
        id: "maredumilli",
        name: "4. Maredumilli",
        fullName: "Maredumilli Mandal",
        itda: "Rampachodavaram ITDA",
        lat: 17.595,
        lng: 81.713,
        river: "Eastern Ghats Forest Reserve",
        activities: "Community Forest Resource rights mapping, sustainable bamboo & NTFP harvest stewardship."
      },
      {
        id: "rcvaram",
        name: "5. R.C. Varam",
        fullName: "Rampachodavaram Mandal",
        itda: "Rampachodavaram ITDA",
        lat: 17.447,
        lng: 81.776,
        river: "Agency Administrative Center",
        activities: "Regional legal aid cell, high court writ petition documentation, human rights paralegal clinic."
      },
      {
        id: "vrpuram",
        name: "6. V.R. Puram",
        fullName: "Vararamachandrapuram Mandal",
        itda: "Chinturu ITDA",
        lat: 17.545,
        lng: 81.332,
        river: "Deep Agency Riverine Belt",
        activities: "Solar micro-grid home electrification, tribal nutrition & ashram school quality monitoring."
      }
    ]
  },
  {
    id: "eluru",
    name: "Eluru Agency District",
    shortName: "Eluru District",
    badgeColor: "#ef4444", // Red matching original official map
    itda: ["K.R. Puram ITDA"],
    focus: "Land Transfer Regulation (LTR 1/70) enforcement, agricultural cooperatives, and fair Polavaram displacement compensation.",
    tribes: ["Koya", "Konda Dora", "Nayaks"],
    center: [17.3, 81.3],
    zoom: 9.5,
    polygonCoords: [
      [17.65, 81.1],
      [17.55, 81.3],
      [17.32, 81.65],
      [17.18, 81.6],
      [17.1, 81.25],
      [17.25, 81.08]
    ],
    mandals: [
      {
        id: "buttayigudem",
        name: "1. Buttayigudem",
        fullName: "Buttayigudem Mandal",
        itda: "K.R. Puram ITDA",
        lat: 17.151,
        lng: 81.298,
        river: "Jalleru Reservoir Belt",
        activities: "Land Transfer Regulation 1 of 1970 restitution litigation, organic millets & turmeric collective farming."
      },
      {
        id: "jeelugumilli",
        name: "2. Jeelugumilli",
        fullName: "Jeelugumilli Mandal",
        itda: "K.R. Puram ITDA",
        lat: 17.185,
        lng: 81.161,
        river: "Agency Foothill Plains",
        activities: "Forest rights claim dispute resolution, women self-help microfinance cooperatives."
      },
      {
        id: "kukkunuru",
        name: "3. Kukkunuru",
        fullName: "Kukkunuru Mandal",
        itda: "K.R. Puram ITDA",
        lat: 17.575,
        lng: 81.196,
        river: "Godavari Riverine Basin",
        activities: "Polavaram displacement rehabilitation survey, youth vocational rights advocacy."
      },
      {
        id: "velerpadu",
        name: "4. Velerpadu",
        fullName: "Velerpadu Mandal",
        itda: "K.R. Puram ITDA",
        lat: 17.485,
        lng: 81.171,
        river: "Godavari Upstream Belt",
        activities: "Resettlement housing quality audits, potable drinking water filter installation."
      },
      {
        id: "polavaram",
        name: "5. Polavaram",
        fullName: "Polavaram Mandal",
        itda: "K.R. Puram ITDA",
        lat: 17.251,
        lng: 81.642,
        river: "Project Dam Site Epicenter",
        activities: "Statutory RFCTLARR Act 2013 compliance monitoring, grievance redressal for displaced families."
      }
    ]
  },
  {
    id: "submergence",
    name: "Polavaram Submergence Area",
    shortName: "371 Villages Zone",
    badgeColor: "#f59e0b", // Yellow / Amber matching original official map
    itda: ["Tri-ITDA Jurisdiction"],
    focus: "Comprehensive entitlement monitoring for 371 tribal habitations facing total submergence under the Polavaram Mega Dam reservoir.",
    tribes: ["Koya", "Konda Reddi", "Hill Tribals"],
    center: [17.38, 81.52],
    zoom: 10.5,
    polygonCoords: [
      [17.48, 81.45],
      [17.45, 81.65],
      [17.25, 81.66],
      [17.28, 81.42]
    ],
    mandals: [
      {
        id: "submerged_habitations",
        name: "371 Villages Submergence Zone",
        fullName: "371 Submerged Villages Zone",
        itda: "Tri-ITDA Jurisdiction",
        lat: 17.38,
        lng: 81.52,
        river: "Contour 41.15m & 45.72m Flood Levels",
        activities: "Independent social audit of R&R housing, land-for-land entitlement verification, and legal representation in Supreme Court / High Court."
      }
    ]
  },
  {
    id: "coastal",
    name: "Coastal Krishna Belt",
    shortName: "Coastal Krishna",
    badgeColor: "#0ea5e9", // Blue
    itda: ["Non-Scheduled Nomad Cell"],
    focus: "Nomadic Yenadi tribal land rights, housing entitlement, Matsya Mithra Women Fisheries Federation, and coastal mangrove resilience.",
    tribes: ["Yenadi (Nomadic Primitive Tribe)", "Traditional Fishermen Communities"],
    center: [16.15, 81.1],
    zoom: 9.5,
    polygonCoords: [
      [16.48, 81.25],
      [16.45, 81.45],
      [16.15, 81.25],
      [15.88, 80.95],
      [16.05, 80.85],
      [16.35, 81.15]
    ],
    mandals: [
      {
        id: "machilipatnam",
        name: "1. Machilipatnam",
        fullName: "Machilipatnam Mandal",
        itda: "Coastal Cell",
        lat: 16.187,
        lng: 81.138,
        river: "Bay of Bengal Shoreline",
        activities: "Federation headquarters of 3,500+ Matsya Mithra tribal fisherwomen, revolving micro-capital loans."
      },
      {
        id: "bantumilli",
        name: "2. Bantumilli",
        fullName: "Bantumilli Mandal",
        itda: "Coastal Cell",
        lat: 16.358,
        lng: 81.273,
        river: "Coastal Estuary Belt",
        activities: "Securing permanent house-site pattas and social identity documentation for nomadic Yenadi hamlets."
      },
      {
        id: "kruthivennu",
        name: "3. Kruthivennu",
        fullName: "Kruthivennu Mandal",
        itda: "Coastal Cell",
        lat: 16.425,
        lng: 81.385,
        river: "Mangrove Tidal Creeks",
        activities: "Community-led mangrove ecological restoration, cyclone emergency shelter management."
      },
      {
        id: "nagayalanka",
        name: "4. Nagayalanka",
        fullName: "Nagayalanka Mandal",
        itda: "Coastal Cell",
        lat: 15.945,
        lng: 80.916,
        river: "Krishna River Estuary Mouth",
        activities: "Estuarine artisanal fishing rights protection, child joyful learning centers."
      },
      {
        id: "koduru",
        name: "5. Koduru",
        fullName: "Koduru Mandal",
        itda: "Coastal Cell",
        lat: 15.914,
        lng: 80.898,
        river: "Hamsaladeevi Beach Zone",
        activities: "Civil rights camps: securing Aadhaar, Voter IDs, and Ration cards for excluded nomadic families."
      },
      {
        id: "mopidevi",
        name: "6. Mopidevi",
        fullName: "Mopidevi Mandal",
        itda: "Coastal Cell",
        lat: 16.082,
        lng: 80.932,
        river: "Krishna River Irrigation Tract",
        activities: "Safe clean drinking water systems, self-help health collectives, youth literacy support."
      }
    ]
  }
];

export default function AreaOfOperationExplorer() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const polygonsGroupRef = useRef(null);

  const [selectedRegionId, setSelectedRegionId] = useState("all");
  const [selectedMandal, setSelectedMandal] = useState(null);
  const [searchMandal, setSearchMandal] = useState("");

  const activeRegions = selectedRegionId === "all"
    ? operationalRegions
    : operationalRegions.filter((r) => r.id === selectedRegionId);

  const allMandals = operationalRegions.flatMap((r) =>
    r.mandals.map((m) => ({ ...m, regionId: r.id, regionName: r.name, badgeColor: r.badgeColor }))
  );

  const filteredMandals = activeRegions.flatMap((r) =>
    r.mandals
      .filter((m) =>
        m.name.toLowerCase().includes(searchMandal.toLowerCase()) ||
        m.fullName.toLowerCase().includes(searchMandal.toLowerCase()) ||
        m.activities.toLowerCase().includes(searchMandal.toLowerCase()) ||
        r.name.toLowerCase().includes(searchMandal.toLowerCase())
      )
      .map((m) => ({ ...m, regionId: r.id, regionName: r.name, badgeColor: r.badgeColor }))
  );

  // Initialize Leaflet Map with OpenStreetMap (100% free, no watermarks, full real-world geometry)
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [17.1, 81.45],
        zoom: 8.5,
        scrollWheelZoom: false,
        zoomControl: true
      });

      // Free, high resolution OpenStreetMap tiles (no watermarks, no API keys)
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      polygonsGroupRef.current = L.layerGroup().addTo(map);
      markersGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Render Overlays, Polygons & Permanent Labeled Pins
  useEffect(() => {
    if (!mapInstanceRef.current || !markersGroupRef.current || !polygonsGroupRef.current) return;

    const markersGroup = markersGroupRef.current;
    const polygonsGroup = polygonsGroupRef.current;

    markersGroup.clearLayers();
    polygonsGroup.clearLayers();

    // 1. Draw Territory Highlights (Color-coded boundary overlays)
    operationalRegions.forEach((reg) => {
      const isRegionActive = selectedRegionId === "all" || selectedRegionId === reg.id;
      if (!isRegionActive) return;

      const poly = L.polygon(reg.polygonCoords, {
        color: reg.badgeColor,
        fillColor: reg.badgeColor,
        fillOpacity: reg.id === "submergence" ? 0.35 : 0.18,
        weight: reg.id === selectedRegionId ? 3.5 : 2,
        dashArray: reg.id === "submergence" ? "6, 6" : null
      });

      poly.bindTooltip(`<b>${reg.name}</b><br/>${reg.itda.join(" • ")}`, {
        sticky: true,
        direction: "top"
      });

      poly.on("click", () => {
        setSelectedRegionId(reg.id);
        mapInstanceRef.current.flyTo(reg.center, reg.zoom, { duration: 1.2 });
      });

      polygonsGroup.addLayer(poly);
    });

    // 2. Draw Permanent Labeled Markers for every Mandal
    allMandals.forEach((mandal) => {
      const isRegionActive = selectedRegionId === "all" || selectedRegionId === mandal.regionId;
      if (!isRegionActive) return;

      const isSelected = selectedMandal?.id === mandal.id;

      // Custom Glowing Colored Pin Icon
      const customPin = L.divIcon({
        className: "custom-leaflet-marker",
        html: `
          <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <div style="position: absolute; width: ${isSelected ? "38px" : "28px"}; height: ${isSelected ? "38px" : "28px"}; border-radius: 50%; background: ${mandal.badgeColor}; opacity: 0.4; animation: pingSlow 2.5s infinite;"></div>
            <div style="width: ${isSelected ? "20px" : "16px"}; height: ${isSelected ? "20px" : "16px"}; border-radius: 50%; background: ${mandal.badgeColor}; border: 3px solid white; box-shadow: 0 3px 10px rgba(0,0,0,0.35);"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([mandal.lat, mandal.lng], { icon: customPin });

      // PERMANENT VISIBLE NAME LABEL ABOVE PIN (Key for user identification!)
      marker.bindTooltip(
        `<span style="color: ${mandal.badgeColor}; font-weight: 800;">●</span> <strong>${mandal.name}</strong>`,
        {
          permanent: true,
          direction: "top",
          offset: [0, -12],
          className: "mandal-map-label"
        }
      );

      // Interactive Popup on Click
      marker.bindPopup(`
        <div style="font-family: inherit; padding: 6px 4px; min-width: 220px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="background: ${mandal.badgeColor}; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 6px; borderRadius: 6px;">
              ${mandal.itda}
            </span>
          </div>
          <h4 style="font-size: 1.05rem; font-weight: 800; color: #061842; margin: 2px 0 4px;">
            ${mandal.fullName}
          </h4>
          <div style="font-size: 0.8rem; color: #d97706; font-weight: 700; margin-bottom: 6px;">
            ${mandal.river}
          </div>
          <p style="font-size: 0.82rem; color: #475569; line-height: 1.45; margin: 0 0 10px;">
            ${mandal.activities}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${mandal.fullName}, Andhra Pradesh, India`)}"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.78rem; color: var(--color-primary); font-weight: 700; text-decoration: none;"
          >
            Open in Google Maps ↗
          </a>
        </div>
      `);

      marker.on("click", () => {
        setSelectedMandal(mandal);
        mapInstanceRef.current.flyTo([mandal.lat, mandal.lng], 11, { duration: 1.2 });
      });

      markersGroup.addLayer(marker);
    });
  }, [selectedRegionId, selectedMandal]);

  const handleSelectRegion = (regId) => {
    setSelectedRegionId(regId);
    setSelectedMandal(null);

    if (mapInstanceRef.current) {
      if (regId === "all") {
        mapInstanceRef.current.flyTo([17.1, 81.45], 8.5, { duration: 1.4 });
      } else {
        const reg = operationalRegions.find((r) => r.id === regId);
        if (reg) {
          mapInstanceRef.current.flyTo(reg.center, reg.zoom, { duration: 1.4 });
        }
      }
    }
  };

  const handleMandalClick = (mandal) => {
    setSelectedMandal(mandal);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([mandal.lat, mandal.lng], 12, { duration: 1.2 });
      const mapEl = document.getElementById("territory-map-viewport");
      if (mapEl) {
        mapEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* HEADER CARD */}
      <div style={{ background: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: 20, boxShadow: "var(--shadow-sm)", border: "1px solid #e2e8f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span className="badge" style={{ background: "rgba(16, 185, 129, 0.12)", color: "#059669", fontWeight: 700 }}>
                Visual Territory Identification
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>
                Andhra Pradesh Fifth-Scheduled Agency Belt & Coastal Belt
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--color-dark)", margin: 0 }}>
              ALERT Area of Operation: Identified Territories & Mandals
            </h3>
            <p style={{ color: "var(--color-text-light)", marginTop: 6, fontSize: "0.95rem", maxWidth: 760, lineHeight: 1.6 }}>
              All 17 mandal stations and 4 operational jurisdictions are labeled and color-coded below. Click on any territory badge or mandal pin to inspect.
            </p>
          </div>
        </div>

        {/* COLOR-CODED IDENTIFICATION LEGEND BAR (Directly Solves Identification Issue) */}
        <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid #f1f5f9" }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: 10, letterSpacing: 0.5 }}>
            Territory Identification Key (Click to Highlight on Map):
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 12 }}>
            {[
              {
                id: "asr",
                name: "ASR District",
                color: "#10b981",
                mandals: "6 Mandals: Chinturu, Devipatnam, Kunavaram, Maredumilli, R.C. Varam, V.R. Puram",
                itda: "Rampachodavaram & Chinturu ITDAs"
              },
              {
                id: "eluru",
                name: "Eluru District",
                color: "#ef4444",
                mandals: "5 Mandals: Buttayigudem, Jeelugumilli, Kukkunuru, Velerpadu, Polavaram",
                itda: "K.R. Puram ITDA"
              },
              {
                id: "submergence",
                name: "Polavaram Submergence",
                color: "#f59e0b",
                mandals: "371 Villages Submergence Zone (Contour 41.15m & 45.72m)",
                itda: "Tri-ITDA Flood Command"
              },
              {
                id: "coastal",
                name: "Coastal Krishna Belt",
                color: "#0ea5e9",
                mandals: "6 Mandals: Machilipatnam, Bantumilli, Kruthivennu, Nagayalanka, Koduru, Mopidevi",
                itda: "Nomadic Yenadi & Fisheries Cell"
              }
            ].map((leg) => {
              const isSelected = selectedRegionId === leg.id;
              return (
                <div
                  key={leg.id}
                  onClick={() => handleSelectRegion(isSelected ? "all" : leg.id)}
                  style={{
                    background: isSelected ? `${leg.color}15` : "#f8fafc",
                    border: `2px solid ${isSelected ? leg.color : "#e2e8f0"}`,
                    borderLeft: `5px solid ${leg.color}`,
                    borderRadius: 12,
                    padding: "10px 14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--color-dark)" }}>
                      {leg.name}
                    </span>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: leg.color, display: "inline-block" }} />
                  </div>
                  <div style={{ fontSize: "0.76rem", color: leg.color, fontWeight: 700, marginTop: 2 }}>
                    {leg.itda}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: 4, lineHeight: 1.35 }}>
                    {leg.mandals}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH ROW */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            { id: "all", label: "Show All Territories (17 Mandals)", color: "var(--color-dark)" },
            { id: "asr", label: "ASR District", color: "#10b981" },
            { id: "eluru", label: "Eluru Agency", color: "#ef4444" },
            { id: "submergence", label: "Polavaram Submergence", color: "#f59e0b" },
            { id: "coastal", label: "Coastal Krishna", color: "#0ea5e9" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSelectRegion(tab.id)}
              style={{
                padding: "8px 16px",
                borderRadius: 24,
                fontSize: "0.84rem",
                fontWeight: 600,
                cursor: "pointer",
                border: selectedRegionId === tab.id ? "none" : "1px solid #cbd5e1",
                background: selectedRegionId === tab.id ? tab.color : "white",
                color: selectedRegionId === tab.id ? "white" : "var(--color-dark)",
                boxShadow: selectedRegionId === tab.id ? `0 4px 14px ${tab.color}40` : "none",
                transition: "all 0.2s ease"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ position: "relative", minWidth: 240 }}>
          <input
            type="text"
            placeholder="Search mandal or activity..."
            value={searchMandal}
            onChange={(e) => setSearchMandal(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 14px 8px 36px",
              borderRadius: 20,
              border: "1px solid #cbd5e1",
              fontSize: "0.85rem",
              outline: "none"
            }}
          />
          <FaSearch style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
        </div>
      </div>

      {/* MAP VIEWPORT CONTAINER */}
      <div
        id="territory-map-viewport"
        style={{
          background: "white",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 12px 36px rgba(0,0,0,0.08)",
          border: "1px solid #e2e8f0"
        }}
      >
        {/* LEAFLET IDENTIFIED OVERLAY ENGINE */}
        <div>
          <div
            ref={mapContainerRef}
            style={{ width: "100%", height: "520px", zIndex: 1 }}
          />
          <div style={{ padding: "12px 20px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.82rem", color: "#64748b", flexWrap: "wrap", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", display: "inline-block" }} /> ASR District (6 Mandals)
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} /> Eluru Agency (5 Mandals)
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} /> 371 Submerged Villages
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#0ea5e9", display: "inline-block" }} /> Coastal Krishna (6 Mandals)
              </span>
            </div>
            <span>💡 Every pin has its station name permanently labeled above it</span>
          </div>
        </div>
      </div>

      {/* DETAILED MANDAL GRID (CLICK TO SPOTLIGHT & FLY ON MAP) */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-dark)", display: "flex", alignItems: "center", gap: 8 }}>
            <FaCompass style={{ color: "var(--color-primary)" }} /> Field Mandals & Ground Action
          </h4>
          <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
            Showing {filteredMandals.length} active mandal stations • Click any card to fly to it on map
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 16 }}>
          {filteredMandals.map((m, idx) => {
            const isSpotlight = selectedMandal?.id === m.id;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleMandalClick(m)}
                style={{
                  background: isSpotlight ? "#f0fdf4" : "white",
                  borderRadius: 14,
                  padding: 20,
                  boxShadow: isSpotlight ? "0 8px 24px rgba(16,185,129,0.2)" : "var(--shadow-sm)",
                  border: isSpotlight ? "2px solid #10b981" : "1px solid #f1f5f9",
                  borderLeft: `5px solid ${m.badgeColor}`,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <h5 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-dark)", margin: 0, display: "flex", alignItems: "center", gap: 6 }}>
                      <FaMapMarkerAlt style={{ color: m.badgeColor, fontSize: "0.9rem" }} /> {m.fullName}
                    </h5>
                    <span style={{ fontSize: "0.72rem", background: "#f8fafc", color: "#64748b", padding: "2px 8px", borderRadius: 8, border: "1px solid #e2e8f0" }}>
                      {m.itda}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-primary)", fontWeight: 600, marginBottom: 10 }}>
                    {m.river}
                  </div>
                  <p style={{ fontSize: "0.86rem", color: "var(--color-text-light)", lineHeight: 1.55, margin: 0 }}>
                    {m.activities}
                  </p>
                </div>

                <div style={{ marginTop: 14, paddingTop: 10, borderTop: "1px dashed #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.78rem" }}>
                  <span style={{ color: "#10b981", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <FaCheckCircle size={11} /> Community Mobilization
                  </span>
                  <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>
                    Highlight on Map →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
