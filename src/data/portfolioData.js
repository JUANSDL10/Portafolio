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
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

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
    title: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
    ],
  },
]

export const projects = [
  {
    name: 'Game Paradise',
    emoji: '🎮',
    type: 'Marketplace Full Stack',
    description:
      'Plataforma web de compra y venta de videojuegos tipo marketplace con autenticación, roles, carrito de compras y funcionalidades en tiempo real vía WebSockets.',
    role: 'Frontend Developer',
    year: '2025',
    features: [
      'Autenticación con roles (cliente / vendedor)',
      'Carrito de compras y sistema de pedidos',
      'Comentarios, calificaciones y favoritos',
      'WebSockets para funcionalidades en tiempo real',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Git'],
    github: 'https://github.com/Gamer-red/Mi_prograweb2',
    image: 'images/projects/game-paradise.png',
    colorKey: 'violet',
  },
  {
    name: 'Historia de los Mundiales',
    emoji: '⚽',
    type: 'Plataforma Web Informativa',
    description:
      'Plataforma web informativa con gestión de contenido multimedia, arquitectura MVC en PHP y base de datos MySQL con procedimientos almacenados, vistas y triggers.',
    role: 'Full Stack Developer',
    year: '2025',
    features: [
      'Arquitectura MVC con PHP y POO',
      'Base de datos MySQL con SQL avanzado',
      'Sistema de usuarios con autenticación y permisos',
      'Publicaciones, comentarios, filtros y búsqueda avanzada',
    ],
    tech: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS', 'MVC', 'Git'],
    github: 'https://github.com/JUANSDL/BDM',
    image: 'images/projects/historia-mundiales.png',
    colorKey: 'green',
  },
  {
    name: 'Movie Box',
    emoji: '🎬',
    type: 'Marketplace Full Stack',
    description:
      'Marketplace web móvil para compra y venta de películas con sistema multi-rol, dashboard de vendedor con reportes de ventas, autenticación JWT y Framer Motion.',
    role: 'Full Stack Developer',
    year: '2026',
    features: [
      'Sistema multi-rol independiente (Clientes / Vendedores)',
      'Dashboard con reportes de ventas y filtros avanzados',
      'Autenticación JWT y hashing de contraseñas con Bcrypt',
      'Gestión de imágenes y archivos con Multer',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt', 'Multer', 'Framer Motion', 'Git'],
    github: 'https://github.com/CATCATUWU/Movie-Box',
    image: 'images/projects/movie-box.png',
    colorKey: 'orange',
  },
  {
    name: 'Portafolio Profesional',
    emoji: '🚀',
    type: 'Sitio Web Personal',
    description:
      'Portafolio personal con React, Vite, Tailwind CSS y Framer Motion. Diseño moderno con glassmorphism, animaciones fluidas y despliegue en GitHub Pages.',
    role: 'Frontend Developer',
    year: '2024',
    features: [
      'Animaciones avanzadas con Framer Motion',
      'Diseño glassmorphism completamente responsivo',
      'Formulario de contacto integrado con Formspree',
      'Despliegue automatizado en GitHub Pages',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Git'],
    github: 'https://github.com/JUANSDL10/Portafolio',
    image: 'images/projects/portafolio.png',
    colorKey: 'blue',
  },
]
