import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { useLang } from '../contexts/LangContext';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative mt-24 border-t border-white/[0.04]">
      {/* Top glow */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/Conspiracy-Projects/favicon-32x32.png"
                alt="GCP Logo"
                className="w-7 h-7 rounded-md shadow-[0_0_12px_rgba(245,158,11,0.25)]"
              />
              <span className="text-xs font-black tracking-[0.1em] text-zinc-200 uppercase">GCP</span>
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed max-w-xs">
              {t('footer.brand_desc')}
            </p>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">
              {t('nav.projects')}
            </h4>
            <ul className="space-y-2">
              {PROJECTS.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/project/${p.id}`}
                    className="text-xs text-zinc-500 hover:text-amber-400 transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">
              {t('footer.external_sources')}
            </h4>
            <ul className="space-y-2">
              <li><a href="https://projectcamelotportal.com/" target="_blank" rel="noopener" className="text-xs text-zinc-500 hover:text-amber-400 transition-colors">Portal Camelot</a></li>
              <li><a href="https://odysee.com/@PROJECTCAMELOT:d" target="_blank" rel="noopener" className="text-xs text-zinc-500 hover:text-amber-400 transition-colors">Odysee Archive</a></li>
              <li><a href="https://rumble.com/user/projectcamelot" target="_blank" rel="noopener" className="text-xs text-zinc-500 hover:text-amber-400 transition-colors">Rumble Channel</a></li>
              <li><a href="https://projectavalon.net/forum4/" target="_blank" rel="noopener" className="text-xs text-zinc-500 hover:text-amber-400 transition-colors">Avalon Forum</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">
              {t('footer.info')}
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-zinc-500">{t('footer.lang_val')}</li>
              <li className="text-xs text-zinc-500">PWA Offline & Service Worker</li>
              <li className="text-xs text-zinc-500">{t('detail.multimedia')} & Playlists</li>
              <li className="text-xs text-zinc-500">Open Source (GitHub Pages)</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-zinc-600 font-mono tracking-wider">
            © {CURRENT_YEAR} GLOBAL CONSPIRACY PROJECTS — RESEARCH HUB
          </p>
          <p className="text-[9px] text-zinc-700 font-mono text-center sm:text-right">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
