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
  let certFrame = $state(0);

  $effect(() => {
    const interval = setInterval(() => certFrame = (certFrame + 1) % 4, 400);
    return () => clearInterval(interval);
  });

  const certFrames = ['◴', '◷', '◶', '◵'];

  const certs = [
    { title: 'CIC Associate Developer', status: 'in_progress', progress: '44%', issuer: 'Cincinnatus Bootcamp', statusColor: 'var(--accent-tertiary)', progColor: 'var(--accent-secondary)' },
    { title: 'JSCAMP — Midudev Bootcamp', status: 'in_progress', progress: '20%', issuer: 'Midudev', statusColor: 'var(--accent-tertiary)', progColor: 'var(--accent-secondary)' },
    { title: 'Mimo Full-Stack Development', status: 'in_progress', progress: '15%', issuer: 'Mimo GmbH', statusColor: 'var(--accent-tertiary)', progColor: 'var(--accent-secondary)' },
    { title: 'Exercism · TryHackMe', status: 'starting', progress: '10%', issuer: 'Exercism · TryHackMe', statusColor: 'var(--text-dim)', progColor: 'var(--accent-secondary)' },
  ];
</script>

<section class="section" id="certs">
  <div class="window" style="max-width:480px;margin:0 auto">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>cic_cert_download.sh — <span style="color:var(--accent-tertiary)">{certFrames[certFrame]}</span></span>
    </div>
    <div class="window__content" style="padding:var(--gap-lg)">
      <h2 class="section__title" style="margin-top:0">// {t('sectionTitles.certs')}</h2>
      <div style="text-align:center">
        <div style="font-size:2.5rem;margin-bottom:var(--gap-sm);line-height:1;color:var(--accent-tertiary)">{certFrames[certFrame]}</div>
        <p style="color:var(--accent-tertiary);font-family:inherit;font-size:0.85rem;margin:var(--gap-sm) 0">
          $ wget cic-associate-certificate.pdf
        </p>
        <p style="color:var(--text-dim);font-family:inherit;font-size:0.75rem;margin-top:var(--gap-sm)">
          ⏳ Esperando programa oficial de certificación CIC...
        </p>
        <div style="background:var(--bg-secondary);height:4px;border-radius:2px;margin:var(--gap-md) auto;max-width:250px;overflow:hidden">
          <div style="background:var(--accent-tertiary);height:100%;width:44%;transition:width 0.5s ease"></div>
        </div>
        <div style="margin-top:var(--gap-sm)">
          <span style="color:var(--text-dim);font-size:0.7rem;font-family:inherit">
            Cap. Interna ✓ — Esperando fecha de examen oficial
          </span>
          <span style="animation:blink 1s step-end infinite">_</span>
        </div>
      </div>
      <div style="margin-top:var(--gap-md);padding-top:var(--gap-md);border-top:1px solid var(--text-dim)">
        <div class="terminal-line cert-download-line" onclick={() => showModal = true} onkeydown={(e) => { if (e.key === 'Enter') showModal = true; }} role="button" tabindex="0">
          <span class="terminal-line__prompt">$</span>
          <span class="terminal-line__cmd" style="color:var(--accent-tertiary)">{t('cert.download')}</span>
          <span class="cert-ver-detalles">▶ ver detalles</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Cert Modal -->
{#if showModal}
  <div class="modal-overlay active">
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div class="modal-backdrop" onclick={() => showModal = false} role="presentation"></div>
    <div class="window modal-window" style="max-width:560px">
      <div class="window__titlebar">
        <div class="window__titlebar-dots">
          <span class="window__titlebar-dot window__titlebar-dot--close"></span>
          <span class="window__titlebar-dot"></span>
          <span class="window__titlebar-dot"></span>
        </div>
        <span style="color:var(--accent-tertiary)">certificaciones.json</span>
        <button class="modal-close-btn" onclick={() => showModal = false}>✕</button>
      </div>
      <div class="window__content" style="padding:0">
        <div class="terminal-line" style="padding:var(--gap-md) var(--gap-lg) 0">
          <span class="terminal-line__prompt">$</span>
          <span class="terminal-line__cmd terminal-line__cmd--cursor">cat certificaciones.json</span>
        </div>
        <pre style="margin:0;padding:var(--gap-md) var(--gap-lg);font-family:inherit;font-size:0.75rem;color:var(--text-dim);line-height:1.8;overflow-x:auto">{`{
  "certifications": [`}<br />{@render certItems()}<br />{`  ],
  "updated_at": "`}<span style="color:var(--text-dim)">{new Date().toISOString().replace('T', ' ').slice(0, 19)}Z</span>{`",
  "note": "`}<span style="color:#f5bb00;text-shadow:0 0 8px rgba(245,187,0,0.4)">※ metas de certificación 2026</span>{`"
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
  .cert-download-line {
    cursor: pointer;
    transition: background 0.2s ease;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    margin: 0 -0.5rem;
  }
  .cert-download-line:hover {
    background: rgba(233, 69, 96, 0.08);
  }
  .cert-download-line:hover .cert-ver-detalles {
    color: var(--accent-tertiary) !important;
    text-shadow: 0 0 8px rgba(233, 69, 96, 0.4);
  }
  .cert-ver-detalles {
    color: var(--text-dim);
    font-size: 0.75rem;
    margin-left: var(--gap-md);
    transition: all 0.2s ease;
  }
</style>
