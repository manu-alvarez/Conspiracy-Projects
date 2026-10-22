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
          <div className="min-h-screen flex flex-col bg-bg text-zinc-200 antialiased relative">
            {/* ───── GLOBAL AMBIENT SACRED EMBLEM WATERMARK ───── */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
              <img
                src="/Conspiracy-Projects/icon-512.png"
                alt=""
                className="w-[750px] h-[750px] max-w-none object-contain select-none filter blur-[1px] animate-ambient-float"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg/80" />
            </div>

            <Navbar />
            <main className="flex-1 relative z-10">
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
