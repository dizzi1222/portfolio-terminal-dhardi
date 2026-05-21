/* ===========================================
   MAIN.JS - Keyboard Navigation & Interactivity
   =========================================== */

// Project data for modals
const projectData = [
  {
    id: 0,
    title: 'Dashboard React',
    desc: 'Panel de administración con gráficos, calculadora, contador y TO-DO list. Todo construido con React y react-router-dom.',
    tags: ['React', 'Node.js', 'MongoDB'],
    code: 'https://github.com/dizzi1222',
    live: '#',
    screenshot: '📊'
  },
  {
    id: 1,
    title: 'Portfolio Terminal',
    desc: 'Portfolio interactivo con estética de terminal Linux. Comandos CLI, efectos CRT, navegación estilo Vim. Optimizado para devs que viven entre zsh, kitty y Hyprland.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/dizzi1222/portfolio-terminal-dhardi',
    live: 'https://dizzi1222.github.io/portfolio-terminal-dhardi/',
    screenshot: '🖥️'
  },
  {
    id: 2,
    title: 'Dotfiles Config',
    desc: 'Configuración completa de Arch Linux con Hyprland, Neovim (LazyVim), Kitty, Zsh, Waybar, EWW widgets y Rofi. Todo gestionado con GNU Stow y dotfiles propios.',
    tags: ['Lua', 'Shell', 'YAML'],
    code: 'https://github.com/dizzi1222',
    live: '#',
    screenshot: '⚙️'
  },
  {
    id: 3,
    title: 'PTD-Talento',
    desc: 'Marketplace de talento para Cincinnatus Institute. MVP completo con autenticación, catálogo de estudiantes, watch list de reclutadores, panel admin y notificaciones. Arquitectura MERN con Docker.',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'Figma'],
    code: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-back',
    live: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-front',
    screenshot: '🏗️',
    isPrivate: true,
    backUrl: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-back',
    frontUrl: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-front'
  },
  {
    id: 4,
    title: 'Nvim Config',
    desc: 'Configuración universal de Neovim con LazyVim. Sincronización multiplataforma (Linux Hyprland, Windows, WSL). Plugins personalizados, LSP para TS/JS/Lua, snippets, y atajos tipo IDE. Setup con dotfiles, sync scripts y PowerToys para Windows.',
    tags: ['Lua', 'LazyVim', 'Neovim'],
    code: 'https://github.com/dizzi1222/nvim',
    live: 'https://github.com/dizzi1222/nvim-wsl',
    screenshot: '💤',
    nvimScreenshots: [
      'https://github.com/user-attachments/assets/9144215e-6156-43c3-beba-4cca7f431337',
      'https://github.com/user-attachments/assets/8adb6f60-bb35-4704-b4ab-12bd587f3992'
    ]
  },
  {
    id: 5,
    title: 'PCE-Agencia',
    desc: 'App de finanzas y viajes — gestión de presupuestos, planificación de itinerarios y seguimiento de gastos. Construida con JavaScript moderno, diseño responsive y flujo de datos limpio.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    code: 'https://github.com/dhardi007/PCE-Agencia',
    live: 'https://github.com/dhardi007/PCE-Agencia',
    screenshot: '💼'
  }
];

// Update clock in header
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('current-time').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

// Keyboard navigation (Vim-style)
const sections = ['hero', 'tech', 'projects', 'design', 'contact'];
let currentSection = 0;

document.addEventListener('keydown', (e) => {
  const key = e.key;
  const overlay = document.getElementById('keybindings-overlay');

  switch(key) {
    // Scroll down
    case 'j':
      window.scrollBy({ top: 100, behavior: 'smooth' });
      break;

    // Scroll up
    case 'k':
      window.scrollBy({ top: -100, behavior: 'smooth' });
      break;

    // Go to top
    case 'g':
      if (!e.shiftKey) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      break;

    // Go to bottom
    case 'G':
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      break;

    // Jump to sections by number
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      const sectionIndex = parseInt(key) - 1;
      if (sections[sectionIndex]) {
        document.getElementById(sections[sectionIndex]).scrollIntoView({ behavior: 'smooth' });
        currentSection = sectionIndex;
      }
      break;

    // Toggle help overlay
    case '?':
      overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
      break;

    // Close overlays with Escape
    case 'Escape':
      overlay.style.display = 'none';
      closeProjectModal();
      break;
  }
});

// Click outside overlay to close
document.getElementById('keybindings-overlay').addEventListener('click', (e) => {
  if (e.target.id === 'keybindings-overlay') {
    e.target.style.display = 'none';
  }
});

// Add overlay styles dynamically
const overlayStyles = document.createElement('style');
overlayStyles.textContent = `
  .keybindings-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .keybindings-overlay code {
    background: var(--accent-secondary);
    padding: 0.2rem 0.4rem;
    margin-right: 0.5rem;
  }

  .keybindings-overlay p {
    margin-bottom: 0.5rem;
  }
`;
document.head.appendChild(overlayStyles);

// Modal functions
function openProjectModal(id) {
  const p = projectData[id];
  if (!p) return;
  document.getElementById('modal-filename').textContent = `project_${String(id + 1).padStart(2, '0')}_preview.sh`;
  document.getElementById('modal-screenshot').textContent = p.screenshot;
  // Use nvim screenshots if available
  const screenshotEl = document.getElementById('modal-screenshot');
  if (p.nvimScreenshots) {
    screenshotEl.textContent = '';
    screenshotEl.style.padding = '0';
    screenshotEl.style.minHeight = 'auto';
    screenshotEl.innerHTML = p.nvimScreenshots.map(url =>
      `<img src="${url}" alt="Nvim screenshot" style="width:100%;display:block;border-bottom:2px solid var(--text-dim)" />`
    ).join('');
  } else {
    screenshotEl.textContent = p.screenshot;
    screenshotEl.style.padding = '';
    screenshotEl.style.minHeight = '';
    screenshotEl.innerHTML = '';
  }
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent = p.desc;
  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const linksEl = document.getElementById('modal-links');
  linksEl.innerHTML = p.nvimScreenshots
    ? `
    <a href="${p.code}" target="_blank" class="btn"> Linux Config</a>
    <a href="${p.live}" target="_blank" class="btn btn--filled"> WSL/Windows</a>
  `
    : p.isPrivate
    ? `
    <a href="${p.backUrl}" target="_blank" class="btn"> Backend (Repo)</a>
    <a href="${p.frontUrl}" target="_blank" class="btn btn--filled"> Frontend (Repo)</a>
    <span class="tag" style="align-self:center">🔒 Privado</span>
  `
    : `
    <a href="${p.code}" target="_blank" class="btn"> View Code</a>
    <a href="${p.live}" target="_blank" class="btn btn--filled"> Live Preview</a>
  `;
  document.getElementById('project-modal').classList.add('active');
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('active');
}

// Make project windows clickable
document.querySelectorAll('#projects .window[data-project]').forEach(win => {
  const id = parseInt(win.dataset.project);
  if (id < projectData.length) {
    win.style.cursor = 'pointer';
    win.addEventListener('click', () => openProjectModal(id));
  }
});

// Tech descriptions data
const techData = {
  'Node.js': 'Runtime JS del lado del servidor. Lo uso para construir APIs RESTful y backends escalables con Express.',
  'Express': 'Framework minimalista para Node.js. Mi elección para crear servidores, middlewares y APIs limpias.',
  'React': 'Biblioteca de UI declarativa. Construyo interfaces interactivas con componentes y hooks reutilizables.',
  'MongoDB': 'Base de datos NoSQL. La uso como principal almacenamiento en mis proyectos MERN con Mongoose.',
  'Git': 'Control de versiones esencial. Flujo con feature branches, rebase interactivo y commits semánticos.',
  'Arch': 'Mi daily driver. Arch Linux + Hyprland, todo configurado desde cero con dotfiles propios.',
  'Neovim': 'Editor principal con LazyVim. Plugins personalizados, LSP para TS/JS, y flujo 100% teclado.',
  'Figma': 'Diseño de interfaces y prototipado. Design systems, componentes reutilizables y colaboración en equipo.',
  'Google Stitch': 'Prototipado con IA. Generación rápida de mockups y exploración de variantes de diseño.',
  'TypeScript': 'Tipado estático para JS. Código más robusto y mantenible en backend y frontend.',
  'Docker': 'Contenedores para desarrollo y producción. Entornos reproducibles y despliegues consistentes.'
};

// Random tech popup
const popupEl = document.createElement('div');
popupEl.className = 'tech-popup';
document.body.appendChild(popupEl);

document.querySelectorAll('.icon-grid__item').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', (e) => {
    const label = item.querySelector('.icon-grid__label');
    if (!label) return;
    const name = label.textContent;
    const desc = techData[name];
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
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.icon-grid__item') && !e.target.closest('.tech-popup')) {
    popupEl.style.display = 'none';
  }
});

// Console easter egg
console.log(`
%c╔═══════════════════════════════════════╗
║   Diego's Portfolio - Terminal Style  ║
║                                       ║
║   Press ? for keyboard shortcuts      ║
╚═══════════════════════════════════════╝
`, 'color: #e94560; font-family: monospace;');

// Typing effect for hero tagline (optional enhancement)
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Add subtle animation to windows on scroll (exclude modal)
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

// Animated background GIF rotation
const bgGifs = [
  'assets/bg/aesthethic-cool-anime1999.gif',
  'assets/bg/Ghost-in-the-shell-makoto.gif',
  'assets/bg/akira-kaneda.gif',
  'assets/bg/akira-kaneda2.gif',
  'assets/bg/anime-bg.gif',
  'assets/bg/anime-girl-motorcycle.gif',
  'assets/bg/ashita-no-joe-joe-and-carlos.gif',
  'assets/bg/ashita-no-joe-joe-and-danpei.gif',
  'assets/bg/ashita-no-joe-joe-and-noriko.gif',
  'assets/bg/ashita-no-joe-joe-and-rikiishi.gif',
  'assets/bg/ashita-no-joe-joe-and-yoko.gif',
  'assets/bg/ashita-no-joe-joe-and-yoko2.gif',
  'assets/bg/ashita-no-joe-joe-and-yoko3.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-PEAK.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-aesthethic.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-eclipse_.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-gay.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-rain.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-tren.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-vinlandsaga.gif',
  'assets/bg/ashita-no-joe-joe-yabuki-yoko.gif',
  'assets/bg/ashita-no-joe-joe-yabuki.gif',
  'assets/bg/ashita-no-joe-あしたのジョー.gif',
  'assets/bg/berserk-griffith-eclipse.gif',
  'assets/bg/berserk-guts-aesthethic.gif',
  'assets/bg/berserk-guts-casca.gif',
  'assets/bg/bye-joe-yabuki-seeyouagain.gif',
  'assets/bg/evangelion-rei-asuka-shinji-aesthethic.gif',
  'assets/bg/faye-valentine-cowboy-bebop-shoot.gif',
  'assets/bg/faye-valentine-cowboy-bebop-spike.gif',
  'assets/bg/faye-valentine-cowboy-bebop.gif',
  'assets/bg/faye-valentine-lamilfToda-elvaginon.gif',
  'assets/bg/faye-valentine-space-cowboy.gif',
  'assets/bg/TokyoGhoulPeak.jpg',
  'assets/bg/SuiGodIshidaTokyoCinemaGhoul.jpg',
  'assets/bg/TokyoGodPeak.jpg',
  'assets/bg/griffith-berserk-eclipse💀.gif',
  'assets/bg/griffith-berserk-eclipse💀2.gif',
  'assets/bg/griffith-vs-guts.gif',
  'assets/bg/griffith💀osomaduro.gif',
  'assets/bg/joe-yabuki-rikiishi.gif',
  'assets/bg/moto-aesthethic-retro-nostalgic.gif',
  'assets/bg/motomami.gif',
  'assets/bg/person-walking-down-the-streets-wearing-a-coat-and-a-cap-with-attitude-purewhiteash.gif',
  'assets/bg/reinhard-logh-gingaeiyuu.gif',
  'assets/bg/swing-joe-yabuki-snow.gif'
];

const animatedBg = document.querySelector('.animated-bg');
let isFirstLoad = true;

function setRandomGif() {
  let randomGif;

  if (isFirstLoad) {
    const probability = Math.random();
    if (probability < 0.4) {
      randomGif = bgGifs[0];
    } else {
      randomGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];
    }
    isFirstLoad = false;
  } else {
    randomGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];
  }

  if (animatedBg) {
    animatedBg.style.backgroundImage = `url('${randomGif}')`;
  }
}

setRandomGif();
setInterval(setRandomGif, 30000);
