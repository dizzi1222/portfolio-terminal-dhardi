<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Toast from '$lib/components/Toast.svelte';
  import RandomPhrases from '$lib/components/RandomPhrases.svelte';
  import SectionNav from '$lib/components/SectionNav.svelte';
  import { initTheme, bgGifActive, toggleBgGif } from '$lib/stores/theme.svelte';
  import { initLang } from '$lib/stores/lang.svelte';
  import { sections, scroll, type Section } from '$lib/stores/scroll.svelte';
  import { player } from '$lib/stores/player.svelte';
  import MusicPlayer from '$lib/components/MusicPlayer.svelte';

  let { children } = $props();

  let showKeybindings = $state(false);
  let bgGif = $state('');
  let cmdIndex = 0;

  const cmdLines = [
    '$ npm run dev -- --port 5173', '$ nvim src/App.tsx', '$ git push origin main',
    '$ sudo pacman -Syu', '$ docker compose up -d', '$ cargo run',
    '$ npx create-react-app', '$ git stash pop', '$ pnpm audit --fix',
    '$ rm -rf node_modules && pnpm i'
  ];

  onMount(() => {
    initTheme();
    initLang();

    const bgGifs = [
      '/bg/aesthethic-cool-anime1999.gif', '/bg/Ghost-in-the-shell-makoto.gif',
      '/bg/akira-kaneda.gif', '/bg/anime-bg.gif',
      '/bg/berserk-guts-aesthethic.gif', '/bg/faye-valentine-cowboy-bebop.gif'
    ];
    bgGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];

    setInterval(() => {
      bgGif = bgGifs[Math.floor(Math.random() * bgGifs.length)];
    }, 30000);

    function updateSection() {
      let current: Section = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          current = id as Section;
        }
      }
      scroll.set(current);
    }

    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => { updateSection(); ticking = false; });
        ticking = true;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSection();

    document.addEventListener('toggle-keybindings', () => {
      showKeybindings = !showKeybindings;
    });

    document.addEventListener('toggle-music', () => {
      player.toggle();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === '?') {
        showKeybindings = !showKeybindings;
      }
      if (e.key === 'Escape') {
        showKeybindings = false;
        if (player.visible) player.hide();
      }
      const sections = ['hero', 'about', 'tech', 'design', 'projects', 'certs', 'contact'];
      if (e.key >= '1' && e.key <= '7') {
        const idx = parseInt(e.key) - 1;
        if (sections[idx]) {
          document.getElementById(sections[idx])?.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (e.key === 'g' && !e.shiftKey) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (e.key === 'G' && e.shiftKey) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
      if (e.key === 'j') window.scrollBy({ top: 100, behavior: 'smooth' });
      if (e.key === 'k') window.scrollBy({ top: -100, behavior: 'smooth' });
      if (e.key === 'b') toggleBgGif();
      if (e.key === 'm') player.toggle();
    });
  });

  console.log(`
%c╔═══════════════════════════════════════╗
║   Diego's Portfolio - Terminal Style  ║
║                                       ║
║   Press ? for keyboard shortcuts      ║
╚═══════════════════════════════════════╝
`, 'color: #e94560; font-family: monospace;');
</script>

<!-- Animated Background -->
{#if $bgGifActive}
  <div class="animated-bg" style="background-image:url('{bgGif}')"></div>
{/if}

<!-- CRT Scanlines Overlay -->
<div class="crt-overlay"></div>

<!-- Noise Overlay -->
<svg class="noise-overlay" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)" />
</svg>

<Header />
<NavBar />
<Toast />
<RandomPhrases />
<SectionNav />

<main class="main">
  <div class="container">
    {@render children()}
  </div>
</main>

<MusicPlayer />
<Footer />

<!-- Keybindings Overlay -->
{#if showKeybindings}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div class="keybindings-overlay" onclick={() => showKeybindings = false} role="dialog" aria-label="Keyboard shortcuts" tabindex="-1">
    <div class="window" style="max-width:420px">
      <div class="window__titlebar">
        <span>keybindings.md</span>
      </div>
      <div class="window__content">
        <p><code>j/k</code> - Scroll up/down</p>
        <p><code>g</code> - Go to top</p>
        <p><code>G</code> - Go to bottom</p>
        <p><code>1-7</code> - Jump to section</p>
        <p><code>b</code> - Toggle animated BG</p>
        <p><code>m</code> - Toggle music player</p>
        <p><code>Space</code> - Play/Pause (when player open)</p>
        <p><code>←/→</code> - Prev/Next track (when player open)</p>
        <p><code>?</code> - Toggle this help</p>
        <p><code>Esc</code> - Close / hide player</p>
      </div>
    </div>
  </div>
{/if}
