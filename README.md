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
│   │   ├── components/         # 11 componentes (Header, Hero, About, TechStack, etc.)
│   │   ├── stores/             # theme, lang, toast (Svelte 5 Runes)
│   │   ├── i18n/               # Traducciones ES/EN/DE
│   │   └── data/               # Datos de proyectos (7 entradas)
│   └── app.css                 # Tema global terminal (variables, CRT, scanlines, noise)
├── static/                     # bg GIFs, avatar, favicon, modal images
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

## 📜 Licencia

MIT
