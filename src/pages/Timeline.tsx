import { Link } from 'react-router-dom';
import { PROJECTS, COLOR_MAP } from '../data/projects';
import { useLang } from '../contexts/LangContext';

const sorted = [...PROJECTS].sort((a, b) => a.timelineYear - b.timelineYear);

export default function Timeline() {
  const { t } = useLang();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          {t('timeline.title')}
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {t('timeline.subtitle')}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/40 via-zinc-700 to-transparent" />

        {sorted.map((project, i) => {
          const colors = COLOR_MAP[project.color];
          const isLeft = i % 2 === 0;

          return (
            <div
              key={project.id}
              className={`relative flex items-start mb-12 md:mb-16 group ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${colors.border} ${colors.bg} group-hover:scale-150 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 12px ${colors.glow}` }}
                />
              </div>

              {/* Year badge */}
              <div
                className={`absolute left-6 md:left-1/2 top-6 -translate-x-1/2 text-[10px] font-mono font-bold ${colors.text} tracking-wider`}
              >
                {project.timelineYear}
              </div>

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? 'md:pr-8 md:mr-auto' : 'md:pl-8 md:ml-auto'
                }`}
              >
                <Link
                  to={`/project/${project.id}`}
                  className={`block glass-panel rounded-xl p-5 border ${colors.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group/card`}
                  style={{ borderColor: undefined }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white group-hover/card:text-amber-400 transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-[10px] font-mono text-zinc-500">{project.subtitle}</p>
                    </div>
                    <span
                      className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded-full border ${colors.border} ${colors.text} ${colors.bg}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-[9px] font-mono text-zinc-600">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.media.length} media</span>
                    <span>•</span>
                    <span>{project.documents.length} docs</span>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}

        {/* End marker */}
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 bottom-0">
          <div className="w-3 h-3 rounded-full bg-amber-500/30 border border-amber-500/50 animate-pulse" />
        </div>
      </div>

      {/* Legend */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {Object.entries(COLOR_MAP).map(([color, classes]) => {
          const count = PROJECTS.filter((p) => p.color === color).length;
          if (!count) return null;
          return (
            <span
              key={color}
              className={`text-[9px] font-mono font-bold px-3 py-1 rounded-full border ${classes.border} ${classes.text} ${classes.bg}`}
            >
              {color.toUpperCase()} ({count})
            </span>
          );
        })}
      </div>
    </section>
  );
}
