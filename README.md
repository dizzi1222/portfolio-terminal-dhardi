# ⚡ portfolio-terminal-dhardi

Un portafolio web interactivo inspirado en la estética de la **terminal (CLI)**, construido con **SvelteKit 2 + Svelte 5 Runes + TypeScript + pure CSS**. Optimizado para desarrolladores que viven entre `zsh`, `kitty` y entornos `tiling` como Hyprland.

> **Live Demo:** [portfolio-terminal-dhardi.vercel.app](https://portfolio-terminal-dhardi.vercel.app)

---

## 🛠️ Stack

- **Frontend:** SvelteKit 2, Svelte 5 (Runes), TypeScript, pure CSS (sin Tailwind)
- **Build:** Vite 8, pnpm
- **Deploy:** Vercel (adapter-vercel, `nodejs22.x`)
- **i18n:** ES / EN / DE (type-safe accessor)
- **Alojamiento assets:** `/static/` (bg GIFs, avatar, modal images, favicon, cv.pdf)

## 🚀 Características

- **Navegación por teclado:** `j`/`k` scroll, `g`/`G` top/bottom, `1-7` secciones, `?` help
- **Cuarto muro:** toasts interactivos, frases flotantes (esquina inferior derecha), mensaje oculto en avatar, easter eggs
- **Tema dark/light** con toggle de background animado (GIF ↔ sólido)
- **Efectos visuales:** CRT scanlines, noise overlay SVG, starfield canvas, glitch text
- **Typewriter scramble** en hero section con citas rotantes
- **Formulario de contacto** con honeypot + rate limiting + Resend
- **Modal JSON** coloreado para certificaciones + hover interactivo en "ver detalles"
- **Tooltips aleatorios** en Design: click en cada SVG muestra su descripción sin tapar otros íconos
- **Descarga de CV** desde `/cv.pdf` (servido desde `static/`)
- **Modo claro** con colores ajustados para SVGs, tooltips y toasts
- **Reproductor musical** estilo terminal con tracks de Persona 3, Nier, Bloodborne, DMC y MGS
- **Responsive** con menú mobile adaptativo

## 📂 Estructura del Proyecto

```
portfolio-terminal-dhardi/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte     # Layout global (bg, CRT, noise, header, footer, keybindings)
│   │   └── +page.svelte        # Página principal con todas las secciones
│   ├── lib/
│   │   ├── components/         # 12 componentes (Hero, TechStack, Design, Projects,
│   │   │                       #   Interests v2 — carrusel hover + player TV, MusicPlayer…)
│   │   ├── stores/             # theme, lang, toast (Svelte 5 Runes)
│   │   ├── i18n/               # Traducciones ES/EN/DE
│   │   └── data/               # projects.ts (10 entradas) · techIcons.ts (SVGs + hover color)
│   └── app.css                 # Tema global terminal (variables, CRT, scanlines, noise)
├── static/
│   ├── projects/               # Thumbnails de las tarjetas (10 PNG)
│   ├── playlist/               # OSTs del reproductor de música
│   └── …                       # bg GIFs, avatar, favicon, CV 2026
├── svelte.config.js            # adapter-vercel
├── vite.config.ts              # Runes mode
└── package.json                # pnpm
```

## 🏃‍♂️ Desarrollo Local

```bash
pnpm install
pnpm run dev        # → http://localhost:5173
pnpm run build      # → .svelte-kit/output
pnpm run preview    # Vista previa de producción
```

## 🚢 Deploy

Conecta el repo a [Vercel](https://vercel.com) — el adapter ya está configurado en `svelte.config.js`. Vercel detecta automáticamente SvelteKit y corre `pnpm run build`.

## 🎵 Music Player — cómo funciona el audio en Vercel

El player flotante de OSTs funciona 100% client-side, sin backend ni base de datos. Así está configurado:

### Alojamiento de los temas (lo que hace que suene desde Vercel)

- Los ~30 MP3s viven **dentro del repo** en `static/playlist/*.mp3`.
- Al hacer deploy, Vercel los publica como **assets estáticos en su CDN** (misma infraestructura que el resto de `static/`), así que las URLs `/playlist/<tema>.mp3` se sirven globalmente con caché — no hay API ni storage externo.
- El playlist está hardcodeado en `src/lib/components/MusicPlayer.svelte` (`const tracks: Track[]`), apuntando a esas rutas estáticas.

### Carátulas (el paquete externo)

- Las portadas de cada tema **no son imágenes aparte**: se extraen de los tags ID3 embebidos en los propios MP3s.
- Se usa el paquete npm [`music-metadata`](https://www.npmjs.com/package/music-metadata) (v11) con `parseBlob()`:
  1. `fetch(src)` del MP3 → `blob`
  2. `parseBlob(blob)` → lee los metadatos ID3
  3. La imagen de `metadata.common.picture` se convierte en un `objectURL` y se muestra como cover
- Hay caché en memoria (`coverCache`) para no re-parsear al volver a un tema.

### Controles y reproducción

- **Media Session API**: `navigator.mediaSession` expone play/pause/prev/next → funcionan las teclas multimedia del SO (auriculares, teclado, lockscreen).
- Atajos de teclado (via `<svelte:window>`): `m` abre/cierra el player, `Space` play/pause, `←`/`→` cambian de tema.
- Detalles: autoplay al abrir, volumen fijo `0.15`, barra de progreso clickeable (seek), se pausa al cerrar o minimizar.

## 📜 Licencia

MIT
