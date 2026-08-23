<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Toast from '$lib/components/Toast.svelte';
  import RandomPhrases from '$lib/components/RandomPhrases.svelte';
  import SectionNav from '$lib/components/SectionNav.svelte';
  import { initTheme, bgGifActive, toggleBgGif, toggleTheme } from '$lib/stores/theme.svelte';
  import { initLang, cycleLang } from '$lib/stores/lang.svelte';
  import { sections, scroll, type Section } from '$lib/stores/scroll.svelte';
  import { player } from '$lib/stores/player.svelte';
  import MusicPlayer from '$lib/components/MusicPlayer.svelte';

  let { children } = $props();

  let showKeybindings = $state(false);
  let searchOpen = $state(false);
  let searchQuery = $state('');
  let bgGif = $state('');
  let cmdIndex = 0;

  const searchResults = $derived.by(() => {
    const q = searchQuery.trim().toLowerCase();
    const items = sections.map(id => ({
      id,
      label: id === 'hero' ? '~/' : `~/${id}`
    }));
    if (!q) return items;
    return items.filter(i => i.id.includes(q) || i.label.includes(q));
  });

  function goToSection(idx: number) {
    const clamped = Math.max(0, Math.min(sections.length - 1, idx));
    const id = sections[clamped];
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function sectionStep(dir: 1 | -1) {
    goToSection(sections.indexOf(scroll.value) + dir);
  }

  function openSearch() {
    searchQuery = '';
    searchOpen = true;
  }

  function closeSearch() {
    searchOpen = false;
  }

  function isTypingTarget(e: KeyboardEvent): boolean {
    const el = e.target as HTMLElement | null;
    if (!el) return false;
    return (
      el.tagName === 'INPUT' ||
      el.tagName === 'TEXTAREA' ||
      el.isContentEditable
    );
  }

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
      const typing = isTypingTarget(e);

      if (typing) {
        if (e.key === 'Escape') (e.target as HTMLElement).blur();
        return;
      }

      if (searchOpen) {
        if (e.key === 'Escape') closeSearch();
        if (e.key === 'Enter') {
          const first = searchResults[0];
          if (first) goToSection(sections.indexOf(first.id));
          closeSearch();
        }
        return;
      }

      if (e.key === '?') {
        showKeybindings = !showKeybindings;
        return;
      }
      if (e.key === 'Escape') {
        showKeybindings = false;
        if (player.visible) player.hide();
        return;
      }
      if (e.key === '/') {
        e.preventDefault();
        openSearch();
        return;
      }

      if (e.key >= '1' && e.key <= '9') {
        goToSection(parseInt(e.key) - 1);
        return;
      }
      if (e.key === 'g' && !e.shiftKey) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (e.key === 'G' && e.shiftKey) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        return;
      }
      if (e.key === 'j') { window.scrollBy({ top: 100, behavior: 'smooth' }); return; }
      if (e.key === 'k') { window.scrollBy({ top: -100, behavior: 'smooth' }); return; }
      if (e.key === 'h') { sectionStep(-1); return; }
      if (e.key === 'l') { sectionStep(1); return; }
      if (e.key === 'Enter') { sectionStep(1); return; }
      if (e.key === 'Backspace') { e.preventDefault(); sectionStep(-1); return; }
      if (e.key === 'I' && e.shiftKey) {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const input = document.querySelector('#contact input:not([tabindex="-1"])') as HTMLInputElement | null;
          input?.focus();
        }, 600);
        return;
      }
      if (e.key === 't' && !e.shiftKey) toggleTheme();
      if (e.key === 'L' && e.shiftKey) cycleLang();
      if (e.key === 'b' && !e.shiftKey) toggleBgGif();
      if (e.key === 'm' && !e.shiftKey) player.toggle();
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
        <p><code>j/k</code> - Scroll down/up</p>
        <p><code>h/l</code> - Previous/next section</p>
        <p><code>gg</code> - Go to top</p>
        <p><code>G</code> - Go to bottom</p>
        <p><code>1-9</code> - Jump to section</p>
        <p><code>/</code> - Search sections</p>
        <p><code>I</code> - Insert mode (contact form)</p>
        <p><code>t</code> - Toggle theme</p>
        <p><code>L</code> - Cycle language</p>
        <p><code>b</code> - Toggle animated BG</p>
        <p><code>m</code> - Toggle music player</p>
        <p><code>Space</code> - Play/Pause (when player open)</p>
        <p><code>←/→</code> - Prev/Next track (when player open)</p>
        <p><code>?</code> - Toggle this help</p>
        <p><code>Esc</code> - Close / hide player / leave input</p>
      </div>
    </div>
  </div>
{/if}

<!-- Search Overlay (/) -->
{#if searchOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
  <div class="keybindings-overlay" onclick={closeSearch} role="dialog" aria-label="Search sections" tabindex="-1">
    <div class="window" style="max-width:360px">
      <div class="window__titlebar">
        <span>search.sh — /{searchQuery}</span>
      </div>
      <div class="window__content">
        <input
          class="search-input"
          type="text"
          placeholder="type to filter sections…"
          bind:value={searchQuery}
          onclick={(e) => e.stopPropagation()}
        />
        {#each searchResults as r}
          <button
            class="search-result"
            onclick={() => { goToSection(sections.indexOf(r.id)); closeSearch(); }}
          >
            <span style="color:var(--accent-secondary)">go_to()</span> {r.label}
          </button>
        {:else}
          <p style="color:var(--text-dim);font-size:0.8rem">no match: {searchQuery}</p>
        {/each}
        <p style="color:var(--text-dim);font-size:0.65rem;margin-top:var(--gap-sm)">Enter → first result · Esc → close</p>
      </div>
    </div>
  </div>
{/if}

<style>
  .search-input {
    width: 100%;
    background: var(--bg-secondary);
    border: 1px solid var(--text-dim);
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.8rem;
    padding: var(--gap-xs) var(--gap-sm);
    border-radius: 3px;
    outline: none;
    margin-bottom: var(--gap-sm);
  }
  .search-input:focus {
    border-color: var(--accent-tertiary);
    box-shadow: 0 0 8px rgba(0,217,255,0.2);
  }
  .search-result {
    display: block;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.78rem;
    padding: var(--gap-xs) var(--gap-sm);
    border-radius: 3px;
    cursor: pointer;
  }
  .search-result:hover {
    background: rgba(0,217,255,0.08);
    color: var(--accent-tertiary);
  }
</style>
