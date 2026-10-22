import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { ALL_PROJECTS_MAP, COLOR_MAP, PROJECTS, type MediaItem } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? ALL_PROJECTS_MAP[id] : undefined;

  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const [activeTab, setActiveTab] = useState<'media' | 'docs' | 'links'>('media');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const colors = project ? COLOR_MAP[project.color] : COLOR_MAP.amber;

  const handleCopy = useCallback((text: string, idx: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    });
  }, []);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Proyecto no encontrado</h2>
        <p className="text-zinc-400 mb-8">El proyecto solicitado no existe en nuestra base de datos.</p>
        <Link to="/" className="btn-premium">Volver al Hub</Link>
      </div>
    );
  }

  // Related projects (same category or adjacent in list)
  const related = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

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
          {/* Back */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-amber-400 transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            VOLVER AL HUB
          </button>

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
                  Evidencia Clave
                </h3>
                <ul className="space-y-3">
                  {project.evidence.map((ev, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[12px] text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: colors.glow.replace('0.3', '0.7') }} />
                      {ev}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/[0.04] text-[9px] text-zinc-600 font-mono">
                  Actualizado: {project.updated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TABS ───── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-1 bg-[#111119] p-1 rounded-xl border border-white/[0.04] mb-8 w-fit">
          {([
            { key: 'media', label: `Multimedia (${project.media.length})`, icon: '▶' },
            { key: 'docs', label: `Documentos (${project.documents.length})`, icon: '📄' },
            { key: 'links', label: `Enlaces (${project.externalLinks.length})`, icon: '🔗' },
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
                    <h3 className="font-bold text-amber-400 text-sm">{activeMedia.title}</h3>
                    <p className="text-[10px] text-zinc-500 font-mono">
                      Fuente: {activeMedia.source} · {activeMedia.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">EN LÍNEA</span>
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
                    ✕ Cerrar reproductor
                  </button>
                  <a
                    href={activeMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Abrir en fuente original ↗
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
                      <h4 className="text-sm font-bold text-zinc-100 mb-1">{item.title}</h4>
                      <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500">
                        <span>{item.source}</span>
                        <span>·</span>
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded ${
                      item.type === 'embed'
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-zinc-400 bg-zinc-500/10'
                    }`}>
                      {item.type === 'embed' ? 'EMBED' : 'EXTERNO'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.type === 'embed' && item.embedUrl ? (
                      <button
                        onClick={() => setActiveMedia(item)}
                        className="btn-premium text-[10px] px-4 py-2"
                      >
                        ▶ Reproducir
                      </button>
                    ) : null}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-[10px] px-4 py-2"
                    >
                      Abrir Fuente ↗
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
            {project.documents.map((doc, i) => (
              <div key={i} className="glass-panel rounded-xl p-6 animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`text-sm font-bold ${colors.text} font-mono uppercase tracking-wide`}>
                    {doc.title}
                  </h4>
                  <button
                    onClick={() => handleCopy(doc.content, i)}
                    className={`text-[10px] font-mono px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                      copiedIdx === i
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : 'text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                    }`}
                  >
                    {copiedIdx === i ? '✓ Copiado' : '📋 Copiar'}
                  </button>
                </div>
                <div className="bg-black/40 rounded-lg border border-white/[0.04] p-5">
                  <pre className="text-[12px] font-mono text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {doc.content}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ───── LINKS TAB ───── */}
        {activeTab === 'links' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.externalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-xl p-5 group hover:border-amber-500/20 transition-all duration-300 flex items-center justify-between animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-mono truncate max-w-[250px]">{link.url}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ───── RELATED ───── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="section-divider mb-12" />
        <h3 className="text-[11px] font-mono font-bold tracking-[0.3em] text-zinc-500 uppercase mb-8 text-center">
          Investigaciones Relacionadas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {related.map((p) => (
            <Link
              key={p.id}
              to={`/project/${p.id}`}
              className="glass-panel rounded-xl p-5 group hover:border-amber-500/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">{p.title}</h4>
                  <span className="text-[9px] font-mono text-zinc-500">{p.category}</span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-500 line-clamp-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
