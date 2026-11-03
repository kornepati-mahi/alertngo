import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaShieldAlt,
  FaCheckCircle,
  FaThLarge,
  FaList,
  FaBalanceScale,
  FaHandHoldingHeart,
  FaBuilding,
  FaLock,
  FaFolderOpen,
  FaCopy,
  FaCheck
} from "react-icons/fa";

const ALL_35_POLICIES = [
  {
    id: 1,
    title: "Common Cost Policy",
    category: "Financial & Operational",
    statutoryBasis: "Societies Registration Act 1860 & Multi-Donor Financial Accounting Standards",
    committee: "Board Finance & Logistical Oversight Committee",
    scope: "Standardized equitable cost-sharing framework for multi-donor logistics, vehicle fleet utilization, and central administrative expenses.",
    principles: [
      "Activity-based proportional expense allocation across active grants",
      "Quarterly reconciliation with third-party project audits",
      "Strict ban on double-charging administrative overheads"
    ],
    badge: "Statutory",
    icon: <FaBuilding />
  },
  {
    id: 2,
    title: "Finance Policy",
    category: "Financial & Operational",
    statutoryBasis: "Foreign Contribution Regulation Act (FCRA 2010) & Indian Income Tax Act Sec 12A/80G",
    committee: "Statutory Financial Audit & Internal Control Cell",
    scope: "Statutory fiscal compliance, double-entry ledger bookkeeping, dual-signatory bank controls, and FCRA expenditure regulations.",
    principles: [
      "Dual signatory authorization for transactions exceeding ₹25,000",
      "Mandatory quarterly internal audit & annual statutory CA audit",
      "100% digital electronic fund transfers (NEFT/RTGS/PFMS)"
    ],
    badge: "Statutory",
    icon: <FaLock />
  },
  {
    id: 3,
    title: "HIV/AIDS Workplace Policy",
    category: "Protection & Rights",
    scope: "Strict non-discrimination charter, medical confidentiality, health insurance access, and grassroots sensitization across tribal hamlets.",
    statutoryBasis: "Human Immunodeficiency Virus and Acquired Immune Deficiency Syndrome (Prevention and Control) Act 2017",
    committee: "Employee Health & Community Well-being Cell",
    principles: [
      "Zero tolerance for workplace discrimination or dismissal based on health status",
      "Confidential medical counseling and anti-retroviral treatment assistance",
      "Regular health & hygiene camps across remote Adivasi habitations"
    ],
    badge: "Human Rights",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 4,
    title: "Human Resource Policy",
    category: "Governance & Ethics",
    scope: "Merit-based recruitment, tribal youth employment affirmative action, transparent salary grids, and employee grievance pathways.",
    statutoryBasis: "Employees' Provident Funds & Miscellaneous Provisions Act 1952 & State Labor Codes",
    committee: "Institutional Human Resources & Grievance Council",
    principles: [
      "Affirmative recruitment quota prioritizing local indigenous tribal youth",
      "Transparent annual performance evaluations and skill-upgrade sabbaticals",
      "Equitable health, maternity, and emergency compassionate leave entitlements"
    ],
    badge: "Institutional",
    icon: <FaShieldAlt />
  },
  {
    id: 5,
    title: "Procurement Policy",
    category: "Financial & Operational",
    scope: "Three-quotation competitive tender threshold, vendor vetting, anti-collusion bidding protocols, and physical asset tagging.",
    statutoryBasis: "General Financial Rules (GFR) & Donor Compliance Guidelines",
    committee: "Central Procurement & Purchase Committee",
    principles: [
      "Minimum 3 sealed competitive quotations for all asset purchases > ₹10,000",
      "Mandatory non-relationship affidavit from prospective vendors",
      "Annual physical inventory verification and asset barcode tagging"
    ],
    badge: "Statutory",
    icon: <FaBuilding />
  },
  {
    id: 6,
    title: "ALERT Gender Policy",
    category: "Protection & Rights",
    scope: "50% representation of women in grassroots decision-making, equal remuneration for equal work, and zero toleration of gender disparity.",
    statutoryBasis: "Equal Remuneration Act 1976 & CEDAW International Protocols",
    committee: "Gender Equality & Women Empowerment Council",
    principles: [
      "Minimum 50% women representation across all Gram Sabha executive committees",
      "Zero gender wage gap across field coordinators and administrative staff",
      "Priority leadership grooming for Yenadi & Koya indigenous women"
    ],
    badge: "Human Rights",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 7,
    title: "ALERT Conflict of Interest Policy",
    category: "Governance & Ethics",
    scope: "Mandatory annual disclosures of personal, commercial, or family ties for Governing Body members and senior programmatic staff.",
    statutoryBasis: "Societies Registration Act 1860 & Institutional Ethics Standards",
    committee: "Independent Ethics & Disclosures Tribunal",
    principles: [
      "Annual written declaration of financial or familial interests",
      "Automatic recusal from voting on contracts involving affiliated entities",
      "Immediate disciplinary dismissal for undisclosed pecuniary gains"
    ],
    badge: "Integrity",
    icon: <FaBalanceScale />
  },
  {
    id: 8,
    title: "Children Joyful Learning Policy",
    category: "Protection & Rights",
    scope: "Mother-tongue pedagogy (Koya/Telugu), cultural tribal folk curricula, zero corporal punishment, and inclusive village learning centers.",
    statutoryBasis: "Right to Education Act (RTE 2009) & National Early Childhood Care Framework",
    committee: "Tribal Education & Child Development Directorate",
    principles: [
      "Mother-tongue primary instruction in Koya and local tribal dialects",
      "Strict ban on psychological pressure, humiliation, or physical corporal punishment",
      "Community Gram Sabha oversight of village joyful learning centers"
    ],
    badge: "Child Rights",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 9,
    title: "Sexual Harassment Policy (POSH)",
    category: "Protection & Rights",
    scope: "Full statutory compliance under the POSH Act 2013 with an active, autonomous Internal Complaints Committee (ICC) chaired by senior women leaders.",
    statutoryBasis: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013",
    committee: "Autonomous Internal Complaints Committee (ICC)",
    principles: [
      "Independent ICC chaired by senior external woman jurist / social activist",
      "Confidential 90-day time-bound formal inquiry and protection from retaliation",
      "Mandatory annual POSH sensitization workshops for all field staff"
    ],
    badge: "Mandatory",
    icon: <FaShieldAlt />
  },
  {
    id: 10,
    title: "Environmental Policy",
    category: "Community & Field",
    scope: "Zero ecological footprint in forest sanctuaries, protection of sacred tribal groves (Punya Vanalu), and coastal mangrove regeneration.",
    statutoryBasis: "Biological Diversity Act 2002 & Forest Conservation Rules",
    committee: "Ecological Conservation & Biodiversity Unit",
    principles: [
      "Zero plastic tolerance in all ALERT agency field offices and tribal events",
      "Strict preservation of indigenous sacred groves and rare medicinal herbs",
      "Community-led mangrove regeneration along the Krishna estuary"
    ],
    badge: "Ecological",
    icon: <FaFolderOpen />
  },
  {
    id: 11,
    title: "Health and Safety Policy",
    category: "Community & Field",
    scope: "Mandatory life jackets during Godavari river flood rescue, emergency medical supplies, and anti-venom protocols for agency fieldworkers.",
    statutoryBasis: "Disaster Management Act 2005 & Occupational Safety Norms",
    committee: "Disaster Response & Safety Taskforce",
    principles: [
      "Certified life jackets and GPS satellite beacons for monsoon river travel",
      "Stocked first-aid kits and anti-snake venom vials at all agency field camps",
      "Comprehensive accidental health insurance for all frontline mobilizers"
    ],
    badge: "Field Safety",
    icon: <FaShieldAlt />
  },
  {
    id: 12,
    title: "Code of Ethics and Conduct Policy",
    category: "Governance & Ethics",
    scope: "Highest standards of personal integrity, honesty, respect for indigenous tribal elders, and dedication to grassroots social justice.",
    statutoryBasis: "ALERT Constitutional Bylaws & NGO Code of Public Ethics",
    committee: "Board Ethics & Governance Bench",
    principles: [
      "Unwavering reverence for Adivasi customs, democratic Gram Sabhas, and tribal lore",
      "Zero tolerance for harassment, discrimination, intoxication, or malfeasance",
      "Full transparency in handling community grievances and public petitions"
    ],
    badge: "Integrity",
    icon: <FaBalanceScale />
  },
  {
    id: 13,
    title: "Data Protection and Privacy Policy",
    category: "Governance & Ethics",
    scope: "Secure encryption and anonymization of indigenous household land records, biometric voter surveys, and legal claimant case notes.",
    statutoryBasis: "Digital Personal Data Protection Act 2023 & Indian IT Act 2000",
    committee: "Informatics & Data Governance Cell",
    principles: [
      "End-to-end encrypted storage of land claim genealogies and GPS boundary points",
      "Informed community consent prior to recording any household demographic data",
      "Strict prohibition on selling or sharing beneficiary databases with commercial entities"
    ],
    badge: "Security",
    icon: <FaLock />
  },
  {
    id: 14,
    title: "Social Inclusion Policy",
    category: "Protection & Rights",
    scope: "Special programmatic priority for Particularly Vulnerable Tribal Groups (PVTGs), nomadic Yenadi families, and disabled rural citizens.",
    statutoryBasis: "Article 46 & Fifth Schedule of the Constitution of India",
    committee: "Affirmative Action & Social Inclusion Council",
    principles: [
      "Direct prioritization of Konda Reddi PVTGs and nomadic Yenadi forest dwellers",
      "100% saturation of social security pensions and ration cards for marginalized elders",
      "Democratic inclusion of nomadic women in coastal fisheries federations"
    ],
    badge: "Inclusion",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 15,
    title: "Do No Harm Policy",
    category: "Governance & Ethics",
    scope: "Conflict-sensitive community interaction avoiding local political polarization, cultural disruption, or long-term institutional dependency.",
    statutoryBasis: "International Humanitarian Standards & Core Humanitarian Standard (CHS)",
    committee: "Community Safeguards & Conflict Assessment Unit",
    principles: [
      "Comprehensive socio-cultural risk assessment prior to launching any field project",
      "Non-partisan engagement with local political factions and panchayat bodies",
      "Sustainable capacity transfer ensuring Gram Sabhas become fully self-reliant"
    ],
    badge: "Principle",
    icon: <FaShieldAlt />
  },
  {
    id: 16,
    title: "Anti-Corruption & Anti-Bribery Policy",
    category: "Governance & Ethics",
    scope: "Absolute prohibition on bribes, kickbacks, or gifts to public authorities during land patta processing, RTI follow-ups, or legal representation.",
    statutoryBasis: "Prevention of Corruption Act 1988 & UN Convention against Corruption",
    committee: "Vigilance & Anti-Corruption Bureau",
    principles: [
      "Zero tolerance for facilitating payments, kickbacks, or bureaucratic bribes",
      "Immediate reporting of public extortion attempts to State Vigilance Commission",
      "Strict gift policy: Staff prohibited from accepting personal commercial gifts"
    ],
    badge: "Zero Tolerance",
    icon: <FaBalanceScale />
  },
  {
    id: 17,
    title: "Child Protection & Safeguarding Policy",
    category: "Protection & Rights",
    scope: "Rigorous background checks for staff, strict ban on child labor, abuse reporting hotline, and informed parental consent for media/photos.",
    statutoryBasis: "Protection of Children from Sexual Offences (POCSO Act 2012) & JJ Act",
    committee: "Autonomous Child Protection Cell",
    principles: [
      "Mandatory police verification and child protection signing for all staff/volunteers",
      "Strict ban on individual unmonitored visits with children in remote hamlets",
      "Explicit parental written consent required before capturing photographs or media"
    ],
    badge: "Child Rights",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 18,
    title: "Whistleblower Protection Policy",
    category: "Governance & Ethics",
    scope: "Direct, confidential escalation channel to the Board President with complete statutory protection from retaliation or termination.",
    statutoryBasis: "Whistle Blowers Protection Act 2014 & Corporate Governance Norms",
    committee: "Independent Whistleblower Review Board",
    principles: [
      "Encrypted anonymous email & postal reporting box directly to the President",
      "Guaranteed protection from retaliatory transfers, harassment, or dismissal",
      "Mandatory investigation completed within 30 days of formal report"
    ],
    badge: "Whistleblower",
    icon: <FaShieldAlt />
  },
  {
    id: 19,
    title: "Risk Management Framework",
    category: "Financial & Operational",
    scope: "Comprehensive risk registers evaluating legal challenges, monsoon river flooding contingencies, and regulatory compliance changes.",
    statutoryBasis: "Enterprise Risk Management (ERM) Framework & Disaster Guidelines",
    committee: "Risk Assessment & Audit Steering Group",
    principles: [
      "Biannual review of the Institutional Risk Matrix by the Governing Body",
      "Contingency reserves for sudden natural flood emergencies in Godavari basin",
      "Immediate legal response protocol for unlawful arrests or FIRs against community leaders"
    ],
    badge: "Operational",
    icon: <FaLock />
  },
  {
    id: 20,
    title: "Livelihood Cooperative Governance Policy",
    category: "Community & Field",
    scope: "Democratic rules for Matsya Mithra Women Fisheries collectives and NTFP cooperative societies ensuring 100% member dividend return.",
    statutoryBasis: "Andhra Pradesh Mutually Aided Cooperative Societies (MACS) Act 1995",
    committee: "Cooperative Enterprise Development Directorate",
    principles: [
      "100% member ownership with one-member-one-vote cooperative democracy",
      "Transparent annual dividend distribution directly into tribal women's bank accounts",
      "Revolving micro-credit fund capped at statutory non-usurious interest rates"
    ],
    badge: "Cooperative",
    icon: <FaBuilding />
  },
  {
    id: 21,
    title: "Disability Rights & Universal Accessibility",
    category: "Protection & Rights",
    scope: "Physical ramp accessibility, assistive hearing/mobility aid distribution, and affirmative employment quotas for persons with disabilities.",
    statutoryBasis: "Rights of Persons with Disabilities (RPwD) Act 2016",
    committee: "Disability Inclusion & Equal Opportunities Wing",
    principles: [
      "Universal design ramps and accessible facilities across all ALERT centers",
      "Active identification and pension saturation for disabled indigenous citizens",
      "Specialized legal counseling for land entitlement protection of disabled persons"
    ],
    badge: "Inclusion",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 22,
    title: "Forest Rights Advocacy Ethics Policy",
    category: "Community & Field",
    scope: "Uncompromising loyalty to Gram Sabha decisions under RoFR 2006, free legal counseling, and refusal of commercial compensation cuts.",
    statutoryBasis: "Scheduled Tribes and Other Traditional Forest Dwellers (FRA 2006)",
    committee: "Forest Rights Legal Cell & Paralegal Directorate",
    principles: [
      "Complete refusal of any contingency fee or cut from land compensation awards",
      "Exclusively pro-bono paralegal and high court legal representation for Gram Sabhas",
      "Respect for traditional village boundary demarcation using participatory GPS mapping"
    ],
    badge: "Legal Aid",
    icon: <FaBalanceScale />
  },
  {
    id: 23,
    title: "Polavaram Displacement Assistance Protocol",
    category: "Community & Field",
    scope: "Statutory monitoring of RFCTLARR Act 2013 entitlements: house-for-house, land-for-land, and one-time rehabilitation grant compliance.",
    statutoryBasis: "Right to Fair Compensation and Transparency in Land Acquisition (RFCTLARR 2013)",
    committee: "Polavaram Rehabilitation Monitoring Council",
    principles: [
      "Independent social audit of 371 submerged villages against official R&R packages",
      "Enforcing the mandatory land-for-land compensation clause for displaced tribals",
      "Monitoring construction quality and civil amenities at resettlement colonies"
    ],
    badge: "Statutory",
    icon: <FaShieldAlt />
  },
  {
    id: 24,
    title: "Field Disaster Response Protocol",
    category: "Community & Field",
    scope: "Standard Operating Procedures for annual Godavari flood rescue, supply drops, boat logistics, and rapid health emergency response.",
    statutoryBasis: "National Disaster Management Authority (NDMA) Guidelines",
    committee: "Emergency Flood Relief Operational Cell",
    principles: [
      "Rapid deployment within 6 hours of flood warning across Godavari Agency tracts",
      "Pre-positioned motorboats and dry food rations in flood-prone cut-off hamlets",
      "Transparent beneficiary manifests verified and signed by local Gram Sabhas"
    ],
    badge: "Emergency",
    icon: <FaFolderOpen />
  },
  {
    id: 25,
    title: "Legal Aid & RTI Proactive Disclosure",
    category: "Community & Field",
    scope: "Drafting pro-bono High Court and Supreme Court writ petitions, public information requests under RTI Act 2005, and legal literacy camps.",
    statutoryBasis: "Right to Information Act 2005 & Legal Services Authorities Act 1987",
    committee: "Public Interest Litigation & RTI Cell",
    principles: [
      "Free drafting of RTI applications and first/second appeals for illiterate tribals",
      "Proactive public dissemination of government circulars on tribal entitlements",
      "Paralegal training for tribal youth to independently file village claims"
    ],
    badge: "Justice",
    icon: <FaBalanceScale />
  },
  {
    id: 26,
    title: "Board & Executive Succession Policy",
    category: "Governance & Ethics",
    scope: "Democratic 3-year board election cycles, term limits, leadership grooming pipeline, and grass-roots tribal leader induction.",
    statutoryBasis: "ALERT Registered Constitution & Society Rules",
    committee: "Nomination & Board Governance Council",
    principles: [
      "Democratic 3-year election cycles with secret ballot if contested",
      "Mandatory representation of indigenous women on the Governing Body",
      "Continuous youth leadership mentorship to ensure generational continuity"
    ],
    badge: "Democracy",
    icon: <FaBuilding />
  },
  {
    id: 27,
    title: "Donor Accountability & Transparency Charter",
    category: "Financial & Operational",
    scope: "Unrestricted access to project accounts, milestone audits by independent chartered accountants, and public annual expenditure disclosures.",
    statutoryBasis: "Credibility Alliance Minimum Norms & FCRA Statutory Standards",
    committee: "Audit & Donor Accountability Bench",
    principles: [
      "Public publishing of audited balance sheets, utilization certificates, and FCRA filings",
      "Open-door policy for institutional donors conducting field verification visits",
      "Zero diversion of dedicated project funds to unauthorized overheads"
    ],
    badge: "Transparency",
    icon: <FaLock />
  },
  {
    id: 28,
    title: "Volunteer & Intern Professional Code",
    category: "Governance & Ethics",
    scope: "Cultural sensitivity guidelines for university researchers and volunteers working inside Fifth Scheduled Adivasi habitations.",
    statutoryBasis: "ALERT Field Research Ethics Guidelines",
    committee: "Volunteer Coordination & Cultural Ethics Unit",
    principles: [
      "Mandatory cultural orientation before entering sensitive tribal agency areas",
      "Strict ban on commercializing indigenous photographs or traditional knowledge",
      "Mandatory debriefing and sharing of research findings with the community Gram Sabha"
    ],
    badge: "Field Conduct",
    icon: <FaShieldAlt />
  },
  {
    id: 29,
    title: "Coastal Marine & Mangrove Stewardship",
    category: "Community & Field",
    scope: "Banning destructive fine-mesh estuarine trawling, safeguarding fish breeding zones, and planting mangrove tidal barriers.",
    statutoryBasis: "Coastal Regulation Zone (CRZ) Notification & Wildlife Protection Act",
    committee: "Marine Ecosystem & Coastal Livelihoods Wing",
    principles: [
      "Community ban on juvenile crab and shrimp seed poaching in mangrove roots",
      "Planting 50,000+ Rhizophora mangrove seedlings along tidal estuaries annually",
      "Artisanal fisherwomen empowerment through non-destructive sustainable gear"
    ],
    badge: "Ecology",
    icon: <FaFolderOpen />
  },
  {
    id: 30,
    title: "Indigenous Knowledge & Heritage Protocol",
    category: "Community & Field",
    scope: "Protecting tribal traditional medicinal herb knowledge and oral folklore against unauthorized commercial biopiracy.",
    statutoryBasis: "Biological Diversity Act 2002 & Traditional Knowledge Digital Library (TKDL)",
    committee: "Indigenous Heritage & Ethnobotany Cell",
    principles: [
      "Documentation of herbal medicine exclusively with prior informed Gram Sabha consent",
      "Zero transfer of indigenous botanical recipes to commercial pharmaceutical firms",
      "Community ownership of traditional folklore, songs, and cultural biodiversity"
    ],
    badge: "Heritage",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 31,
    title: "Information Disclosure Charter",
    category: "Financial & Operational",
    scope: "Mandatory public hosting of ALERT Society Registration, 12A, 80G, FCRA certificates, and annual audited balances on the web portal.",
    statutoryBasis: "Voluntary Guidelines on Transparency & Public Record Act",
    committee: "Public Information Disclosure Desk",
    principles: [
      "All statutory registration certificates freely downloadable by the general public",
      "Annual audited reports archived and publicly accessible for 20 continuous years",
      "Transparent disclosure of board member identities, tenures, and affiliations"
    ],
    badge: "Public Record",
    icon: <FaLock />
  },
  {
    id: 32,
    title: "Grievance Redressal Mechanism Policy",
    category: "Governance & Ethics",
    scope: "Guaranteed 15-day resolution pathway for community complaints, village petitions, worker grievances, and institutional feedback.",
    statutoryBasis: "Public Grievance Redressal Standards & CHS Alliance Norms",
    committee: "Ombudsperson & Grievance Redressal Committee",
    principles: [
      "Time-bound 15-day mandatory written resolution for all lodged grievances",
      "Confidential toll-free helpline and physical drop-boxes at agency field camps",
      "Right of direct appeal to the Board President if resolution is unsatisfactory"
    ],
    badge: "Accountability",
    icon: <FaBalanceScale />
  },
  {
    id: 33,
    title: "Travel, Logistics & Field Per Diem Policy",
    category: "Financial & Operational",
    scope: "Standardized rural travel mileage reimbursements, hazardous country-boat crossing allowances, and transparent receipt settlement.",
    statutoryBasis: "ALERT Operational Financial Manual",
    committee: "Administrative & Field Logistics Desk",
    principles: [
      "Standard mileage per diem based on prevailing state transport rates",
      "Special hazard allowance for difficult monsoon boat journeys across flooded rivers",
      "Zero cash disbursements without digital or physical verified vouchers"
    ],
    badge: "Operational",
    icon: <FaBuilding />
  },
  {
    id: 34,
    title: "Asset & Depreciation Control Policy",
    category: "Financial & Operational",
    scope: "Physical inventory barcode verification, annual depreciation calculations, and environmentally safe e-waste disposal protocols.",
    statutoryBasis: "Accounting Standard (AS) 10 on Property, Plant and Equipment",
    committee: "Asset Management & Verification Board",
    principles: [
      "Unique identification barcode on all computers, vehicles, and office assets",
      "Standard straight-line depreciation calculated annually by statutory auditors",
      "Safe, environmentally certified e-waste recycling of obsolete hardware"
    ],
    badge: "Asset Control",
    icon: <FaBuilding />
  },
  {
    id: 35,
    title: "Monitoring, Evaluation & Learning (MEL)",
    category: "Financial & Operational",
    scope: "Quantitative and qualitative outcome harvesting, longitudinal beneficiary surveys, and peer-reviewed programmatic impact assessments.",
    statutoryBasis: "Results-Based Management (RBM) & Logical Framework Analysis (LFA)",
    committee: "Monitoring, Evaluation & Impact Research Cell",
    principles: [
      "Longitudinal impact surveys measuring tribal household income and land security",
      "Quarterly milestone tracking against board-approved multi-year strategic plans",
      "Participatory rural appraisal (PRA) with Gram Sabhas to validate project outcomes"
    ],
    badge: "MEL Framework",
    icon: <FaLock />
  }
];

export default function PoliciesDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'table'
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    "All",
    "Governance & Ethics",
    "Protection & Rights",
    "Financial & Operational",
    "Community & Field"
  ];

  const filtered = ALL_35_POLICIES.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.scope.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.statutoryBasis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(p.id).includes(searchTerm);
    return matchesCat && matchesSearch;
  });

  const handleCopyCitation = (policy) => {
    const text = `ALERT Institutional Policy #${policy.id}: ${policy.title} - Statutory Basis: ${policy.statutoryBasis}. Scope: ${policy.scope}`;
    navigator.clipboard.writeText(text);
    setCopiedId(policy.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* HEADER CARD */}
      <div style={{ background: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: 20, boxShadow: "var(--shadow-sm)", border: "1px solid #e2e8f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span className="badge" style={{ background: "rgba(255, 137, 0, 0.12)", color: "var(--color-primary)", fontWeight: 700 }}>
                Interactive Compliance Portal
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>
                Certified by ALERT Governing Body
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--color-dark)", margin: 0 }}>
              The 35 Institutional Governance Policies
            </h3>
            <p style={{ color: "var(--color-text-light)", marginTop: 8, fontSize: "0.95rem", maxWidth: 760, lineHeight: 1.6 }}>
              ALERT operations are strictly governed by 35 formalized statutory charters ensuring democratic transparency, child protection, financial accountability, and indigenous community rights.
            </p>
          </div>

          <div style={{ background: "#f0fdf4", border: "1px solid #86efac", padding: "10px 16px", borderRadius: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <FaCheckCircle style={{ color: "#16a34a", fontSize: "1.2rem" }} />
            <div>
              <div style={{ fontSize: "0.84rem", fontWeight: 800, color: "#166534" }}>100% Ratified & Audited</div>
              <div style={{ fontSize: "0.75rem", color: "#15803d" }}>Active Statutory Compliance</div>
            </div>
          </div>
        </div>

        {/* METRICS STRIP */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginTop: 24 }}>
          {[
            { label: "Active Policies", val: "35 / 35", color: "#10b981" },
            { label: "POSH Compliant", val: "100%", color: "var(--color-primary)" },
            { label: "Audited Charters", val: "Certified", color: "#8b5cf6" },
            { label: "Regulatory Status", val: "12A • 80G • FCRA", color: "#0ea5e9" },
          ].map((item, idx) => (
            <div key={idx} style={{ background: "#f8fafc", padding: "12px 16px", borderRadius: 12, border: "1px solid #f1f5f9" }}>
              <div style={{ fontSize: "0.76rem", color: "#64748b", textTransform: "uppercase", fontWeight: 700 }}>{item.label}</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: item.color, marginTop: 2 }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SEARCH & FILTERS BAR */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        {/* CATEGORY PILLS */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                fontSize: "0.84rem",
                fontWeight: 600,
                cursor: "pointer",
                border: selectedCategory === cat ? "none" : "1px solid #cbd5e1",
                background: selectedCategory === cat ? "var(--color-primary)" : "white",
                color: selectedCategory === cat ? "white" : "var(--color-dark)",
                boxShadow: selectedCategory === cat ? "0 4px 12px rgba(255,137,0,0.3)" : "none",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CONTROLS RIGHT: SEARCH & VIEW SWITCH */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <div style={{ position: "relative", minWidth: 240 }}>
            <input
              type="text"
              placeholder="Search policies (e.g. POSH, Finance)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

          <div style={{ display: "inline-flex", background: "white", padding: 3, borderRadius: 20, border: "1px solid #cbd5e1" }}>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              title="Card Grid View"
              style={{
                border: "none",
                padding: "6px 12px",
                borderRadius: 16,
                background: viewMode === "grid" ? "var(--color-dark)" : "transparent",
                color: viewMode === "grid" ? "white" : "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: "0.8rem",
                fontWeight: 600
              }}
            >
              <FaThLarge size={12} /> Grid
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              title="Table View"
              style={{
                border: "none",
                padding: "6px 12px",
                borderRadius: 16,
                background: viewMode === "table" ? "var(--color-dark)" : "transparent",
                color: viewMode === "table" ? "white" : "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: "0.8rem",
                fontWeight: 600
              }}
            >
              <FaList size={12} /> Table
            </button>
          </div>
        </div>
      </div>

      {/* RESULTS COUNT & HINT */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "#64748b" }}>
        <span>Showing {filtered.length} of {ALL_35_POLICIES.length} policies certified under ALERT Society Registration</span>
        <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>💡 Click any card for statutory dossier</span>
      </div>

      {/* VIEW: GRID MODE */}
      {viewMode === "grid" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
          {filtered.map((policy) => (
            <motion.div
              key={policy.id}
              whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedPolicy(policy)}
              style={{
                background: "white",
                borderRadius: 16,
                padding: 22,
                boxShadow: "var(--shadow-sm)",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span
                    style={{
                      background: "rgba(255, 137, 0, 0.1)",
                      color: "var(--color-primary)",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      padding: "4px 10px",
                      borderRadius: 12
                    }}
                  >
                    #{String(policy.id).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      borderRadius: 8,
                      background: "#f1f5f9",
                      color: "#475569"
                    }}
                  >
                    {policy.category}
                  </span>
                </div>

                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.18rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: 8, lineHeight: 1.35 }}>
                  {policy.title}
                </h4>

                <p style={{ fontSize: "0.87rem", color: "var(--color-text-light)", lineHeight: 1.6, margin: 0 }}>
                  {policy.scope}
                </p>
              </div>

              <div style={{ marginTop: 18, paddingTop: 12, borderTop: "1px dashed #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.76rem", color: "#10b981", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <FaCheckCircle size={11} /> {policy.badge}
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--color-primary)", fontWeight: 700 }}>
                  Inspect Dossier →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* VIEW: TABLE MODE */}
      {viewMode === "table" && (
        <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-sm)", border: "1px solid #e2e8f0" }}>
          <div className="table-responsive">
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.88rem" }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                  <th style={{ padding: "14px 18px", width: 70, fontWeight: 700, color: "var(--color-dark)" }}>S.No</th>
                  <th style={{ padding: "14px 18px", width: 260, fontWeight: 700, color: "var(--color-dark)" }}>Policy Name</th>
                  <th style={{ padding: "14px 18px", width: 180, fontWeight: 700, color: "var(--color-dark)" }}>Category</th>
                  <th style={{ padding: "14px 18px", fontWeight: 700, color: "var(--color-dark)" }}>Scope & Purpose</th>
                  <th style={{ padding: "14px 18px", width: 140, fontWeight: 700, color: "var(--color-dark)" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, idx) => (
                  <tr
                    key={p.id}
                    onClick={() => setSelectedPolicy(p)}
                    style={{
                      borderBottom: "1px solid #f1f5f9",
                      background: idx % 2 === 0 ? "white" : "#fafafa",
                      cursor: "pointer",
                      transition: "background 0.15s ease"
                    }}
                  >
                    <td style={{ padding: "12px 18px", fontWeight: 700, color: "var(--color-primary)" }}>
                      #{String(p.id).padStart(2, "0")}
                    </td>
                    <td style={{ padding: "12px 18px", fontWeight: 700, color: "var(--color-dark)" }}>
                      {p.title}
                    </td>
                    <td style={{ padding: "12px 18px" }}>
                      <span style={{ fontSize: "0.76rem", padding: "3px 8px", borderRadius: 8, background: "#f1f5f9", color: "#475569", fontWeight: 600 }}>
                        {p.category}
                      </span>
                    </td>
                    <td style={{ padding: "12px 18px", color: "var(--color-text-light)", lineHeight: 1.5 }}>
                      {p.scope}
                    </td>
                    <td style={{ padding: "12px 18px" }}>
                      <button
                        type="button"
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--color-primary)",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          cursor: "pointer"
                        }}
                      >
                        Inspect →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* STATUTORY POLICY DOSSIER INTERACTIVE MODAL */}
      <AnimatePresence>
        {selectedPolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPolicy(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.8)",
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
                maxWidth: 620,
                width: "100%",
                padding: "clamp(20px, 4vw, 32px)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.3)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ background: "rgba(255, 137, 0, 0.12)", color: "var(--color-primary)", fontWeight: 800, padding: "4px 10px", borderRadius: 10, fontSize: "0.85rem" }}>
                    Policy #{String(selectedPolicy.id).padStart(2, "0")}
                  </span>
                  <span style={{ background: "#f1f5f9", color: "#475569", fontWeight: 700, padding: "4px 10px", borderRadius: 10, fontSize: "0.78rem" }}>
                    {selectedPolicy.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPolicy(null)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: "1.3rem" }}
                >
                  ✕
                </button>
              </div>

              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.45rem", color: "var(--color-dark)", marginBottom: 10 }}>
                {selectedPolicy.title}
              </h4>

              {/* STATUTORY LEGAL BASIS */}
              <div style={{ background: "#f8fafc", padding: "12px 16px", borderRadius: 12, borderLeft: "4px solid var(--color-primary)", marginBottom: 18 }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
                  Enacted Statutory Legal Basis
                </div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--color-dark)", marginTop: 2 }}>
                  {selectedPolicy.statutoryBasis}
                </div>
              </div>

              {/* COMMITTEE */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: 4 }}>
                  Enforcing Authority / Committee:
                </div>
                <div style={{ fontSize: "0.88rem", color: "#1e3a8a", fontWeight: 700 }}>
                  {selectedPolicy.committee}
                </div>
              </div>

              {/* SCOPE */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: 4 }}>
                  Scope & Application:
                </div>
                <p style={{ fontSize: "0.92rem", color: "var(--color-text)", lineHeight: 1.6, margin: 0 }}>
                  {selectedPolicy.scope}
                </p>
              </div>

              {/* PRINCIPLES */}
              {selectedPolicy.principles && (
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: 8 }}>
                    Core Enforceable Principles:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {selectedPolicy.principles.map((pr, pIdx) => (
                      <div key={pIdx} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.86rem", color: "#334155" }}>
                        <FaCheckCircle style={{ color: "#10b981", marginTop: 3, flexShrink: 0 }} size={12} />
                        <span>{pr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTIONS */}
              <div style={{ display: "flex", gap: 10, paddingTop: 16, borderTop: "1px solid #e2e8f0" }}>
                <button
                  type="button"
                  onClick={() => handleCopyCitation(selectedPolicy)}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", padding: "10px 0", fontSize: "0.88rem" }}
                >
                  {copiedId === selectedPolicy.id ? (
                    <>
                      <FaCheck /> Citation Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy /> Copy Policy Citation
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPolicy(null)}
                  className="btn-outline"
                  style={{ padding: "10px 20px", fontSize: "0.88rem" }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
