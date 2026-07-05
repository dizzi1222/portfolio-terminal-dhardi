<script lang="ts">
  import { sections, type Section } from '$lib/stores/scroll.svelte';
  import { onMount } from 'svelte';

  let visible = $state(true);
  let lastScrollY = 0;

  function scrollTo(id: Section) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        visible = false;
      } else if (currentY < lastScrollY) {
        visible = true;
      }
      lastScrollY = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const sectionLabels: Record<Section, string> = {
    hero: '~/',
    about: '~/about',
    tech: '~/tech',
    design: '~/design',
    projects: '~/projects',
    certs: '~/certs',
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
  <div class="navbar__content">
    {#each sections as s}
      <button class="navbar__link" onclick={() => scrollTo(s)}>
        {sectionLabels[s]}
      </button>
    {/each}
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
    background: rgba(13,13,13,0.85);
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
</style>
