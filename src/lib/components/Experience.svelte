<script lang="ts">
  import { lang } from '$lib/stores/lang.svelte';
  import { i18n, type Lang } from '$lib/i18n';
  import { projectData } from '$lib/data/projects';

  let currentLang = $state<Lang>('es');
  lang.subscribe(v => currentLang = v);

  const t = (path: string) => {
    let v: any = i18n[currentLang];
    for (const k of path.split('.')) { if (v) v = v[k]; else return ''; }
    return v || '';
  };

  const ptdTags = projectData.find(p => p.title === 'PTD-Talento')?.tags ?? [];

  const jobs = [
    { key: 'job4', color: '#00d9ff', cic: true, tags: ptdTags },
    { key: 'job1', color: 'var(--accent-primary)', cic: false, tags: [] as string[] },
    { key: 'job2', color: 'var(--accent-secondary)', cic: true, tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Docker'] },
    { key: 'job3', color: '#4ade80', cic: false, tags: [] as string[] }
  ];
</script>

<section class="section" id="experience">
  <div class="window" style="max-width:800px;margin:0 auto">
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
              <div class="exp-entry__card" style={`--job:${job.color}`}>
                <div class="exp-entry__meta">
                  <span class="exp-entry__meta-top">
                    <span class="exp-entry__badge" style="color:{job.color};border-color:{job.color}">{badge}</span>
                    {#if job.cic}
                      <span class="exp-entry__cic" title="Cincinnatus Institute of Craftsmanship, INC.">CIC</span>
                    {/if}
                    <span class="exp-entry__period">{data.period}</span>
                  </span>
                  <p class="exp-entry__company">{data.company}</p>
                </div>
                <div class="exp-entry__main">
                  <h3 class="exp-entry__title">{data.title}</h3>
                  <p class="exp-entry__desc">{data.desc}</p>
                  {#if job.tags.length}
                    <div class="exp-entry__tags">
                      {#each job.tags as tag}
                        <span class="exp-tag">{tag}</span>
                      {/each}
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
  </div>
</section>

<style>
  .exp-entry__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: var(--gap-xs);
  }
  .exp-tag {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 2px 8px;
    border-radius: 3px;
    color: var(--accent-primary);
    border: 1px solid color-mix(in srgb, var(--accent-primary) 35%, transparent);
    background: color-mix(in srgb, var(--accent-primary) 6%, transparent);
    white-space: nowrap;
  }
  :global(.light-mode) .exp-tag {
    color: #b8324a;
    border-color: rgba(184, 50, 74, 0.45);
    background: rgba(184, 50, 74, 0.07);
  }
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
  .exp-entry__meta {
    display: flex;
    align-items: center;
    gap: var(--gap-sm);
    flex-wrap: wrap;
    margin-bottom: var(--gap-xs);
  }
  .exp-entry__meta-top {
    display: flex;
    align-items: center;
    gap: var(--gap-sm);
    flex-wrap: nowrap;
    white-space: nowrap;
    min-width: 0;
  }
  @media (max-width: 899px) {
    .exp-entry__meta-top {
      gap: var(--gap-xs);
    }
  }
  @media (max-width: 450px) {
    .exp-entry__meta-top {
      gap: var(--gap-sm);
    }
  }
  .exp-entry__main {
    min-width: 0;
  }
  @media (min-width: 900px) {
    .exp-entry__card {
      display: grid;
      grid-template-columns: 190px 1fr;
      gap: var(--gap-md) var(--gap-lg);
      align-items: start;
    }
    .exp-entry__meta {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--gap-xs);
      padding-right: var(--gap-sm);
      border-right: 1px solid var(--text-dim);
      margin-bottom: 0;
    }
    .exp-entry__meta-top {
      gap: var(--gap-xs);
    }
    .exp-entry__company {
      color: var(--job, var(--accent-tertiary));
    }
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
  .exp-entry__cic {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 1px 7px;
    border-radius: 3px;
    background: rgba(123,44,191,0.18);
    border: 1px solid var(--accent-secondary);
    color: #b57edc;
  }
  :global(.light-mode) .exp-entry__cic {
    background: rgba(123,44,191,0.08);
    color: #7b2cbf;
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
