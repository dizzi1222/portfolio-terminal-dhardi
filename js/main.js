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
});
