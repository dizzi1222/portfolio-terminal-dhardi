<script lang="ts">
  import { sections, scroll, type Section } from '$lib/stores/scroll.svelte';
  import { onMount } from 'svelte';

  let visible = $state(true);
  let lastScrollY = 0;
  let detailOpen = $state(false);

  let strip: HTMLElement | undefined = $state();
  let dragging = $state(false);
  let dragMoved = $state(false);
  let startX = 0, startY = 0, startScroll = 0;

  function onDown(e: PointerEvent) {
    if (!strip || (e.pointerType === 'mouse' && e.button !== 0)) return;
    dragging = true;
    dragMoved = false;
    startX = e.clientX;
    startY = e.clientY;
    startScroll = strip.scrollLeft;
  }
  function onMove(e: PointerEvent) {
    if (!dragging || !strip) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!dragMoved && Math.abs(dx) * 0.6 + Math.abs(dy) > 10) {
      dragMoved = true;
      try { strip.setPointerCapture(e.pointerId); } catch {}
    }
    if (dragMoved) {
      e.preventDefault();
      strip.scrollLeft = startScroll - dx;
    }
  }
  function onUp() { dragging = false; }
  function onClickCapture(e: MouseEvent) {
    if (dragMoved) {
      e.preventDefault();
      e.stopPropagation();
      dragMoved = false;
    }
  }

  $effect(() => {
    scroll.value;
    if (!strip || dragging || window.innerWidth > 450) return;
    const btn = strip.querySelector<HTMLElement>('.navbar__link.active');
    if (!btn) return;
    const target = btn.offsetLeft - (strip.clientWidth - btn.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  });

  function scrollTo(id: Section) {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    const handleScroll = () => {
      if (detailOpen) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        visible = false;
      } else if (currentY < lastScrollY) {
        visible = true;
      }
      lastScrollY = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const onOpen = () => { detailOpen = true; visible = false; };
    const onClose = () => { detailOpen = false; visible = true; };
    document.addEventListener('detail-open', onOpen);
    document.addEventListener('detail-close', onClose);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('detail-open', onOpen);
      document.removeEventListener('detail-close', onClose);
    };
  });

  const sectionLabels: Record<Section, string> = {
    hero: '~/',
    experience: '~/experience',
    tech: '~/tech',
    design: '~/design',
    projects: '~/projects',
    interests: '~/interests',
    certs: '~/certs',
    about: '~/about',
    contact: '~/contact'
  };
</script>

<nav class="navbar" class:visible aria-label="Section navigation">
  <div class="navbar__titlebar">
    <div class="navbar__titlebar-dots">
      <span class="navbar__titlebar-dot navbar__titlebar-dot--close"></span>
      <span class="navbar__titlebar-dot"></span>
      <span class="navbar__titlebar-dot"></span>
    </div>
    <span>nav.sh</span>
  </div>
  <div
    class="navbar__content"
    bind:this={strip}
    onpointerdown={onDown}
    onpointermove={onMove}
    onpointerup={onUp}
    onpointercancel={onUp}
    onclickcapture={onClickCapture}
  >
    {#each sections as s}
      <button class="navbar__link" class:active={scroll.value === s} onclick={() => scrollTo(s)}>
        {sectionLabels[s]}
      </button>
    {/each}
      <button class="navbar__link navbar__link--music" onclick={() => document.dispatchEvent(new CustomEvent('toggle-music'))}>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:2px">
          <rect x="2" y="2" width="20" height="20" rx="2"/>
          <path d="M9 18V9l8-2v9"/>
          <circle cx="7" cy="18" r="2.5"/>
          <circle cx="17" cy="16" r="2.5"/>
        </svg>
        Music
      </button>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    z-index: 999;
    transform: translateY(0);
    transition: transform 0.3s ease;
    background: var(--navbar-bg);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-bottom: 2px solid var(--accent-secondary);
  }

  .navbar:not(.visible) {
    transform: translateY(-100%);
  }

  .navbar__titlebar {
    display: flex;
    align-items: center;
    gap: var(--gap-sm);
    padding: 2px var(--gap-sm);
    background: var(--accent-primary);
    color: var(--bg-primary);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  .navbar__titlebar-dots {
    display: flex;
    gap: 4px;
  }

  .navbar__titlebar-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    border: 1.5px solid var(--bg-primary);
  }

  .navbar__titlebar-dot--close {
    background: var(--bg-primary);
  }

  .navbar__content {
    display: flex;
    justify-content: center;
    gap: var(--gap-sm);
    padding: var(--gap-xs) var(--gap-sm);
    flex-wrap: wrap;
    scrollbar-width: none;
  }
  .navbar__content::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 450px) {
    .navbar__content {
      flex-wrap: nowrap;
      justify-content: flex-start;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-x: contain;
      touch-action: none;
    }
    .navbar__link {
      flex: 0 0 auto;
    }
  }

  .navbar__link {
    background: transparent;
    border: none;
    color: var(--text-muted);
    font-family: inherit;
    font-size: 0.8rem;
    padding: 2px var(--gap-sm);
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 2px;
    white-space: nowrap;
  }

  .navbar__link:hover {
    color: var(--accent-tertiary);
    background: rgba(0,217,255,0.08);
    text-shadow: 0 0 6px var(--accent-tertiary);
  }

  .navbar__link.active {
    color: var(--accent-primary);
    background: rgba(233,69,96,0.1);
    font-weight: 700;
  }
  .navbar__link--music {
    color: var(--accent-tertiary) !important;
    font-weight: 700;
  }
  .navbar__link--music:hover {
    text-shadow: 0 0 10px var(--accent-tertiary) !important;
  }
</style>
