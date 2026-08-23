export type Lang = 'es' | 'en' | 'de';

export type I18nDict = typeof i18n['es'];

const ghIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';

export const i18n = {
  es: {
    header: { available: 'Disponible' },
    hero: { tagline: 'Desarrollador MERN Stack | Arch Linux Enthusiast | Neovim + LazyVim', base: 'Base República Dominicana (UTC-4)', available: 'Open to work', downloadCv: '⬇ Descargar CV' },
    sections: { hero: '~/', experience: '~/experience', about: '~/about', tech: '~/tech', design: '~/design', projects: '~/projects', interests: '~/interests', certs: '~/certs', contact: '~/contact' },
    sectionTitles: { experience: 'Experiencia', about: 'About', tech: 'Tech Stack', design: 'Design', projects: 'Projects', interests: 'Intereses', certs: 'Certificaciones', contact: 'Contact' },
    exp: {
      heading: 'Experiencia',
      subtitle: 'Mi trayectoria profesional',
      job1: { badge: 'Retail', title: 'Asistente / Cajero', company: 'La Sirena · República Dominicana', period: '2025 — 2026', desc: 'Mi primer contacto con el mundo laboral formal. Trabajar en uno de los supermercados más grandes del país me enseñó cómo funciona realmente un negocio desde adentro: logística, inventario, atención al cliente bajo presión. Esa experiencia fue el combustible que encendió mi decisión de construir una carrera en tecnología.' },
      job2: { badge: 'Educación', title: 'Bootcamp Full-Stack', company: 'Cincinnatus · República Dominicana', period: '2024 — 2026', desc: 'El motor de arranque de mi carrera como programador. Cincinnatus fue el punto de inflexión donde pasé de ser un curioso autodidacta a un desarrollador en formación, trabajando en proyectos reales en equipo.' },
      job3: { badge: 'Actual', title: 'MERN Stack Developer · DevOps', company: 'Freelance / Proyectos Propios · Arch Linux · Neovim', period: '2024 — Presente', desc: 'Desarrollo full-stack con el stack MERN (MongoDB, Express, React, Node.js). Arquitecturas limpias, APIs RESTful, despliegues con Docker y automatización de flujos. Mi entorno: Arch Linux con Hyprland, Neovim (LazyVim) como editor principal.' },
      job4: { badge: 'Lead Tech', title: 'Marketplace de Talento [PTD-Talento]', company: 'Cincinnatus Institute of Craftsmanship, INC.', period: 'Ene — Oct 2026', desc: 'Desarrollo del proyecto "Marketplace de Talento" [PTD-Talento] con un equipo de 4 desarrolladores. Protagonisé como Lead Tech: agilicé y coordiné exitosamente el desarrollo del producto, actualmente en espera de la pasantía.' }
    },
    interests: {
      personalLabel: '// Lo que disfruto',
      setupLabel: '// Setup · Dotfiles',
      futureBadge: 'Future Interest',
      gamingCaption: 'game night', gamingTitle: 'Gaming', gamingDesc: 'Desde que tengo memoria amo los videojuegos. Empezó con una Game Boy — hoy tengo menos tiempo que antes, pero lo disfruto igual que de niño. Red Dead Redemption II y Cyberpunk 2077 siempre vienen a la mente.',
      animeCaption: 'evening watch', animeTitle: 'Anime & Manga', animeDesc: 'Disfruto ver anime, series o películas con mi esposa — últimamente empecé a re-ver Naruto con ella.',
      tvCaption: 'now streaming', tvTitle: 'TV · Film & Series', tvDesc: 'Cine y series por separado — no es lo mismo: del thriller psicológico al sci-fi. Mr Robot marcó un antes y un después.',
      musicCaption: 'now playing', musicTitle: 'Music', musicDesc: 'Siempre encendida — antes escuchaba más música underground, últimamente le he agarrado gusto a artistas populares, sumando variedad a mi playlist.',
      photographyCaption: 'through the lens', photographyTitle: 'Photography', photographyDesc: 'Me gusta moverme y capturar momentos con mi teléfono, o con mi dron cuando viajo.',
      travelCaption: 'boarding soon', travelTitle: 'Travel', travelDesc: 'Me gusta ver la belleza del mundo en primera persona — tengo planeado conocer más del planeta.',
      drawingCaption: 'tablet & pen', drawingTitle: 'Digital Drawing', drawingDesc: 'Empecé a desarrollar el dibujo de niño. Terminé fusionando tecnología con dibujo y ahora dibujo principalmente en mi tablet.',
      scriptsCardCaption: './system_control.sh', scriptsCardTitle: 'System Control', scriptsCardDesc: 'Menú Rofi con 30+ herramientas: gestión de red, bluetooth, audio, power management, screen capture, modo juego, night mode y más.',
      scriptsCaption: '$ ./automate.sh --all', scriptsTitle: 'Scripts & Automation', scriptsDesc: '50+ scripts propios: save-point system para rollback de config, scrcpy connect, widget launcher, power modes, LimpiarCache, Gitaliases y más. Automatización total del ecosistema Arch.',
      blueprintCaption: 'extract_tokens.sh', blueprintTitle: 'Blueprints & Tokens', blueprintDesc: 'Extractor de design tokens desde imágenes: paletas de colores, CSS custom properties, prompts para IA. De la referencia visual a código listo para producción.',
      galleryCaption: 'cat gallery.md', galleryTitle: 'Galería del Setup', galleryDesc: 'Screenshots reales del desktop: Rofi System Control, Fastfetch, Arch Rice y el ecosistema visual completo de dotfiles-dizzi.',
      galleryCta: 'Ver repositorio de dotfiles →'
    },
    tech: {
      hint: 'Haz clic en cualquier tecnología para saber más',
      'Node.js': 'Runtime JS del lado del servidor. Lo uso para construir APIs RESTful y backends escalables con Express.',
      'Railway': 'Plataforma cloud para backends. Deploy rápido con PostgreSQL integrado.',
      'Express': 'Framework minimalista para Node.js. Mi elección para crear servidores, middlewares y APIs limpias.',
      'React': 'Biblioteca de UI declarativa. Construyo interfaces interactivas con componentes y hooks reutilizables.',
      'MongoDB': 'Base de datos NoSQL. La uso como principal almacenamiento en mis proyectos MERN con Mongoose.',
      'PostgreSQL': 'BD relacional open-source. La uso para proyectos que requieren esquemas estructurados y consultas SQL avanzadas.',
      'Python': 'Lenguaje multipropósito. Automatización, scripting rápido y prototipado de herramientas internas.',
      'Git': 'Control de versiones esencial. Flujo con feature branches, rebase interactivo y commits semánticos.',
      'Arch': 'Mi daily driver. Arch Linux + Hyprland, todo configurado desde cero con dotfiles propios.',
      'Neovim': 'Editor principal con LazyVim. Plugins personalizados, LSP para TS/JS, y flujo 100% teclado.',
      'TypeScript': 'Tipado estático para JS. Código más robusto y mantenible en backend y frontend.',
      'Docker': 'Contenedores para desarrollo y producción. Entornos reproducibles y despliegues consistentes.',
      'Figma': 'Diseño de interfaces y prototipado. Design systems, componentes reutilizables y colaboración en equipo.',
      'JavaScript': 'Lenguaje del navegador y del backend. Lo uso para lógica interactiva, APIs y scripting.',
      'Tailwind CSS': 'Framework de CSS utility-first. Prototipado rápido, consistencia visual y sin CSS repetitivo.',
      'Render': 'Plataforma de cloud hosting. Despliego apps full-stack con despliegue continuo desde Git.',
      'Vercel': 'Cloud platform para frontends. Deploy de apps React/Next.js con serverless functions.',
      'Google Cloud': 'Cloud Run para backends serverless, App Engine para frontends con dominios .com. Cloud SQL, gcloud CLI y despliegue con domains RUN.app / APPSPOT.com.',
      'Svelte': 'Framework reactivo. Compila a JS optimizado, sin virtual DOM. Lo uso para apps rápidas y ligeras.',
      'Astro': 'Generador de sitios estáticos. Islands architecture, cero JS por defecto, ideal para contenido.',
      'Google Stitch': 'Prototipado con IA. Generación rápida de mockups y exploración de variantes de diseño.',
      'Design System': 'Sistemas de diseño atómicos con Tailwind, Storybook y consistencia visual garantizada.',
      'Prototyping': 'Prototipado interactivo desde wireframes low-fi hasta high-fi en Figma.',
      'Canvas': 'Canvas de diseño e ilustración. Maquetación de interfaces UI, storytelling visual y exploración de layouts.',
      'VoltBuilder': 'Build service para apps nativas Android/iOS desde web apps (Cordova/Capacitor). APK sin SDKs locales ni Mac requerido.',
      'Material UI': 'Biblioteca de componentes React basada en Material Design. UI profesional con temas, grids y accesibilidad.',
      'React Router': 'Enrutamiento declarativo para React. Navegación SPA con loaders, acciones y data fetching.',
      'Bootstrap': 'Framework CSS con componentes preconstruidos. Sistema de rejilla, utilidades responsive y tematización.',
      'OpenCode': 'Asistente de código con memoria persistente (Engram), Claude, OpenRouter, Antigravity y herramientas MCP (n8n, archivos, terminal). Mejor que Claude Desktop.'
    },
    design: {
      hint: 'Diseño UX/UI — Prototipado con Google Stitch, maquetado en Figma. Creación y mantenimiento de Design Systems (CIC-Styles).',
      figma: 'Figma',
      stitch: 'Google Stitch',
      ds: 'Design System',
      proto: 'Prototyping',
      canvas: 'Canvas'
    },
    about: {
      name: 'Diego Härdi', role: 'DevOps & Software Engineer',
      born: '🇩🇴 San Pedro de Macorís, RD', lives: 'Jarabacoa, RD',
      passport: 'Suizo', os: 'Arch Linux · Hyprland', editor: 'Neovim · LazyVim',
      langs: 'ES · EN (B2) · DE (A2)',
      bio: 'Por el día construyo apps full-stack con el stack MERN. Por la noche estoy sumergido en configuraciones de Neovim, optimizando mi Arch Linux Hyprland o automatizando flujos que no deberían existir. Hablo TypeScript, JavaScript, Lua, y el idioma de los sistemas limpios y mantenibles.',
      label: { name: 'Nombre', role: 'Rol', born: 'Nacido', lives: 'Vive', passport: 'Pasaporte', os: 'OS', editor: 'Editor', langs: 'Idiomas' }
    },
    projects: {
      code: 'View Code', live: 'Live Preview', private: 'Private', open: 'Open project',
      details: 'View details', back: '← Back to start',
      status: 'Status', category: 'Category', team: 'Team size',
      year: 'Year', completed: 'Completed', inProgress: 'In development',
      solo: 'Solo',
      footer: 'Designed and developed by Diego Härdi . Every line of code, with intention and affection.'
    },
    contact: {
      available: 'Disponible',
      cv: { view: '⬇ Ver CV', download: '⬇ Descargar PDF', modalText: 'Descarga mi currículum para ver mi experiencia completa, educación y habilidades técnicas.', downloadButton: '⬇ Descargar CV (PDF)' },
      form: {
        namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu@email.com', emailLabel: 'Email',
        messagePlaceholder: 'Escribe tu mensaje...', messageLabel: 'Mensaje',
        submit: '📨 Enviar mensaje', sending: '⏳ Enviando...',
        validation: { required: '⚠ Complete todos los campos', email: '⚠ Email inválido' },
        status: { success: '✓ Mensaje enviado correctamente', errorSend: '✗ Error al enviar. Intenta de nuevo.', errorConnection: '✗ Error de conexión' }
      }
    },
    cert: {
      download: 'cat certificaciones.json',
      loading: 'loading...',
      command: 'wget cic-associate-certificate.pdf',
      waitingMessage: '✓ Completado — Proyecto PTD-Talento desarrollado',
      internalStatus: '100% — Certificación completada',
      viewDetails: '▶ ver detalles',
      note: '※ metas de certificación 2026'
    },
    footer: {
      commercial: 'Versión Comercial'
    }
  },
  en: {
    header: { available: 'Available' },
    hero: { tagline: 'MERN Stack Developer | Arch Linux Enthusiast | Neovim + LazyVim', base: 'Base Dominican Republic (UTC-4)', available: 'Open to work', downloadCv: '⬇ Download CV' },
    sections: { hero: '~/', experience: '~/experience', about: '~/about', tech: '~/tech', design: '~/design', projects: '~/projects', interests: '~/interests', certs: '~/certs', contact: '~/contact' },
    sectionTitles: { experience: 'Experience', about: 'About', tech: 'Tech Stack', design: 'Design', projects: 'Projects', interests: 'Interests', certs: 'Certifications', contact: 'Contact' },
    exp: {
      heading: 'Experience',
      subtitle: 'My professional journey',
      job1: { badge: 'Retail', title: 'Assistant / Cashier', company: 'La Sirena · Dominican Republic', period: '2025 — 2026', desc: 'My first contact with the formal working world. Working at one of the largest supermarkets in the country taught me how a business really works from the inside: logistics, inventory, customer service under pressure. That experience fueled my decision to build a career in technology.' },
      job2: { badge: 'Education', title: 'Full-Stack Bootcamp', company: 'Cincinnatus · Dominican Republic', period: '2024 — 2026', desc: 'The starting engine of my programming career. Cincinnatus was the turning point where I went from a curious self-taught learner to a developer in training, working on real team projects.' },
      job3: { badge: 'Current', title: 'MERN Stack Developer · DevOps', company: 'Freelance / Own Projects · Arch Linux · Neovim', period: '2024 — Present', desc: 'Full-stack development with the MERN stack (MongoDB, Express, React, Node.js). Clean architectures, RESTful APIs, Docker deployments and workflow automation. My environment: Arch Linux with Hyprland, Neovim (LazyVim) as main editor.' },
      job4: { badge: 'Lead Tech', title: 'Marketplace de Talento [PTD-Talento]', company: 'Cincinnatus Institute of Craftsmanship, INC.', period: 'Jan — Oct 2026', desc: 'Developed the "Marketplace de Talento" [PTD-Talento] project with a team of 4 developers. Led as Lead Tech: successfully streamlined and coordinated the product development; currently awaiting the internship phase.' }
    },
    interests: {
      personalLabel: '// What I enjoy',
      setupLabel: '// Setup · Dotfiles',
      futureBadge: 'Future Interest',
      gamingCaption: 'game night', gamingTitle: 'Gaming', gamingDesc: "For as long as I can remember I've loved videogames. It all started with a Game Boy — I don't have the time I used to, but I still enjoy it like a kid. Red Dead Redemption II and Cyberpunk 2077 always come to mind.",
      animeCaption: 'evening watch', animeTitle: 'Anime & Manga', animeDesc: "I enjoy watching anime, series or movies with my wife — lately I've started re-watching Naruto with her.",
      tvCaption: 'now streaming', tvTitle: 'TV · Film & Series', tvDesc: 'Cinema and series, kept apart on purpose — not the same thing: from psychological thrillers to sci-fi. Mr Robot was a before and after.',
      musicCaption: 'now playing', musicTitle: 'Music', musicDesc: "Always on — I used to listen to more underground music, but recently I've been getting a taste for popular artists, adding more variety to my playlist.",
      photographyCaption: 'through the lens', photographyTitle: 'Photography', photographyDesc: 'I like to get around and capture moments with my phone, or with my drone when traveling.',
      travelCaption: 'boarding soon', travelTitle: 'Travel', travelDesc: 'I like to see the beauty of the world firsthand — planning to see more of the planet.',
      drawingCaption: 'tablet & pen', drawingTitle: 'Digital Drawing', drawingDesc: 'I started developing my drawing skill as a kid. I ended up merging technology with drawing, and now I mostly draw on my tablet.',
      scriptsCardCaption: './system_control.sh', scriptsCardTitle: 'System Control', scriptsCardDesc: 'Rofi menu with 30+ tools: network management, bluetooth, audio, power management, screen capture, game mode, night mode and more.',
      scriptsCaption: '$ ./automate.sh --all', scriptsTitle: 'Scripts & Automation', scriptsDesc: "50+ custom scripts: save-point system for config rollback, scrcpy connect, widget launcher, power modes, LimpiarCache, Gitaliases and more. Full automation of the Arch ecosystem.",
      blueprintCaption: 'extract_tokens.sh', blueprintTitle: 'Blueprints & Tokens', blueprintDesc: 'Design token extraction from images: color palettes, CSS custom properties, AI prompts. From visual reference to production-ready code.',
      galleryCaption: 'cat gallery.md', galleryTitle: 'Setup Gallery', galleryDesc: 'Real desktop screenshots: Rofi System Control, Fastfetch, Arch Rice and the complete dotfiles-dizzi visual ecosystem.',
      galleryCta: 'View dotfiles repository →'
    },
    tech: {
      hint: 'Click any technology to learn more',
      'Node.js': 'Server-side JS runtime. I use it to build RESTful APIs and scalable backends with Express.',
      'Express': 'Minimalist Node.js framework. My choice for creating servers, middleware and clean APIs.',
      'React': 'Declarative UI library. I build interactive interfaces with reusable components and hooks.',
      'MongoDB': 'NoSQL database. I use it as primary storage in my MERN projects with Mongoose.',
      'PostgreSQL': 'Open-source relational database. For structured schemas, referential integrity, advanced SQL.',
      'Python': 'Multi-purpose language. Automation, quick scripting, internal tool prototyping.',
      'Git': 'Essential version control. Feature branches, interactive rebase, semantic commits.',
      'Arch': 'My daily driver. Arch Linux + Hyprland, everything configured from scratch.',
      'Neovim': 'Main editor with LazyVim. Custom plugins, LSP for TS/JS, 100% keyboard workflow.',
      'TypeScript': 'Static typing for JS. More robust and maintainable code on backend and frontend.',
      'Docker': 'Containers for dev and production. Reproducible environments, consistent deployments.',
      'Figma': 'Interface design and prototyping. Design systems, reusable components, team collaboration.',
      'JavaScript': 'Browser and backend language. Interactive logic, APIs, scripting.',
      'Tailwind CSS': 'Utility-first CSS framework. Rapid prototyping, visual consistency.',
      'Render': 'Cloud hosting platform. Full-stack apps with continuous deploy from Git.',
      'Vercel': 'Cloud platform for frontends. React/Next.js with serverless functions.',
      'Google Cloud': 'Cloud Run for serverless backends, App Engine for frontends with custom .com domains. Cloud SQL, gcloud CLI, deployment on RUN.app / APPSPOT.com.',
      'Svelte': 'Reactive framework. Compiles to optimized JS, no virtual DOM. Fast, lightweight apps.',
      'Astro': 'Static site generator. Islands architecture, zero JS by default, great for content.',
      'Google Stitch': 'AI-powered prototyping. Rapid mockup generation and design exploration.',
      'Design System': 'Atomic design systems with Tailwind, Storybook. Guaranteed visual consistency.',
      'Prototyping': 'Interactive prototyping from low-fi wireframes to high-fi in Figma.',
      'Canvas': 'Design and illustration canvas. User interface mockups, visual storytelling, layout exploration.',
      'VoltBuilder': 'Build service for native Android/iOS apps from web apps (Cordova/Capacitor). APK without local SDKs or Mac required.',
      'Material UI': 'React component library based on Material Design. Professional UI with themes, grids and accessibility.',
      'Railway': 'Cloud platform for backends. Fast deploy with integrated PostgreSQL.',
      'React Router': 'Declarative routing for React. SPA navigation with loaders, actions and data fetching.',
      'Bootstrap': 'CSS framework with pre-built components. Grid system, responsive utilities and theming.',
      'OpenCode': 'Code assistant with persistent memory (Engram), Claude, OpenRouter, Antigravity and MCP tools (n8n, files, terminal). Better than Claude Desktop.'
    },
    design: {
      hint: 'UX/UI Design — Prototyping with Google Stitch, layout in Figma. Design Systems creation (CIC-Styles).',
      figma: 'Figma',
      stitch: 'Google Stitch',
      ds: 'Design System',
      proto: 'Prototyping',
      canvas: 'Canvas'
    },
    about: {
      name: 'Diego Härdi', role: 'DevOps & Software Engineer',
      born: '🇩🇴 San Pedro de Macorís, DR', lives: 'Jarabacoa, DR',
      passport: 'Swiss', os: 'Arch Linux · Hyprland', editor: 'Neovim · LazyVim',
      langs: 'ES · EN (B2) · DE (A2)',
      bio: "By day I build full-stack apps with the MERN stack. By night I'm immersed in Neovim configurations, optimizing my Arch Linux Hyprland or automating workflows that shouldn't exist. I speak TypeScript, JavaScript, Lua, and the language of clean, maintainable systems.",
      label: { name: 'Name', role: 'Role', born: 'Born', lives: 'Lives', passport: 'Passport', os: 'OS', editor: 'Editor', langs: 'Languages' }
    },
    projects: {
      code: 'View Code', live: 'Live Preview', private: 'Private', open: 'Open project',
      details: 'View details', back: '← Back to start',
      status: 'Status', category: 'Category', team: 'Team size',
      year: 'Year', completed: 'Completed', inProgress: 'In development',
      solo: 'Solo',
      footer: 'Designed and developed by Diego Härdi . Every line of code, with intention and affection.'
    },
    contact: {
      available: 'Available',
      cv: { view: '⬇ View CV', download: '⬇ Download PDF', modalText: 'Download my resume to see my complete experience, education and technical skills.', downloadButton: '⬇ Download CV (PDF)' },
      form: {
        namePlaceholder: 'Your name', emailPlaceholder: 'you@email.com', emailLabel: 'Email',
        messagePlaceholder: 'Write your message...', messageLabel: 'Message',
        submit: '📨 Send message', sending: '⏳ Sending...',
        validation: { required: '⚠ Please fill in all fields', email: '⚠ Invalid email' },
        status: { success: '✓ Message sent successfully', errorSend: '✗ Error sending. Try again.', errorConnection: '✗ Connection error' }
      }
    },
    cert: {
      download: 'cat certifications.json',
      loading: 'loading...',
      command: 'wget cic-associate-certificate.pdf',
      waitingMessage: '✓ Completed — PTD-Talento project developed',
      internalStatus: '100% — Certification completed',
      viewDetails: '▶ view details',
      note: '※ 2026 certification goals'
    },
    footer: {
      commercial: 'Commercial Version'
    }
  },
  de: {
    header: { available: 'Verfügbar' },
    hero: { tagline: 'MERN Stack Entwickler | Arch Linux Enthusiast | Neovim + LazyVim', base: 'Base Dominikanische Republik (UTC-4)', available: 'Open to work', downloadCv: '⬇ Lebenslauf' },
    sections: { hero: '~/', experience: '~/experience', about: '~/about', tech: '~/tech', design: '~/design', projects: '~/projects', interests: '~/interests', certs: '~/certs', contact: '~/contact' },
    sectionTitles: { experience: 'Erfahrung', about: 'Über mich', tech: 'Tech Stack', design: 'Design', projects: 'Projekte', interests: 'Interessen', certs: 'Zertifikate', contact: 'Kontakt' },
    exp: {
      heading: 'Erfahrung',
      subtitle: 'Mein beruflicher Werdegang',
      job1: { badge: 'Einzelhandel', title: 'Assistent / Kassierer', company: 'La Sirena · Dominikanische Republik', period: '2025 — 2026', desc: 'Mein erster Kontakt mit der formalen Arbeitswelt. Die Arbeit in einem der größten Supermärkte des Landes lehrte mich, wie ein Unternehmen wirklich von innen funktioniert. Diese Erfahrung war der Treibstoff für meine Entscheidung, eine Karriere in der Technologie aufzubauen.' },
      job2: { badge: 'Bildung', title: 'Full-Stack Bootcamp', company: 'Cincinnatus · Dominikanische Republik', period: '2024 — 2026', desc: 'Der Startschuss für meine Programmierkarriere. Cincinnatus war der Wendepunkt, an dem ich vom neugierigen Autodidakten zum angehenden Entwickler wurde — mit echten Teamprojekten.' },
      job3: { badge: 'Aktuell', title: 'MERN Stack Developer · DevOps', company: 'Freiberuflich / Eigene Projekte · Arch Linux · Neovim', period: '2024 — Heute', desc: 'Full-Stack-Entwicklung mit dem MERN-Stack. Saubere Architekturen, RESTful APIs, Docker-Deployments und Workflow-Automatisierung. Meine Umgebung: Arch Linux mit Hyprland, Neovim (LazyVim) als Haupteditor.' },
      job4: { badge: 'Lead Tech', title: 'Marketplace de Talento [PTD-Talento]', company: 'Cincinnatus Institute of Craftsmanship, INC.', period: 'Jan — Okt 2026', desc: 'Entwicklung des Projekts "Marketplace de Talento" [PTD-Talento] in einem 4-köpfigen Entwicklerteam. Als Lead Tech die Entwicklung erfolgreich koordiniert und agil gesteuert; derzeit wartet das Produkt auf die Praktikumsphase.' }
    },
    interests: {
      personalLabel: '// Was ich genieße',
      setupLabel: '// Setup · Dotfiles',
      futureBadge: 'Future Interest',
      gamingCaption: 'game night', gamingTitle: 'Gaming', gamingDesc: 'Solange ich mich erinnern kann, liebe ich Videospiele. Es begann mit einem Game Boy — heute habe ich weniger Zeit, aber es macht mir genauso viel Spaß wie als Kind. Red Dead Redemption II und Cyberpunk 2077 kommen mir immer in den Sinn.',
      animeCaption: 'evening watch', animeTitle: 'Anime & Manga', animeDesc: 'Ich genieße Anime, Serien oder Filme mit meiner Frau — zuletzt habe ich angefangen, Naruto mit ihr erneut zu schauen.',
      tvCaption: 'now streaming', tvTitle: 'TV · Film & Serien', tvDesc: 'Kino und Serien, bewusst getrennt — nicht dasselbe: von Psychothrillern bis Sci-Fi. Mr Robot war ein Einschnitt.',
      musicCaption: 'now playing', musicTitle: 'Musik', musicDesc: 'Immer an — früher eher Underground-Musik, inzwischen habe ich Geschmack an populäre Künstler gefunden und bringe mehr Abwechslung in meine Playlist.',
      photographyCaption: 'through the lens', photographyTitle: 'Fotografie', photographyDesc: 'Ich bewege mich gern und halte Momente mit dem Handy fest — oder mit meiner Drohne auf Reisen.',
      travelCaption: 'boarding soon', travelTitle: 'Reisen', travelDesc: 'Ich sehe die Schönheit der Welt am liebsten mit eigenen Augen — ich plane, mehr vom Planeten zu sehen.',
      drawingCaption: 'tablet & pen', drawingTitle: 'Digitales Zeichnen', drawingDesc: 'Als Kind begann ich zu zeichnen. Am Ende verschmolz ich Technologie mit dem Zeichnen — heute zeichne ich hauptsächlich auf meinem Tablet.',
      scriptsCardCaption: './system_control.sh', scriptsCardTitle: 'System Control', scriptsCardDesc: 'Rofi-Menü mit 30+ Tools: Netzwerk, Bluetooth, Audio, Power Management, Screen Capture, Game Mode, Night Mode und mehr.',
      scriptsCaption: '$ ./automate.sh --all', scriptsTitle: 'Scripts & Automation', scriptsDesc: '50+ eigene Scripts: Save-Point-System für Config-Rollback, scrcpy connect, Widget-Launcher, Power Modes, LimpiarCache, Gitaliases und mehr.',
      blueprintCaption: 'extract_tokens.sh', blueprintTitle: 'Blueprints & Tokens', blueprintDesc: 'Design-Token-Extraktion aus Bildern: Farbpaletten, CSS Custom Properties, AI-Prompts. Von der visuellen Referenz zum produktionsreifen Code.',
      galleryCaption: 'cat gallery.md', galleryTitle: 'Setup-Galerie', galleryDesc: 'Echte Desktop-Screenshots: Rofi System Control, Fastfetch, Arch Rice und das komplette dotfiles-dizzi Ökosystem.',
      galleryCta: 'Dotfiles-Repository ansehen →'
    },
    tech: {
      hint: 'Klicke auf eine Technologie, um mehr zu erfahren',
      'Node.js': 'Server-seitige JS-Laufzeitumgebung. Für RESTful APIs und skalierbare Backends mit Express.',
      'Express': 'Minimalistisches Node.js-Framework. Für saubere Server, Middleware und APIs.',
      'React': 'Deklarative UI-Bibliothek. Interaktive Oberflächen mit wiederverwendbaren Komponenten.',
      'MongoDB': 'NoSQL-Datenbank. Primärer Speicher in MERN-Projekten mit Mongoose.',
      'PostgreSQL': 'Open-Source-Relationaldatenbank. Für strukturierte Schemata und erweiterte SQL-Abfragen.',
      'Python': 'Mehrzweck-Sprache. Automatisierung, schnelles Scripting, interne Tools.',
      'Git': 'Wesentliche Versionskontrolle. Feature-Branches, interaktives Rebase, semantische Commits.',
      'Arch': 'Mein Daily Driver. Arch Linux + Hyprland, alles von Grund auf konfiguriert.',
      'Neovim': 'Haupteditor mit LazyVim. Eigene Plugins, LSP, 100% Tastatur-Workflow.',
      'TypeScript': 'Statische Typisierung für JS. Robusterer Code in Backend und Frontend.',
      'Docker': 'Container für Entwicklung und Produktion. Reproduzierbare Umgebungen.',
      'Figma': 'Interface-Design und Prototyping. Designsysteme, wiederverwendbare Komponenten.',
      'JavaScript': 'Browser- und Backend-Sprache. Interaktive Logik, APIs, Scripting.',
      'Tailwind CSS': 'Utility-first CSS-Framework. Schnelles Prototyping, visuelle Konsistenz.',
      'Render': 'Cloud-Hosting-Plattform. Full-Stack-Apps mit Continuous Deploy.',
      'Vercel': 'Cloud-Plattform für Frontends. React/Next.js mit serverlosen Funktionen.',
      'Google Cloud': 'Cloud Run für serverlose Backends, App Engine für Frontends mit benutzerdefinierten .com-Domains. Cloud SQL, gcloud CLI, Deployment auf RUN.app / APPSPOT.com.',
      'Svelte': 'Reaktives Framework. Kompiliert zu optimiertem JS, kein virtuelles DOM.',
      'Astro': 'Static-Site-Generator. Islands-Architektur, standardmäßig kein JS.',
      'Google Stitch': 'KI-gestütztes Prototyping. Schnelle Mockup-Generierung.',
      'Design System': 'Atomare Designsysteme mit Tailwind, Storybook.',
      'Prototyping': 'Interaktives Prototyping von Low-Fi bis High-Fi in Figma.',
      'Canvas': 'Design- und Illustrations-Canvas. UI-Mockups, visuelles Storytelling, Layout-Erkundung.',
      'VoltBuilder': 'Build-Dienst für native Android/iOS-Apps aus Web-Apps (Cordova/Capacitor). APK ohne lokale SDKs oder Mac erforderlich.',
      'Material UI': 'React-Komponentenbibliothek basierend auf Material Design. Professionelle UI mit Themes und Zugänglichkeit.',
      'Railway': 'Cloud-Plattform für Backends. Schnelles Deployment mit integriertem PostgreSQL.',
      'React Router': 'Deklaratives Routing für React. SPA-Navigation mit Loadern, Aktionen und Datenabruf.',
      'Bootstrap': 'CSS-Framework mit vorgefertigten Komponenten. Grid-System und responsive Utilities.',
      'OpenCode': 'Code-Assistent mit persistentem Speicher (Engram), Claude, OpenRouter, Antigravity und MCP-Tools (n8n, Dateien, Terminal). Besser als Claude Desktop.'
    },
    design: {
      hint: 'UX/UI-Design — Prototyping mit Google Stitch, Layout in Figma. Designsysteme (CIC-Styles).',
      figma: 'Figma',
      stitch: 'Google Stitch',
      ds: 'Design System',
      proto: 'Prototyping',
      canvas: 'Canvas'
    },
    about: {
      name: 'Diego Härdi', role: 'DevOps & Software Engineer',
      born: '🇩🇴 San Pedro de Macorís, DR', lives: 'Jarabacoa, DR',
      passport: 'Schweizer', os: 'Arch Linux · Hyprland', editor: 'Neovim · LazyVim',
      langs: 'ES · EN (B2) · DE (A2)',
      bio: 'Tagsüber entwickle ich Full-Stack-Apps mit dem MERN-Stack. Nachts tauche ich in Neovim-Konfigurationen ein, optimiere mein Arch Linux Hyprland oder automatisiere Workflows. Ich spreche TypeScript, JavaScript, Lua und die Sprache von sauberen, wartbaren Systemen.',
      label: { name: 'Name', role: 'Rolle', born: 'Geboren', lives: 'Lebt', passport: 'Pass', os: 'OS', editor: 'Editor', langs: 'Sprachen' }
    },
    projects: {
      code: 'Quellcode', live: 'Live-Vorschau', private: 'Privat', open: 'Projekt öffnen',
      details: 'Details anzeigen', back: '← Zurück zum Anfang',
      status: 'Status', category: 'Kategorie', team: 'Teamgröße',
      year: 'Jahr', completed: 'Abgeschlossen', inProgress: 'In Entwicklung',
      solo: 'Allein',
      footer: 'Entworfen und entwickelt von Diego Härdi . Jede Zeile Code, mit Absicht und Zuneigung.'
    },
    contact: {
      available: 'Verfügbar',
      cv: { view: '⬇ Lebenslauf ansehen', download: '⬇ PDF herunterladen', modalText: 'Lade meinen Lebenslauf herunter, um meine vollständige Erfahrung, Ausbildung und technischen Fähigkeiten zu sehen.', downloadButton: '⬇ Lebenslauf herunterladen (PDF)' },
      form: {
        namePlaceholder: 'Dein Name', emailPlaceholder: 'deine@email.com', emailLabel: 'E-Mail',
        messagePlaceholder: 'Schreibe deine Nachricht...', messageLabel: 'Nachricht',
        submit: '📨 Nachricht senden', sending: '⏳ Senden...',
        validation: { required: '⚠ Bitte fülle alle Felder aus', email: '⚠ Ungültige E-Mail' },
        status: { success: '✓ Nachricht erfolgreich gesendet', errorSend: '✗ Fehler beim Senden. Versuche es erneut.', errorConnection: '✗ Verbindungsfehler' }
      }
    },
    cert: {
      download: 'cat zertifikate.json',
      loading: 'loading...',
      command: 'wget cic-associate-certificate.pdf',
      waitingMessage: '✓ Abgeschlossen — PTD-Talento-Projekt entwickelt',
      internalStatus: '100% — Zertifizierung abgeschlossen',
      viewDetails: '▶ details anzeigen',
      note: '※ Zertifizierungsziele 2026'
    },
    footer: {
      commercial: 'Kommerzielle Version'
    }
  }
};
