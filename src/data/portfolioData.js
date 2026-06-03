import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiGit,
  SiCplusplus,
  SiThreedotjs,
  SiBlender,
  SiUnrealengine,
  SiFigma,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaArrowRight, FaGithub, FaCube, FaPalette } from 'react-icons/fa'

export const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React.js', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'PHP', icon: SiPhp },
      { name: 'APIs REST', icon: FaArrowRight },
    ],
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Lenguajes & Gráficos',
    items: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'OpenGL / GLSL', icon: FaCube },
      { name: 'Three.js / WebGL', icon: SiThreedotjs },
    ],
  },
  {
    title: 'Arte 3D & Motores',
    items: [
      { name: 'Blender', icon: SiBlender },
      { name: 'Maya', icon: FaCube },
      { name: 'ZBrush', icon: FaCube },
      { name: 'Unreal Engine 5', icon: SiUnrealengine },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Figma', icon: SiFigma },
      { name: 'Photoshop', icon: FaPalette },
    ],
  },
]

// Categorías para los filtros de la grilla colectiva
export const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'web', label: 'Web Full Stack' },
  { key: 'games', label: 'Videojuegos' },
  { key: 'art3d', label: 'Arte 3D' },
  { key: 'ar', label: 'Realidad Aumentada' },
]

const IMG = 'images/projects'

export const projects = [
  // ─────────────────────────── WEB FULL STACK ───────────────────────────
  {
    slug: 'game-paradise',
    name: 'Game Paradise',
    emoji: '🎮',
    category: 'web',
    type: 'Marketplace MERN',
    role: 'Full Stack Developer',
    year: '2025',
    colorKey: 'violet',
    summary:
      'Marketplace enfocado 100% en la compra y venta de videojuegos, con autenticación por roles, carrito de compras y comunicación en tiempo real.',
    description:
      'Plataforma web tipo marketplace de nivel profesional dedicada exclusivamente al comercio de videojuegos. Construida sobre el stack MERN, integra un sistema de autenticación robusto, segregación estricta de roles de usuario y comunicación interactiva bidireccional en tiempo real mediante WebSockets.',
    features: [
      'Autenticación con roles y middleware para diferenciar flujos, paneles y acciones entre perfiles de cliente y vendedor.',
      'Pipeline completo de carrito y gestión de pedidos: procesamiento de transacciones, persistencia en base de datos y rastreo del estado de las órdenes.',
      'Módulos de interacción: comentarios, sistema de calificación con estrellas y listas de favoritos personales.',
      'Canales persistentes vía WebSockets para actualizaciones instantáneas de inventario y notificaciones del sistema sin recarga.',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'APIs REST', 'Git'],
    links: {
      github: 'https://github.com/Gamer-red/Mi_prograweb2',
      youtube: 'https://youtu.be/P8hSvkwzt1Y',
    },
    gallery: [
      { src: `${IMG}/web/GAME PARADISE/Captura de pantalla 2025-10-23 171957.png`, caption: 'Catálogo de videojuegos: render de componentes React consumiendo la API REST.' },
      { src: `${IMG}/web/GAME PARADISE/Captura de pantalla 2025-10-23 172009.png`, caption: 'Ficha de producto con calificación por estrellas y gestión de favoritos.' },
      { src: `${IMG}/web/GAME PARADISE/Captura de pantalla 2025-10-23 172020.png`, caption: 'Carrito de compras y flujo de pedido persistido en MongoDB.' },
      { src: `${IMG}/web/GAME PARADISE/catalogo.jpg`, caption: 'Grilla de catálogo con filtros por categoría y búsqueda.' },
      { src: `${IMG}/web/GAME PARADISE/reporte.jpg`, caption: 'Panel de vendedor: reporte de ventas e inventario actualizado por WebSockets.' },
    ],
  },
  {
    slug: 'movie-box',
    name: 'Movie Box',
    emoji: '🎬',
    category: 'web',
    type: 'Marketplace MERN',
    role: 'Full Stack Developer',
    year: '2026',
    colorKey: 'orange',
    summary:
      'Marketplace enfocado 100% en películas y streaming, con sistema multi-rol, dashboard de ventas, autenticación JWT y animaciones con Framer Motion.',
    description:
      'Plataforma web móvil tipo marketplace dedicada a la compra, venta y descubrimiento de películas. Proyecto independiente de Game Paradise: comparte una arquitectura MERN similar pero con vistas, enrutamiento y dominio propios orientados al streaming y la adquisición de cine.',
    features: [
      'Sistema multi-rol independiente para Clientes y Vendedores, con flujos y paneles diferenciados.',
      'Dashboard de negocio para vendedores con reporte de ventas y filtros avanzados por fechas.',
      'Seguridad mediante hashing de contraseñas con Bcrypt y autenticación basada en tokens JWT.',
      'Carga de archivos multimedia e imágenes de perfil/productos con Multer; interfaz animada con Framer Motion.',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt', 'Multer', 'Framer Motion', 'Git'],
    // Movie Box no tiene video publicado: se omite el enlace de YouTube
    // (no se duplica el de Game Paradise). El detalle muestra "Demo en video: Próximamente".
    links: {
      github: 'https://github.com/CATCATUWU/Movie-Box',
    },
    videoComingSoon: true,
    gallery: [
      { src: `${IMG}/web/movie box/landing page.png`, caption: 'Landing page con animaciones fluidas en Framer Motion.' },
      { src: `${IMG}/web/movie box/producto.jpg`, caption: 'Ficha de película: detalle, valoraciones y acción de compra.' },
      { src: `${IMG}/web/movie box/registro de usuarios.jpg`, caption: 'Registro multi-rol con hashing Bcrypt y autenticación JWT.' },
      { src: `${IMG}/web/movie box/ventas.jpg`, caption: 'Dashboard de vendedor: reporte de ventas con filtros por fecha.' },
    ],
  },
  {
    slug: 'historia-mundiales',
    name: 'Historia de los Mundiales',
    emoji: '⚽',
    category: 'web',
    type: 'Plataforma Web (PHP / MySQL)',
    role: 'Full Stack Web Developer',
    year: '2025',
    colorKey: 'green',
    summary:
      'Plataforma informativa con gestión de contenido multimedia, backend PHP con arquitectura MVC y base de datos MySQL con SQL avanzado.',
    description:
      'Plataforma web informativa centrada en la historia de los mundiales de fútbol, con gestión de contenido multimedia y un backend tradicional robusto. Construida con PHP bajo arquitectura MVC y POO, sobre un modelo relacional MySQL diseñado con procedimientos almacenados, vistas, funciones y triggers.',
    features: [
      'Arquitectura MVC en PHP aplicando programación orientada a objetos.',
      'Base de datos MySQL con SQL avanzado: procedimientos almacenados, vistas, funciones y triggers.',
      'Sistema de usuarios y administrador con autenticación y control de permisos.',
      'Publicaciones, comentarios, calificaciones, filtros y búsqueda sobre el contenido.',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'MVC', 'POO', 'Git'],
    links: {
      github: 'https://github.com/JUANSDL/BDM',
    },
    gallery: [
      { src: `${IMG}/web/historia en la cancha/Captura de pantalla 2026-06-03 140753.png`, caption: 'Portada informativa con gestión de contenido multimedia.' },
      { src: `${IMG}/web/historia en la cancha/Captura de pantalla 2026-06-03 140811.png`, caption: 'Listado de publicaciones con búsqueda y filtros (backend PHP MVC).' },
      { src: `${IMG}/web/historia en la cancha/Captura de pantalla 2026-06-03 140918.png`, caption: 'Panel de administración: usuarios y permisos sobre MySQL.' },
    ],
  },

  // ─────────────────────────── VIDEOJUEGOS ───────────────────────────
  {
    slug: 'myth-cup',
    name: 'Myth Cup',
    emoji: '🏆',
    category: 'games',
    type: 'Videojuego Multijugador (PC)',
    role: 'Frontend & Backend Developer / 3D Artist',
    year: '2026',
    colorKey: 'blue',
    summary:
      'Videojuego multijugador en línea construido en Unreal Engine 5 con arquitectura Lobby-Hosting, replicación de red y arte 3D propio.',
    description:
      'Plataforma competitiva multijugador en tiempo real construida bajo una estructura de Lobby-Hosting en entornos 3D optimizados, con foco en mecánicas avanzadas de replicación de red y un ecosistema sólido de marketing digital. El arte 3D del juego (personajes y assets) fue modelado, retopologizado y riggeado de forma propia.',
    features: [
      'Arquitectura de red: sesiones (Create/Search/Join Host) y sincronización precisa de movimientos, animaciones, daño y estados globales mediante el servidor.',
      'Mecánicas de combate: inventario funcional con intercambio dinámico de armas, daño diferenciado y power-ups 3D de velocidad y salud.',
      'Dirección de arte y optimización: World Partition para gestionar iluminación, texturas y follaje denso en mapas mixtos (interiores/exteriores).',
      'Pipeline 3D combinado en Blender, Maya y ZBrush: esculpido digital, retopología y rigging profesional de los personajes.',
    ],
    tech: ['Unreal Engine 5', 'C++', 'Blueprints', 'Blender', 'Maya', 'ZBrush', 'Figma', 'Photoshop'],
    links: {
      instagram: 'https://www.instagram.com/myth.cup?igsh=MXZyYm1hcDU1a2dkaA==',
    },
    gallery: [
      { src: `${IMG}/juegos/MYTHCUP/poster.jfif`, caption: 'Póster oficial — Myth Cup, multijugador en línea para PC.' },
      { src: `${IMG}/juegos/MYTHCUP/esenario.jfif`, caption: 'Escenario 3D optimizado con World Partition en Unreal Engine 5.' },
      { src: `${IMG}/modelado y animacion/mythcup/Captura de pantalla 2026-04-08 111140.png`, caption: 'Personaje integrado en motor: materiales y rig en tiempo real.' },
      { src: `${IMG}/modelado y animacion/mythcup/Captura de pantalla 2026-04-08 111203.png`, caption: 'Pase de animación y sincronización de estados por red.' },
      { src: `${IMG}/modelado y animacion/mythcup/atsest/Captura de pantalla 2026-03-01 193220.png`, caption: 'Asset test: validación de escala y colisiones en el lobby.' },
      { src: `${IMG}/modelado y animacion/mythcup/atsest/Captura de pantalla 2026-03-01 193249.png`, caption: 'Asset test: iluminación y sombras dinámicas.' },
      { src: `${IMG}/modelado y animacion/mythcup/atsest/Captura de pantalla 2026-03-01 193618.png`, caption: 'Asset test: composición de cámara en tercera persona.' },
    ],
  },
  {
    slug: 'droid-party',
    name: 'Droid Party',
    emoji: '🤖',
    category: 'games',
    type: 'Videojuego Web 3D',
    role: 'Full Stack Developer',
    year: '2025',
    colorKey: 'cyan',
    summary:
      'Videojuego web 3D con renderizado en el navegador, multijugador local en pantalla dividida y físicas de colisión en tiempo real.',
    description:
      'Videojuego interactivo en entornos web que integra un sistema de renderizado tridimensional dinámico, multijugador local en pantalla dividida y lógica física de colisiones en tiempo real, todo ejecutándose directamente en el navegador mediante aceleración gráfica.',
    features: [
      'Gráficos 3D en web: cómputo de luces, sombras y texturas en el navegador con librerías nativas de aceleración gráfica.',
      'Pantalla dividida (split-screen): múltiples cámaras simultáneas en un único canvas para gameplay cooperativo/competitivo local.',
      'Sistema matemático de detección de colisiones complejas entre los droides y los elementos del mapa costero.',
    ],
    tech: ['HTML5', 'JavaScript', 'WebGL', 'Three.js', 'CSS3'],
    links: {
      youtube: 'https://youtu.be/Pn8cWczWwqs',
    },
    gallery: [
      { src: `${IMG}/juegos/graficas web/Captura de pantalla 2026-06-03 131905.png`, caption: 'Render 3D en el navegador con Three.js y WebGL.' },
      { src: `${IMG}/juegos/graficas web/Captura de pantalla 2026-06-03 131922.png`, caption: 'Multijugador local en pantalla dividida (split-screen).' },
    ],
  },
  {
    slug: 'recorrido-virtual',
    name: 'Recorrido Virtual 3D',
    emoji: '🌐',
    category: 'games',
    type: 'Motor Gráfico Nativo',
    role: 'C++ & OpenGL Developer',
    year: '2025',
    colorKey: 'teal',
    summary:
      'Motor gráfico tridimensional desarrollado desde cero en C++ y OpenGL, con terreno por heightmaps, shaders GLSL y ciclo día/noche.',
    description:
      'Entorno tridimensional de simulación realista desarrollado desde cero sin motores comerciales, incorporando sombreado personalizado y físicas de navegación complejas, gestionado a bajo nivel mediante WinAPI.',
    features: [
      'Renderizado de terreno dinámico: relieve geográfico generado con heightmaps y técnicas avanzadas de multitexturizado.',
      'Iluminación por shaders: luz ambiental, difusa y especular calculada en tiempo real con código nativo GLSL.',
      'Ciclo de tiempo matemático: bóveda celeste (skydome) con transiciones día/noche en proporción 3:1.',
      'Navegación dual y colisiones: alternancia entre primera persona y vehículo volador en 3 ejes con cámara en tercera persona y colisiones por software.',
    ],
    tech: ['C++', 'OpenGL', 'GLSL Shaders', 'WinAPI'],
    links: {
      youtube: 'https://youtu.be/_l4m-Zapyzo',
    },
    gallery: [
      { src: `${IMG}/juegos/graficas 1/Captura de pantalla 2026-06-03 132353.png`, caption: 'Terreno generado por heightmaps con multitexturizado (OpenGL).' },
      { src: `${IMG}/juegos/graficas 1/Captura de pantalla 2026-06-03 132409.png`, caption: 'Iluminación difusa/especular calculada en shaders GLSL.' },
    ],
  },

  // ─────────────────────────── REALIDAD AUMENTADA ───────────────────────────
  {
    slug: 'webar-mundial',
    name: 'Copa Mundial 2026 — WebAR',
    emoji: '📱',
    category: 'ar',
    type: 'Web Augmented Reality',
    role: 'AR Developer',
    year: '2026',
    colorKey: 'pink',
    summary:
      'Experiencia de Realidad Aumentada web sin instalación: image tracking en tiempo real, modelos 3D superpuestos y UI interactiva, accesible vía QR.',
    description:
      'Aplicación móvil interactiva sin necesidad de instalación externa, diseñada para transformar entornos físicos en experiencias inmersivas a través del procesamiento de imágenes en tiempo real directamente en el navegador.',
    features: [
      'Reconocimiento de marcadores (image tracking): algoritmos optimizados para detectar múltiples marcadores físicos independientes como triggers multimedia.',
      'Interacción inmersiva: modelos 3D optimizados (trofeos, estadios, animaciones de gol) con rendimiento fluido en navegadores móviles.',
      'Módulos interactivos: UI superpuesta con paneles de estadísticas, trivias históricas, galerías multimedia y videos promocionales.',
    ],
    tech: ['HTML5', 'JavaScript', 'CSS3', 'AR.js', 'MindAR', 'A-Frame', 'GitHub Pages'],
    links: {
      live: 'https://juansdl10.github.io/mundial-2026-ar1/',
      youtube: 'https://www.youtube.com/shorts/zIhTF0Owgy8?feature=share',
    },
    gallery: [
      { src: `${IMG}/web/procesamiento de imágenes/224aefdc-8a63-4808-b37b-7995be3f0977.jfif`, caption: 'Reconocimiento de marcador físico (image tracking) en tiempo real.' },
      { src: `${IMG}/web/procesamiento de imágenes/7ef3860b-380c-4948-9b2f-38ce1a4e8aad.jfif`, caption: 'Modelo 3D del trofeo superpuesto sobre el marcador detectado.' },
      { src: `${IMG}/web/procesamiento de imágenes/e32f9733-c648-4361-85a8-b0a9829716c0.jfif`, caption: 'UI superpuesta: panel de estadísticas y trivias interactivas.' },
    ],
  },

  // ─────────────────────────── ARTE 3D ───────────────────────────
  {
    slug: 'quetzalcoatl',
    name: 'Quetzalcóatl',
    emoji: '🐉',
    category: 'art3d',
    type: 'Personaje 3D (Myth Cup)',
    role: '3D Character Artist & Rigger',
    year: '2026',
    colorKey: 'amber',
    summary:
      'Personaje místico 3D inspirado en la deidad prehispánica, modelado y riggeado con un pipeline combinado de Blender, Maya y ZBrush.',
    description:
      'Creación completa de un personaje místico tridimensional inspirado en la deidad prehispánica para el ecosistema competitivo de Myth Cup. El flujo de trabajo combina esculpido digital, retopología y rigging profesional repartidos entre ZBrush, Maya y Blender.',
    features: [
      'Modelado y topología: optimización exhaustiva de la malla (wireframe) orientada a deformaciones limpias en la fase de rigging.',
      'Esculpido orgánico y rígido en ZBrush: balance entre la piel escamosa y los bordes duros del plumaje y la armadura ceremonial.',
      'Retopología en Maya y texturizado/shading en Blender sobre una paleta vibrante (verdes, dorados y magentas) con buena respuesta lumínica.',
      'Rigging profesional: esqueleto y pesos preparados para animación en tiempo real dentro del motor.',
    ],
    tech: ['ZBrush', 'Maya', 'Blender'],
    links: {
      youtube: 'https://youtu.be/n9rh-qAWlhE',
    },
    gallery: [
      { src: `${IMG}/juegos/MYTHCUP/quetz.jfif`, caption: 'Quetzalcóatl — render final del personaje en motor.' },
      { src: `${IMG}/modelado y animacion/mythcup/Captura de pantalla 2026-03-03 010911.png`, caption: 'Esculpido orgánico en ZBrush: piel escamosa y plumaje en alta resolución.' },
      { src: `${IMG}/modelado y animacion/mythcup/Captura de pantalla 2026-03-03 010920.png`, caption: 'Retopología en Maya: malla optimizada para deformaciones limpias.' },
      { src: `${IMG}/modelado y animacion/mythcup/Captura de pantalla 2026-03-03 010928.png`, caption: 'Texturizado y materiales en Blender: paleta verde / dorado / magenta.' },
      { src: `${IMG}/modelado y animacion/mythcup/Captura de pantalla 2026-03-03 010936.png`, caption: 'Rigging profesional: esqueleto y pesos para animación en tiempo real.' },
    ],
  },
  {
    slug: 'kappa',
    name: 'Kappa',
    emoji: '🐢',
    category: 'art3d',
    type: 'Criatura 3D (Myth Cup)',
    role: '3D Character Artist & Rigger',
    year: '2026',
    colorKey: 'emerald',
    summary:
      'Criatura 3D basada en la mitología japonesa, con retopología rigurosa, mapas de relieve y un pipeline Blender + Maya + ZBrush.',
    description:
      'Desarrollo y optimización de una criatura tridimensional basada en la mitología japonesa para su integración directa en el motor gráfico de Myth Cup. El esculpido de alto poligonaje, la retopología y el acabado de materiales se distribuyen entre ZBrush, Maya y Blender.',
    features: [
      'Retopología rigurosa: distribución poligonal que preserva los volúmenes críticos del caparazón y las extremidades para animación eficiente en tiempo real.',
      'Esculpido de superficies en ZBrush: contraste entre la anatomía orgánica (pliegues, garras, rostro) y la rigidez geométrica de sus placas de protección.',
      'Mapas de relieve: normales y bump para simular piel anfibia rugosa y un acabado metálico desgastado en la armadura.',
      'Pipeline combinado: alto poligonaje en ZBrush, retopología en Maya y shading/texturizado final en Blender.',
    ],
    tech: ['ZBrush', 'Maya', 'Blender'],
    links: {
      youtube: 'https://youtu.be/Qqr9SwoPSfo',
    },
    gallery: [
      { src: `${IMG}/modelado y animacion/mythcup/kappa1.png`, caption: 'Kappa 1 — render del personaje: vista frontal con caparazón y placas de protección.' },
      { src: `${IMG}/modelado y animacion/mythcup/kappa.png`, caption: 'Kappa 2 — pase de materiales y shading: piel anfibia y armadura metálica desgastada.' },
      { src: `${IMG}/modelado y animacion/mythcup/kappa3.png`, caption: 'Kappa 3 — vista de detalle: anatomía orgánica (garras, rostro) frente a placas rígidas.' },
      { src: `${IMG}/modelado y animacion/modelado alto poligonaje/Captura de pantalla 2025-05-07 093522.png`, caption: 'Proceso: esculpido de alto poligonaje en ZBrush (caparazón y placas).' },
      { src: `${IMG}/modelado y animacion/modelado alto poligonaje/Captura de pantalla 2025-05-11 112647.png`, caption: 'Proceso: retopología en Maya que preserva los volúmenes críticos para animar.' },
      { src: `${IMG}/modelado y animacion/modelado alto poligonaje/Captura de pantalla 2025-05-11 113256.png`, caption: 'Proceso: mapas de normales y relieve para la piel anfibia rugosa.' },
      { src: `${IMG}/modelado y animacion/modelado alto poligonaje/Captura de pantalla 2025-05-11 114410.png`, caption: 'Proceso: acabado metálico desgastado en la armadura (shading en Blender).' },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}

export function getProjectsByCategory(category) {
  if (!category || category === 'all') return projects
  return projects.filter((p) => p.category === category)
}
