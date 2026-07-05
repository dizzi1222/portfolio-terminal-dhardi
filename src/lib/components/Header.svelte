<script lang="ts">
  import { lang, cycleLang, type Lang } from '$lib/stores/lang.svelte';
  import { theme, toggleTheme, bgGifActive, toggleBgGif } from '$lib/stores/theme.svelte';
  import { i18n } from '$lib/i18n';
  import { scroll } from '$lib/stores/scroll.svelte';

  let currentTime = $state(new Date());
  let currentLang = $state<Lang>('es');
  let currentTheme = $state('dark');
  let bgActive = $state(true);
  let mobileOpen = $state(false);

  lang.subscribe(v => currentLang = v);
  theme.subscribe(v => currentTheme = v);
  bgGifActive.subscribe(v => bgActive = v);

  $effect(() => {
    const t = setInterval(() => currentTime = new Date(), 1000);
    return () => clearInterval(t);
  });

  const t = (path: string) => {
    let v: any = i18n[currentLang];
    for (const k of path.split('.')) { if (v) v = v[k]; else return ''; }
    return v || '';
  };

  function handleLang() { cycleLang(); }
  function handleTheme() { toggleTheme(); }
  function toggleMobile() { mobileOpen = !mobileOpen; }
  function toggleHelp() { document.dispatchEvent(new CustomEvent('toggle-keybindings')); }
</script>

<header class="header">
  <div class="header__left">
    <span class="header__prompt">❯</span>
    <span class="header__user glow-text">diego</span>
    <span class="header__path">@portfolio:{scroll.sectionLabels[scroll.value]}$</span>
  </div>
  <div class="header__right">
    <span class="available-badge">
      <span class="available-dot"></span>
      <span>{t('header.available')}</span>
    </span>
    <button class="header-btn" onclick={handleLang}>
      {currentLang.toUpperCase()}
    </button>
    <button class="header-btn" onclick={handleTheme}>
      {currentTheme === 'light' ? '☀' : '☾'}
    </button>
    <button class="header-btn" onclick={toggleBgGif} aria-label="Toggle animated background" title="b">
      {bgActive ? 'BG:ON' : 'BG:OFF'}
    </button>
    <button class="header-btn" onclick={toggleHelp} aria-label="Keyboard shortcuts">?</button>
    <span>
      <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" style="vertical-align:middle;margin-right:4px">
        <path d="M256 1.6c-22.3 55.7-36.6 90.6-62 144.7 15.9 17.5 35 36.6 65.2 57.2-33.4-12.7-55.7-27-71.6-41.3C154.2 230.6 103.4 326 1.6 512c79.5-47.7 143.1-76.3 201.9-87.5-3.2-11.1-4.8-22.3-4.8-35V388c1.6-52.5 28.6-92.2 60.4-89 31.8 1.6 57.2 46.1 55.7 98.6l-3.2 27c57.2 11.1 119.3 41.3 198.8 85.9L467.5 431c-20.7-15.9-42.9-36.6-87.5-60.4 30.2 8 52.5 17.5 70 27C313.2 144.7 302.1 111.3 256 0z"/>
      </svg>
      arch
    </span>
    <span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:4px">
        <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/>
      </svg>
      8GB
    </span>
    <span>{String(currentTime.getHours()).padStart(2, '0')}:{String(currentTime.getMinutes()).padStart(2, '0')}</span>
  </div>
  <button class="mobile-menu-btn" class:open={mobileOpen} onclick={toggleMobile} aria-label="Toggle menu">
    {mobileOpen ? '󰅮' : '󰅬'}
  </button>
</header>

{#if mobileOpen}
  <div id="mobile-menu" style="
    position:fixed;top:var(--header-height);left:0;right:0;
    background:var(--bg-secondary);border-bottom:2px solid var(--accent-secondary);
    padding:var(--gap-md);z-index:999;display:flex;flex-direction:column;gap:var(--gap-sm);
  ">
    <span class="header__path" style="display:block;margin-bottom:var(--gap-sm)">@portfolio:{scroll.sectionLabels[scroll.value]}$</span>
    <span class="available-badge"><span class="available-dot"></span>{t('header.available')}</span>
    <div style="display:flex;gap:var(--gap-sm)">
      <button class="header-btn" onclick={handleLang}>{currentLang.toUpperCase()}</button>
      <button class="header-btn" onclick={handleTheme}>{currentTheme === 'light' ? '☀' : '☾'}</button>
      <button class="header-btn" onclick={toggleBgGif}>{bgActive ? 'BG:ON' : 'BG:OFF'}</button>
    </div>
    <div style="color:var(--text-dim);font-size:0.85rem">
      <span><svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M256 1.6c-22.3 55.7-36.6 90.6-62 144.7 15.9 17.5 35 36.6 65.2 57.2-33.4-12.7-55.7-27-71.6-41.3C154.2 230.6 103.4 326 1.6 512c79.5-47.7 143.1-76.3 201.9-87.5-3.2-11.1-4.8-22.3-4.8-35V388c1.6-52.5 28.6-92.2 60.4-89 31.8 1.6 57.2 46.1 55.7 98.6l-3.2 27c57.2 11.1 119.3 41.3 198.8 85.9L467.5 431c-20.7-15.9-42.9-36.6-87.5-60.4 30.2 8 52.5 17.5 70 27C313.2 144.7 302.1 111.3 256 0z"/></svg> arch</span>
      <span style="margin-left:var(--gap-md)"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/></svg> 8GB</span>
      <span style="margin-left:var(--gap-md)">{String(currentTime.getHours()).padStart(2, '0')}:{String(currentTime.getMinutes()).padStart(2, '0')}</span>
    </div>
  </div>
{/if}
