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

  let showModal = $state(false);

  function openModal() {
    showModal = true;
    document.dispatchEvent(new CustomEvent('detail-open'));
  }
  function closeModal() {
    showModal = false;
    document.dispatchEvent(new CustomEvent('detail-close'));
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeModal();
  }
  $effect(() => {
    if (showModal) {
      document.addEventListener('keydown', onKeydown);
      return () => document.removeEventListener('keydown', onKeydown);
    }
  });

  const certs = [
    { title: 'Desarrollo de Software v4', status: 'completed', progress: '100%', issuer: 'CIC · RadarX', statusColor: '#4ade80', progColor: '#4ade80' },
    { title: 'Inteligencia Artificial para Todos v1', status: 'completed', progress: '100%', issuer: 'CIC · RadarX', statusColor: '#4ade80', progColor: '#4ade80' },
    { title: 'Fundamentos de Pensamiento Crítico v4', status: 'completed', progress: '100%', issuer: 'CIC · RadarX', statusColor: '#4ade80', progColor: '#4ade80' },
    { title: 'Mi primer empleo en Tech', status: 'completed', progress: '100%', issuer: 'CIC · Panel', statusColor: '#4ade80', progColor: '#4ade80' },
    { title: 'Curso de IA para Todos', status: 'completed', progress: '100%', issuer: 'CIC · Panel', statusColor: '#4ade80', progColor: '#4ade80' },
    { title: 'CIC Associate Developer', status: 'completed', progress: '100%', issuer: 'Cincinnatus Bootcamp', statusColor: '#4ade80', progColor: '#4ade80' },
    { title: 'JSCAMP — Midudev Bootcamp', status: 'in_progress', progress: '20%', issuer: 'Midudev', statusColor: 'var(--accent-tertiary)', progColor: 'var(--accent-secondary)' },
    { title: 'Mimo Full-Stack Development', status: 'in_progress', progress: '15%', issuer: 'Mimo GmbH', statusColor: 'var(--accent-tertiary)', progColor: 'var(--accent-secondary)' },
    { title: 'Exercism · TryHackMe', status: 'starting', progress: '10%', issuer: 'Exercism · TryHackMe', statusColor: 'var(--text-dim)', progColor: 'var(--accent-secondary)' },
  ];

  const activeCerts = certs.filter(c => c.status !== 'completed');
</script>

<section class="section" id="certs">
  <div class="window" style="max-width:480px;margin:0 auto">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>cic_cert_download.sh — <span style="color:#4ade80">✓</span></span>
    </div>
    <div class="window__content" style="padding:var(--gap-lg)">
      <h2 class="section__title" style="margin-top:0">// {t('sectionTitles.certs')}</h2>
      <div style="text-align:center">
        <div style="font-size:2.5rem;margin-bottom:var(--gap-sm);line-height:1;color:#4ade80;text-shadow:0 0 12px rgba(74,222,128,0.4)">✓</div>
        <p style="color:var(--accent-tertiary);font-family:inherit;font-size:0.85rem;margin:var(--gap-sm) 0">
          $ {t('cert.command')}
        </p>
        <p style="color:#4ade80;font-family:inherit;font-size:0.75rem;margin-top:var(--gap-sm)">
          {t('cert.waitingMessage')}
        </p>
        <div style="background:var(--bg-secondary);height:4px;border-radius:2px;margin:var(--gap-md) auto;max-width:250px;overflow:hidden">
          <div style="background:#4ade80;height:100%;width:100%;box-shadow:0 0 8px rgba(74,222,128,0.5);transition:width 0.5s ease"></div>
        </div>
        <div style="margin-top:var(--gap-sm)">
          <span style="color:var(--text-dim);font-size:0.7rem;font-family:inherit">
            {t('cert.internalStatus')}
          </span>
          <span style="animation:blink 1s step-end infinite">_</span>
        </div>
      </div>
      <div class="cert-mini-section">
        <p class="cert-mini-label">// {t('cert.inProgress')}</p>
        {#each activeCerts as c}
          <div class="cert-mini">
            <span style={`color:${c.statusColor};flex-shrink:0`}>▸</span>
            <span class="cert-mini__title">{c.title}</span>
            <span class="cert-mini__bar"><span style={`width:${c.progress};background:${c.progColor}`}></span></span>
            <span class="cert-mini__pct" style={`color:${c.progColor}`}>{c.progress}</span>
          </div>
        {/each}
      </div>
      <div style="margin-top:var(--gap-md);padding-top:var(--gap-md);border-top:1px solid var(--text-dim)">
        <div class="terminal-line cert-download-line" onclick={openModal} onkeydown={(e) => { if (e.key === 'Enter') openModal(); }} role="button" tabindex="0">
          <span class="terminal-line__prompt">$</span>
          <span class="terminal-line__cmd" style="color:var(--accent-tertiary)">{t('cert.download')}</span>
          <span class="cert-ver-detalles">{t('cert.viewDetails')}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Cert Modal -->
{#if showModal}
  <div class="modal-overlay active">
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div class="modal-backdrop" onclick={closeModal} role="presentation"></div>
    <div class="window modal-window" style="max-width:560px">
      <div class="window__titlebar">
        <div class="window__titlebar-dots">
          <span class="window__titlebar-dot window__titlebar-dot--close"></span>
          <span class="window__titlebar-dot"></span>
          <span class="window__titlebar-dot"></span>
        </div>
        <span style="color:var(--accent-tertiary)">certificaciones.json</span>
        <button class="modal-close-btn" onclick={closeModal}>✕</button>
      </div>
      <div class="window__content" style="padding:0">
        <div class="terminal-line" style="padding:var(--gap-md) var(--gap-lg) 0">
          <span class="terminal-line__prompt">$</span>
          <span class="terminal-line__cmd terminal-line__cmd--cursor">{t('cert.download')}</span>
        </div>
        <pre style="margin:0;padding:var(--gap-md) var(--gap-lg);font-family:inherit;font-size:0.75rem;color:var(--text-dim);line-height:1.8;overflow-x:auto">{`{
  "certifications": [`}<br />{@render certItems()}<br />{`  ],
  "updated_at": "`}<span style="color:var(--text-dim)">{new Date().toISOString().replace('T', ' ').slice(0, 19)}Z</span>{`",
  "note": "`}<span style="color:#f5bb00;text-shadow:0 0 8px rgba(245,187,0,0.4)">{t('cert.note')}</span>{`"
}`}</pre>
      </div>
    </div>
  </div>
{/if}

{#snippet certItems()}
  {#each certs as c, i}
    {`    {`}<br />
    {`      "title": "`}<span style="color:#e54b66">{c.title}</span>{`",`}<br />
    {`      "status": "`}<span style="color:{c.statusColor}">{c.status}</span>{`",`}<br />
    {`      "progress": "`}<span style="color:{c.progColor}">{c.progress}</span>{`",`}<br />
    {`      "issuer": "`}<span style="color:var(--accent-tertiary)">{c.issuer}</span>{`"`}<br />
    {`    }{#if i < certs.length - 1},{/if}`}<br />
  {/each}
{/snippet}

<style>
  .cert-mini-section {
    margin-top: var(--gap-md);
    padding-top: var(--gap-md);
    border-top: 1px dashed var(--text-dim);
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .cert-mini-label {
    color: var(--accent-tertiary);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 2px;
  }
  .cert-mini {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.68rem;
  }
  .cert-mini__title {
    color: var(--text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cert-mini__bar {
    flex: 1;
    height: 3px;
    min-width: 30px;
    background: var(--bg-secondary);
    border-radius: 2px;
    overflow: hidden;
  }
  .cert-mini__bar span {
    display: block;
    height: 100%;
    border-radius: 2px;
  }
  .cert-mini__pct {
    flex-shrink: 0;
    font-size: 0.62rem;
    width: 32px;
    text-align: right;
  }
  .cert-download-line {
    cursor: pointer;
    transition: border-color 0.2s ease;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    margin: 0 -0.5rem;
    border: 1px solid transparent;
  }
  .cert-download-line:hover {
    border-color: var(--text-primary);
  }
  .cert-download-line:hover .cert-ver-detalles {
    color: var(--text-primary) !important;
  }
  .cert-ver-detalles {
    color: var(--text-dim);
    font-size: 0.75rem;
    margin-left: var(--gap-md);
    transition: all 0.2s ease;
  }
</style>
