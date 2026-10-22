import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'es' | 'en';

interface LangCtx {
  lang: Lang;
  t: (key: string) => string;
  toggle: () => void;
}

const translations: Record<Lang, Record<string, string>> = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.timeline': 'Cronología',
    'nav.about': 'Misión',
    'hero.badge': 'Centro de Investigación Activo',
    'hero.subtitle': 'Explorando el Deep State y los Programas Clasificados. Hub premium de investigación multimedia con testimonios de denunciantes, tecnologías ocultas y documentación de proyectos secretos.',
    'search.placeholder': 'Buscar proyectos, categorías, evidencia...',
    'filter.all': 'TODOS',
    'section.main': 'Proyectos Principales',
    'section.more': 'Más Investigaciones',
    'section.mission': 'Misión del Proyecto',
    'section.mission.text': 'Este hub compila, traduce y organiza más de dos décadas de testimonios de denunciantes, documentos desclasificados, y análisis de programas clasificados.',
    'results.found': 'resultados encontrados',
    'results.for': 'para',
    'results.in': 'en',
    'results.none': 'No se encontraron resultados',
    'filter.clear': 'Limpiar filtros',
    'detail.back': '← VOLVER AL HUB',
    'detail.multimedia': 'Multimedia',
    'detail.documents': 'Documentos',
    'detail.links': 'Enlaces',
    'detail.evidence': 'Evidencia Documentada',
    'detail.reading': 'Modo Lectura',
    'detail.copy': 'Copiar',
    'detail.copied': '¡Copiado!',
    'detail.external': 'Abrir enlace externo',
    'detail.channel': 'Canal / Archivo',
    'stats.projects': 'Proyectos',
    'stats.media': 'Archivos Multimedia',
    'stats.years': 'Años de Investigación',
    'stats.sources': 'Fuentes Oficiales',
    'footer.brand_desc': 'Hub de investigación multimedia. Documentación, análisis y archivo de programas clasificados y testimonios de denunciantes globales.',
    'footer.external_sources': 'Fuentes Externas',
    'footer.info': 'Información',
    'footer.lang_val': 'Idioma: Español (ES)',
    'footer.rights': 'Compilación con fines de investigación y archivo. Contenido de terceros sujeto a sus respectivas licencias.',
    'detail.not_found': 'Proyecto no encontrado',
    'detail.not_found_desc': 'El proyecto solicitado no existe en nuestra base de datos.',
    'detail.exit_reading': '✕ Salir del Modo Lectura',
    'detail.updated': 'Actualizado',
    'detail.key_evidence': 'Evidencia Clave',
    'detail.online': 'EN LÍNEA',
    'detail.close_player': '✕ Cerrar reproductor',
    'detail.open_source': 'Abrir en fuente original ↗',
    'detail.related': 'Investigaciones Relacionadas',
    'timeline.title': 'Cronología de Proyectos',
    'timeline.subtitle': 'Historia documentada de programas clasificados, operaciones encubiertas y movimientos de revelación — desde 1945 hasta la actualidad.',
    'footer.disclaimer': 'Proyecto de investigación y archivo documental. Las opiniones y teorías presentadas pertenecen a sus respectivos autores e investigadores.',
    'footer.sources': 'Fuentes: Archivos desclasificados, testimonios bajo juramento, investigaciones periodísticas independientes.',
    'theme.dark': 'Oscuro',
    'theme.light': 'Claro',
    'pwa.offline': 'Disponible sin conexión',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.timeline': 'Timeline',
    'nav.about': 'Mission',
    'hero.badge': 'Active Research Center',
    'hero.subtitle': 'Exploring the Deep State and Classified Programs. Premium multimedia research hub featuring whistleblower testimonies, hidden technologies, and secret project documentation.',
    'search.placeholder': 'Search projects, categories, evidence...',
    'filter.all': 'ALL',
    'section.main': 'Main Projects',
    'section.more': 'More Investigations',
    'section.mission': 'Project Mission',
    'section.mission.text': 'This hub compiles, translates, and organizes over two decades of whistleblower testimonies, declassified documents, and classified program analyses.',
    'results.found': 'results found',
    'results.for': 'for',
    'results.in': 'in',
    'results.none': 'No results found',
    'filter.clear': 'Clear filters',
    'detail.back': '← BACK TO HUB',
    'detail.multimedia': 'Multimedia',
    'detail.documents': 'Documents',
    'detail.links': 'Links',
    'detail.evidence': 'Documented Evidence',
    'detail.reading': 'Reading Mode',
    'detail.copy': 'Copy',
    'detail.copied': 'Copied!',
    'detail.external': 'Open external link',
    'detail.channel': 'Channel / Archive',
    'detail.playlist': 'Playlist',
    'stats.projects': 'Projects',
    'stats.media': 'Multimedia Files',
    'stats.years': 'Years of Research',
    'stats.sources': 'Official Sources',
    'footer.brand_desc': 'Multimedia research hub. Documentation, analysis, and archive of classified programs and global whistleblower testimonies.',
    'footer.external_sources': 'External Sources',
    'footer.info': 'Information',
    'footer.lang_val': 'Language: English (EN)',
    'footer.rights': 'Compiled for research and archival purposes. Third-party content subject to respective licenses.',
    'detail.not_found': 'Project not found',
    'detail.not_found_desc': 'The requested project does not exist in our database.',
    'detail.exit_reading': '✕ Exit Reading Mode',
    'detail.updated': 'Updated',
    'detail.key_evidence': 'Key Evidence',
    'detail.online': 'ONLINE',
    'detail.close_player': '✕ Close player',
    'detail.open_source': 'Open original source ↗',
    'detail.related': 'Related Investigations',
    'timeline.title': 'Project Timeline',
    'timeline.subtitle': 'Documented history of classified programs, covert operations, and disclosure movements — from 1945 to the present.',
    'footer.disclaimer': 'Research and documentary archive project. Opinions and theories presented belong to their respective authors and researchers.',
    'footer.sources': 'Sources: Declassified archives, sworn testimonies, independent investigative journalism.',
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'pwa.offline': 'Available offline',
  },
};

const LangContext = createContext<LangCtx>({
  lang: 'es',
  t: (key) => key,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('gcp-lang') as Lang) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('gcp-lang', lang);
  }, [lang]);

  const t = (key: string) => translations[lang][key] || translations['es'][key] || key;
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return <LangContext.Provider value={{ lang, t, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
