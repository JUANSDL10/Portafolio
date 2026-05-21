# Portafolio — Juan Silva

Portafolio profesional de **Juan Silva** (Desarrollador Full Stack JR), construido con React, Vite, Tailwind CSS y Framer Motion.

**Sitio en producción:** [https://JUANSDL10.github.io/Portafolio](https://JUANSDL10.github.io/Portafolio)

## Requisitos

- Node.js 18+
- npm 9+

## Instalación y desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/Portafolio/` (Vite usa `base: '/Portafolio/'`).

## Formulario de contacto (Formspree)

1. Crea un formulario en [formspree.io](https://formspree.io).
2. En `src/components/Contact.jsx`, reemplaza el placeholder:

```html
action="https://formspree.io/f/tu_enlace_aqui"
```

por tu ID real, por ejemplo:

```html
action="https://formspree.io/f/abcdefgh"
```

## CV descargable

Coloca tu archivo en:

```
public/CV_Juan_Silva.pdf
```

El botón **Descargar CV** en Hero apunta a esa ruta usando la base de Vite.

## Despliegue en GitHub Pages

```bash
npm run deploy
```

Esto ejecuta `predeploy` (build) y publica la carpeta `dist` en la rama `gh-pages`.

### Configuración en GitHub

1. Repositorio → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `gh-pages` / carpeta `/ (root)`

## Estructura principal

```
├── public/
│   ├── CV_Juan_Silva.pdf
│   └── 404.html
├── src/
│   ├── components/
│   ├── data/portfolioData.js
│   └── utils/scrollToSection.js
├── package.json
└── vite.config.js
```

## Navegación

No se usa React Router. Las secciones se enlazan por ID (`#home`, `#about`, `#skills`, `#projects`, `#experience`, `#contact`) con scroll suave (CSS + utilidad JS).
