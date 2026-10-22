import { FEATURED_PROJECTS, PROJECTS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Landing() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[30%] left-[15%] w-[600px] h-[600px] rounded-full bg-amber-500/[0.04] blur-[120px]" />
          <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-amber-600/[0.03] blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-amber-400 tracking-[0.2em] uppercase">
              Centro de Investigación Activo
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
              Global Conspiracy
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 glow-text">
              Projects
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explorando el Deep State y los Programas Clasificados. Un hub premium de investigación multimedia con testimonios de denunciantes, tecnologías ocultas y documentación de proyectos secretos. Todo documentado, traducido y accesible.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: `${PROJECTS.length}`, label: 'Proyectos' },
              { value: '1000+', label: 'Archivos' },
              { value: '20+', label: 'Años de Investigación' },
              { value: '∞', label: 'Testimonios' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white glow-text">{stat.value}</div>
                <div className="text-[9px] font-mono text-zinc-500 tracking-[0.15em] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEATURED PROJECTS GRID ───── */}
      <section id="projects" className="max-w-7xl mx-auto px-6 pb-24">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <h2 className="text-[11px] font-mono font-bold tracking-[0.3em] text-amber-400 uppercase whitespace-nowrap">
            Proyectos Principales
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Cards grid */}
        <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ───── ALL PROJECTS (SECONDARY) ───── */}
      {PROJECTS.length > 6 && (
        <section id="archive" className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <h2 className="text-[11px] font-mono font-bold tracking-[0.3em] text-zinc-500 uppercase whitespace-nowrap">
              Más Investigaciones
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>

          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {PROJECTS.filter((p) => !FEATURED_PROJECTS.includes(p)).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 6} />
            ))}
          </div>
        </section>
      )}

      {/* ───── ABOUT / MISSION ───── */}
      <section id="about" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
            Misión del Proyecto
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-6">
            Este hub compila, traduce y organiza más de dos décadas de testimonios de denunciantes, 
            documentos desclasificados, y análisis de programas clasificados. Desde los archivos de 
            Project Camelot hasta los documentos desclasificados de MK-Ultra y HAARP, todo el contenido 
            está disponible en español para su consulta, investigación y archivo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Camelot', 'Avalon', 'Bluebeam', 'HAARP', 'MK-Ultra', 'Serpo', 'Looking Glass'].map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono font-bold tracking-[0.1em] text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
