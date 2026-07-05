<script lang="ts">
  import { lang } from '$lib/stores/lang.svelte';
  import { i18n } from '$lib/i18n';
  import type { Lang } from '$lib/i18n';
  import { showToast } from '$lib/stores/toast.svelte';

  let currentLang = $state<Lang>('es');
  lang.subscribe(v => currentLang = v);

  const t = (path: string) => {
    let v: any = i18n[currentLang];
    for (const k of path.split('.')) { if (v) v = v[k]; else return ''; }
    return v || '';
  };

  const quotes = [
    '">_ "El único modo de hacer un gran trabajo es amar lo que haces." — Steve Jobs',
    '">_ "Primero resuelve el problema, luego escribe el código." — John Johnson',
    '">_ "Talk is cheap. Show me the code." — Linus Torvalds',
    '">_ "El software es un gran arte." — Jeff Atwood',
    '">_ "La simplicidad es la máxima sofisticación." — Leonardo da Vinci',
    '">_ "Código limpio siempre parece que fue escrito por alguien que se preocupa." — Robert C. Martin',
    '">_ "No es un bug, es una característica no documentada." — Anónimo',
    '">_ "Primero haz que funcione, luego haz que sea rápido." — Kent Beck'
  ];

  let displayText = $state('');
  let quoteIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  $effect(() => {
    const interval = setInterval(() => {
      const current = quotes[quoteIndex];
      if (isDeleting) {
        displayText = current.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          charIndex = 0;
          quoteIndex = (quoteIndex + 1) % quotes.length;
        }
      } else {
        displayText = current.substring(0, charIndex++);
        if (charIndex > current.length) {
          isDeleting = true;
        }
      }
    }, isDeleting ? 25 : 40);
    return () => clearInterval(interval);
  });

  let hoverMessage = $state(false);

  function handleAvatarEnter() {
    hoverMessage = true;
    showToast('? No sabía que te gustaba espiar...');
  }

  function handleAvatarLeave() {
    hoverMessage = false;
  }
</script>

<section class="hero section" id="hero" style="margin-top:calc(var(--header-height) + 3rem + var(--gap-lg))">
  <div class="window" style="max-width: 700px; margin: 0 auto">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span class="hero-filename" style="cursor:pointer">about_me.sh</span>
    </div>
    <div class="window__content" style="position:relative;overflow:hidden">
      <div class="hero-code-overlay"></div>
      <div style="display:flex;align-items:flex-start;gap:var(--gap-lg);flex-wrap:wrap">
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="avatar-container" style="position:relative;flex-shrink:0;display:flex;flex-direction:column;align-items:center"
          onmouseenter={handleAvatarEnter}
          onmouseleave={handleAvatarLeave}
          role="img" aria-label="Avatar de Diego">
          <div class="avatar-wrapper">
            <img
              src="/avatar.png"
              alt="Avatar"
              class="avatar avatar-img"
              class:avatar-glitch={hoverMessage}
            />
            {#if !hoverMessage}
              <div class="avatar-dots">...</div>
            {/if}
            <div class="avatar-glitch-layers" class:active={hoverMessage} aria-hidden="true">
              <div class="glitch-layer glitch-layer--r" style="background-image:url('/avatar.png')"></div>
              <div class="glitch-layer glitch-layer--g" style="background-image:url('/avatar.png')"></div>
              <div class="glitch-layer glitch-layer--b" style="background-image:url('/avatar.png')"></div>
            </div>
          </div>
        </div>
        <div style="flex:1;min-width:200px">
          <h1 class="hero__name glow-text" style="font-size:2rem;margin-bottom:var(--gap-sm)">Diego Härdi</h1>
          <p class="hero__tagline" style="color:var(--text-muted);font-size:0.9rem;margin-bottom:var(--gap-md)">
            {t('hero.tagline')}
          </p>
          <div id="typewriter" class="hero__typewriter" style="color:var(--accent-tertiary);font-size:0.8rem;min-height:1.5rem">
            {displayText}
          </div>
          {#if displayText.length === 0}
            <span style="animation:blink 1s step-end infinite;color:var(--accent-tertiary);font-size:0.8rem">_</span>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <div class="hero-hud" style="margin-top:var(--gap-md)">
    <span class="hud-key">h</span> <span class="hud-meta">←</span>
    <span class="hud-key">j</span> <span class="hud-meta">↓</span>
    <span class="hud-key">k</span> <span class="hud-meta">↑</span>
    <span class="hud-key">l</span> <span class="hud-meta">→</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">gg</span> <span class="hud-meta">top</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">G</span> <span class="hud-meta">bottom</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">/</span> <span class="hud-meta">search</span>
  </div>
</section>
