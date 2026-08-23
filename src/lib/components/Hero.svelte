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
  <div class="hero-actions">
    <span class="chip chip--base">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
      {t('hero.base')}
    </span>
    <span class="btn-big btn-big--open">
      <span class="pulse-dot"></span>
      {t('hero.available')}
    </span>
    <a href="/cv.pdf" target="_blank" rel="noopener" class="btn-big btn-big--cv">{t('hero.downloadCv')}</a>
  </div>
  <div class="hero-socials">
    <a href="https://github.com/dizzi1222" target="_blank" rel="noopener" aria-label="GitHub">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>
    <a href="mailto:diegosamuel042@gmail.com" aria-label="Gmail">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.36l9.455-6.539h.909c.904 0 1.636.732 1.636 1.636z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/diego-samuel-h%C3%A4rdi-santana-3a4343428" target="_blank" rel="noopener" aria-label="LinkedIn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
  </div>
  <div class="hero-hud" style="margin-top:var(--gap-lg)">
    <span class="hud-key">h</span> <span class="hud-meta">← prev</span>
    <span class="hud-key">l</span> <span class="hud-meta">next →</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">j</span><span class="hud-key">k</span> <span class="hud-meta">↓↑</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">gg</span>/<span class="hud-key">G</span> <span class="hud-meta">top/bottom</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">/</span> <span class="hud-meta">search</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">m</span> <span class="hud-meta">player
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-left:2px">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <path d="M9 18V9l8-2v9"/>
        <circle cx="7" cy="18" r="2.5"/>
        <circle cx="17" cy="16" r="2.5"/>
      </svg>
    </span>
    <span class="hud-sep">│</span>
    <span class="hud-key">t</span> <span class="hud-meta">theme</span>
    <span class="hud-key">L</span> <span class="hud-meta">lang</span>
    <span class="hud-key">B</span> <span class="hud-meta">wallpaper</span>
    <span class="hud-key">?</span> <span class="hud-meta">help</span>
  </div>
  <div class="hero-hud hero-hud--more">
    <span class="hud-meta">More vim motions:</span>
    <span class="hud-key">Enter</span> <span class="hud-meta">next section</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">Backspace</span> <span class="hud-meta">prev section</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">I</span> <span class="hud-meta">insert mode → ~/contact form</span>
    <span class="hud-sep">│</span>
    <span class="hud-key">1-9</span> <span class="hud-meta">jump to section</span>
  </div>
</section>

<style>
  .hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-md);
    flex-wrap: wrap;
    margin-top: var(--gap-lg);
  }
  .btn-big {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-size: 0.95rem;
    font-weight: 700;
    font-family: inherit;
    padding: 12px 24px;
    border-radius: 6px;
    white-space: nowrap;
    text-decoration: none;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .btn-big--open {
    color: #00d9ff;
    border: 1px solid rgba(0,217,255,0.5);
    background: rgba(0,217,255,0.08);
    box-shadow: 0 0 18px rgba(0,217,255,0.15), inset 0 0 12px rgba(0,217,255,0.05);
    text-shadow: 0 0 10px rgba(0,217,255,0.45);
  }
  .btn-big--open:hover {
    background: rgba(0,217,255,0.14);
    box-shadow: 0 0 28px rgba(0,217,255,0.3);
    transform: translateY(-1px);
  }
  .btn-big--cv {
    color: #04121a;
    background: #00d9ff;
    border: 1px solid #00d9ff;
    box-shadow: 0 0 20px rgba(0,217,255,0.35);
  }
  .btn-big--cv:hover {
    filter: brightness(1.12);
    box-shadow: 0 0 30px rgba(0,217,255,0.5);
    transform: translateY(-1px);
  }
  .hero-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-md);
    margin-top: var(--gap-md);
  }
  .hero-socials a {
    display: inline-flex;
    padding: 6px;
    border-radius: 4px;
    color: var(--text-dim);
    transition: all 0.2s ease;
  }
  .hero-socials a:hover {
    color: #00d9ff;
    transform: translateY(-2px);
  }
  .chip--base {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.68rem;
    border: 1px solid var(--text-dim);
    color: var(--text-muted);
    padding: 4px 10px;
    border-radius: 3px;
    white-space: nowrap;
  }
  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00d9ff;
    box-shadow: 0 0 6px #00d9ff;
    animation: pulse-dot 1.6s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
  }
  .hero-hud--more {
    margin-top: 4px;
    opacity: 0.75;
  }
</style>
