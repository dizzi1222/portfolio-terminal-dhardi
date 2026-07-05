<script lang="ts">
  import { sections, scroll, type Section } from '$lib/stores/scroll.svelte';

  function scrollTo(id: Section) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<nav class="section-nav" aria-label="Section navigation">
  {#each sections as s}
    <button
      class="section-dot"
      class:active={scroll.value === s}
      onclick={() => scrollTo(s)}
      aria-label={s}
      title={s}
    >
      <span class="section-dot-inner"></span>
    </button>
  {/each}
</nav>

<style>
  .section-nav {
    position: fixed;
    right: var(--gap-lg);
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
    z-index: 999;
  }

  .section-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--accent-secondary);
    background: transparent;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .section-dot:hover {
    border-color: var(--accent-tertiary);
    box-shadow: 0 0 8px var(--accent-tertiary);
  }

  .section-dot.active {
    border-color: var(--accent-primary);
    background: var(--accent-primary);
    box-shadow: 0 0 10px var(--accent-primary);
  }

  .section-dot-inner {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent-secondary);
    transition: all 0.3s ease;
  }

  .section-dot.active .section-dot-inner {
    background: var(--bg-primary);
  }
</style>
