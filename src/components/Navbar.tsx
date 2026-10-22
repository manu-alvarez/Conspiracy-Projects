import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LangContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, t, toggle: toggleLang } = useLang();

  const links = [
    { to: '/', label: t('nav.projects') },
    { to: '/timeline', label: t('nav.timeline') },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="text-base font-black text-amber-400 group-hover:text-amber-300 transition-colors tracking-tight">
            GCP
          </span>
          <span className="hidden sm:inline text-[9px] font-mono text-zinc-600 tracking-[0.15em] uppercase">
            Global Conspiracy Projects
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] font-mono font-bold tracking-[0.15em] uppercase transition-colors ${
                pathname === link.to ? 'text-amber-400' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-zinc-800" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-zinc-500 hover:text-amber-400 transition-colors text-sm"
            title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-[9px] font-mono font-bold px-2 py-1 rounded border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-zinc-400 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-5 h-0.5 bg-zinc-400 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-zinc-400 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.04] bg-bg/95 backdrop-blur-xl px-6 py-4 space-y-4 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-mono font-bold tracking-wider uppercase ${
                pathname === link.to ? 'text-amber-400' : 'text-zinc-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-zinc-800">
            <button onClick={toggleTheme} className="text-sm">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={toggleLang}
              className="text-[9px] font-mono font-bold px-2 py-1 rounded border border-zinc-800 text-zinc-400"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
