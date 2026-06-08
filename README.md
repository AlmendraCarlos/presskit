# ALMENDR4C4RLOS — Press Kit Website

Sitio estático (Vite + React + TypeScript + Tailwind v4) — DJ de Techno y Melodic Techno.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El output queda en `dist/`. 100% estático, listo para Vercel, Netlify o GitHub Pages.

## Deploy

- **Vercel / Netlify**: importar el repo, framework "Vite", build `npm run build`, output `dist`.
- **GitHub Pages**: subir el contenido de `dist/` a la rama `gh-pages`. El `base: "./"` en `vite.config.ts` ya está configurado para rutas relativas.

## Estructura

- `src/App.tsx` — Single-page app con todas las secciones (Hero, About, Sets, Gallery, Press, Booking).
- `src/i18n.tsx` — Diccionario ES/EN + switcher.
- `public/media/` — imágenes (hero, about, galería).
- `public/press/` — biografía PDF (ES + EN), ZIP de fotos y press kit completo.
