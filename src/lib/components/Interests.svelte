<script lang="ts">
  import { lang } from '$lib/stores/lang.svelte';
  import { i18n, type Lang } from '$lib/i18n';


  let currentLang = $state<Lang>('es');
  lang.subscribe(v => currentLang = v);

  const t = (path: string) => {
    let v: any = i18n[currentLang];
    for (const k of path.split('.')) { if (v) v = v[k]; else return ''; }
    return v || '';
  };

  const personal = [
    {
      key: 'gaming', color: '#00d9ff', future: false,
      imgs: [
        '/interests/gaming/gaming.webp',
        '/interests/gaming/gaming-dmc3.webp',
        '/interests/gaming/gaming-dmc3ps2.webp',
        '/interests/gaming/gaming-kaine.webp',
        '/interests/gaming/gaming-nier.webp',
        '/interests/gaming/gaming-2b.webp',
        '/interests/gaming/gaming-a2.webp',
        '/interests/gaming/gaming-snake.webp',
      ],
    },
    {
      key: 'anime', color: '#f472b6', future: false,
      imgs: [
        '/interests/anime/anime.webp',
        '/interests/anime/ashita-no-joe-art-13.jpg',
        '/interests/anime/ashita-no-joe-carlos.png',
        '/interests/anime/berserk-art-11.jpg',
        '/interests/anime/berserk-guts-casca.jpg',
        '/interests/anime/berserk-yume-no-kagaribi.jpg',
        '/interests/anime/bleach-art-13.png',
        '/interests/anime/csm-art-19.png',
        '/interests/anime/csm-art-20.jpg',
        '/interests/anime/dragon-ball-art-4.jpg',
        '/interests/anime/dragon-ball-art-6.jpg',
        '/interests/anime/dragon-ball-art-9.jpg',
      ],
    },
    {
      key: 'tv', color: '#e94560', future: false,
      imgs: ['/interests/tv-series/tv-series.webp'],
      video: '/interests/tv-series/star-wars-best-of.mp4',
    },
    {
      key: 'music', color: '#a78bfa', future: false,
      imgs: [
        '/interests/music/music.webp',
        '/interests/music/kew-music.webp',
        '/interests/music/kew-icon.webp',
      ],
    },
    {
      key: 'photography', color: '#34d399', future: true,
      imgs: [
        '/interests/photography/photography.webp',
        '/interests/photography/photography2.webp',
        '/interests/photography/photography3.webp',
      ],
    },
    {
      key: 'travel', color: '#60a5fa', future: true,
      imgs: [
        '/interests/travel/travel.webp',
        '/interests/travel/travel2.webp',
        '/interests/travel/travel3.webp',
        '/interests/travel/travel4.webp',
        '/interests/travel/travel5.webp',
      ],
    },
    {
      key: 'drawing', color: '#fbbf24', future: true,
      imgs: [
        '/interests/drawing/drawing.webp',
        '/interests/drawing/drawing-kaneki-study.webp',
      ],
    },
  ];

  const setup = [
    { key: 'scriptsCard', img: '/interests/setup-rofi.webp', color: '#00d9ff', badges: ['Bash', 'Rofi', 'Zenity'] },
    { key: 'scripts', img: '/interests/setup-fastfetch.webp', color: '#34d399', badges: ['Bash', 'Python', 'Zsh'] },
    { key: 'blueprint', img: '/interests/setup-nvim.webp', color: '#e94560', badges: ['Bash', 'CSS', 'AI'] },
    { key: 'gallery', img: '/interests/setup-rice.webp', color: '#00d9ff', badges: ['Arch', 'Hyprland', 'EWW'] }
  ];

  const activeIdx = $state<Record<string, number>>({});
  const timers: Record<string, ReturnType<typeof setInterval>> = {};

  function startCycle(key: string, len: number) {
    if (len < 2 || timers[key]) return;
    timers[key] = setInterval(() => {
      activeIdx[key] = ((activeIdx[key] ?? 0) + 1) % len;
    }, 1500);
  }

  function stopCycle(key: string) {
    clearInterval(timers[key]);
    delete timers[key];
    activeIdx[key] = 0;
  }

  let tvPlaying = $state(false);
  let videoEl: HTMLVideoElement | undefined = $state();

  function playTv() {
    if (!videoEl) return;
    tvPlaying = true;
    requestAnimationFrame(() => videoEl?.play().catch(() => {}));
  }

  function endTv() {
    tvPlaying = false;
    if (videoEl) videoEl.currentTime = 0;
  }
</script>

<section class="section" id="interests">
  <div class="window" style="max-width:900px;margin:0 auto">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>cat interests.sh</span>
    </div>
    <div class="window__content">
      <h2 style="color:var(--accent-tertiary);margin-bottom:var(--gap-md)">
        // {t('sectionTitles.interests')}
      </h2>

      <p class="interests-label">{t('interests.personalLabel')}</p>
      <div class="grid grid-3">
        {#each personal as c}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="card" onmouseenter={() => startCycle(c.key, c.imgs.length)} onmouseleave={() => stopCycle(c.key)}>
            <div class="card__imgwrap">
              <div class="media-stack">
                {#each c.imgs as src, i}
                  <img {src} alt="{c.key}-{i + 1}" loading="lazy" decoding="async" class:is-active={(activeIdx[c.key] ?? 0) === i} />
                {/each}
              </div>
              {#if c.video}
                {#if !tvPlaying}
                  <button type="button" class="play-btn" onclick={playTv} aria-label="Play">
                    <span class="play-circle">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                    </span>
                  </button>
                {/if}
                <video bind:this={videoEl} class="media-video" hidden={!tvPlaying} preload="metadata" controls playsinline poster={c.imgs[0]} src={c.video} onended={endTv}></video>
              {/if}
              {#if c.future}
                <span class="future-badge">{t('interests.futureBadge')}</span>
              {/if}
            </div>
            <div class="card__body">
              <p class="card__caption" style="color:{c.color}">{t(`interests.${c.key}Caption`)}</p>
              <h3 class="card__title">{t(`interests.${c.key}Title`)}</h3>
              <p class="card__desc">{t(`interests.${c.key}Desc`)}</p>
            </div>
          </div>
        {/each}
      </div>

      <p class="interests-label" style="margin-top:var(--gap-lg)">{t('interests.setupLabel')}</p>
      <div class="grid grid-2">
        {#each setup as c}
          <div class="card">
            <div class="card__imgwrap">
              <img src={c.img} alt={t(`interests.${c.key}Title`)} loading="lazy" class="img-top" />
              <span class="caption-chip" style="color:{c.color};border-color:{c.color}55">{t(`interests.${c.key}Caption`)}</span>
            </div>
            <div class="card__body">
              <h3 class="card__title">{t(`interests.${c.key}Title`)}</h3>
              <p class="card__desc">{t(`interests.${c.key}Desc`)}</p>
              {#if c.key === 'gallery'}
                <a href="https://github.com/dizzi1222/dotfiles-dizzi" target="_blank" rel="noopener" class="gallery-cta">
                  {t('interests.galleryCta')}
                </a>
              {/if}
              <div class="badges">
                {#each c.badges as b}
                  <span class="badge">{b}</span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .interests-label {
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent-tertiary);
    margin-bottom: var(--gap-sm);
  }
  .grid {
    display: grid;
    gap: var(--gap-md);
  }
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    .grid-3, .grid-2 { grid-template-columns: 1fr; }
  }
  .card {
    background: var(--bg-secondary);
    border: 1px solid var(--text-dim);
    border-radius: 4px;
    overflow: hidden;
    transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  }
  .card:hover {
    border-color: var(--accent-tertiary);
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(0,217,255,0.12);
  }
  .card__imgwrap {
    position: relative;
    height: 8.5rem;
    overflow: hidden;
  }
  .media-stack {
    position: absolute;
    inset: 0;
  }
  .media-stack img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.5s ease;
  }
  .media-stack img.is-active {
    opacity: 1;
  }
  .card:hover .media-stack img.is-active {
    transform: scale(1.05);
  }
  .play-btn {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.35);
    border: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .card:hover .play-btn {
    opacity: 1;
  }
  .play-circle {
    width: 52px;
    height: 52px;
    border-radius: 9999px;
    background: rgba(233, 69, 96, 0.85);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 4px;
    box-shadow: 0 0 24px rgba(233, 69, 96, 0.5);
    transition: transform 0.25s ease;
  }
  .play-btn:hover .play-circle {
    transform: scale(1.08);
  }
  .media-video {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
  }
  .media-video[hidden] {
    display: none;
  }
  .img-top {
    object-position: top;
  }
  .future-badge {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    z-index: 1;
    background: rgba(168,85,247,0.2);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: #fff;
    border: 1px solid rgba(192,132,252,0.5);
    font-size: 0.6rem;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 2px 8px;
    border-radius: 3px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.85), 0 0 6px rgba(0,0,0,0.5);
  }
  .caption-chip {
    position: absolute;
    top: 0.7rem;
    left: 0.7rem;
    z-index: 1;
    background: rgba(0,0,0,0.65);
    border: 1px solid;
    font-size: 0.62rem;
    font-family: inherit;
    padding: 2px 8px;
    border-radius: 3px;
  }
  .card__body {
    padding: var(--gap-sm) var(--gap-md);
  }
  .card__caption {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 2px;
  }
  .card__title {
    margin: 0 0 4px;
    font-size: 0.85rem;
    color: var(--text-primary);
  }
  .card__desc {
    margin: 0;
    font-size: 0.72rem;
    line-height: 1.55;
    color: var(--text-muted);
  }
  .gallery-cta {
    display: inline-block;
    margin-top: var(--gap-xs);
    font-size: 0.72rem;
    color: var(--accent-tertiary);
    text-decoration: none;
  }
  .gallery-cta:hover {
    text-decoration: underline;
    text-shadow: 0 0 8px var(--accent-tertiary);
  }
  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: var(--gap-xs);
  }
  .badge {
    background: var(--bg-primary);
    border: 1px solid var(--text-dim);
    color: var(--accent-secondary);
    font-size: 0.58rem;
    font-family: inherit;
    padding: 1px 7px;
    border-radius: 3px;
  }
</style>
