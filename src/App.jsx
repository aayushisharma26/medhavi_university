import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MainNav from './components/MainNav';
import AcademicPage from './pages/AcademicPage';
import AdmissionsPage from './pages/AcademicPage';
import SchoolsPage from './pages/SchoolsPage';
import AnnouncementBar from "./components/AnnouncementBar";
import UtilityNav from './components/UtilityNav';
import CampusLoginPage from './pages/CampusLoginPage';
import InternationalPage from './pages/InternationalPage';
import CruxPage from './pages/CruxPage';
import AwardingBodyPage from './pages/AwardingBodyPage';
import WisePage from './pages/WisePage';
import PayFeePage from './pages/PayFeePage';
import ContactUsPage from './pages/ContactUsPage';
import Footer from "./components/Footer";
import Collaborations from './pages/CollaborationsPage';  // Corrected import
import SkillingPage from './pages/SkillingPage';
import IndustryPage from './pages/IndustryPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top sections */}
        <AnnouncementBar />
        <UtilityNav />
        <MainNav />
        
        {/* Main content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/campus-login" element={<CampusLoginPage />} />
            <Route path="/international" element={<InternationalPage />} />
            <Route path="/crux" element={<CruxPage />} />
            <Route path="/awarding-body" element={<AwardingBodyPage />} />
            <Route path="/wise" element={<WisePage />} />
            <Route path="/pay-fee" element={<PayFeePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/collaborations" element={<Collaborations />} /> {/* Fixed */}
            <Route path="/collaborations/skilling" element={<SkillingPage />} />
            <Route path="/collaborations/industry" element={<IndustryPage />} />
          </Routes>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
