import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
} from 'react-icons/si'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

export const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
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
      { name: 'VS Code', icon: SiVisualstudiocode },
    ],
  },
]

export const projects = [
  {
    name: 'Game Paradise',
    description: 'Marketplace web Full Stack para compra y venta de videojuegos.',
    features: [
      'React frontend',
      'Node.js backend',
      'MongoDB',
      'API REST',
      'WebSockets',
      'Roles de usuario',
      'Carrito de compras',
      'Comentarios y favoritos',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    github: 'https://github.com/Gamer-red/Mi_prograweb2',
  },
  {
    name: 'Historia de los Mundiales',
    description: 'Plataforma web informativa con gestión de contenido multimedia.',
    features: [
      'PHP MVC',
      'MySQL',
      'Sistema de usuarios',
      'Comentarios y publicaciones',
      'SQL avanzado',
      'Responsive design',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/JUANSDL/BDM',
  },
]
