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
    name: 'Portafolio Profesional',
    description: 'Portafolio personal con React, Vite y despliegue automatizado en GitHub Pages.',
    features: [
      'React + Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Navegación por anclas (#sections)',
      'Formulario Formspree',
      'Deploy con gh-pages',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/JUANSDL10/Portafolio',
  },
]
