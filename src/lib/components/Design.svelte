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
        <div class="icon-grid__item" role="button" tabindex="0"
          onmouseenter={(e) => handleEnter(e, 'Figma')}
          onmousemove={handleMove}
          onmouseleave={handleLeave}
          onfocusin={(e) => handleFocus(e, 'Figma')}
          onfocusout={handleLeave}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0zM12 0v8h4a4 4 0 0 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V4a4 4 0 0 0-8 0zM4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.figma}</span>
        </div>
        <div class="icon-grid__item" role="button" tabindex="0"
          onmouseenter={(e) => handleEnter(e, 'Google Stitch')}
          onmousemove={handleMove}
          onmouseleave={handleLeave}
          onfocusin={(e) => handleFocus(e, 'Google Stitch')}
          onfocusout={handleLeave}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.stitch}</span>
        </div>
        <div class="icon-grid__item" role="button" tabindex="0"
          onmouseenter={(e) => handleEnter(e, 'Design System')}
          onmousemove={handleMove}
          onmouseleave={handleLeave}
          onfocusin={(e) => handleFocus(e, 'Design System')}
          onfocusout={handleLeave}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.ds}</span>
        </div>
        <div class="icon-grid__item" role="button" tabindex="0"
          onmouseenter={(e) => handleEnter(e, 'Prototyping')}
          onmousemove={handleMove}
          onmouseleave={handleLeave}
          onfocusin={(e) => handleFocus(e, 'Prototyping')}
          onfocusout={handleLeave}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.proto}</span>
        </div>
        <div class="icon-grid__item" role="button" tabindex="0"
          onmouseenter={(e) => handleEnter(e, 'Canvas')}
          onmousemove={handleMove}
          onmouseleave={handleLeave}
          onfocusin={(e) => handleFocus(e, 'Canvas')}
          onfocusout={handleLeave}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.canvas}</span>
        </div>
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
