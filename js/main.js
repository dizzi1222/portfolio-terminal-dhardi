/* ===========================================
   MAIN.JS - Keyboard Navigation & Interactivity
   =========================================== */

// ---- i18n ----
const i18n = {
  es: {
    hero: { tagline: 'Desarrollador MERN Stack | Arch Linux Enthusiast | Neovim + LazyVim' },
    sections: { tech: 'Tech Stack', design: 'Design', projects: 'Projects', about: 'About', contact: 'Contact' },
    tech: {
      hint: 'Haz clic en cualquier tecnología para saber más',
      'Node.js': 'Runtime JS del lado del servidor. Lo uso para construir APIs RESTful y backends escalables con Express.',
      'Express': 'Framework minimalista para Node.js. Mi elección para crear servidores, middlewares y APIs limpias.',
      'React': 'Biblioteca de UI declarativa. Construyo interfaces interactivas con componentes y hooks reutilizables.',
      'MongoDB': 'Base de datos NoSQL. La uso como principal almacenamiento en mis proyectos MERN con Mongoose.',
      'PostgreSQL': 'Base de datos relacional open-source. La uso para proyectos que requieren esquemas estructurados, integridad referencial y consultas SQL avanzadas.',
      'Git': 'Control de versiones esencial. Flujo con feature branches, rebase interactivo y commits semánticos.',
      'Arch': 'Mi daily driver. Arch Linux + Hyprland, todo configurado desde cero con dotfiles propios.',
      'Neovim': 'Editor principal con LazyVim. Plugins personalizados, LSP para TS/JS, y flujo 100% teclado.',
      'TypeScript': 'Tipado estático para JS. Código más robusto y mantenible en backend y frontend.',
      'Docker': 'Contenedores para desarrollo y producción. Entornos reproducibles y despliegues consistentes.',
      'Figma': 'Diseño de interfaces y prototipado. Design systems, componentes reutilizables y colaboración en equipo.',
      'Google Stitch': 'Prototipado con IA. Generación rápida de mockups y exploración de variantes de diseño.',
      'Design System': 'Sistemas de diseño atómicos con Tailwind, Storybook y consistencia visual garantizada.',
      'Prototyping': 'Prototipado interactivo desde wireframes low-fi hasta high-fi en Figma.'
    },
    about: {
      name: 'Diego Härdi', role: 'DevOps & Software Engineer',
      born: 'San Pedro de Macorís, RD', lives: 'Jarabacoa, RD',
      passport: '🇨🇭 Suizo', os: 'Arch Linux · Hyprland', editor: 'Neovim · LazyVim',
      langs: 'ES · EN · DE (A2)',
      bio: 'Por el día construyo apps full-stack con el stack MERN. Por la noche estoy sumergido en configuraciones de Neovim, optimizando mi Arch Linux Hyprland o automatizando flujos que no deberían existir. Hablo TypeScript, JavaScript, Lua, y el idioma de los sistemas limpios y mantenibles.'
    },
    projects: { code: 'View Code', live: 'Live Preview', private: 'Privado', open: '▶ Abrir proyecto' },
    contact: { available: 'Disponible' },
    cv: { title: 'Diego Härdi · CV', desc: 'Descarga mi currículum para ver mi experiencia completa, educación y habilidades técnicas.', download: '⬇ Descargar CV (PDF)' },
    footer: { commercial: '→ Versión Comercial' }
  },
  en: {
    hero: { tagline: 'MERN Stack Developer | Arch Linux Enthusiast | Neovim + LazyVim' },
    sections: { tech: 'Tech Stack', design: 'Design', projects: 'Projects', about: 'About', contact: 'Contact' },
    tech: {
      hint: 'Click any technology to learn more',
      'Node.js': 'Server-side JS runtime. I use it to build RESTful APIs and scalable backends with Express.',
      'Express': 'Minimalist Node.js framework. My choice for creating servers, middleware and clean APIs.',
      'React': 'Declarative UI library. I build interactive interfaces with reusable components and hooks.',
      'MongoDB': 'NoSQL database. I use it as primary storage in my MERN projects with Mongoose.',
      'PostgreSQL': 'Open-source relational database. I use it for projects requiring structured schemas, referential integrity and advanced SQL queries.',
      'Git': 'Essential version control. Flow with feature branches, interactive rebase and semantic commits.',
      'Arch': 'My daily driver. Arch Linux + Hyprland, everything configured from scratch with custom dotfiles.',
      'Neovim': 'Main editor with LazyVim. Custom plugins, LSP for TS/JS, 100% keyboard workflow.',
      'TypeScript': 'Static typing for JS. More robust and maintainable code on backend and frontend.',
      'Docker': 'Containers for development and production. Reproducible environments and consistent deployments.',
      'Figma': 'Interface design and prototyping. Design systems, reusable components and team collaboration.',
      'Google Stitch': 'AI-powered prototyping. Rapid mockup generation and design variant exploration.',
      'Design System': 'Atomic design systems with Tailwind, Storybook and guaranteed visual consistency.',
      'Prototyping': 'Interactive prototyping from low-fi wireframes to high-fi in Figma.'
    },
    about: {
      name: 'Diego Härdi', role: 'DevOps & Software Engineer',
      born: 'San Pedro de Macorís, DR', lives: 'Jarabacoa, DR',
      passport: '🇨🇭 Swiss', os: 'Arch Linux · Hyprland', editor: 'Neovim · LazyVim',
      langs: 'ES · EN · DE (A2)',
      bio: "By day I build full-stack apps with the MERN stack. By night I'm immersed in Neovim configurations, optimizing my Arch Linux Hyprland or automating workflows that shouldn't exist. I speak TypeScript, JavaScript, Lua, and the language of clean, maintainable systems."
    },
    projects: { code: 'View Code', live: 'Live Preview', private: 'Private', open: '▶ Open project' },
    contact: { available: 'Available' },
    cv: { title: 'Diego Härdi · CV', desc: 'Download my resume to see my complete experience, education and technical skills.', download: '⬇ Download CV (PDF)' },
    footer: { commercial: '→ Commercial Version' }
  },
  de: {
    hero: { tagline: 'MERN Stack Entwickler | Arch Linux Enthusiast | Neovim + LazyVim' },
    sections: { tech: 'Tech Stack', design: 'Design', projects: 'Projekte', about: 'Über mich', contact: 'Kontakt' },
    tech: {
      hint: 'Klicke auf eine Technologie, um mehr zu erfahren',
      'Node.js': 'Server-seitige JS-Laufzeitumgebung. Ich nutze es für RESTful APIs und skalierbare Backends mit Express.',
      'Express': 'Minimalistisches Node.js-Framework. Meine Wahl für saubere Server, Middleware und APIs.',
      'React': 'Deklarative UI-Bibliothek. Ich erstelle interaktive Oberflächen mit wiederverwendbaren Komponenten und Hooks.',
      'MongoDB': 'NoSQL-Datenbank. Primärer Speicher in meinen MERN-Projekten mit Mongoose.',
      'PostgreSQL': 'Open-Source-Relationaldatenbank. Ich nutze sie für Projekte mit strukturierten Schemata, referenzieller Integrität und erweiterten SQL-Abfragen.',
      'Git': 'Wesentliche Versionskontrolle. Workflow mit Feature-Branches, interaktivem Rebase und semantischen Commits.',
      'Arch': 'Mein Daily Driver. Arch Linux + Hyprland, alles von Grund auf mit eigenen Dotfiles konfiguriert.',
      'Neovim': 'Haupteditor mit LazyVim. Eigene Plugins, LSP für TS/JS, 100% Tastatur-Workflow.',
      'TypeScript': 'Statische Typisierung für JS. Robusterer und wartbarerer Code in Backend und Frontend.',
      'Docker': 'Container für Entwicklung und Produktion. Reproduzierbare Umgebungen und konsistente Deployments.',
      'Figma': 'Interface-Design und Prototyping. Designsysteme, wiederverwendbare Komponenten und Teamarbeit.',
      'Google Stitch': 'KI-gestütztes Prototyping. Schnelle Mockup-Generierung und Design-Varianten-Erkundung.',
      'Design System': 'Atomare Designsysteme mit Tailwind, Storybook und garantierter visueller Konsistenz.',
      'Prototyping': 'Interaktives Prototyping von Low-Fi-Wireframes bis High-Fi in Figma.'
    },
    about: {
      name: 'Diego Härdi', role: 'DevOps & Software Engineer',
      born: 'San Pedro de Macorís, DR', lives: 'Jarabacoa, DR',
      passport: '🇨🇭 Schweizer', os: 'Arch Linux · Hyprland', editor: 'Neovim · LazyVim',
      langs: 'ES · EN · DE (A2)',
      bio: 'Tagsüber entwickle ich Full-Stack-Apps mit dem MERN-Stack. Nachts tauche ich in Neovim-Konfigurationen ein, optimiere mein Arch Linux Hyprland oder automatisiere Workflows, die es gar nicht geben sollte. Ich spreche TypeScript, JavaScript, Lua und die Sprache von sauberen, wartbaren Systemen.'
    },
    projects: { code: 'Quellcode', live: 'Live-Vorschau', private: 'Privat', open: '▶ Projekt öffnen' },
    contact: { available: 'Verfügbar' },
    cv: { title: 'Diego Härdi · Lebenslauf', desc: 'Lade meinen Lebenslauf herunter, um meine vollständige Erfahrung, Ausbildung und technische Fähigkeiten zu sehen.', download: '⬇ Lebenslauf herunterladen (PDF)' },
    footer: { commercial: '→ Kommerzielle Version' }
  }
};

const ghIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';

let lang = localStorage.getItem('terminal-lang') || 'es';
function t(path) {
  let val = i18n[lang];
  for (const k of path.split('.')) { if (val) val = val[k]; else return ''; }
  return val || '';
}

function switchLanguage(l) {
  lang = l;
  localStorage.setItem('terminal-lang', l);
  document.getElementById('lang-btn').textContent = l.toUpperCase();
  const ml = document.getElementById('mobile-lang-btn');
  if (ml) ml.textContent = l.toUpperCase();
  updateI18n();
}

function updateI18n() {
  const el = document.getElementById('hero-tagline');
  if (el) el.textContent = t('hero.tagline');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = t(el.getAttribute('data-i18n'));
    if (text) el.textContent = text;
  });
  const td = document.getElementById('tech-desc');
  if (td && !td.dataset.active) td.textContent = t('tech.hint');
  updateProjectCards();
  updateAboutLabels();
}

function updateProjectCards() {
  document.querySelectorAll('#projects .window[data-project]').forEach(win => {
    const id = parseInt(win.dataset.project);
    const p = projectData[id];
    if (!p) return;
    const titleEl = win.querySelector('h3');
    const descEl = win.querySelector('p');
    if (titleEl) titleEl.innerHTML = p.isPrivate
      ? `${p.title} <span class="tag">${t('projects.private')}</span>`
      : p.title;
    if (descEl) descEl.textContent = p.descEn && lang === 'en' ? p.descEn : p.desc;
    const btn = win.querySelector('button');
    if (btn) btn.innerHTML = `${ghIcon} ${t('projects.open')}`;
  });
}

function updateAboutLabels() {
  const a = i18n[lang].about;
  document.querySelectorAll('[data-about]').forEach(el => {
    const key = el.getAttribute('data-about');
    if (a[key]) el.textContent = a[key];
  });
}

// ---- Project data ----
const projectData = [
  {
    id: 0, title: 'Dashboard React',
    desc: 'Panel de administración con gráficos, calculadora, contador y TO-DO list. Todo construido con React y react-router-dom.',
    descEn: 'Admin panel with charts, calculator, counter and TO-DO list. Built with React and react-router-dom.',
    tags: ['React', 'Node.js', 'MongoDB'],
    code: 'https://github.com/dizzi1222/REACT-Diego-Dizzi-Dashboard',
    live: 'https://dhardi007.github.io/REACT-Diego-Dizzi-Dashboard/',
    image: 'assets/modal-tech-Dashboard-REACT.png'
  },
  {
    id: 1, title: 'Portfolio (dev.to)',
    desc: 'Portfolio profesional con Tailwind CSS, i18n en ES/EN/DE, modales interactivos, scroll-spy y temas claro/oscuro. Diseñado para clients y reclutadores.',
    descEn: 'Professional portfolio with Tailwind CSS, i18n in ES/EN/DE, interactive modals, scroll-spy and light/dark themes. Designed for clients and recruiters.',
    tags: ['HTML', 'Tailwind', 'JavaScript'],
    code: 'https://github.com/dizzi1222/dhardi.dev',
    live: 'https://dizzi1222.github.io/dhardi.dev/',
    image: 'assets/modal-tech-devto.png'
  },
  {
    id: 2, title: 'Dotfiles Config',
    desc: 'Configuración completa de Arch Linux con Hyprland, Neovim (LazyVim), Kitty, Zsh, Waybar, EWW widgets y Rofi. Todo gestionado con GNU Stow y dotfiles propios.',
    descEn: 'Complete Arch Linux configuration with Hyprland, Neovim (LazyVim), Kitty, Zsh, Waybar, EWW widgets and Rofi. All managed with GNU Stow and custom dotfiles.',
    tags: ['Lua', 'Shell', 'YAML', 'Python'],
    code: 'https://github.com/dizzi1222/dotfiles-dizzi',
    live: 'https://github.com/dizzi1222/dotfiles-dizzi',
    image: 'assets/modal-tech-dotfiles.png'
  },
  {
    id: 3, title: 'PTD-Talento',
    desc: 'Marketplace de talento para Cincinnatus Institute. MVP completo con autenticación, catálogo de estudiantes, watch list de reclutadores, panel admin y notificaciones. Stack MERN con PostgreSQL y Docker.',
    descEn: 'Talent marketplace for Cincinnatus Institute. Full MVP with auth, student catalog, recruiter watch list, admin panel and notifications. MERN stack with PostgreSQL and Docker.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Figma'],
    code: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-back',
    live: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-front',
    image: 'assets/modal-tech-ptd-talento.png',
    isPrivate: true,
    backUrl: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-back',
    frontUrl: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-front'
  },
  {
    id: 4, title: 'Nvim · WSL + Linux',
    desc: 'Configuración universal de Neovim con LazyVim para Windows (WSL) y Linux (Hyprland). Sincronización multiplataforma, LSP completo, snippets personalizados, y atajos tipo IDE en ambos entornos.',
    descEn: 'Universal Neovim config with LazyVim for Windows (WSL) and Linux (Hyprland). Cross-platform sync, full LSP, custom snippets, and IDE-like shortcuts in both environments.',
    tags: ['Lua', 'LazyVim', 'Neovim'],
    code: 'https://github.com/dizzi1222/nvim',
    live: 'https://github.com/dizzi1222/nvim-wsl',
    image: 'assets/modal-tech-nvim.png',
    nvimScreenshots: ['https://github.com/user-attachments/assets/9144215e-6156-43c3-beba-4cca7f431337', 'https://github.com/user-attachments/assets/8adb6f60-bb35-4704-b4ab-12bd587f3992']
  },
  {
    id: 5, title: 'PCE-Agencia',
    desc: 'App de finanzas y viajes — gestión de presupuestos, planificación de itinerarios y seguimiento de gastos. Construida con JavaScript moderno, diseño responsive y flujo de datos limpio.',
    descEn: 'Finance and travel app — budget management, itinerary planning and expense tracking. Built with modern JavaScript, responsive design and clean data flow.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    code: 'https://github.com/dhardi007/PCE-Agencia',
    live: 'https://github.com/dhardi007/PCE-Agencia',
    image: 'assets/modal-tech-pce-agencia-reskyt.png'
  },
  {
    id: 6, title: 'Proyección Astral',
    desc: 'Página melancólica y romántica dedicada a una persona especial. Tipografía cuidada, atmósfera onírica, estética lunar.',
    descEn: 'Melancholic and romantic page dedicated to a special person. Careful typography, dreamlike atmosphere, lunar aesthetic.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/dizzi1222/proyeccion-astral-disculpa',
    live: 'https://dizzi1222.github.io/proyeccion-astral-disculpa/',
    image: 'assets/modal-proyeccion-astral.png'
  }
];

// ---- Clock ----
function updateClock() {
  const now = new Date();
  const t = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  document.getElementById('current-time').textContent = t;
  const mt = document.getElementById('mobile-current-time');
  if (mt) mt.textContent = t;
}
setInterval(updateClock, 1000);
updateClock();

// ---- Keyboard navigation ----
const sections = ['hero', 'about', 'tech', 'design', 'projects', 'contact'];
let currentSection = 0;

document.addEventListener('keydown', (e) => {
  const key = e.key;
  const overlay = document.getElementById('keybindings-overlay');
  switch(key) {
    case 'j': window.scrollBy({ top: 100, behavior: 'smooth' }); break;
    case 'k': window.scrollBy({ top: -100, behavior: 'smooth' }); break;
    case 'g': if (!e.shiftKey) window.scrollTo({ top: 0, behavior: 'smooth' }); break;
    case 'G': window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); break;
    case '1': case '2': case '3': case '4': case '5': case '6':
      const idx = parseInt(key) - 1;
      if (sections[idx]) {
        document.getElementById(sections[idx]).scrollIntoView({ behavior: 'smooth' });
        currentSection = idx;
      }
break;
    case '?':
      overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
      break;
    case 'Escape':
      overlay.style.display = 'none';
      closeProjectModal();
      closeCVModal();
      break;
  }
});

// ---- Typewriter ----
const typewriterQuotes = [
  '">_ “El único modo de hacer un gran trabajo es amar lo que haces.” — Steve Jobs',
  '">_ “Primero resuelve el problema, luego escribe el código.” — John Johnson',
  '">_ “Talk is cheap. Show me the code.” — Linus Torvalds',
  '">_ “El software es un gran arte.” — Jeff Atwood',
  '">_ “La simplicidad es la máxima sofisticación.” — Leonardo da Vinci',
  '">_ “Código limpio siempre parece que fue escrito por alguien que se preocupa.” — Robert C. Martin',
  '">_ “No es un bug, es una característica no documentada.” — Anónimo',
  '">_ “Primero haz que funcione, luego haz que sea rápido.” — Kent Beck'
];
let typewriterEl = document.getElementById('typewriter');
let twIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!typewriterEl) return;
  const current = typewriterQuotes[twIndex];
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      charIndex = 0;
      twIndex = (twIndex + 1) % typewriterQuotes.length;
      setTimeout(typeWriter, 300);
      return;
    }
    setTimeout(typeWriter, 25);
  } else {
    typewriterEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
    setTimeout(typeWriter, 40);
  }
}
if (typewriterEl) setTimeout(typeWriter, 1000);

document.getElementById('keybindings-overlay').addEventListener('click', (e) => {
  if (e.target.id === 'keybindings-overlay') e.target.style.display = 'none';
});

// Overlay styles
const overlayStyles = document.createElement('style');
overlayStyles.textContent = `
  .keybindings-overlay { position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:10000; }
  .keybindings-overlay code { background:var(--accent-secondary); padding:0.2rem 0.4rem; margin-right:0.5rem; }
  .keybindings-overlay p { margin-bottom:0.5rem; }
`;
document.head.appendChild(overlayStyles);

// ---- Scroll spy ----
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const names = { hero: '~/', about: '~/about', tech: '~/tech', design: '~/design', projects: '~/projects', contact: '~/contact' };
      const el = document.querySelector('.header__path');
      if (el && names[id]) el.textContent = names[id];
    }
  });
}, { threshold: 0.3, rootMargin: '0px 0px -100px 0px' });
sections.forEach(s => {
  const el = document.getElementById(s);
  if (el) spyObserver.observe(el);
});

// ---- Theme toggle ----
function switchTheme(theme) {
  localStorage.setItem('terminal-theme', theme);
  const icon = theme === 'light' ? '☀' : '☾';
  document.getElementById('theme-btn').textContent = icon;
  const mt = document.getElementById('mobile-theme-btn');
  if (mt) mt.textContent = icon;
  if (theme === 'light') {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }
}
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#theme-btn');
  if (btn) {
    const current = localStorage.getItem('terminal-theme') || 'dark';
    switchTheme(current === 'dark' ? 'light' : 'dark');
  }
});

// ---- Mobile menu: swipe-to-reveal + click toggle ----
const mobileMenu = document.getElementById('mobile-menu');
const mobileBtn = document.getElementById('mobile-menu-btn');
let dragStartY = 0, dragLastY = 0, isDragging = false, dragInitialized = false;
const DRAG_THRESHOLD = 0.4;

function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileBtn.classList.add('open');
  mobileBtn.textContent = '󰅮';
  mobileMenu.style.transform = '';
  mobileMenu.style.opacity = '';
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileBtn.classList.remove('open');
  mobileBtn.textContent = '󰅬';
  mobileMenu.style.transform = '';
  mobileMenu.style.opacity = '';
}

mobileBtn.addEventListener('click', () => {
  if (isDragging) return;
  mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});

document.addEventListener('touchstart', (e) => {
  const t = e.target;
  if (!mobileBtn.contains(t) && !(mobileMenu.classList.contains('open') && mobileMenu.contains(t))) {
    dragInitialized = false;
    return;
  }
  dragStartY = e.touches[0].clientY;
  dragLastY = dragStartY;
  isDragging = false;
  dragInitialized = true;
  mobileMenu.classList.add('dragging');
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  if (!dragInitialized) return;
  if (!isDragging) {
    const delta = e.touches[0].clientY - dragStartY;
    const isOpen = mobileBtn.classList.contains('open');
    if ((isOpen && delta < -5) || (!isOpen && delta > 5)) isDragging = true;
    else return;
  }
  e.preventDefault();
  dragLastY = e.touches[0].clientY;
  const delta = dragLastY - dragStartY;
  const menuH = mobileMenu.scrollHeight || 200;
  const absDelta = Math.abs(delta);
  const progress = Math.min(absDelta / menuH, 1);
  const isOpening = delta > 0;
  if (isOpening) {
    mobileMenu.style.transform = `translateY(${-100 + progress * 100}%)`;
  } else {
    mobileMenu.style.transform = `translateY(${-progress * 100}%)`;
  }
  mobileMenu.style.opacity = progress;
}, { passive: false });

document.addEventListener('touchend', () => {
  if (!isDragging) { dragInitialized = false; return; }
  isDragging = false;
  dragInitialized = false;
  mobileMenu.classList.remove('dragging');
  const delta = dragLastY - dragStartY;
  const menuH = mobileMenu.scrollHeight || 200;
  const progress = Math.min(Math.abs(delta) / menuH, 1);
  const isOpening = delta > 0;
  if (progress > DRAG_THRESHOLD && isOpening) {
    openMobileMenu();
  } else if (progress > DRAG_THRESHOLD && !isOpening && mobileBtn.classList.contains('open')) {
    closeMobileMenu();
  } else {
    mobileBtn.classList.contains('open') ? openMobileMenu() : closeMobileMenu();
  }
});

document.addEventListener('scroll', () => { if (!isDragging) closeMobileMenu(); }, { passive: true });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileMenu(); });
document.getElementById('mobile-lang-btn').addEventListener('click', () => { document.getElementById('lang-btn').click(); closeMobileMenu(); });
document.getElementById('mobile-theme-btn').addEventListener('click', () => { document.getElementById('theme-btn').click(); });

// ---- Hero filename click → scroll to about ----
document.querySelector('.hero-filename')?.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// ---- Modal functions ----
function openProjectModal(id) {
  const p = projectData[id];
  if (!p) return;
  console.log('Modal opened:', id, p.title);
  const prj = i18n[lang].projects;
  document.getElementById('modal-filename').textContent = `project_${String(id + 1).padStart(2, '0')}_preview.sh`;
  const screenshotEl = document.getElementById('modal-screenshot');
  if (p.nvimScreenshots) {
    screenshotEl.textContent = '';
    screenshotEl.style.padding = '0';
    screenshotEl.style.minHeight = 'auto';
    screenshotEl.innerHTML = p.nvimScreenshots.map(url =>
      `<img src="${url}" alt="Nvim screenshot" style="width:100%;display:block;border-bottom:2px solid var(--text-dim)" />`
    ).join('');
  } else if (p.image) {
    screenshotEl.textContent = '';
    screenshotEl.style.padding = '0';
    screenshotEl.style.minHeight = 'auto';
    screenshotEl.innerHTML = `<img src="${p.image}" alt="${p.title}" style="width:100%;display:block" />`;
  } else {
    screenshotEl.textContent = '📁';
    screenshotEl.style.padding = '';
    screenshotEl.style.minHeight = '';
  }
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent = lang === 'en' && p.descEn ? p.descEn : p.desc;
  document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const linksEl = document.getElementById('modal-links');
  if (p.nvimScreenshots) {
    linksEl.innerHTML = `
      <a href="${p.code}" target="_blank" class="btn">${ghIcon} Linux Config</a>
      <a href="${p.live}" target="_blank" class="btn btn--filled">${ghIcon} WSL/Windows</a>
    `;
  } else if (p.isPrivate) {
    linksEl.innerHTML = `
      <a href="${p.backUrl}" target="_blank" class="btn">${ghIcon} ${prj.code} · Backend</a>
      <a href="${p.frontUrl}" target="_blank" class="btn btn--filled">${ghIcon} ${prj.code} · Frontend</a>
      <span class="tag" style="align-self:center">🔒 ${prj.private}</span>
    `;
  } else {
    linksEl.innerHTML = `
      <a href="${p.code}" target="_blank" class="btn">${ghIcon} ${prj.code}</a>
      <a href="${p.live}" target="_blank" class="btn btn--filled">${ghIcon} ${prj.live}</a>
    `;
  }
  document.getElementById('project-modal').classList.add('active');
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('active');
}

document.querySelectorAll('#projects .window[data-project]').forEach(win => {
  const id = parseInt(win.dataset.project);
  if (id < projectData.length) {
    win.style.cursor = 'pointer';
    win.addEventListener('click', () => openProjectModal(id));
  }
});

// ---- Tech popup + persistent description ----
const popupEl = document.createElement('div');
popupEl.className = 'tech-popup';
document.body.appendChild(popupEl);

const techDescHint = document.getElementById('tech-desc');

document.querySelectorAll('.icon-grid__item').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', (e) => {
    const label = item.querySelector('.icon-grid__label');
    if (!label) return;
    const name = label.textContent;
    const desc = i18n[lang]?.tech?.[name];
    if (!desc) return;
    popupEl.textContent = `${name}: ${desc}`;
    popupEl.style.display = 'block';
    const rect = item.getBoundingClientRect();
    const popupW = 320;
    let left = rect.left + rect.width / 2 - popupW / 2;
    if (left < 10) left = 10;
    if (left + popupW > window.innerWidth - 10) left = window.innerWidth - popupW - 10;
    popupEl.style.left = left + 'px';
    popupEl.style.top = (rect.bottom + 8) + 'px';
    clearTimeout(popupEl._hideTimer);
    popupEl._hideTimer = setTimeout(() => { popupEl.style.display = 'none'; }, 2500);
    if (techDescHint) {
      techDescHint.textContent = `${name}: ${desc}`;
      techDescHint.dataset.active = 'true';
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.icon-grid__item') && !e.target.closest('.tech-popup')) {
    popupEl.style.display = 'none';
  }
});

// ---- Language toggle (ES → EN → DE → ES) ----
const langOrder = ['es', 'en', 'de'];
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#lang-btn');
  if (btn) {
    const idx = langOrder.indexOf(lang);
    switchLanguage(langOrder[(idx + 1) % langOrder.length]);
  }
});

// ---- Theme init ----
(function init() {
  const savedLang = localStorage.getItem('terminal-lang') || 'es';
  const savedTheme = localStorage.getItem('terminal-theme') || 'dark';
  document.getElementById('lang-btn').textContent = savedLang.toUpperCase();
  const ml = document.getElementById('mobile-lang-btn');
  if (ml) ml.textContent = savedLang.toUpperCase();
  switchTheme(savedTheme);
  lang = savedLang;
  updateI18n();
  enrichBadges();
})();

// ---- Console easter egg ----
console.log(`
%c╔═══════════════════════════════════════╗
║   Diego's Portfolio - Terminal Style  ║
║                                       ║
║   Press ? for keyboard shortcuts      ║
╚═══════════════════════════════════════╝
`, 'color: #e94560; font-family: monospace;');

// ---- Scroll reveal ----
const windows = document.querySelectorAll('.window:not(.modal-window)');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
windows.forEach(win => {
  win.style.opacity = '0';
  win.style.transform = 'translateY(20px)';
  win.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(win);
});

// ---- Background GIF rotation ----
const bgGifs = [
  'assets/bg/aesthethic-cool-anime1999.gif', 'assets/bg/Ghost-in-the-shell-makoto.gif',
  'assets/bg/akira-kaneda.gif', 'assets/bg/akira-kaneda2.gif', 'assets/bg/anime-bg.gif',
  'assets/bg/anime-girl-motorcycle.gif', 'assets/bg/ashita-no-joe-joe-and-carlos.gif',
  'assets/bg/ashita-no-joe-joe-and-danpei.gif', 'assets/bg/ashita-no-joe-joe-and-noriko.gif',
  'assets/bg/ashita-no-joe-joe-and-rikiishi.gif', 'assets/bg/ashita-no-joe-joe-and-yoko.gif',
  'assets/bg/ashita-no-joe-joe-and-yoko2.gif', 'assets/bg/ashita-no-joe-joe-and-yoko3.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-PEAK.gif', 'assets/bg/ashita-no-joe-joe-yabuki-aesthethic.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-eclipse_.gif', 'assets/bg/ashita-no-joe-joe-yabuki-gay.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-rain.gif', 'assets/bg/ashita-no-joe-joe-yabuki-tren.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-vinlandsaga.gif', 'assets/bg/ashita-no-joe-joe-yabuki-yoko.gif',
  'assets/bg/ashita-no-joe-joe-yabuki.gif', 'assets/bg/ashita-no-joe-あしたのジョー.gif',
  'assets/bg/berserk-griffith-eclipse.gif', 'assets/bg/berserk-guts-aesthethic.gif',
  'assets/bg/berserk-guts-casca.gif', 'assets/bg/bye-joe-yabuki-seeyouagain.gif',
  'assets/bg/evangelion-rei-asuka-shinji-aesthethic.gif', 'assets/bg/faye-valentine-cowboy-bebop-shoot.gif',
  'assets/bg/faye-valentine-cowboy-bebop-spike.gif', 'assets/bg/faye-valentine-cowboy-bebop.gif',
  'assets/bg/faye-valentine-lamilfToda-elvaginon.gif', 'assets/bg/faye-valentine-space-cowboy.gif',
  'assets/bg/TokyoGhoulPeak.jpg', 'assets/bg/SuiGodIshidaTokyoCinemaGhoul.jpg', 'assets/bg/TokyoGodPeak.jpg',
  'assets/bg/griffith-berserk-eclipse💀.gif', 'assets/bg/griffith-berserk-eclipse💀2.gif',
  'assets/bg/griffith-vs-guts.gif', 'assets/bg/griffith💀osomaduro.gif', 'assets/bg/joe-yabuki-rikiishi.gif',
  'assets/bg/moto-aesthethic-retro-nostalgic.gif', 'assets/bg/motomami.gif',
  'assets/bg/person-walking-down-the-streets-wearing-a-coat-and-a-cap-with-attitude-purewhiteash.gif',
  'assets/bg/reinhard-logh-gingaeiyuu.gif', 'assets/bg/swing-joe-yabuki-snow.gif'
];

const animatedBg = document.querySelector('.animated-bg');
let isFirstLoad = true;

function setRandomGif() {
  let randomGif;
  if (isFirstLoad) {
    randomGif = Math.random() < 0.4 ? bgGifs[0] : bgGifs[Math.floor(Math.random() * bgGifs.length)];
    isFirstLoad = false;
  } else {
    randomGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];
  }
  if (animatedBg) animatedBg.style.backgroundImage = `url('${randomGif}')`;
  glitchBurst();
}
setRandomGif();
setInterval(setRandomGif, 30000);

// ---- Hero code overlay ----
const heroCommands = [
  '$ npm run dev -- --port 5173', '$ nvim src/App.tsx', '$ git push origin main',
  '$ systemctl --user start hyprland', '$ sudo pacman -Syu', '$ yarn build',
  '$ docker compose up -d', '$ cargo run', '$ python3 server.py',
  '$ ls -la ~/dotfiles', '$ cat ~/.config/hypr/hyprland.conf',
  '$ ssh deploy@prod-server', '$ npx create-react-app', '$ brew update && brew upgrade',
  '$ git stash pop', '$ tmux new -s dev', '$ kill -9 $(lsof -t :3000)',
  '$ curl -X POST https://api.example.com', '$ pnpm audit --fix',
  '$ nvim +Lazy update', '$ zellij attach session', '$ rm -rf node_modules && npm i',
  '$ chmod +x deploy.sh', '$ ./gradlew build', '$ pip install -r requirements.txt'
];

const codeOverlay = document.querySelector('.hero-code-overlay');
let codeLines = [];
let cmdIndex = 0;

function spawnCodeLine() {
  if (!codeOverlay) return;
  const line = document.createElement('div');
  line.className = 'hero-code-line';
  line.textContent = heroCommands[cmdIndex % heroCommands.length];
  cmdIndex++;
  const w = codeOverlay.offsetWidth || 800;
  const h = codeOverlay.offsetHeight || 400;
  line.style.left = (10 + Math.random() * (w * 0.6)) + 'px';
  line.style.top = (10 + Math.random() * (h * 0.8)) + 'px';
  line.style.animationDelay = '0s';
  if (Math.random() < 0.15) line.classList.add('glitch');
  line.style.opacity = '0.25';
  codeOverlay.appendChild(line);
  setTimeout(() => { if (line.parentNode) line.remove(); }, 4500);
}

// spawn a few lines initially, then keep adding
for (let i = 0; i < 7; i++) setTimeout(spawnCodeLine, i * 600);
setInterval(spawnCodeLine, 5000);

function glitchBurst() {
  if (codeOverlay) {
    codeOverlay.querySelectorAll('.hero-code-line').forEach(el => el.classList.add('glitch'));
  }
}

// ---- CV Modal ----
function openCVModal() {
  const cv = i18n[lang].cv;
  document.getElementById('cv-modal-filename').textContent = 'cv_preview.sh';
  document.getElementById('cv-modal-image').src = 'assets/modal-placeholder-cv.png';
  document.getElementById('cv-modal-desc').textContent = cv.desc;
  document.getElementById('cv-modal-links').innerHTML =
    `<a href="https://dizzi1222.github.io/dhardi.dev/assets/cv.pdf" target="_blank" class="btn btn--filled">${cv.download}</a>`;
  document.getElementById('cv-modal').classList.add('active');
}

function closeCVModal() {
  document.getElementById('cv-modal').classList.remove('active');
}

function enrichBadges() {
  const tagPath = {
    'React': ['0 0 24 24', 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.474-.15-.934-.318-1.354-.497-1.732-.74-2.852-1.708-2.852-2.476 0-.768 1.12-1.736 2.852-2.476.42-.18.88-.342 1.354-.493z'],
    'Node.js': ['0 0 24 24', 'M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.184-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.238.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.019 1.615-1.339 2.531-3.67 2.531z'],
    'MongoDB': ['0 0 24 24', 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'],
    'PostgreSQL': ['0 0 24 24', 'M22.41 14.41c-.31-.88-.92-1.42-1.48-1.71-.1-.19-.19-.37-.27-.57-.62-1.6-.57-3.28-.12-4.75.33-1.1.89-2.15 1.2-3.31.49-1.78.11-3.57-.36-4.63-.48-1.06-1.23-2.11-2.49-2.57C18.13 1.1 17.09 1 15.86 1h-.07c-.52 0-1.03.05-1.53.14-1.3.21-2.71.62-4.09.68-.8.02-1.61-.08-2.4-.18l-.54-.07c-.84-.1-1.66-.13-2.43-.07-1.66.13-2.53.68-3.27 1.42-.75.75-1.24 1.78-1.59 2.95-.36 1.19-.55 2.57-.57 4.07-.01.61.05 1.24.13 1.89.14 1.18.32 2.44.23 3.72-.05.72-.16 1.45-.27 2.15-.15.98-.31 1.96-.36 2.91-.06 1.2.13 2.29.56 3.25.43.95 1.06 1.65 1.85 2.08.78.43 1.74.67 2.83.67.97 0 1.99-.17 2.97-.35.24-.04.49-.08.73-.12 1.37-.19 2.77-.23 4.18-.1.82.07 1.63.21 2.43.35.78.14 1.58.28 2.39.34.48.04.96.06 1.42.02 1.41-.07 2.49-.53 3.29-1.36.81-.84 1.29-1.96 1.39-3.36.07-.93-.01-1.93-.2-2.99-.14-.78-.33-1.6-.48-2.4-.13-.7-.26-1.4-.28-2.07.01-.41.1-.82.19-1.23.1-.48.2-.96.18-1.43-.01-.48-.14-.95-.43-1.38z'],
    'HTML': ['0 0 24 24', 'M2 2h20L19 20l-7 3-7-3L2 2zm14 5H7.6l.3 3.5h7.7l-.4 4.5L12 16.5 8.8 15l-.2-2.2H5.5l.3 4L12 19l6.2-2.2.8-9.8z'],
    'CSS': ['0 0 24 24', 'M2 2h20L19 20l-7 3-7-3L2 2zm13.5-1.6L16.7 5H7.8l.2 2.5h8.8l-.5 5H8.9l.3 2.5h6.3l.4 3L12 17.5 8 16l-.3-2.5H5.5l.4 4.5L12 21l6.1-2 .9-10H7.4l-.3-2.5h11z'],
    'JavaScript': ['0 0 24 24', 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.739 1.06c.21.48.45.689.75 1.034 1.605 1.755 6.435 1.395 6.675-1.105.09-.735.041-1.351-.465-1.954z'],
    'Lua': ['0 0 24 24', 'M19.2 4.8C24 9.6 24 14.4 19.2 19.2S9.6 24 4.8 19.2 0 14.4 0 9.6 4.8 0 9.6 0s9.6 4.8 9.6 4.8zM8 6h2v8H8V6zm4 2h2v6h-2V8z'],
    'Shell': ['0 0 24 24', 'M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h14v2H3v-2z'],
    'YAML': ['0 0 24 24', 'M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 1.5V9h5.5L13 3.5z'],
    'Docker': ['0 0 512 512', 'M501.4 212.3c-11.5-8-38-11-58.6-7-2.4-20-13.5-37.5-32.7-53l-11-8-7.7 11.5c-9.6 15-14.4 36-13 56 .5 7 2.9 19.5 10.1 30.5-6.7 4-20.7 9-38.9 9H2.3l-1 4c-3.4 20-3.4 82.5 36 130.5 29.8 36.5 74 55 132.1 55 125.9 0 219.1-60.5 262.8-170 17.3.5 54.3 0 73-37.5.5-1 1.4-3 4.8-10.5l1.9-4zM280 71.3h-52.8v50H280zm0 60h-52.8v50H280zm-62.5 0h-52.8v50h52.8zm-62.4 0h-52.8v50h52.8zm-62.5 60H39.8v50h52.8zm62.5 0h-52.8v50h52.8zm62.4 0h-52.8v50h52.8zm62.5 0h-52.8v50H280zm62.4 0h-52.8v50h52.8z'],
    'Figma': ['0 0 24 24', 'M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0zM12 0v8h4a4 4 0 0 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V4a4 4 0 0 0-8 0zM4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z'],
    'LazyVim': ['0 0 24 24', 'M12 2l.9 3.3a7.5 7.5 0 015.8 5.8L22 12l-3.3.9a7.5 7.5 0 01-5.8 5.8L12 22l-.9-3.3a7.5 7.5 0 01-5.8-5.8L2 12l3.3-.9a7.5 7.5 0 015.8-5.8L12 2z'],
    'Neovim': ['0 0 24 24', 'M2.214 4.954v13.615L7.655 24V10.314L3.312 3.845 2.214 4.954zm4.999 17.98l-4.557-4.548V5.136l.59-.596 3.967 5.908v12.485zm14.573-4.457l-.862.937-4.24-6.376V0l5.068 5.092.034 13.385zM7.431.001l12.998 19.835-3.637 3.637L3.787 3.683 7.43 0z'],
    'Python': ['0 0 24 24', 'M7.358 8.515h4.312c.398 0 .726-.327.726-.729V.731c0-.399-.302-.716-.699-.731C11.231 0 10.6 0 10.6 0s.006 1.268-.009 1.268c-.018.432-.376.769-.812.769H7.377c-.411 0-.744-.347-.744-.746V.005S3.919 0 3.919 0c-.744 0-1.332.604-1.332 1.34v4.279c0 2.854 2.583 2.896 4.771 2.896zM9.818 3.141c-.333 0-.603-.273-.603-.607 0-.335.27-.607.603-.607.332 0 .602.272.602.607 0 .334-.27.607-.602.607zm-6.46 6.536c0 1.192 1.039 3.159 2.882 3.159h3.273v-1.447c0-.42.347-.76.767-.76h4.298c.416 0 .758.342.758.76v2.714c0 .823-.698 1.453-1.519 1.453H7.93c-2.177 0-4.236-1.21-4.236-3.521v-5.97S1.583 9.712 1.583 9.712c-.638.141-1.262.564-1.262 1.495v4.279c0 2.867 2.368 3.129 4.522 3.129h4.326v-1.433c0-1.939 1.388-2.298 2.889-2.298 1.332 0 4.445.132 4.445-2.995v-4.88c0-1.218-.745-2.931-2.648-2.931h-3.442v1.501c0 .399-.331.723-.73.723H5.58c-.5 0-.748.214-.748.635-.001.006-.001 2.24-.001 2.24s.477.168.527.168z'],
    'JS': ['0 0 24 24', 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.739 1.06c.21.48.45.689.75 1.034 1.605 1.755 6.435 1.395 6.675-1.105.09-.735.041-1.351-.465-1.954z'],
    'Tailwind': ['0 0 24 24', 'M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 4c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 11.15 9.5 10 7 10z'],
  };
  document.querySelectorAll('#projects .window[data-project] .tag').forEach(el => {
    const name = el.textContent.trim();
    const entry = tagPath[name];
    if (entry) {
      const svg = `<svg width="10" height="10" viewBox="${entry[0]}" fill="currentColor" style="vertical-align:middle;margin-right:2px"><path d="${entry[1]}"/></svg>`;
      el.innerHTML = svg + ' ' + name;
    }
  });
}
