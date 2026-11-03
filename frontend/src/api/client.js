const API_BASE = "http://127.0.0.1:8001";
const TIMEOUT_MS = 1200;

// The full 90-page fallback dataset is ~178 kB; keep it out of the landing bundle
// and only fetch it as its own chunk when a content route actually needs it.
const loadFallbackPages = () => import("../data/all_site_pages.json").then((m) => m.default);

/**
 * Universal safe GET fetcher with timeout and immediate fallback.
 * Uses native fetch — no extra HTTP library in the bundle.
 */
async function safeGet(endpoint, fallbackData) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}/${endpoint}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      const payload = await res.json();
      if (payload && payload.success && payload.data) {
        return { data: payload.data, source: "api", success: true };
      }
    }
  } catch (err) {
    // Graceful fallback to compiled data
  } finally {
    clearTimeout(timer);
  }
  return { data: fallbackData, source: "local", success: true };
}

// 1. STATS
export const defaultStats = [
  { metric_key: "acres_secured", metric_label: "Acres Forest Rights Secured", metric_value: 15000, suffix: "+" },
  { metric_key: "tribal_families", metric_label: "Adivasi Families Supported", metric_value: 25000, suffix: "+" },
  { metric_key: "polavaram_villages", metric_label: "Submergence Villages Monitored", metric_value: 371, suffix: "" },
  { metric_key: "solar_hamlets", metric_label: "Off-Grid Solar Hamlets Energized", metric_value: 75, suffix: "+" },
  { metric_key: "women_fisheries", metric_label: "Yenadi Women in Cooperatives", metric_value: 3500, suffix: "+" },
  { metric_key: "flood_relief", metric_label: "Families Emergency Relieved", metric_value: 4200, suffix: "+" }
];

export async function fetchImpactStats() {
  return safeGet("get_stats.php", defaultStats);
}

// 1b. FLASH NEWS (topbar scrolling announcements)
export const defaultFlashNews = [
  { id: 0, message: "Welcome to ALERT — latest announcements and field updates appear here." }
];

export async function fetchFlashNews() {
  return safeGet("get_flash_news.php", defaultFlashNews);
}

// 1c. ADMIN - FLASH NEWS CRUD (requires ADMIN_KEY from backend/.env)
const ADMIN_TIMEOUT_MS = 8000;

async function adminRequest(method, key, data) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ADMIN_TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}/admin_flash_news.php`, {
      method: method.toUpperCase(),
      headers: {
        "X-Admin-Key": key,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
      signal: controller.signal,
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      const wrapped = new Error(payload.message || `Request failed (${res.status})`);
      wrapped.status = res.status;
      throw wrapped;
    }
    return payload;
  } catch (err) {
    if (err.status !== undefined) throw err;
    const wrapped = new Error(err.name === "AbortError" ? "Request timed out" : err.message || "Request failed");
    wrapped.status = 0;
    throw wrapped;
  } finally {
    clearTimeout(timer);
  }
}

export const adminListFlashNews = (key) => adminRequest("get", key);
export const adminCreateFlashNews = (key, payload) => adminRequest("post", key, payload);
export const adminUpdateFlashNews = (key, payload) => adminRequest("put", key, payload);
export const adminDeleteFlashNews = (key, id) => adminRequest("delete", key, { id });

// 2. ALL 90 PAGES
export async function fetchAllPages(category = null) {
  const fallbackPages = await loadFallbackPages();
  const localList = Object.values(fallbackPages).map(p => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    tables_count: p.tables ? p.tables.length : 0,
    images_count: p.images ? p.images.length : 0,
    downloads_count: p.downloads ? p.downloads.length : 0,
    url: p.url,
    excerpt: p.paragraphs && p.paragraphs.length > 0 ? p.paragraphs[0].slice(0, 160) + "..." : ""
  }));

  const url = category ? `get_pages.php?category=${encodeURIComponent(category)}` : "get_pages.php";
  const result = await safeGet(url, localList);
  return result;
}

// 3. SINGLE PAGE DETAIL
export async function fetchPageBySlug(slug) {
  const fallbackPages = await loadFallbackPages();
  const cleanSlug = (slug || "").toLowerCase().trim();
  const localPage = fallbackPages[cleanSlug] ||
    Object.values(fallbackPages).find(p => (p.slug || "").toLowerCase() === cleanSlug) ||
    null;

  const result = await safeGet(`get_page.php?slug=${encodeURIComponent(cleanSlug)}`, localPage);
  return result;
}

// 4. GALLERY
export const defaultGallery = [
  { src: "/uploads/reel-1-dhimsa.mp4", poster: "/uploads/reel-1-dhimsa.jpg", type: "video", duration: "0:08", title: "Dhimsa Dance at a Community Gathering", cat: "Community" },
  { src: "/uploads/reel-2-learning.mp4", poster: "/uploads/reel-2-learning.jpg", type: "video", duration: "0:08", title: "Digital Learning Reaches Agency Schools", cat: "Education" },
  { src: "/uploads/reel-3-school-kits.mp4", poster: "/uploads/reel-3-school-kits.jpg", type: "video", duration: "0:08", title: "School Kits for Children in Hill Villages", cat: "Education" },
  { src: "/uploads/reel-4-women.mp4", poster: "/uploads/reel-4-women.jpg", type: "video", duration: "0:08", title: "Yenadi Women's Federation Convention", cat: "Women" },
  { src: "/uploads/PHOTO-2023-02-15-19-20-55_1.jpg", title: "Adivasi Community Meeting & Rights Dialogue", cat: "Community" },
  { src: "/uploads/PHOTO-2023-02-15-19-20-56_2-1.jpg", title: "Gram Sabha Forest Rights Documentation", cat: "Forest Rights" },
  { src: "/uploads/PHOTO-2023-02-15-19-20-52_1.jpg", title: "Tribal Elders Council Resolution", cat: "Community" },
  { src: "/uploads/PHOTO-2023-02-15-19-20-56.jpg", title: "Field Survey in Polavaram Basin", cat: "Field Work" },
  { src: "/uploads/PHOTO-2023-02-15-19-21-00_1.jpg", title: "Women Livelihood Group Discussion", cat: "Women" },
  { src: "/uploads/laptop1.jpeg", title: "Digital Literacy & Youth Skill Training", cat: "Education" },
  { src: "/uploads/lp.jpeg", title: "Computer Lab & Online Grievance Filing", cat: "Education" },
  { src: "/uploads/lp2.jpeg", title: "Youth Community Informatics Workshop", cat: "Education" },
  { src: "/uploads/l-1.jpg", title: "Ashram School Children Digital Education", cat: "Education" },
  { src: "/uploads/lp3.jpeg", title: "Skill Certification in Tribal Mandal", cat: "Education" },
  { src: "/uploads/DR.png", title: "Disaster Relief Operations & Provisioning", cat: "Relief" },
  { src: "/uploads/DR2.png", title: "Essential Food Ration Distribution", cat: "Relief" },
  { src: "/uploads/FR.png", title: "Flood Water Rescue & Hamlets Support", cat: "Relief" },
  { src: "/uploads/PL.png", title: "Polavaram Resettlement Colony Inspection", cat: "Field Work" },
  { src: "/uploads/fire1-1.jpg", title: "Solar Micro-Grid & Lantern Commissioning", cat: "Energy" },
  { src: "/uploads/fire3-1.jpg", title: "Solar Street Pole Erection Drive", cat: "Energy" },
  { src: "/uploads/firee-1.jpg", title: "Evening Lighting in Off-Grid Hamlet", cat: "Energy" },
  { src: "/uploads/fire4-1.jpg", title: "Clean Energy Transition Workshop", cat: "Energy" },
  { src: "/uploads/fire5-1.jpg", title: "Community Solar Battery Maintenance", cat: "Energy" },
  { src: "/uploads/fire6-1.jpg", title: "Renewable Energy Celebration in Tribal Village", cat: "Energy" },
  { src: "/uploads/WhatsApp-Image-2021-08-19-at-6.48.06-PM-1024x768.jpeg", title: "Flood Affected Families Evacuation Base", cat: "Relief" },
  { src: "/uploads/WhatsApp-Image-2021-08-23-at-11.23.52-AM-1024x768.jpeg", title: "Emergency Medical Kit Handover", cat: "Relief" },
  { src: "/uploads/PHOTO-2022-10-20-17-25-29-2.jpg", title: "Relief Boat Launch in Godavari Basin", cat: "Relief" },
  { src: "/uploads/PHOTO-2022-10-20-17-25-30.jpg", title: "Dry Provisions Distribution in Cut-Off Village", cat: "Relief" },
  { src: "/uploads/The-formation-Meeting-of-Yanadi-Girijana-Women-fisheries-COOP-at-Machilipatnam-mandal-in-Krishna-District-150x150.jpg", title: "Yanadi Girijana Women Fisheries Cooperative Formation", cat: "Women" },
  { src: "/uploads/Children-reieved-shoes-1.jpg", title: "Tribal Ashram School Children Footwear & Education Drive", cat: "Education" },
  { src: "/uploads/Love-then-Serve.jpg", title: "Love Then Serve: Community Elders Convocation", cat: "Community" },
  { src: "/uploads/Kotarugommu-18-9-21-1-rotated-1-1024x461-640x480.jpeg", title: "Kotarugommu Flood Relief Field Intervention", cat: "Relief" },
  { src: "/uploads/ramavarampadu_11-08-2021-1024x461-640x480.jpeg", title: "Ramavarampadu Emergency Provisioning Camp", cat: "Relief" },
  { src: "/uploads/WhatsApp-Image-2021-09-16-at-7.50.55-PM-1024x461.jpeg", title: "Decentralized Solar System Testing in Habitation", cat: "Energy" },
  { src: "/uploads/all2023.jpeg", title: "Godavari Flood Relief Unified Operation Base", cat: "Relief" }
];

export async function fetchGallery() {
  return safeGet("get_gallery.php", defaultGallery);
}

// 5. DOWNLOADS
export const defaultDownloads = [
    {
      category: "acts",
      title: "RFCTLARR Act 2013 - Schedule 1 (Compensation)",
      file: "/uploads/schedule-1.pdf",
      meta: "Central Bare Act • LA Act 2013",
      desc: "Statutory multi-factor valuation formula for rural tribal lands and mandatory 100% solatium allowance.",
      fileSize: "Official PDF"
    },
    {
      category: "acts",
      title: "RFCTLARR Act 2013 - Schedule 2 (R&R Entitlements)",
      file: "/uploads/schedule-2.pdf",
      meta: "Central Bare Act • LA Act 2013",
      desc: "Mandatory house allotment, subsistence monthly grants, cattle shed allowances, and shifting grants for displaced families.",
      fileSize: "Official PDF"
    },
    {
      category: "acts",
      title: "RFCTLARR Act 2013 - Schedule 3 (25 Colony Amenities)",
      file: "/uploads/schedules-3-1.pdf",
      meta: "Central Bare Act • LA Act 2013",
      desc: "List of 25 mandatory public infrastructural amenities required in every resettlement colony before displacement.",
      fileSize: "Official PDF"
    },
    {
      category: "acts",
      title: "Key Critical Issues of Polavaram Project (PIP Brief)",
      file: "/uploads/Seperated-Polavaram-issues-4.pdf",
      meta: "ALERT Legal & Policy Cell",
      desc: "Analytical policy brief on submergence contour errors, youth package exclusions, and rehabilitation colony infrastructure.",
      fileSize: "Official PDF (80 KB)"
    },
    {
      category: "court",
      title: "High Court Cases: East Godavari District",
      file: "/uploads/High-court-Cases_EG-1.pdf",
      meta: "High Court of Andhra Pradesh",
      desc: "Record of writ petitions and court orders defending Adivasi forest rights and fair land valuation in East Godavari.",
      fileSize: "Official PDF"
    },
    {
      category: "court",
      title: "Pending High Court Cases: West Godavari District",
      file: "/uploads/Pending-High-court-cases_WG.pdf",
      meta: "High Court of Andhra Pradesh",
      desc: "Compiled list of pending litigation regarding adult youth entitlement packages and resettlement colony allotments.",
      fileSize: "Official PDF"
    },
    {
      category: "court",
      title: "Cases @ R&R Commissioner Office, Vijayawada",
      file: "/uploads/RR-commissioner-office_Court-Cases.pdf",
      meta: "Commissioner of R&R, Polavaram",
      desc: "Appeals filed by ALERT caseworkers representing families excluded from draft award declarations.",
      fileSize: "Official PDF"
    },
    {
      category: "court",
      title: "RTI Disclosures: LA & RR Authority Court",
      file: "/uploads/RTI-Data-LA-RR-Court.pdf",
      meta: "RTI Official Disclosures",
      desc: "Comprehensive RTI records regarding land acquisition award enquiries and compensation disbursement tracking.",
      fileSize: "Official PDF"
    },
    {
      category: "court",
      title: "Compendium of Judgements on Forest Rights Act (2007–2015)",
      file: "/uploads/Compendum-of-Judgements-on-FRA-2007-2015.pdf",
      meta: "ALERT Legal Cell Compilation",
      desc: "Landmark High Court and Supreme Court judgements affirming tribal land tenure under the Forest Rights Act 2006.",
      fileSize: "Official PDF"
    },
    {
      category: "court",
      title: "Land Acquisition & Structural Award Copies",
      file: "/uploads/AWARD-COPIES-1.pdf",
      meta: "Official Revenue Awards",
      desc: "Certified award copies issued by Special Land Acquisition Officers (SLAOs) in the Polavaram submergence basin.",
      fileSize: "Official PDF"
    },
    {
      category: "faqs",
      title: "Frequently Asked Questions on LARR Act 2013",
      file: "/uploads/FAQ-LARR.pdf",
      meta: "Government of India Guidelines",
      desc: "Comprehensive FAQ explaining land acquisition procedures, SIA studies, consent norms, and award calculations.",
      fileSize: "Official PDF"
    },
    {
      category: "faqs",
      title: "R&R Grievance Redressal FAQs & Procedures",
      file: "/uploads/GREIVANCE-FAQ.pdf",
      meta: "ALERT Community Handbook",
      desc: "Practical handbook on lodging grievances, appeal procedures before SDC, and entitlement claims under Polavaram.",
      fileSize: "Official PDF"
    },
    {
      category: "faqs",
      title: "Ministry of Tribal Affairs (MoTA) RoFR Guidelines FAQ",
      file: "/uploads/MoTA_FAQ.pdf",
      meta: "Ministry of Tribal Affairs",
      desc: "Official clarifications on Individual Forest Rights (IFR), Community Rights (CFR), and Gram Sabha powers.",
      fileSize: "Official PDF"
    },
    {
      category: "faqs",
      title: "MGNREGA Operational Guidelines & Rights in Tribal Areas",
      file: "/uploads/MGNREGA_GUIDELINES.pdf",
      meta: "Ministry of Rural Development",
      desc: "Statutory operational guidelines for employment guarantee, watershed development, and land leveling in Scheduled areas.",
      fileSize: "Official PDF"
    },
    {
      category: "faqs",
      title: "MGNREGA Frequently Asked Questions",
      file: "/uploads/NREGA_FAQ.pdf",
      meta: "Rural Employment Cell",
      desc: "Answers to wage payments, job card applications, and unemployment allowances for tribal workers.",
      fileSize: "Official PDF"
    },
    {
      category: "faqs",
      title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) FAQ",
      file: "/uploads/PMKSY_FAQ.pdf",
      meta: "Ministry of Agriculture & Farmers Welfare",
      desc: "Guidelines on micro-irrigation subsidies, check dams, and water harvesting structures for smallholder farmers.",
      fileSize: "Official PDF"
    },
    {
      category: "reports",
      title: "Organizational Profile & 20-Year Report of ALERT",
      file: "/uploads/Organizational-Profile-of-ALERT.pdf",
      meta: "ALERT Official Profile",
      desc: "Official organizational profile, registration documents (307/2004), 12A & 80G certificates, and 20-year achievements summary.",
      fileSize: "Official PDF"
    },
    {
      category: "reports",
      title: "ALERT Annual Report (April 2020 – March 2021)",
      file: "/uploads/ALERT_Annual-report-from-April-2020-to-March-2021-1.pdf",
      meta: "ALERT Audited Annual Report",
      desc: "Audited operational and financial report detailing field interventions, COVID-19 tribal relief, RoFR claims, and women's cooperatives.",
      fileSize: "Official PDF (730 KB)"
    },
    {
      category: "faqs",
      title: "Governance & Statutory Compliances for NGOs in India",
      file: "/uploads/FAQS-ON-NGO.pdf",
      meta: "Legal Compliance Manual",
      desc: "Regulatory handbook on Societies Registration, FCRA regulations, 80G tax deductions, and governance best practices.",
      fileSize: "Official PDF"
    },
    {
      category: "faqs",
      title: "RTI Online Filing & Tribal Advocacy Manual",
      file: "/uploads/RTI-Online-FAQs.pdf",
      meta: "Central Information Commission",
      desc: "Guide to filing online Right to Information (RTI) petitions to access project documents, DPRs, and land award records.",
      fileSize: "Official PDF"
    }
];

export async function fetchDownloads() {
  return safeGet("get_downloads.php", defaultDownloads);
}

// 6. FAQS
export const defaultFaqs = [
  {
    q: "What is ALERT and when was it founded?",
    a: "ALERT (Association for Land and Livelihood) was founded in 2004 (Registration No. 307/2004) under the Societies Registration Act. Headquartered in Vijayawada, Andhra Pradesh, ALERT is dedicated to empowering Adivasis and marginalized coastal communities in the Fifth Scheduled areas through rights-based development, legal aid, and environmental sustainability."
  },
  {
    q: "What is the Forest Rights Act (RoFR) and how does ALERT assist?",
    a: "The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 recognizes the pre-existing rights of forest-dwelling tribal communities over ancestral lands and minor forest produce. ALERT assists Gram Sabhas with field mapping, gathering revenue evidence, and submitting Individual Forest Rights (IFR) and Community Forest Rights (CFR) claims."
  },
  {
    q: "How does ALERT support families displaced by the Polavaram Irrigation Project (PIP)?",
    a: "ALERT tracks land valuation awards, coordinates legal petitions before the High Court of AP and the R&R Commissioner Office, monitors housing colony amenities (drinking water, schooling, roads), and operates a community grievance redressal cell to ensure every displaced family and adult youth receives their statutory package."
  },
  {
    q: "What is the role of PESA in tribal self-governance?",
    a: "The Provisions of the Panchayats (Extension to Scheduled Areas) Act (PESA), 1996 vests mandatory authority in the village Gram Sabha. In Schedule V areas, no land acquisition, minor water body alienation, or mining lease can proceed without prior consultation and resolution by the Gram Sabha. ALERT trains tribal leaders and Gram Sabha members in exercising these statutory powers."
  },
  {
    q: "Are donations to ALERT eligible for income tax exemption?",
    a: "Yes. ALERT is registered under Section 12A and Section 80G of the Indian Income Tax Act. Donors receive a formal 80G tax receipt allowing them to claim up to a 50% deduction on their taxable income as permitted under Indian tax laws."
  },
  {
    q: "How can individuals or organizations volunteer or collaborate with ALERT?",
    a: "We welcome interns, legal researchers, environmental scientists, and volunteers. Opportunities include field research in tribal mandals, documentation of oral histories, child education initiatives, and disaster relief logistics. You can reach out through our Contact page or write directly to director@alertngo.in."
  },
  {
    q: "How does ALERT fund its community initiatives and ensure transparency?",
    a: "ALERT is funded through individual philanthropic contributions, institutional donor grants, and corporate CSR partnerships. Our accounts are audited annually by statutory chartered accountants, filed with the Registrar of Societies, and submitted under FCRA guidelines to ensure absolute financial integrity."
  }
];

export async function fetchFaqs() {
  return safeGet("get_faqs.php", defaultFaqs);
}

// 7. NEWS
export const defaultNews = [
  {
    title: "Godavari Flood Relief 2023: Emergency Rations & Medical Kits to 4,200 Displaced Families",
    date: "September 2023",
    category: "relief",
    tag: "Flood Relief 2023",
    img: "/uploads/all2023.jpeg",
    excerpt: "ALERT mobilized field teams across flood-hit habitations of Alluri Sitharama Raju and Eluru districts, deploying mechanized boats to supply rice, lentils, drinking water, and sanitary kits to cut-off Adivasi hamlets."
  },
  {
    title: "Flood Relief Operations 2022: Multi-Mandal Relief Mission Across Submergence Habitations",
    date: "October 2022",
    category: "relief",
    tag: "Flood Relief 2022",
    img: "/uploads/PHOTO-2022-10-20-17-25-29-2.jpg",
    excerpt: "Field caseworkers distributed comprehensive ration packets and hygiene supplies to families displaced by heavy Godavari river spillage in Kunavaram, VR Puram, and Chintoor mandals."
  },
  {
    title: "Flood Relief Operations 2021: Rescue Boat Deployment & Essential Services in Hill Tracts",
    date: "August 2021",
    category: "relief",
    tag: "Flood Relief 2021",
    img: "/uploads/WhatsApp-Image-2021-08-23-at-11.23.52-AM-1024x768.jpeg",
    excerpt: "ALERT established temporary relief distribution bases in remote hill areas, providing direct sustenance to vulnerable tribal children, nursing mothers, and elderly persons."
  },
  {
    title: "Blankets & Winter Care Distribution in East Godavari Hill Hamlets",
    date: "October 2020",
    category: "winter",
    tag: "Blankets Drive",
    img: "/uploads/WhatsApp-Image-2020-10-10-at-1.48.07-PM-1-300x225-1.jpeg",
    excerpt: "Over 3,000 thermal wool blankets and basic healthcare supplies were handed over directly to remote Konda Reddi tribal households facing harsh winter temperatures."
  },
  {
    title: "Essential Groceries Distribution Campaign in West Godavari Submergence Villages",
    date: "July 2020",
    category: "relief",
    tag: "COVID & Relief",
    img: "/uploads/WhatsApp-Image-2020-07-29-at-10.42.06-AM-768x576-1.jpeg",
    excerpt: "Nutritional hampers and clean drinking water containers were distributed to forest hamlets cut off from road connectivity during peak monsoon inundations."
  }
];

export async function fetchNews() {
  return safeGet("get_news.php", defaultNews);
}
