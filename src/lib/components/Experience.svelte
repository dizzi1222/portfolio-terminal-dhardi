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

  const jobs = [
    { key: 'job4', color: '#00d9ff' },
    { key: 'job1', color: 'var(--accent-primary)' },
    { key: 'job2', color: 'var(--accent-secondary)' },
    { key: 'job3', color: '#4ade80' }
  ];
</script>

<section class="section" id="experience">
  <div class="window" style="max-width:700px;margin:0 auto">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>cat experience.sh</span>
    </div>
    <div class="window__content">
      <h2 style="color:var(--accent-tertiary);margin-bottom:var(--gap-xs)">
        // {t('exp.heading')} <span style="color:var(--text-dim);font-size:0.85rem;font-weight:400">· {t('exp.subtitle')}</span>
      </h2>
      <div class="exp-timeline">
        {#each jobs as job}
          {@const data = t(`exp.${job.key}`)}
          {@const badge = (i18n[currentLang].exp as unknown as Record<string, { badge: string }>)[job.key].badge}
          <div class="exp-entry">
            <div class="exp-entry__marker" style="border-color:{job.color}"></div>
            <div class="exp-entry__card">
              <div class="exp-entry__head">
                <span class="exp-entry__badge" style="color:{job.color};border-color:{job.color}">{badge}</span>
                <span class="exp-entry__period">{data.period}</span>
              </div>
              <h3 class="exp-entry__title">{data.title}</h3>
              <p class="exp-entry__company">{data.company}</p>
              <p class="exp-entry__desc">{data.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .exp-timeline {
    margin-top: var(--gap-md);
    display: flex;
    flex-direction: column;
    gap: var(--gap-md);
    border-left: 1px solid var(--text-dim);
    padding-left: var(--gap-lg);
  }
  .exp-entry {
    position: relative;
  }
  .exp-entry__marker {
    position: absolute;
    left: calc(-1 * var(--gap-lg) - 5.5px);
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--bg-secondary);
    border: 2px solid var(--accent-tertiary);
  }
  .exp-entry__card {
    background: var(--bg-secondary);
    border: 1px solid var(--text-dim);
    border-radius: 4px;
    padding: var(--gap-sm) var(--gap-md);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .exp-entry__card:hover {
    border-color: var(--accent-tertiary);
    box-shadow: 0 0 12px rgba(0,217,255,0.15);
  }
  .exp-entry__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-sm);
    flex-wrap: wrap;
    margin-bottom: var(--gap-xs);
  }
  .exp-entry__badge {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border: 1px solid;
    border-radius: 3px;
    padding: 1px var(--gap-sm);
  }
  .exp-entry__period {
    color: var(--text-dim);
    font-size: 0.7rem;
    white-space: nowrap;
  }
  .exp-entry__title {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-primary);
  }
  .exp-entry__company {
    margin: 2px 0 var(--gap-xs);
    font-size: 0.75rem;
    color: var(--accent-tertiary);
  }
  .exp-entry__desc {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.55;
    color: var(--text-muted);
  }
</style>
