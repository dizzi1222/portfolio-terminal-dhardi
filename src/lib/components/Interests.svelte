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
    { key: 'gaming', img: '/interests/gaming.webp', color: '#00d9ff', future: false },
    { key: 'anime', img: '/interests/anime.webp', color: '#f472b6', future: false },
    { key: 'tv', img: '/interests/tv-series.webp', color: '#e94560', future: false },
    { key: 'music', img: '/interests/music.webp', color: '#a78bfa', future: false },
    { key: 'photography', img: '/interests/photography.webp', color: '#34d399', future: true },
    { key: 'travel', img: '/interests/travel.webp', color: '#60a5fa', future: true },
    { key: 'drawing', img: '/interests/drawing.webp', color: '#fbbf24', future: true }
  ];

  const setup = [
    { key: 'scriptsCard', img: '/interests/setup-rofi.webp', color: '#00d9ff', badges: ['Bash', 'Rofi', 'Zenity'] },
    { key: 'scripts', img: '/interests/setup-fastfetch.webp', color: '#34d399', badges: ['Bash', 'Python', 'Zsh'] },
    { key: 'blueprint', img: '/interests/setup-nvim.webp', color: '#e94560', badges: ['Bash', 'CSS', 'AI'] },
    { key: 'gallery', img: '/interests/setup-rice.webp', color: '#00d9ff', badges: ['Arch', 'Hyprland', 'EWW'] }
  ];
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
          <div class="card">
            <div class="card__imgwrap">
              <img src={c.img} alt={t(`interests.${c.key}Title`)} loading="lazy" />
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
    grid-template-columns: repeat(3, 1fr);
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
  .card__imgwrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .card:hover .card__imgwrap img {
    transform: scale(1.05);
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
