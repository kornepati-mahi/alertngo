import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GoverningBody from "./pages/GoverningBody";
import VisionMission from "./pages/VisionMission";
import CoreValues from "./pages/CoreValues";
import OrganizationalProfile from "./pages/OrganizationalProfile";
import Organogram from "./pages/Organogram";
import AlertPolicies from "./pages/AlertPolicies";
import AreaOfOperation from "./pages/AreaOfOperation";
import FloodRelief from "./pages/FloodRelief";
import FloodRelief2023 from "./pages/FloodRelief2023";
import FloodRelief2022 from "./pages/FloodRelief2022";
import FloodRelief2021 from "./pages/FloodRelief2021";
import FloodRelief2020 from "./pages/FloodRelief2020";
import BlanketsDistributionEastGodavari from "./pages/BlanketsDistributionEastGodavari";
import GroceriesDistributionWestGodavari from "./pages/GroceriesDistributionWestGodavari";
import Chatbot from "./components/Chatbot";
import "./index.css";

/* Route-level code splitting: only the landing page ships in the initial bundle. */
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Stories = lazy(() => import("./pages/Stories"));
const PolavaramLaRr = lazy(() => import("./pages/PolavaramLaRr"));
const Grievances = lazy(() => import("./pages/Grievances"));
const Downloads = lazy(() => import("./pages/Downloads"));
const NewsViews = lazy(() => import("./pages/NewsViews"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Careers = lazy(() => import("./pages/Careers"));
const Partner = lazy(() => import("./pages/Partner"));
const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));
const PageDetail = lazy(() => import("./pages/PageDetail"));
const AllPages = lazy(() => import("./pages/AllPages"));
const AdminFlashNews = lazy(() => import("./pages/AdminFlashNews"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <span className="route-loading-spinner" />
      <span className="route-loading-text">Loading…</span>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/governing-body" element={<GoverningBody />} />
              <Route path="/vision-mission-2" element={<VisionMission />} />
              <Route path="/core-values" element={<CoreValues />} />
              <Route path="/organizational-profile" element={<OrganizationalProfile />} />
              <Route path="/organogram" element={<Organogram />} />
              <Route path="/alert-policies" element={<AlertPolicies />} />
              <Route path="/area-of-operation" element={<AreaOfOperation />} />
              <Route path="/flood-relief-measures" element={<FloodRelief />} />
              <Route path="/2023-2" element={<FloodRelief2023 />} />
              <Route path="/flood-relief-measures-2022" element={<FloodRelief2022 />} />
              <Route path="/flood-relief-measures-2021-2" element={<FloodRelief2021 />} />
              <Route path="/flood-relief-measures-2020" element={<FloodRelief2020 />} />
              <Route path="/blankets-distribution-in-east-godavari" element={<BlanketsDistributionEastGodavari />} />
              <Route path="/groceries-distribution-in-west-godavari" element={<GroceriesDistributionWestGodavari />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/la-rr" element={<PolavaramLaRr />} />
              <Route path="/grievances" element={<Grievances />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/news" element={<NewsViews />} />
              <Route path="/news-views" element={<NewsViews />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery-9" element={<Gallery />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/donate-now" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quick-links" element={<PageDetail />} />
              <Route path="/all-pages" element={<AllPages />} />
              <Route path="/page/:slug" element={<PageDetail />} />
              <Route path="/admin" element={<AdminFlashNews />} />
              <Route path="/admin/flash-news" element={<AdminFlashNews />} />

              {/* Dynamic content rendering for all 90 original page slugs */}
              <Route path="/:slug" element={<PageDetail />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
