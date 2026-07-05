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

  interface TooltipState {
    text: string;
    x: number;
    y: number;
  }

  let tooltip = $state<TooltipState | null>(null);
  let hideTimer: ReturnType<typeof setTimeout> | undefined;

  function showTooltip(key: string) {
    if (hideTimer) clearTimeout(hideTimer);
    const desc = i18n[currentLang]?.tech?.[key];
    if (!desc) return;

    const windowEl = document.querySelector('#design .window__content') as HTMLElement | null;
    const grid = document.querySelector('#design .icon-grid') as HTMLElement | null;
    if (!windowEl || !grid) return;

    const wr = windowEl.getBoundingClientRect();
    const gr = grid.getBoundingClientRect();

    const tw = 220;
    const th = 70;
    const pad = 12;

    const candidates: Array<{ x: number; y: number }> = [];

    for (let i = 0; i < 30; i++) {
      const x = wr.left + pad + Math.random() * (wr.width - tw - pad * 2);
      const y = wr.top + pad + Math.random() * (wr.height - th - pad * 2);
      candidates.push({ x, y });
    }

    const best = candidates.reduce((a, b) => {
      const aOverlap = rectOverlap(a.x, a.y, tw, th, gr.left, gr.top, gr.width, gr.height);
      const bOverlap = rectOverlap(b.x, b.y, tw, th, gr.left, gr.top, gr.width, gr.height);
      return aOverlap < bOverlap ? a : b;
    });

    tooltip = { text: desc, x: best.x, y: best.y };
    hideTimer = setTimeout(() => tooltip = null, 2500);
  }

  function rectOverlap(
    rx: number, ry: number, rw: number, rh: number,
    gx: number, gy: number, gw: number, gh: number
  ): number {
    const overlapX = Math.max(0, Math.min(rx + rw, gx + gw) - Math.max(rx, gx));
    const overlapY = Math.max(0, Math.min(ry + rh, gy + gh) - Math.max(ry, gy));
    return overlapX * overlapY;
  }

  function hideTooltip() {
    if (hideTimer) clearTimeout(hideTimer);
    tooltip = null;
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
    <div class="window__content" style="position:relative">
      <h2 class="section__title">// {t('sectionTitles.design')}</h2>
      <div class="icon-grid">
        <div class="icon-grid__item" role="button" tabindex="0" onclick={() => showTooltip('Figma')} onkeydown={(e) => e.key === 'Enter' && showTooltip('Figma')}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0zM12 0v8h4a4 4 0 0 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V4a4 4 0 0 0-8 0zM4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.figma}</span>
        </div>
        <div class="icon-grid__item" role="button" tabindex="0" onclick={() => showTooltip('Google Stitch')} onkeydown={(e) => e.key === 'Enter' && showTooltip('Google Stitch')}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.stitch}</span>
        </div>
        <div class="icon-grid__item" role="button" tabindex="0" onclick={() => showTooltip('Design System')} onkeydown={(e) => e.key === 'Enter' && showTooltip('Design System')}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.ds}</span>
        </div>
        <div class="icon-grid__item" role="button" tabindex="0" onclick={() => showTooltip('Prototyping')} onkeydown={(e) => e.key === 'Enter' && showTooltip('Prototyping')}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/>
          </svg>
          <span class="icon-grid__label">{i18n[currentLang].design.proto}</span>
        </div>
      </div>
      <p style="margin-top:var(--gap-md);color:var(--text-muted);font-size:0.85rem">
        {i18n[currentLang].design.hint}
      </p>
    </div>
  </div>
</section>

{#if tooltip}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div class="design-tooltip" style="left:{tooltip.x}px;top:{tooltip.y}px" onclick={hideTooltip}>
    <strong style="color:var(--accent-tertiary);font-size:0.75rem">✧ {t('sectionTitles.design')}</strong>
    <p style="margin-top:0.3rem;font-size:0.72rem;line-height:1.5;color:#d0d0d0">
      {tooltip.text}
    </p>
  </div>
{/if}

<style>
  .design-tooltip {
    position: fixed;
    z-index: 10001;
    max-width: 220px;
    padding: 0.6rem 0.8rem;
    background: rgba(7,7,26,0.95);
    backdrop-filter: blur(8px);
    border: 1px solid var(--accent-secondary);
    border-radius: 6px;
    cursor: pointer;
    animation: design-tip-in 0.2s ease;
    pointer-events: auto;
  }

  @keyframes design-tip-in {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
</style>
