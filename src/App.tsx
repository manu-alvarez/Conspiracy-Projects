import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LangProvider } from './contexts/LangContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import ProjectDetail from './pages/ProjectDetail';
import Timeline from './pages/Timeline';

/** Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-bg text-zinc-200 antialiased">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/timeline" element={<Timeline />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </LangProvider>
    </ThemeProvider>
  );
}
