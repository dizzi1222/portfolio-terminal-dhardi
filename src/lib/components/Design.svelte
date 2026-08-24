<script lang="ts">
  import { lang } from '$lib/stores/lang.svelte';
  import { i18n, type Lang } from '$lib/i18n';
  import { iconSvgs } from '$lib/data/techIcons';

  let currentLang = $state<Lang>('es');
  lang.subscribe(v => currentLang = v);

  const t = (path: string) => {
    let v: any = i18n[currentLang];
    for (const k of path.split('.')) { if (v) v = v[k]; else return ''; }
    return v || '';
  };

  interface DesignItem {
    name: string;
    iconKey: string;
    labelKey: string;
    monoHtml: string;
  }

  const designItems: DesignItem[] = [
    {
      name: 'Figma',
      iconKey: 'IconFigma',
      labelKey: 'figma',
      monoHtml: '<path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0zM12 0v8h4a4 4 0 0 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V4a4 4 0 0 0-8 0zM4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z"/>'
    },
    {
      name: 'Google Stitch',
      iconKey: 'stitch',
      labelKey: 'stitch',
      monoHtml: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>'
    },
    {
      name: 'Design System',
      iconKey: 'designSystem',
      labelKey: 'ds',
      monoHtml: '<path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2z"/>'
    },
    {
      name: 'Prototyping',
      iconKey: 'proto',
      labelKey: 'proto',
      monoHtml: '<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/>'
    },
    {
      name: 'Canvas',
      iconKey: 'canvas',
      labelKey: 'canvas',
      monoHtml: '<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></g>'
    }
  ];

  function getColorSvg(name: string) {
    const item = designItems.find(d => d.name === name);
    if (!item) return null;
    return iconSvgs[item.iconKey]?.hoverSvg ?? null;
  }

  let tooltipText = $state('');
  let tooltipVis = $state(false);
  let tooltipX = $state(0);
  let tooltipY = $state(0);

  function setTooltip(key: string, x: number, y: number) {
    const techDict = i18n[currentLang]?.tech as Record<string, string> | undefined;
    const desc = techDict?.[key];
    if (!desc) return;
    tooltipText = `${key}: ${desc}`;
    tooltipX = x;
    tooltipY = y;
    tooltipVis = true;
  }

  function handleEnter(e: MouseEvent, key: string) {
    setTooltip(key, e.clientX + 16, e.clientY + 16);
  }

  function handleFocus(e: Event, key: string) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip(key, rect.right + 8, rect.top);
  }

  function handleMove(e: MouseEvent) {
    if (!tooltipVis) return;
    tooltipX = e.clientX + 16;
    tooltipY = e.clientY + 16;
  }

  function handleLeave() {
    tooltipVis = false;
    tooltipText = '';
  }
</script>

<section class="section" id="design">
  <div class="window">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>design_portfolio.sh</span>
    </div>
    <div class="window__content">
      <h2 class="section__title">// {t('sectionTitles.design')}</h2>
      <div class="icon-grid">
        {#each designItems as it}
          {@const c = getColorSvg(it.name)}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="icon-grid__item" role="button" tabindex="0"
            onmouseenter={(e) => handleEnter(e, it.name)}
            onmousemove={handleMove}
            onmouseleave={handleLeave}
            onfocusin={(e) => handleFocus(e, it.name)}
            onfocusout={handleLeave}>
            <div class="tech-icon">
              <svg class="tech-icon__mono" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                {@html it.monoHtml}
              </svg>
              {#if c?.content}
                <svg class="tech-icon__color" width="40" height="40" viewBox={c.viewBox} aria-hidden="true">
                  {@html c.content}
                </svg>
              {:else if c?.paths}
                <svg class="tech-icon__color" width="40" height="40" viewBox={c.viewBox} aria-hidden="true">
                  {#each c.paths as p}
                    <path d={p.d} fill={p.fill} fill-rule={p.fillRule === 'evenodd' ? 'evenodd' : undefined} />
                  {/each}
                </svg>
              {/if}
            </div>
            <span class="icon-grid__label">{(i18n[currentLang].design as Record<string, string>)[it.labelKey]}</span>
          </div>
        {/each}
      </div>
      <p style="margin-top:var(--gap-md);color:var(--text-muted);font-size:0.85rem">
        {i18n[currentLang].design.hint}
      </p>
    </div>
  </div>
</section>

{#if tooltipVis}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="design-tooltip" style="left:{tooltipX}px;top:{tooltipY}px">
    {tooltipText}
  </div>
{/if}

<style>
  .tech-icon {
    position: relative;
    width: 40px;
    height: 40px;
  }
  .tech-icon__mono {
    color: var(--accent-primary);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .tech-icon__color {
    position: absolute;
    inset: 0;
    margin: auto;
    opacity: 0;
    transform: scale(0.85);
    transition: opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease;
  }
  .icon-grid__item:hover .tech-icon__mono,
  .icon-grid__item:focus-visible .tech-icon__mono {
    opacity: 0;
    transform: scale(1.15);
  }
  .icon-grid__item:hover .tech-icon__color,
  .icon-grid__item:focus-visible .tech-icon__color {
    opacity: 1;
    transform: scale(1);
    filter: drop-shadow(0 0 6px rgba(233, 69, 96, 0.35));
  }
  .design-tooltip {
    position: fixed;
    z-index: 10001;
    pointer-events: none;
    max-width: 380px;
    padding: 0.6rem 0.8rem;
    background: rgba(7, 7, 26, 0.92);
    backdrop-filter: blur(8px);
    border: 1px solid var(--accent-secondary);
    border-radius: 6px;
    font-size: 0.78rem;
    color: #d0d0d0;
    line-height: 1.5;
    box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  }
</style>
