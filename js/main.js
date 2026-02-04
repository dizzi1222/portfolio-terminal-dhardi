/* ===========================================
   MAIN.JS - Keyboard Navigation & Interactivity
   =========================================== */

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
const sections = ['hero', 'tech', 'projects', 'contact'];
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

    // Close overlay with Escape
    case 'Escape':
      overlay.style.display = 'none';
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

// Initialize any additional effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Add subtle animation to windows on scroll
  const windows = document.querySelectorAll('.window');

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
    // Favorito primero 🔥
    'assets/bg/aesthethic-cool-anime1999.gif',

    // Resto de GIFs
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

    // Primera carga: 30% favorito, 70% random
    if (isFirstLoad) {
      const probability = Math.random();
      if (probability < 0.4) {
        // 30% de probabilidad: favorito
        randomGif = bgGifs[0];
        console.log('🔥 Favorito seleccionado! (30% chance)');
      } else {
        // 70% de probabilidad: random
        randomGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];
        console.log('🎲 Random seleccionado! (70% chance)');
      }
      isFirstLoad = false;
    } else {
      // Rotaciones siguientes: siempre random
      randomGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];
    }

    if (animatedBg) {
      animatedBg.style.backgroundImage = `url('${randomGif}')`;
      console.log(`🎨 Background changed to: ${randomGif}`);
    }
  }

  // Set initial GIF (30% favorito / 70% random)
  setRandomGif();

  // Change GIF every 30 seconds
  setInterval(setRandomGif, 30000);
});
