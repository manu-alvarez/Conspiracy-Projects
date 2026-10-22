import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/#projects' },
  { label: 'Archivo', href: '/#archive' },
  { label: 'Sobre', href: '/#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-[#0a0a0f]/70 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group select-none"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-shadow duration-500">
            <svg
              className="w-5 h-5 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-black tracking-[0.08em] text-zinc-100 uppercase leading-none">
              Global Conspiracy
            </span>
            <span className="text-[8px] text-zinc-500 font-mono tracking-[0.15em] uppercase">
              Investigaciones & Proyectos Clasificados
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-[11px] font-mono tracking-[0.12em] uppercase relative group transition-colors duration-300 ${
                location.pathname === item.href
                  ? 'text-amber-400'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
          <div className="h-4 w-px bg-zinc-800" />
          <span className="text-[9px] font-mono tracking-[0.15em] text-zinc-600 uppercase">
            ES · Español
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menú"
        >
          <span
            className={`block w-5 h-[1.5px] bg-zinc-300 transition-all duration-300 ${
              open ? 'rotate-45 translate-y-[4.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-zinc-300 transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-zinc-300 transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-[4.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/[0.04] px-6 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-mono tracking-[0.08em] text-zinc-400 hover:text-white transition-colors py-2.5 border-b border-zinc-900/50 last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
