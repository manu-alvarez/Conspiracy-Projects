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
      'Investigación de fenómenos inexplicables, testimonios de denunciantes y programas espaciales clasificados. Más de 20 años de archivo multimedia completo.',
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
        title: 'Project Bluebeam — Documental Serge Monast',
        url: 'https://www.youtube.com/watch?v=2hbLpAWXxNw',
        embedUrl: 'https://www.youtube.com/embed/2hbLpAWXxNw',
        duration: '01:10:00',
        type: 'embed',
        source: 'YouTube',
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
        title: 'HAARP 1995 — Documental Completo',
        url: 'https://www.youtube.com/watch?v=6wieDZVkbNE',
        embedUrl: 'https://www.youtube.com/embed/6wieDZVkbNE',
        duration: '01:25:00',
        type: 'embed',
        source: 'YouTube',
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
        title: 'MK-Ultra — Documental Completo Desclasificado',
        url: 'https://www.youtube.com/watch?v=LQucESRF3Sg',
        embedUrl: 'https://www.youtube.com/embed/LQucESRF3Sg',
        duration: '01:28:00',
        type: 'embed',
        source: 'YouTube',
      },
      {
        id: 'mk-2',
        title: 'CIA Reading Room — Archivos MK-Ultra Originales',
        url: 'https://www.cia.gov/readingroom/search/site/mkultra',
        duration: '20.000+ documentos',
        type: 'external',
        source: 'CIA FOIA',
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
        title: 'Project Serpo — Análisis Completo del Intercambio',
        url: 'https://odysee.com/@PROJECTCAMELOT:d',
        embedUrl: 'https://odysee.com/$/embed/@PROJECTCAMELOT:d',
        duration: '01:20:00',
        type: 'embed',
        source: 'Odysee / Camelot',
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
  {
    id: 'uap-disclosure',
    title: 'UAP Disclosure',
    subtitle: 'Revelación Congresional 2023–2026',
    description:
      'El movimiento de transparencia UAP más grande de la historia. Audiencias del Congreso, denunciantes militares, sistema PURSUE y desclasificación masiva de archivos del Pentágono.',
    longDescription:
      'El Movimiento de Revelación UAP (Fenómenos Anómalos No Identificados) representa el mayor esfuerzo institucional de transparencia sobre tecnología no humana en la historia de EE.UU. En julio de 2023, el oficial de inteligencia David Grusch testificó ante el Subcomité de Supervisión de la Cámara que el gobierno posee un programa de recuperación y retroingeniería de naves de origen no humano de varias décadas. En 2024-2025, el Congreso realizó audiencias adicionales con veteranos militares que describieron encuentros con objetos transmedium. En 2026, directivas presidenciales lanzaron el sistema PURSUE del Departamento de Defensa, iniciando la desclasificación masiva de archivos — desde documentos del Project Blue Book de la Guerra Fría hasta metraje infrarrojo reciente de sensores militares (AC-130J, Golfo de Omán). En septiembre de 2026, el Pentágono emitió exenciones legales históricas permitiendo a personal militar y contratistas compartir datos clasificados UAP con AARO sin temor a represalias.',
    cta: 'AUDIENCIAS',
    category: 'Desclasificación',
    icon: '🏛️',
    color: 'amber',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80',
    status: 'ACTIVO',
    evidence: [
      'Testimonio David Grusch ante el Congreso (julio 2023) — programa de retroingeniería ET',
      'AARO: ~2.000 incidentes UAP reportados, subconjunto sin resolver',
      'Sistema PURSUE (2026): desclasificación masiva en war.gov/ufo',
      'Exenciones legales del Pentágono/ODNI para denunciantes (sept. 2026)',
      'Metraje infrarrojo AC-130J del Golfo de Omán desclasificado',
      'Coronel Karl Nell: plan de divulgación tipo Manhattan Project para 2030',
    ],
    media: [
      {
        id: 'uap-1',
        title: 'Audiencia Congreso — David Grusch (julio 2023)',
        url: 'https://www.youtube.com/watch?v=KQ7Dw-739VY',
        embedUrl: 'https://www.youtube.com/embed/KQ7Dw-739VY',
        duration: '2:45:00',
        type: 'embed',
        source: 'C-SPAN / YouTube',
      },
      {
        id: 'uap-2',
        title: 'Portal de Archivos Desclasificados PURSUE',
        url: 'https://war.gov/ufo',
        duration: 'Archivo',
        type: 'external',
        source: 'Departamento de Defensa',
      },
    ],
    documents: [
      {
        title: 'Cronología UAP Disclosure 2017–2026',
        content:
          '2017 — NYT revela programa AATIP del Pentágono. Videos "Go Fast", "Gimbal", "FLIR1" desclasificados.\n\n2020 — UAP Task Force (UAPTF) creada oficialmente bajo la US Navy.\n\n2022 — AARO (All-domain Anomaly Resolution Office) reemplaza UAPTF. Audiencias abiertas del Congreso.\n\n2023 — JULIO: David Grusch testifica bajo juramento. Revela programa de recuperación y retroingeniería de naves no humanas.\n\n2024 — "Immaculate Constellation" filtrado al Congreso. Audiencias de noviembre con Lue Elizondo.\n\n2025 — Septiembre: Audiencias de transparencia con veteranos. Rep. Luna y Burchett presionan por inmunidad legal total.\n\n2026 — MAYO: Lanzamiento del sistema PURSUE. Desclasificación masiva comienza.\n— SEPTIEMBRE: Exenciones legales ODNI para denunciantes.\n— Base de datos AARO alcanza ~2.000 incidentes reportados.',
      },
      {
        title: 'Testimonio Clave: David Grusch',
        content:
          'CARGO: Ex-oficial de inteligencia USAF, NGA, NRO\nCLASIFICACIÓN DE TESTIMONIO: Bajo juramento ante el Congreso\n\nAFIRMACIONES PRINCIPALES:\n1. EE.UU. posee programa multi-décadas de recuperación de naves de origen no humano\n2. Se han recuperado "biológicos no humanos" de sitios de impacto\n3. Represalias documentadas contra denunciantes previos\n4. Programas operan fuera de supervisión congresional\n5. Contratistas de defensa privados involucrados en retroingeniería\n\nCORROBORACIÓN:\n- Inspector General de la Comunidad de Inteligencia clasificó denuncia como "urgente y creíble"\n- Coronel Karl Nell confirmó públicamente la credibilidad de Grusch\n- Múltiples testigos adicionales identificados en sesiones clasificadas',
      },
    ],
    externalLinks: [
      { label: 'AARO — Sitio Oficial', url: 'https://www.aaro.mil/' },
      { label: 'Archivos PURSUE', url: 'https://war.gov/ufo' },
      { label: 'Audiencia C-SPAN Grusch', url: 'https://www.youtube.com/watch?v=KQ7Dw-739VY' },
      { label: 'The Sol Foundation', url: 'https://thesolfoundation.org/' },
    ],
    updated: 'Octubre 2026',
  },
  {
    id: 'immaculate-constellation',
    title: 'Immaculate Constellation',
    subtitle: 'Programa uSAP del Pentágono',
    description:
      'Programa de Acceso Especial No Reconocido (uSAP) filtrado del Pentágono. Repositorio central de la evidencia UAP más sensible del ejército, oculto incluso de AARO.',
    longDescription:
      '"Immaculate Constellation" es un presunto Programa de Acceso Especial No Reconocido (uSAP) del Pentágono revelado públicamente a finales de 2024 a través de un documento de denuncia de aproximadamente 12 páginas proporcionado al Congreso. Según las filtraciones reportadas por el periodista Michael Shellenberger y confirmadas en audiencias congresionales, el programa actúa como un repositorio central o capa de inteligencia diseñada para capturar y aislar imágenes de alta fidelidad, datos multi-sensor y documentación de fuentes primarias sobre encuentros UAP. La existencia del programa fue introducida formalmente en el registro congresional durante la audiencia del Comité de Supervisión de la Cámara "Fenómenos Anómalos No Identificados: Exponiendo la Verdad" en noviembre de 2024, donde la Representante Nancy Mace cuestionó a testigos sobre uSAPs heredados ocultos. El Departamento de Defensa ha negado consistentemente la existencia de cualquier programa con ese nombre.',
    cta: 'FILTRACIÓN',
    category: 'uSAP / Intel',
    icon: '🔒',
    color: 'red',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    status: 'CLASIFICADO',
    evidence: [
      'Documento de denuncia de ~12 páginas entregado al Congreso (2024)',
      'Reportado por Michael Shellenberger — periodista independiente',
      'Audiencia House Oversight Committee (noviembre 2024)',
      'Representante Nancy Mace introduce evidencia en registro congresional',
      'DoD niega existencia — portavoz Sue Gough: "sin registro"',
      'Lue Elizondo testifica sobre uSAPs heredados ocultos',
    ],
    media: [
      {
        id: 'ic-1',
        title: 'Audiencia Congreso — Exposing the Truth (Nov 2024)',
        url: 'https://www.youtube.com/results?search_query=immaculate+constellation+hearing+2024',
        duration: '3:00:00',
        type: 'external',
        source: 'House Oversight Committee',
      },
    ],
    documents: [
      {
        title: 'Análisis: Immaculate Constellation',
        content:
          'CLASIFICACIÓN PRESUNTA: uSAP (Unacknowledged Special Access Program)\nRESPONSABLE: Desconocido (fuera de cadena de mando AARO)\nFUNCIÓN: Repositorio central de evidencia UAP de alta fidelidad\n\nCARACTERÍSTICAS:\n- Captura y aísla imágenes multi-sensor de encuentros UAP\n- Opera fuera de la supervisión de AARO y del Congreso\n- Datos incluyen metraje infrarrojo, radar, y sensores clasificados\n- Mantiene la evidencia más compelling separada de canales oficiales\n\nPOSICIÓN OFICIAL DoD:\n"El Departamento de Defensa no tiene registro, histórico o presente, de ningún programa o SAP denominado Immaculate Constellation" — Portavoz Sue Gough\n\nCONTEXTO LEGISLATIVO:\nH.R. 8917 (2024-2025) — Proyecto de ley para reestructurar o reemplazar AARO y dispersar responsabilidades observacionales, reflejando la fricción entre el Congreso y el establishment de defensa.',
      },
    ],
    externalLinks: [
      { label: 'Registro Congresional', url: 'https://www.govinfo.gov/' },
      { label: 'Reporte Shellenberger', url: 'https://www.public.news/' },
    ],
    updated: 'Octubre 2026',
  },
  {
    id: 'paperclip',
    title: 'Operation Paperclip',
    subtitle: 'Científicos Nazis en EE.UU.',
    description:
      'Programa secreto de inteligencia (1945-1959) que reclutó científicos, ingenieros y técnicos nazis para trabajar en rocketería, aviación y guerra química durante la Guerra Fría.',
    longDescription:
      'Operation Paperclip fue un programa de inteligencia clasificado de Estados Unidos, operado principalmente por la Joint Intelligence Objectives Agency (JIOA), que reclutó a más de 1.600 científicos, ingenieros y técnicos alemanes — muchos de ellos miembros o líderes del Partido Nazi y la SS — para trabajar para el gobierno estadounidense tras la Segunda Guerra Mundial. El objetivo primario era obtener una ventaja tecnológica decisiva en rocketería, aviación, guerra química y medicina aeroespacial durante la Guerra Fría temprana. La figura más emblemática fue Wernher von Braun, ex-miembro de la SS que se convirtió en director del Marshall Space Flight Center de la NASA y arquitecto principal del cohete Saturn V del programa Apolo. El programa deliberadamente falsificó y blanqueó los historiales de los científicos para eludir las directivas del presidente Truman que prohibían la inmigración de nazis activos.',
    cta: 'ARCHIVOS',
    category: 'Desclasificado',
    icon: '📎',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&q=80',
    status: 'DESCLASIFICADO',
    evidence: [
      'Más de 1.600 científicos nazis reclutados por JIOA (1945-1959)',
      'Wernher von Braun: SS → NASA → Director Saturn V / Apolo',
      'Historiales falsificados para eludir directivas presidenciales',
      'Programa incluyó especialistas en guerra química y biológica',
      'Archivos desclasificados por National Archives (NARA)',
    ],
    media: [
      {
        id: 'pc-1',
        title: 'Operation Paperclip — Documental NASA & Nazis',
        url: 'https://www.youtube.com/watch?v=nfMQHmR3sHg',
        embedUrl: 'https://www.youtube.com/embed/nfMQHmR3sHg',
        duration: '1:30:00',
        type: 'embed',
        source: 'YouTube',
      },
    ],
    documents: [
      {
        title: 'Ficha de Operación Paperclip',
        content:
          'NOMBRE: Operation Paperclip (también: Project Paperclip)\nPERIODO: 1945–1959\nAGENCIA: Joint Intelligence Objectives Agency (JIOA)\nCLASIFICACIÓN ORIGINAL: TOP SECRET\nESTATUS: DESCLASIFICADO\n\nCIENTÍFICOS CLAVE RECLUTADOS:\n- Wernher von Braun — Rocketería (V-2 → Saturn V)\n- Kurt Debus — Director Centro Espacial Kennedy\n- Hubertus Strughold — "Padre de la medicina espacial" (experimentos en Dachau)\n- Arthur Rudolph — Gerente del programa Saturn V (campo de concentración Mittelbau-Dora)\n- Walter Schreiber — General médico, investigación biológica\n\nCONTROVERSIA:\nEl programa deliberadamente blanqueó historiales nazis para eludir la directiva de Truman que prohibía la inmigración de miembros activos del NSDAP. Muchos científicos tenían conexiones directas con campos de concentración y uso de trabajo forzado.',
      },
    ],
    externalLinks: [
      { label: 'National Archives — Paperclip', url: 'https://www.archives.gov/iwg/research-papers/paperclip' },
      { label: 'CIA FOIA', url: 'https://www.cia.gov/readingroom/' },
    ],
    updated: '2026',
  },
  {
    id: 'mockingbird',
    title: 'Operation Mockingbird',
    subtitle: 'Control de Medios por la CIA',
    description:
      'Campaña clandestina de la CIA para infiltrar y controlar medios de comunicación domésticos e internacionales. Periodistas, editores y medios reclutados como activos de inteligencia.',
    longDescription:
      'Operation Mockingbird fue una campaña encubierta de la CIA iniciada a principios de los años 1950 para manipular medios de comunicación con fines de propaganda doméstica e internacional. La operación buscó reclutar periodistas, editores, y propietarios de medios como activos de inteligencia, integrándolos en las principales organizaciones de noticias para moldear la opinión pública y alinear las narrativas mediáticas con la política exterior anticomunista de EE.UU. Según las investigaciones del Comité Church del Senado (1975), la CIA tenía relaciones operativas con más de 50 organizaciones de noticias y editores estadounidenses. El periodista Carl Bernstein reportó en Rolling Stone (1977) que más de 400 periodistas estadounidenses habían mantenido relaciones secretas con la CIA durante los 25 años anteriores. La operación es citada frecuentemente como el precedente histórico de la manipulación mediática institucional.',
    cta: 'INVESTIGAR',
    category: 'Propaganda',
    icon: '🦜',
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80',
    status: 'DESCLASIFICADO',
    evidence: [
      'Comité Church del Senado (1975): CIA con 50+ organizaciones de medios',
      'Carl Bernstein (Rolling Stone 1977): 400+ periodistas con la CIA',
      'Reclutamiento de editores y propietarios de periódicos nacionales',
      'Financiación encubierta de publicaciones culturales (Congress for Cultural Freedom)',
      'Precedente histórico de manipulación mediática institucional',
    ],
    media: [
      {
        id: 'mb-1',
        title: 'Operation Mockingbird — Control Mediático CIA',
        url: 'https://www.youtube.com/watch?v=_gcCxL7hDMc',
        embedUrl: 'https://www.youtube.com/embed/_gcCxL7hDMc',
        duration: '1:00:00',
        type: 'embed',
        source: 'YouTube',
      },
    ],
    documents: [
      {
        title: 'Operation Mockingbird — Alcance Documentado',
        content:
          'INICIO: Principios de los años 1950\nAGENCIA: CIA (Directorate of Plans)\nDIRECTOR: Frank Wisner (primero), luego Cord Meyer, Richard Helms\nESTATUS: Parcialmente desclasificado\n\nMEDIOS INFILTRADOS DOCUMENTADOS:\n- The Washington Post\n- The New York Times\n- CBS News\n- Time/Life magazines\n- Newsweek\n- Associated Press\n- United Press International\n- Reuters (parcial)\n\nMECANISMOS:\n- Reclutamiento directo de periodistas como activos CIA\n- Financiación encubierta de publicaciones\n- Provisión de "historias" pre-fabricadas a medios\n- Control editorial de cobertura internacional\n- Congress for Cultural Freedom como fachada cultural\n\nFUENTES:\n- Audiencias Comité Church (1975)\n- Carl Bernstein, "The CIA and the Media", Rolling Stone (1977)\n- Documentos desclasificados FOIA',
      },
    ],
    externalLinks: [
      { label: 'Comité Church — Senado', url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions' },
      { label: 'Bernstein: CIA & the Media', url: 'https://www.carlbernstein.com/the-cia-and-the-media-rolling-stone-10-20-1977' },
    ],
    updated: '2026',
  },
  {
    id: 'prism-fiveeyes',
    title: 'PRISM / Five Eyes',
    subtitle: 'Vigilancia Masiva Global',
    description:
      'Programa de vigilancia electrónica masiva de la NSA revelado por Edward Snowden en 2013. Recolección directa de datos de Google, Apple, Microsoft y Facebook a escala global.',
    longDescription:
      'PRISM es un programa de vigilancia electrónica operado por la Agencia de Seguridad Nacional (NSA) desde 2007 bajo la administración Bush, reautorizado mediante las enmiendas FISA y el Patriot Act. El programa permite a la comunidad de inteligencia recopilar datos de comunicaciones directamente de los servidores de las principales empresas tecnológicas estadounidenses. Fue expuesto en junio de 2013 por el ex-contratista de la NSA Edward Snowden, quien filtró un vasto archivo de documentos clasificados a los periodistas Glenn Greenwald, Laura Poitras y Ewen MacAskill. Las revelaciones de Snowden expusieron la escala global de la vigilancia digital: interceptación de metadatos telefónicos, monitoreo de comunicaciones de líderes extranjeros aliados, y la colaboración de la alianza Five Eyes (EE.UU., Reino Unido, Canadá, Australia, Nueva Zelanda) para evadir restricciones legales domésticas sobre espionaje a sus propios ciudadanos.',
    cta: 'REVELAR',
    category: 'Vigilancia',
    icon: '👁️‍🗨️',
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
    status: 'DESCLASIFICADO',
    evidence: [
      'Edward Snowden: ex-contratista NSA, filtración junio 2013',
      'PRISM: recolección directa de Google, Apple, Microsoft, Facebook, Yahoo',
      'Five Eyes: EE.UU., UK, Canadá, Australia, Nueva Zelanda',
      'Programa XKeyscore: búsqueda en tiempo real del tráfico de Internet global',
      'Acuerdo UKUSA: raíz en inteligencia de señales WWII',
      'Monitoreo documentado de líderes aliados (Angela Merkel, ONU)',
    ],
    media: [
      {
        id: 'pr-1',
        title: 'Edward Snowden — Revelaciones NSA Completas',
        url: 'https://www.youtube.com/watch?v=XEVlyP4_11M',
        embedUrl: 'https://www.youtube.com/embed/XEVlyP4_11M',
        duration: '1:47:00',
        type: 'embed',
        source: 'YouTube',
      },
      {
        id: 'pr-2',
        title: 'The Intercept — Archivo Snowden Completo',
        url: 'https://theintercept.com/snowden-sidtoday/',
        duration: 'Archivo',
        type: 'external',
        source: 'The Intercept',
      },
    ],
    documents: [
      {
        title: 'Arquitectura de Vigilancia NSA/Five Eyes',
        content:
          'PROGRAMA PRISM (2007–presente)\nAGENCIA: NSA (National Security Agency)\nBASE LEGAL: FISA Amendments Act, Section 702\n\nEMPRESAS PARTICIPANTES DOCUMENTADAS:\n- Microsoft (desde 2007)\n- Yahoo (2008)\n- Google (2009)\n- Facebook (2009)\n- Apple (2012)\n- Dropbox (2012)\n\nPROGRAMAS COMPLEMENTARIOS:\n- XKeyscore: Motor de búsqueda en tiempo real del tráfico de Internet global\n- Tempora (GCHQ/UK): Interceptación de cables submarinos de fibra óptica\n- Boundless Informant: Herramienta de cuantificación de metadatos recolectados\n- Stellar Wind: Programa doméstico de interceptación sin orden judicial\n\nALIANZA FIVE EYES (FVEY):\n🇺🇸 NSA — 🇬🇧 GCHQ — 🇨🇦 CSE — 🇦🇺 ASD — 🇳🇿 GCSB\nMecanismo: Cada nación espía a los ciudadanos de las otras y comparte la información, evadiendo prohibiciones legales domésticas.',
      },
    ],
    externalLinks: [
      { label: 'The Intercept — Snowden Archive', url: 'https://theintercept.com/snowden-sidtoday/' },
      { label: 'EFF — NSA Surveillance', url: 'https://www.eff.org/nsa-spying' },
      { label: 'Citizenfour', url: 'https://citizenfourfilm.com/' },
    ],
    updated: '2026',
  },
  {
    id: 'northwoods',
    title: 'Operation Northwoods',
    subtitle: 'Propuesta de Falsa Bandera',
    description:
      'Propuestas desclasificadas del Estado Mayor Conjunto de EE.UU. (1962) para orquestar ataques terroristas de falsa bandera en suelo estadounidense para justificar una invasión de Cuba.',
    longDescription:
      'Operation Northwoods fue una serie de propuestas de operaciones militares de falsa bandera desarrolladas en 1962 por el Departamento de Defensa de EE.UU. y el Estado Mayor Conjunto durante la presidencia de John F. Kennedy. Las propuestas incluían: orquestar ataques terroristas simulados en ciudades estadounidenses, secuestrar aviones comerciales, hundir embarcaciones cerca de Cuba, fabricar ataques contra la base de Guantánamo, y culpar al gobierno de Fidel Castro para crear un pretexto público para una invasión militar de Cuba. El Presidente Kennedy rechazó categóricamente las propuestas. Los documentos fueron desclasificados en los años 1990 por la Assassination Records Review Board y son accesibles a través del National Security Archive de la Universidad George Washington. Operation Northwoods es citada como la evidencia desclasificada más clara de que sectores del gobierno estadounidense han considerado activamente operaciones de falsa bandera contra sus propios ciudadanos.',
    cta: 'DESCLASIFICADO',
    category: 'Falsa Bandera',
    icon: '🏴',
    color: 'red',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80',
    status: 'DESCLASIFICADO',
    evidence: [
      'Propuesta del Estado Mayor Conjunto (Joint Chiefs of Staff), marzo 1962',
      'Presidente JFK rechazó categóricamente las operaciones',
      'Desclasificado por Assassination Records Review Board (1990s)',
      'Documento completo accesible en National Security Archive',
      'Propuestas incluían secuestro de aviones y ataques terroristas simulados',
    ],
    media: [
      {
        id: 'nw-1',
        title: 'Operation Northwoods — Johnny Harris Explicado',
        url: 'https://www.youtube.com/watch?v=e21XPKSZGO8',
        embedUrl: 'https://www.youtube.com/embed/e21XPKSZGO8',
        duration: '15:28',
        type: 'embed',
        source: 'YouTube',
      },
      {
        id: 'nw-2',
        title: 'Documento Original Desclasificado (PDF)',
        url: 'https://nsarchive2.gwu.edu/news/20010430/northwoods.pdf',
        duration: 'Documento',
        type: 'external',
        source: 'National Security Archive',
      },
    ],
    documents: [
      {
        title: 'Propuestas Northwoods (extracto desclasificado)',
        content:
          'MEMORANDO PARA: Secretario de Defensa\nDE: Estado Mayor Conjunto (Joint Chiefs of Staff)\nASUNTO: Justificación para intervención militar en Cuba\nFECHA: 13 de marzo de 1962\nCLASIFICACIÓN ORIGINAL: TOP SECRET SPECIAL HANDLING — NOFORN\n\nOPERACIONES PROPUESTAS:\n1. Provocar incidentes en la Base Naval de Guantánamo — ataques simulados, sabotaje, disturbios\n2. "Remember the Maine": Hundir un navío estadounidense cerca de Cuba y culpar al régimen de Castro\n3. Campaña de terror en ciudades de Florida — bombas coordinadas, arrestos de "agentes cubanos"\n4. Secuestro de aviones comerciales — desvíos y "ataques" atribuidos a Cuba\n5. Destrucción de un dron pintado como vuelo charter comercial sobre aguas cubanas\n6. Fabricar lista de víctimas civiles para maximizar indignación pública\n\nRESULTADO:\nPresidente Kennedy rechazó TODAS las propuestas.\nGeneral Lyman Lemnitzer (Chairman JCS) fue removido de su cargo poco después.\n\nDESCLASIFICACIÓN:\nAssassination Records Review Board, finales de los 1990s.\nArchivo completo: National Security Archive, GWU.',
      },
    ],
    externalLinks: [
      { label: 'Documento Original (PDF)', url: 'https://nsarchive2.gwu.edu/news/20010430/northwoods.pdf' },
      { label: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' },
    ],
    updated: '2026',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(
  (p) => ['camelot', 'bluebeam', 'avalon', 'haarp', 'mkultra', 'serpo', 'uap-disclosure', 'immaculate-constellation', 'prism-fiveeyes'].includes(p.id)
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
