import { useCallback, type MouseEvent as RMouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Project, COLOR_MAP } from '../data/projects';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const navigate = useNavigate();
  const colors = COLOR_MAP[project.color];

  const handleMouseMove = useCallback(
    (e: RMouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    },
    []
  );

  const handleMouseLeave = useCallback((e: RMouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', '50%');
    e.currentTarget.style.setProperty('--mouse-y', '50%');
  }, []);

  return (
    <article
      className="premium-card group"
      onClick={() => navigate(`/project/${project.id}`)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.id}`)}
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          animationDelay: `${index * 0.08}s`,
        } as React.CSSProperties
      }
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover opacity-30 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/70 to-[#0a0a0f]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 lg:p-7 min-h-[380px] lg:min-h-[420px]">
        {/* Icon + badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl leading-none drop-shadow-lg">{project.icon}</span>
            <span
              className={`tag-badge ${colors.text} ${colors.border} ${colors.bg}`}
            >
              {project.category}
            </span>
          </div>
          <span
            className={`text-[8px] font-mono font-bold tracking-[0.15em] px-2 py-0.5 rounded ${
              project.status === 'ACTIVO'
                ? 'text-emerald-400 bg-emerald-500/10'
                : project.status === 'DESCLASIFICADO'
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-red-400 bg-red-500/10'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-[1.65rem] font-black text-white mb-1 tracking-tight leading-tight glow-text">
          {project.title}
        </h3>
        <p className={`text-[10px] font-mono ${colors.text} tracking-[0.12em] mb-4 uppercase opacity-80`}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-[13px] text-zinc-400 mb-5 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Evidence preview */}
        <div className="mb-5 space-y-1.5">
          {project.evidence.slice(0, 3).map((ev, i) => (
            <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-500 font-mono">
              <span className={`w-1 h-1 rounded-full ${colors.bg} mt-1.5 shrink-0`} style={{backgroundColor: colors.glow.replace('0.3', '0.8')}} />
              <span className="line-clamp-1">{ev}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-end justify-between pt-4 border-t border-white/[0.04]">
          <span className="text-[9px] text-zinc-600 font-mono tracking-wide">
            {project.updated}
          </span>
          <span className="btn-premium text-[10px] px-4 py-2 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]">
            {project.cta} →
          </span>
        </div>
      </div>
    </article>
  );
}
