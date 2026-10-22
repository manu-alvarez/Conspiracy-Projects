import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { ALL_PROJECTS_MAP, COLOR_MAP, PROJECTS, type MediaItem } from '../data/projects';
import { useLang } from '../contexts/LangContext';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLang();
  const project = id ? ALL_PROJECTS_MAP[id] : undefined;

  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const [activeTab, setActiveTab] = useState<'media' | 'docs' | 'links'>('media');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [readingMode, setReadingMode] = useState(false);

  const colors = project ? COLOR_MAP[project.color] : COLOR_MAP.amber;

  const handleCopy = useCallback((text: string, idx: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    });
  }, []);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center animate-fade-in">
        <h2 className="text-3xl font-black text-white mb-4">{t('detail.not_found')}</h2>
        <p className="text-zinc-400 mb-8">{t('detail.not_found_desc')}</p>
        <Link to="/" className="btn-premium">{t('detail.back')}</Link>
      </div>
    );
  }

  // Related projects
  const related = PROJECTS.filter((p) => p.id !== project.id && p.category === project.category)
    .concat(PROJECTS.filter((p) => p.id !== project.id && p.category !== project.category))
    .slice(0, 3);

  // ───── READING MODE VIEW ─────
  if (readingMode) {
    return (
      <article className="animate-fade-in min-h-screen pb-24">
        {/* Floating top bar */}
        <div className="sticky top-14 z-40 bg-bg/95 backdrop-blur-xl border-b border-white/[0.06] py-3.5 px-6 mb-12">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="text-xs font-mono text-zinc-500 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              ← {t('detail.back')}
            </button>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs font-bold text-zinc-300 truncate max-w-xs">
                {project.title}
              </span>
              <button
                onClick={() => setReadingMode(false)}
                className="btn-premium text-[10px] px-3.5 py-1.5 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              >
                {t('detail.exit_reading')}
              </button>
            </div>
          </div>
        </div>

        {/* Reader container */}
        <div className="max-w-3xl mx-auto px-6 reading-mode">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{project.icon}</span>
              <span className={`tag-badge ${colors.text} ${colors.border} ${colors.bg}`}>
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                {project.timelineYear}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
              {project.title}
            </h1>
            <p className={`text-xs md:text-sm font-mono ${colors.text} uppercase tracking-wider`}>
              {project.subtitle}
            </p>
          </div>

          {/* Dossier Body */}
          <div className="prose prose-invert max-w-none mb-12">
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-amber-400 uppercase mb-4">
              Dossier de Investigación
            </h2>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed whitespace-pre-line mb-8">
              {project.longDescription}
            </p>
          </div>

          {/* Key Evidence Callout */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 mb-12 border-amber-500/20">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 flex items-center gap-2">
              <span>⚡</span> {t('detail.key_evidence')}
            </h3>
            <ul className="space-y-3">
              {project.evidence.map((ev, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Declassified Documents */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">
              Documentos y Transcripciones
            </h3>
            {project.documents.map((doc, idx) => (
              <div key={idx} className="glass-panel rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-white">{doc.title}</h4>
                  <button
                    onClick={() => handleCopy(doc.content, idx)}
                    className="text-[10px] font-mono text-zinc-400 hover:text-amber-400 border border-zinc-800 px-2.5 py-1 rounded transition-colors"
                  >
                    {copiedIdx === idx ? t('detail.copied') : t('detail.copy')}
                  </button>
                </div>
                <pre className="text-xs text-zinc-300/90 whitespace-pre-wrap font-sans leading-relaxed bg-black/20 p-4 rounded-lg">
                  {doc.content}
                </pre>
              </div>
            ))}
          </div>

          {/* Return trigger */}
          <div className="text-center pt-8 border-t border-white/[0.08]">
            <button
              onClick={() => setReadingMode(false)}
              className="btn-outline text-xs px-6 py-2.5"
            >
              {t('detail.exit_reading')}
            </button>
          </div>
        </div>
      </article>
    );
  }

  // ───── DEFAULT HUB VIEW ─────
  return (
    <div className="animate-fade-in">
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/90 to-[#0a0a0f]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          {/* Top Actions */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-amber-400 transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('detail.back')}
            </button>

            {/* Reading mode button */}
            <button
              onClick={() => setReadingMode(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-zinc-800 bg-panel text-zinc-300 hover:text-amber-400 hover:border-amber-500/30 transition-all text-xs font-mono font-bold"
              title="Modo Lectura sin distracciones"
            >
              <span>📖</span> {t('detail.reading')}
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              {/* Badge + status */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{project.icon}</span>
                <span className={`tag-badge ${colors.text} ${colors.border} ${colors.bg}`}>
                  {project.category}
                </span>
                <span className={`text-[8px] font-mono font-bold tracking-[0.15em] px-2 py-0.5 rounded ${
                  project.status === 'ACTIVO' ? 'text-emerald-400 bg-emerald-500/10' :
                  project.status === 'DESCLASIFICADO' ? 'text-blue-400 bg-blue-500/10' :
                  'text-red-400 bg-red-500/10'
                }`}>
                  {project.status}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  {project.timelineYear}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 glow-text">
                {project.title}
              </h1>
              <p className={`text-xs font-mono ${colors.text} tracking-[0.12em] uppercase mb-6 opacity-80`}>
                {project.subtitle}
              </p>
              <p className="text-sm md:text-base text-zinc-300/80 leading-relaxed max-w-2xl">
                {project.longDescription}
              </p>
            </div>

            {/* Evidence sidebar */}
            <div className="md:w-80 shrink-0">
              <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">
                  {t('detail.key_evidence')}
                </h3>
                <ul className="space-y-3">
                  {project.evidence.map((ev, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[12px] text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: colors.glow.replace('0.3', '0.7') }} />
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/[0.04] text-[9px] text-zinc-600 font-mono">
                  {t('detail.updated')}: {project.updated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TABS ───── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-1 bg-panel p-1 rounded-xl border border-white/[0.04] mb-8 w-fit">
          {([
            { key: 'media', label: `${t('detail.multimedia')} (${project.media.length})`, icon: '▶' },
            { key: 'docs', label: `${t('detail.documents')} (${project.documents.length})`, icon: '📄' },
            { key: 'links', label: `${t('detail.links')} (${project.externalLinks.length})`, icon: '🔗' },
          ] as const).map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all duration-300 ${
                activeTab === key
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>

        {/* ───── MEDIA TAB ───── */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            {/* Active player */}
            {activeMedia && activeMedia.embedUrl && (
              <div className="player-panel animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase">
                        {activeMedia.type === 'playlist' ? '📑 PLAYLIST' : activeMedia.type === 'channel' ? '📡 CANAL' : '▶ EMBED'}
                      </span>
                      <h3 className="font-bold text-amber-400 text-sm">{activeMedia.title}</h3>
                    </div>
                    <p className="text-[10px] text-zinc-500 font-mono">
                      Fuente: {activeMedia.source} · {activeMedia.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">{t('detail.online')}</span>
                  </div>
                </div>
                <div className="iframe-wrapper">
                  <iframe
                    src={activeMedia.embedUrl}
                    title={activeMedia.title}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveMedia(null)}
                    className="text-xs font-mono text-zinc-500 hover:text-red-400 transition-colors"
                  >
                    {t('detail.close_player')}
                  </button>
                  <a
                    href={activeMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {t('detail.open_source')}
                  </a>
                </div>
              </div>
            )}

            {/* Media list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.media.map((item) => (
                <div
                  key={item.id}
                  className={`glass-panel rounded-xl p-5 transition-all duration-300 hover:border-amber-500/20 ${
                    activeMedia?.id === item.id ? 'border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.1)]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                          item.type === 'playlist'
                            ? 'text-amber-300 bg-amber-500/15 border border-amber-500/30'
                            : item.type === 'channel'
                            ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30'
                            : 'text-zinc-400 bg-zinc-500/10'
                        }`}>
                          {item.type === 'playlist' ? '📑 PLAYLIST' : item.type === 'channel' ? '📡 CANAL' : '🔗 EXTERNO'}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-100 mb-1">{item.title}</h4>
                      <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500">
                        <span>{item.source}</span>
                        <span>·</span>
                        <span className="text-amber-400/80 font-bold">{item.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.04]">
                    {item.embedUrl ? (
                      <button
                        onClick={() => setActiveMedia(item)}
                        className="btn-premium text-[10px] px-4 py-2"
                      >
                        {item.type === 'playlist' ? '▶ Reproducir Playlist' : item.type === 'channel' ? '📡 Ver Canal' : '▶ Reproducir'}
                      </button>
                    ) : null}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-[10px] px-4 py-2"
                    >
                      {t('detail.external')} ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ───── DOCUMENTS TAB ───── */}
        {activeTab === 'docs' && (
          <div className="space-y-4">
            {project.documents.map((doc, idx) => (
              <div key={idx} className="glass-panel rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>📄</span> {doc.title}
                  </h4>
                  <button
                    onClick={() => handleCopy(doc.content, idx)}
                    className="text-[10px] font-mono text-zinc-400 hover:text-amber-400 border border-zinc-800 px-3 py-1 rounded transition-colors"
                  >
                    {copiedIdx === idx ? t('detail.copied') : t('detail.copy')}
                  </button>
                </div>
                <pre className="text-xs text-zinc-400 whitespace-pre-wrap font-mono leading-relaxed bg-black/20 p-4 rounded-lg border border-white/[0.02]">
                  {doc.content}
                </pre>
              </div>
            ))}
          </div>
        )}

        {/* ───── LINKS TAB ───── */}
        {activeTab === 'links' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.externalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-xl p-5 flex items-center justify-between group hover:border-amber-500/30 transition-all"
              >
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {link.label}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-500 truncate max-w-sm">
                    {link.url}
                  </p>
                </div>
                <span className="text-zinc-500 group-hover:text-amber-400 transition-colors text-sm">
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ───── RELATED PROJECTS ───── */}
      <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-white/[0.04] pt-16">
        <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-8">
          {t('detail.related')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((p) => {
            const relColors = COLOR_MAP[p.color];
            return (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="glass-panel rounded-xl p-5 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{p.icon}</span>
                  <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded border ${relColors.border} ${relColors.text} ${relColors.bg}`}>
                    {p.category}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-1 truncate">
                  {p.title}
                </h4>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
