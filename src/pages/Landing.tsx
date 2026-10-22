import { useState, useMemo } from 'react';
import { FEATURED_PROJECTS, PROJECTS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ALL_CATEGORIES = Array.from(new Set(PROJECTS.map((p) => p.category)));

export default function Landing() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFeatured = useMemo(() => {
    return FEATURED_PROJECTS.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const filteredSecondary = useMemo(() => {
    return PROJECTS.filter((p) => !FEATURED_PROJECTS.includes(p)).filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const totalResults = filteredFeatured.length + filteredSecondary.length;

  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[30%] left-[15%] w-[600px] h-[600px] rounded-full bg-amber-500/[0.04] blur-[120px]" />
          <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-amber-600/[0.03] blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-amber-400 tracking-[0.2em] uppercase">
              Centro de Investigación Activo
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
              Global Conspiracy
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 glow-text">
              Projects
            </span>
          </h1>

          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explorando el Deep State y los Programas Clasificados. Hub premium de investigación multimedia
            con testimonios de denunciantes, tecnologías ocultas y documentación de proyectos secretos.
            Todo documentado, traducido y accesible.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: `${PROJECTS.length}`, label: 'Proyectos' },
              { value: '1000+', label: 'Archivos Multimedia' },
              { value: '20+', label: 'Años de Investigación' },
              { value: '14+', label: 'Fuentes Oficiales' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white glow-text">{stat.value}</div>
                <div className="text-[9px] font-mono text-zinc-500 tracking-[0.15em] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ───── SEARCH & FILTER ───── */}
          <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative mb-5">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar proyectos, categorías, evidencia..."
                className="w-full pl-11 pr-4 py-3.5 bg-[#111119] border border-white/[0.06] rounded-xl text-sm text-zinc-200 font-mono placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/30 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`text-[9px] font-mono font-bold tracking-[0.1em] px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  !selectedCategory
                    ? 'bg-amber-500 text-black border-amber-500'
                    : 'text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                }`}
              >
                TODOS ({PROJECTS.length})
              </button>
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`text-[9px] font-mono font-bold tracking-[0.1em] px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-black border-amber-500'
                      : 'text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
            {(search || selectedCategory) && (
              <p className="text-[10px] font-mono text-zinc-500 mt-3">
                {totalResults} resultado{totalResults !== 1 ? 's' : ''} encontrado{totalResults !== 1 ? 's' : ''}
                {search && <span> para "<span className="text-amber-400">{search}</span>"</span>}
                {selectedCategory && <span> en <span className="text-amber-400">{selectedCategory}</span></span>}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ───── FEATURED PROJECTS GRID ───── */}
      {filteredFeatured.length > 0 && (
        <section id="projects" className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <h2 className="text-[11px] font-mono font-bold tracking-[0.3em] text-amber-400 uppercase whitespace-nowrap">
              Proyectos Principales
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredFeatured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* ───── SECONDARY PROJECTS ───── */}
      {filteredSecondary.length > 0 && (
        <section id="archive" className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <h2 className="text-[11px] font-mono font-bold tracking-[0.3em] text-zinc-500 uppercase whitespace-nowrap">
              Más Investigaciones
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredSecondary.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + filteredFeatured.length} />
            ))}
          </div>
        </section>
      )}

      {/* ───── NO RESULTS ───── */}
      {totalResults === 0 && (
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-lg text-zinc-400 mb-4">No se encontraron resultados</p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory(null); }}
            className="btn-outline text-xs"
          >
            Limpiar filtros
          </button>
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
            Project Camelot hasta los documentos desclasificados de MK-Ultra, HAARP y las audiencias
            congresionales UAP de 2023-2026, todo el contenido está disponible en español para su
            consulta, investigación y archivo. Cada proyecto incluye reproductor multimedia funcional,
            documentos con copia al portapapeles, y enlaces directos a fuentes oficiales.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {PROJECTS.map((p) => (
              <span
                key={p.id}
                className="text-[9px] font-mono font-bold tracking-[0.1em] text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full hover:border-amber-500/30 hover:text-amber-400 transition-colors cursor-default"
              >
                {p.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
