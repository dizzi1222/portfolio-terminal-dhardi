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
    tags: ['Lua', 'Shell', 'YAML'],
    code: 'https://github.com/dizzi1222/dotfiles-dizzi',
    live: 'https://github.com/dizzi1222/dotfiles-dizzi',
    image: 'assets/modal-tech-dotfiles.png'
  },
  {
    id: 3, title: 'PTD-Talento',
    desc: 'Marketplace de talento para Cincinnatus Institute. MVP completo con autenticación, catálogo de estudiantes, watch list de reclutadores, panel admin y notificaciones. Arquitectura MERN con Docker.',
    descEn: 'Talent marketplace for Cincinnatus Institute. Full MVP with auth, student catalog, recruiter watch list, admin panel and notifications. MERN architecture with Docker.',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'Figma'],
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
    const desc = t(`tech.${name}`);
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

const heroBg = document.querySelector('.hero-bg');
let isFirstLoad = true;

function setRandomGif() {
  let randomGif;
  if (isFirstLoad) {
    randomGif = Math.random() < 0.4 ? bgGifs[0] : bgGifs[Math.floor(Math.random() * bgGifs.length)];
    isFirstLoad = false;
  } else {
    randomGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];
  }
  if (heroBg) heroBg.style.backgroundImage = `url('${randomGif}')`;
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
