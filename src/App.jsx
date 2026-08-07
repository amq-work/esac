import React from 'react';
import { NavProvider, useNav } from './context/NavContext';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/Common/CustomCursor';
import { CinematicTunnelIntro } from './components/Common/CinematicTunnelIntro';
import { Navigation } from './components/Common/Navigation';
import { Footer } from './components/Common/Footer';
// CanvasGrid removed — heavy canvas loop was causing lag

// Firm Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CataloguePage } from './pages/CataloguePage';
import { ContactPage } from './pages/ContactPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { InsightsPage } from './pages/InsightsPage';
import { CareersPage } from './pages/CareersPage';
import { LeadershipPage } from './pages/LeadershipPage';

const MainApp = () => {
  const { currentPage, isPreloaded } = useNav();
  useLenis();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'leadership':
        return <LeadershipPage />;
      case 'services':
        return <ServicesPage />;
      case 'catalogue':
      case 'portfolio':
      case 'projects':
      case 'architecture':
      case 'gallery':
        return <CataloguePage />;
      case 'contact':
      case 'rfp':
      case 'offices':
      case 'privacy':
      case 'terms':
        return <ContactPage />;
      case 'expertise':
      case 'engineering':
      case 'blueprint':
      case 'sustainability':
        return <ExpertisePage />;
      case 'industries':
      case 'residences':
      case 'amenities':
      case 'lifestyle':
      case 'interiordesign':
      case 'location':
      case 'floorplans':
      case 'availability':
        return <IndustriesPage />;
      case 'insights':
      case 'press':
      case 'dha-pakistan':
        return <InsightsPage />;
      case 'careers':
        return <CareersPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#001233', color: '#e5e7ea', fontFamily: 'SUSE, monospace', overflowX: 'hidden' }}>
      {!isPreloaded && <CinematicTunnelIntro />}
      <CustomCursor />
      <Navigation />
      <main style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavProvider>
      <MainApp />
    </NavProvider>
  );
}
