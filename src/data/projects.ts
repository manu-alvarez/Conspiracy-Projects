export interface MediaItem {
  id: string;
  title: string;
  url: string;
  embedUrl?: string;
  duration: string;
  type: 'embed' | 'external';
  source: string;
}

export interface DocItem {
  title: string;
  content: string;
  source?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  cta: string;
  category: string;
  icon: string;
  color: 'amber' | 'emerald' | 'blue' | 'purple' | 'cyan' | 'red' | 'rose' | 'teal';
  image: string;
  status: 'ACTIVO' | 'CLASIFICADO' | 'DESCLASIFICADO';
  evidence: string[];
  media: MediaItem[];
  documents: DocItem[];
  externalLinks: { label: string; url: string }[];
  updated: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'camelot',
    title: 'Project Camelot',
    subtitle: 'Portal Principal de Inteligencia',
    description:
      'Investigación de fenómenos inexplicables, testimonios de denunciantes y programas espaciales clasificados. Más de 20 años de archivo.',
    longDescription:
      'Project Camelot es una organización de investigación periodística independiente fundada por Kerry Cassidy y Bill Ryan. Durante más de dos décadas, ha compilado testimonios de denunciantes militares, científicos y funcionarios de inteligencia que revelan la existencia de programas espaciales secretos, agendas exopolíticas, y tecnologías clasificadas de propulsión y energía libre. Su archivo incluye más de 1.000 entrevistas grabadas, transcripciones completas y análisis geopolítico de alto nivel.',
    cta: 'EXPLORAR',
    category: 'Whistleblowers',
    icon: '🛡️',
    color: 'amber',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    status: 'ACTIVO',
    evidence: [
      'Más de 1.000 testimonios grabados desde 2005',
      'Revelaciones sobre programas espaciales black-ops (SSP)',
      'Documentación de agendas exopolíticas y tratados no humanos',
      'Cuentas internas del MJ-12 y la CIA',
      'Transcripciones del Dispositivo Looking Glass',
    ],
    media: [
      {
        id: 'cam-1',
        title: 'Archivo Completo Odysee — Project Camelot',
        url: 'https://odysee.com/@PROJECTCAMELOT:d',
        embedUrl: 'https://odysee.com/$/embed/@PROJECTCAMELOT:d',
        duration: '+1000 videos',
        type: 'embed',
        source: 'Odysee',
      },
      {
        id: 'cam-2',
        title: 'Canal Rumble — Reportes Recientes 2026',
        url: 'https://rumble.com/user/projectcamelot',
        embedUrl: 'https://rumble.com/embed/v5jh9ya/',
        duration: 'En vivo / Semanal',
        type: 'embed',
        source: 'Rumble',
      },
      {
        id: 'cam-3',
        title: 'Kerry Cassidy — Boriska: El Niño Índigo de Marte',
        url: 'https://odysee.com/@PROJECTCAMELOT:d',
        duration: '58:20',
        type: 'external',
        source: 'Odysee Clásico',
      },
      {
        id: 'cam-4',
        title: 'Dan Burisch — El Dispositivo Looking Glass y MJ-12',
        url: 'https://odysee.com/@PROJECTCAMELOT:d',
        duration: '3:20:00',
        type: 'external',
        source: 'Odysee Clásico',
      },
      {
        id: 'cam-5',
        title: 'Matt Geiger — Verity Metals y Transición Financiera',
        url: 'https://rumble.com/user/projectcamelot',
        duration: '1:45:00',
        type: 'external',
        source: 'Rumble 2026',
      },
    ],
    documents: [
      {
        title: 'Boriska: Memorias de Marte',
        content:
          '[00:10:00] Boriska describe la atmósfera marciana antigua y el comercio interplanetario. Tecnologías de propulsión basadas en campos torsionales.\n\n[00:35:12] Advertencias sobre desastres cíclicos terrestres y el cambio magnético polar. Civilizaciones subterráneas activas.',
      },
      {
        title: 'Dan Burisch: Looking Glass',
        content:
          '[01:05:00] Explicación técnica del cronovisor Looking Glass y la distorsión del plasma temporal. Líneas de tiempo convergentes.\n\n[02:18:40] El funcionamiento interno de las células del MJ12 y las directivas de seguridad nacional. Tratados diplomáticos con entidades no humanas.',
      },
      {
        title: 'John Lear: Misión al Sol',
        content:
          '[00:05:00] Bases lunares secretas en el lado oculto. Instalaciones subterráneas de nivel 4+.\n\n[00:30:00] Protocolos de ocultamiento sistemático. Flotas espaciales operativas desde los años 60.',
      },
    ],
    externalLinks: [
      { label: 'Portal Oficial', url: 'https://projectcamelotportal.com/' },
      { label: 'Canal Odysee', url: 'https://odysee.com/@PROJECTCAMELOT:d' },
      { label: 'Canal Rumble', url: 'https://rumble.com/user/projectcamelot' },
      { label: 'Transcripciones', url: 'https://projectcamelotportal.com/transcripts/' },
    ],
    updated: 'Octubre 2026',
  },
  {
    id: 'bluebeam',
    title: 'Project Bluebeam',
    subtitle: 'Tecnología Holográfica Oculta',
    description:
      'Programa presunto de la NASA para simular una invasión alienígena y religión global usando hologramas atmosféricos y armas psicotrónicas.',
    longDescription:
      'Project Bluebeam es una teoría de investigación que propone la existencia de un programa de la NASA diseñado para implementar una nueva religión mundial mediante proyecciones holográficas atmosféricas a gran escala. Según los investigadores, el proyecto utilizaría tecnología de proyección láser 3D en la ionosfera, armas de frecuencia psicotrónica para manipulación perceptiva, y sistemas de comunicación telepática artificial. El periodista canadiense Serge Monast fue el primero en documentar este programa en 1994.',
    cta: 'VER PROYECTO',
    category: 'Holographic Tech',
    icon: '📡',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1518770660439-4636500cff5f?w=800&q=80',
    status: 'CLASIFICADO',
    evidence: [
      'Patentes de proyección láser 3D en la ionosfera',
      'Armas de frecuencias psicotrónicas documentadas',
      'Protocolos de simulación de eventos masivos en cielos',
      'Investigación de Serge Monast (1994)',
    ],
    media: [
      {
        id: 'bb-1',
        title: 'Project Bluebeam — Análisis Completo',
        url: 'https://rumble.com/user/projectcamelot',
        embedUrl: 'https://rumble.com/embed/v5jh9ya/',
        duration: '01:10:00',
        type: 'embed',
        source: 'Rumble',
      },
    ],
    documents: [
      {
        title: 'Desglose de Patentes Aeroespaciales',
        content:
          '[00:02:40] Análisis de patentes de proyección láser tridimensional. Sistemas de refracción atmosférica ionosférica.\n\n[00:45:00] Protocolos de protección mental contra estimulación electromagnética inducida. Técnicas de contramedida cognitiva.',
      },
      {
        title: 'Fases del Proyecto Bluebeam',
        content:
          'FASE 1: Desmantelamiento arqueológico — Terramotos artificiales para revelar "artefactos" que cuestionen todas las religiones.\n\nFASE 2: Gran espectáculo espacial — Proyecciones holográficas 3D en la ionosfera simulando apariciones religiosas.\n\nFASE 3: Comunicación telepática electrónica — Ondas ELF/VLF para inducir comunicación "divina" directa.\n\nFASE 4: Manifestación sobrenatural — Combinación de las tres fases anteriores para crear un evento global unificado.',
      },
    ],
    externalLinks: [
      { label: 'Investigación Camelot', url: 'https://projectcamelotportal.com/' },
    ],
    updated: 'Junio 2026',
  },
  {
    id: 'avalon',
    title: 'Project Avalon',
    subtitle: 'Foro & Comunidad Global',
    description:
      'Comunidad dedicada a la exploración de conciencia, ufología y el futuro. Fundada por Bill Ryan tras su paso por Camelot.',
    longDescription:
      'Project Avalon fue fundado en agosto de 2008 por Bill Ryan y Kerry Cassidy tras su periodo conjunto en Project Camelot. Avalon se centra en soluciones constructivas, diálogo de alta calidad y networking global para el despertar humano. Su foro es reconocido como uno de los más refinados de la red en temas de investigación alternativa, con moderadores rigurosos que mantienen la calidad del discurso. Incluye transcripciones multilingües de entrevistas clave como The Anglo-Saxon Mission, Klaus Dona y Marcel Messing.',
    cta: 'LEER MÁS',
    category: 'Comunidad',
    icon: '⛰️',
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    status: 'ACTIVO',
    evidence: [
      'Fundado agosto 2008 por Bill Ryan y Kerry Cassidy',
      'Foro de investigación de alta calidad con moderación estricta',
      'Archivo de transcripciones multilingües (EN/ES/FR/DE)',
      'The Anglo-Saxon Mission — revelación geopolítica',
    ],
    media: [
      {
        id: 'av-1',
        title: 'Bill Ryan — Introducción a Project Avalon',
        url: 'https://projectavalon.net/lang/en/about_project_camelot.html',
        duration: '30:00',
        type: 'external',
        source: 'Project Avalon',
      },
    ],
    documents: [
      {
        title: 'The Anglo-Saxon Mission',
        content:
          'Transcripción completa de la revelación de un informante militar británico sobre un plan geopolítico para provocar una guerra mundial como mecanismo de reducción poblacional controlada. Incluye detalles sobre una reunión secreta en la City de Londres donde se discutieron plazos y objetivos.',
      },
      {
        title: 'Klaus Dona — La Historia Oculta de la Humanidad',
        content:
          'Presentación visual de artefactos arqueológicos anómalos de todo el mundo que no encajan en la narrativa histórica oficial: calaveras de cristal, mapas imposibles, tecnología antigua avanzada, y escrituras pre-diluvianas.',
      },
    ],
    externalLinks: [
      { label: 'Foro Avalon', url: 'https://projectavalon.net/forum4/' },
      { label: 'Entrevistas', url: 'https://projectavalon.net/lang/en/interviews.html' },
    ],
    updated: 'Enero 2017',
  },
  {
    id: 'haarp',
    title: 'Project HAARP',
    subtitle: 'Investigación de Alta Frecuencia',
    description:
      'Programa de investigación auroral activa de alta frecuencia en Gakona, Alaska. Modificación climática y armamento electromagnético.',
    longDescription:
      'HAARP (High-frequency Active Auroral Research Program) es una instalación de investigación ionosférica financiada por la Fuerza Aérea, la Marina de EE.UU. y DARPA, ubicada en Gakona, Alaska. Oficialmente estudia la ionosfera para mejorar comunicaciones y vigilancia. Sin embargo, investigadores independientes documentan su potencial uso como arma de modificación climática, generador de ondas ELF capaces de afectar el comportamiento humano, y sistema de defensa antimisiles basado en calentamiento ionosférico dirigido. El array de antenas IRI tiene una potencia efectiva irradiada de 3.6 GW.',
    cta: 'ANÁLISIS',
    category: 'Modificación Climática',
    icon: '⚡',
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80',
    status: 'DESCLASIFICADO',
    evidence: [
      'Array IRI de 180 antenas con 3.6 GW de potencia irradiada',
      'Generación de ondas ELF para penetración submarina',
      'Correlación con anomalías climáticas documentadas',
      'Financiación por DARPA, USAF y US Navy',
      'Patentes de Bernard Eastlund sobre calentamiento ionosférico',
    ],
    media: [
      {
        id: 'haarp-1',
        title: 'HAARP — Documental Completo',
        url: 'https://www.haarp.alaska.edu/',
        duration: '01:25:00',
        type: 'external',
        source: 'Archivo',
      },
    ],
    documents: [
      {
        title: 'Especificaciones Técnicas HAARP',
        content:
          'LOCALIZACIÓN: 62.39°N, 145.15°W — Gakona, Alaska\nARRAY: 180 antenas cruzadas de dipolo (IRI)\nPOTENCIA: 3.6 GW ERP (Potencia Efectiva Irradiada)\nFRECUENCIA: 2.8 – 10 MHz (banda HF)\nCAPACIDAD: Calentamiento ionosférico dirigido a altitudes de 100-350 km\n\nPATENTE EASTLUND (US4686605A): "Método y aparato para alterar una región de la atmósfera, ionosfera y/o magnetosfera terrestre".\n\nAPLICACIONES DECLARADAS: Comunicaciones submarinas ELF, tomografía terrestre, detección de misiles OTH.\nAPLICACIONES INVESTIGADAS: Modificación climática dirigida, generación de terremotos artificiales, manipulación de corrientes de chorro atmosférico.',
      },
    ],
    externalLinks: [
      { label: 'Sitio Oficial HAARP', url: 'https://www.haarp.alaska.edu/' },
      { label: 'Patente Eastlund', url: 'https://patents.google.com/patent/US4686605A' },
    ],
    updated: '2026',
  },
  {
    id: 'mkultra',
    title: 'MK-Ultra',
    subtitle: 'Control Mental de la CIA',
    description:
      'Programa encubierto de experimentación en control mental de la CIA. Drogas, hipnosis, privación sensorial y modificación conductual (1953–1973).',
    longDescription:
      'MK-Ultra fue un programa altamente clasificado de la CIA que operó desde 1953 hasta su cierre oficial en 1973. Dirigido por Sidney Gottlieb bajo la Oficina de Inteligencia Científica, el programa incluyó 149 subproyectos documentados que involucraron experimentación humana ilegal con LSD, mescalina, barbitúricos, anfetaminas, hipnosis, privación sensorial, aislamiento, abuso verbal y sexual, y otras formas de tortura psicológica. Los experimentos se realizaron en universidades, hospitales, prisiones y bases militares de EE.UU. y Canadá. En 1973, el Director Richard Helms ordenó la destrucción de todos los archivos, pero 20.000 documentos sobrevivieron y fueron desclasificados en 1977.',
    cta: 'DESCUBRIR',
    category: 'Control Mental',
    icon: '🧠',
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    status: 'DESCLASIFICADO',
    evidence: [
      '149 subproyectos documentados por la CIA (1953-1973)',
      '20.000 documentos desclasificados en 1977',
      'Audiencias del Comité Church del Senado (1975)',
      'Testimonio de supervivientes ante el Congreso',
      'Director: Sidney Gottlieb, Oficina de Inteligencia Científica',
    ],
    media: [
      {
        id: 'mk-1',
        title: 'MK-Ultra — Documentos Desclasificados',
        url: 'https://www.cia.gov/readingroom/search/site/mkultra',
        duration: 'Archivo',
        type: 'external',
        source: 'CIA Reading Room',
      },
    ],
    documents: [
      {
        title: 'Cronología MK-Ultra',
        content:
          '1953 — Allen Dulles autoriza el proyecto MK-Ultra. Sidney Gottlieb nombrado director.\n\n1955 — Subproyecto 68: Dr. Donald Ewen Cameron inicia experimentos de "conducción psíquica" en el Allan Memorial Institute, Montreal.\n\n1963 — Inspector General de la CIA investiga irregularidades. Se restringe parcialmente.\n\n1973 — Director Richard Helms ordena destrucción masiva de archivos MK-Ultra.\n\n1975 — Comité Church del Senado expone el programa. Audiencias televisadas.\n\n1977 — Solicitud FOIA revela 20.000 documentos que sobrevivieron la purga.\n\n1994 — Advisory Committee on Human Radiation Experiments investiga conexiones con MK-Ultra.',
      },
      {
        title: 'Subproyectos Clave',
        content:
          'SUBPROYECTO 8: Uso de LSD en sujetos involuntarios.\nSUBPROYECTO 68: "Conducción psíquica" — electroshock + drogas + privación sensorial.\nSUBPROYECTO 119: Técnicas de interrogatorio avanzadas con bioelectrónica.\nSUBPROYECTO 54: Ondas acústicas de muy baja frecuencia para incapacitación.\n\nOPERACIÓN MIDNIGHT CLIMAX: Casas seguras de la CIA en San Francisco y Nueva York donde se administraba LSD a civiles sin su conocimiento a través de prostitutas reclutadas.',
      },
    ],
    externalLinks: [
      { label: 'CIA Reading Room', url: 'https://www.cia.gov/readingroom/search/site/mkultra' },
      { label: 'Audiencias del Senado', url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions' },
    ],
    updated: '2026',
  },
  {
    id: 'serpo',
    title: 'Project Serpo',
    subtitle: 'Intercambio Extraterrestre',
    description:
      'Programa de intercambio presunto entre el gobierno de EE.UU. y los Ebens del planeta Serpo en Zeta Reticuli. 12 militares enviados en 1965.',
    longDescription:
      'Project Serpo es un presunto programa de intercambio entre el gobierno de los Estados Unidos y una especie extraterrestre conocida como los "Ebens" del sistema estelar Zeta Reticuli. Según fuentes anónimas que se identificaron como miembros del Defense Intelligence Agency (DIA), en julio de 1965 doce militares estadounidenses fueron enviados al planeta Serpo en una nave Eben como parte de un acuerdo diplomático derivado del incidente de Roswell (1947). La misión estaba programada para 10 años; los tripulantes regresaron en 1978. Dos murieron en Serpo, dos decidieron quedarse, y ocho regresaron. La información fue filtrada inicialmente a través de listas de correo en 2005-2006.',
    cta: 'INVESTIGAR',
    category: 'Extraterrestre',
    icon: '👽',
    color: 'red',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80',
    status: 'CLASIFICADO',
    evidence: [
      'Fuente anónima del DIA (Defense Intelligence Agency)',
      'Misión de intercambio julio 1965 — 12 militares enviados',
      'Sistema estelar Zeta Reticuli, planeta Serpo',
      'Conexión con el incidente Roswell 1947',
      '8 tripulantes retornaron en 1978; 2 fallecidos, 2 quedaron',
    ],
    media: [
      {
        id: 'serpo-1',
        title: 'Project Serpo — Análisis Documental',
        url: 'https://projectcamelotportal.com/',
        duration: '00:50:00',
        type: 'external',
        source: 'Archivo',
      },
    ],
    documents: [
      {
        title: 'Informe de la Misión Serpo',
        content:
          'CLASIFICACIÓN: TOP SECRET / MAJIC / EYES ONLY\nFECHA DE LANZAMIENTO: Julio 1965\nDESTINO: Planeta Serpo, Sistema Zeta Reticuli (39.17 años luz)\nDURACIÓN PREVISTA: 10 años terrestres\nTRIPULACIÓN: 12 militares (10 hombres, 2 mujeres)\n\nCONDICIONES EN SERPO:\n- 2 soles (binario) — día perpetuo de ~43 horas\n- Gravedad: ligeramente menor que la Tierra\n- Atmósfera: respirable pero con mayor radiación UV\n- Población Eben estimada: 650.000 individuos\n- Sociedad sin conflictos, gobierno centralizado\n- Tecnología avanzada de propulsión por gravedad\n\nRETORNO: 1978 — 8 tripulantes regresaron. 2 fallecieron por radiación en Serpo. 2 eligieron permanecer.',
      },
    ],
    externalLinks: [
      { label: 'Serpo.org', url: 'http://www.serpo.org/' },
      { label: 'Análisis Camelot', url: 'https://projectcamelotportal.com/' },
    ],
    updated: '2026',
  },
  {
    id: 'aware',
    title: 'Awake & Aware',
    subtitle: 'Conferencias de Despertar',
    description:
      'Conferencias anuales sobre despertar de conciencia, IA cuántica, transhumanismo y redes de control exopolítico. Archivo audiovisual completo.',
    longDescription:
      'Awake & Aware es una serie de conferencias anuales organizadas por Kerry Cassidy y Project Camelot desde 2009. Estos eventos reúnen a investigadores, denunciantes y expertos de diversas disciplinas para discutir la convergencia tecnológica, el despertar de conciencia global, la inteligencia artificial cuántica, el transhumanismo, las redes satelitales ocultas, y las agendas de control exopolítico. Las conferencias han contado con ponentes como David Wilcock, Richard Hoagland, Jordan Maxwell, y múltiples insiders militares y científicos.',
    cta: 'EVENTOS',
    category: 'Conferencias',
    icon: '👁️',
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    status: 'ACTIVO',
    evidence: [
      'Serie de conferencias anuales desde 2009 hasta 2026',
      'Paneles sobre IA cuántica y superordenadores conscientes',
      'Estudios de impacto del transhumanismo en el ADN humano',
      'Mapas de redes satelitales ocultas',
      'Ponentes internacionales de alto nivel',
    ],
    media: [
      {
        id: 'aw-1',
        title: 'Awake & Aware — Archivo de Conferencias',
        url: 'https://projectcamelotportal.com/',
        duration: 'Múltiple',
        type: 'external',
        source: 'Project Camelot',
      },
    ],
    documents: [
      {
        title: 'Temáticas Principales 2009-2026',
        content:
          '● Inteligencia Artificial Cuántica y Superordenadores Conscientes\n● Destino Humano y Transhumanismo — Impacto en el ADN\n● Redes Satelitales Ocultas y Vigilancia Global\n● Control Exopolítico y Agendas de Contacto\n● Tecnologías de Energía Libre Suprimidas\n● Programas Espaciales Secretos (SSP)\n● Despertar de Conciencia y Meditación Colectiva',
      },
    ],
    externalLinks: [
      { label: 'Eventos Camelot', url: 'https://projectcamelotportal.com/' },
    ],
    updated: '2026',
  },
  {
    id: 'lookingglass',
    title: 'Looking Glass',
    subtitle: 'El Dispositivo del Tiempo',
    description:
      'Dispositivo cronovisor presuntamente en posesión del gobierno de EE.UU. Capaz de visualizar líneas temporales probables y eventos futuros.',
    longDescription:
      'El Dispositivo Looking Glass es una tecnología presuntamente derivada de ingeniería inversa extraterrestre que permite visualizar líneas temporales probables. Según el testimonio de Dan Burisch (microbiólogo que trabajó en el Área 51/S4), el dispositivo funciona mediante la creación de un campo de plasma estabilizado que actúa como ventana al espacio-tiempo. El Looking Glass habría sido desarrollado bajo supervisión del Majestic 12 (MJ-12) y fue utilizado para predecir eventos geopolíticos y astronómicos. Según Burisch, el dispositivo mostró consistentemente una convergencia de líneas temporales alrededor de 2012, tras lo cual dejó de funcionar con precisión.',
    cta: 'ANALIZAR',
    category: 'Cronología',
    icon: '🔮',
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    status: 'CLASIFICADO',
    evidence: [
      'Testimonio de Dan Burisch — microbiólogo del Área 51/S4',
      'Tecnología de ingeniería inversa ET — campo de plasma estabilizado',
      'Supervisión del Majestic 12 (MJ-12)',
      'Convergencia de líneas temporales documentada',
      'Conexión con el Cubo del Tiempo (Yellow Book)',
    ],
    media: [
      {
        id: 'lg-1',
        title: 'Dan Burisch — Testimonio Looking Glass',
        url: 'https://odysee.com/@PROJECTCAMELOT:d',
        duration: '3:20:00',
        type: 'external',
        source: 'Odysee Clásico',
      },
    ],
    documents: [
      {
        title: 'Funcionamiento del Looking Glass',
        content:
          'PRINCIPIO: Campo de plasma toroidal estabilizado que curva el espacio-tiempo local, generando una "ventana" visual a líneas temporales probables.\n\nCOMPONENTES:\n- Cilindro de contención de plasma (material clasificado)\n- Generadores de campo electromagnético de alta frecuencia\n- Sistema de enfoque basado en conciencia del operador\n- Interfaz de visualización mediante gas argón ionizado\n\nLIMITACIONES:\n- Solo muestra probabilidades, no certezas absolutas\n- Precisión degradada tras convergencia temporal de 2012\n- Requiere operador con capacidades cognitivas específicas\n\nRELACIÓN CON YELLOW BOOK:\nEl "Yellow Book" o Cubo del Tiempo es un dispositivo complementario proporcionado directamente por los Ebens que muestra la historia de la Tierra desde su perspectiva.',
      },
    ],
    externalLinks: [
      { label: 'Testimonio Burisch', url: 'https://projectcamelotportal.com/' },
      { label: 'Archivo Camelot', url: 'https://odysee.com/@PROJECTCAMELOT:d' },
    ],
    updated: '2026',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(
  (p) => ['camelot', 'bluebeam', 'avalon', 'haarp', 'mkultra', 'serpo'].includes(p.id)
);

export const ALL_PROJECTS_MAP: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p])
);

export const COLOR_MAP: Record<Project['color'], { text: string; border: string; bg: string; glow: string }> = {
  amber:   { text: 'text-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/10',   glow: 'rgba(245,158,11,0.3)' },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', glow: 'rgba(16,185,129,0.3)' },
  blue:    { text: 'text-blue-400',    border: 'border-blue-500/30',    bg: 'bg-blue-500/10',    glow: 'rgba(59,130,246,0.3)' },
  purple:  { text: 'text-purple-400',  border: 'border-purple-500/30',  bg: 'bg-purple-500/10',  glow: 'rgba(168,85,247,0.3)' },
  cyan:    { text: 'text-cyan-400',    border: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',    glow: 'rgba(34,211,238,0.3)' },
  red:     { text: 'text-red-400',     border: 'border-red-500/30',     bg: 'bg-red-500/10',     glow: 'rgba(239,68,68,0.3)' },
  rose:    { text: 'text-rose-400',    border: 'border-rose-500/30',    bg: 'bg-rose-500/10',    glow: 'rgba(251,113,133,0.3)' },
  teal:    { text: 'text-teal-400',    border: 'border-teal-500/30',    bg: 'bg-teal-500/10',    glow: 'rgba(45,212,191,0.3)' },
};
