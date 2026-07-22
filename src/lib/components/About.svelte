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
</script>

<section class="section" id="about">
  <div class="window" style="max-width: 650px; margin: 0 auto">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>cat about.sh</span>
    </div>
    <div class="window__content">
      <div style="display:flex;align-items:flex-start;gap:var(--gap-lg);flex-wrap:wrap">
        <img src="/avatar.png" alt="Avatar" class="avatar--rounded"
          style="filter:blur(5px) grayscale(0.3);width:72px;height:72px;object-fit:cover" />
        <div style="flex:1;min-width:200px">
          <h2 style="color:var(--accent-tertiary);margin-bottom:var(--gap-sm)">
            {t('sectionTitles.about')} <span style="color:var(--text-dim);font-size:0.9rem">· v2.0.0</span>
          </h2>
          <div class="about-grid">
            <span class="about-grid__label">{t('about.label.name')}</span>
            <span class="about-grid__value">{i18n[currentLang].about.name}</span>
            <span class="about-grid__label">{t('about.label.role')}</span>
            <span class="about-grid__value">{i18n[currentLang].about.role}</span>
            <span class="about-grid__label">{t('about.label.born')}</span>
            <span class="about-grid__value">{i18n[currentLang].about.born}</span>
            <span class="about-grid__label">{t('about.label.lives')}</span>
            <span class="about-grid__value">{i18n[currentLang].about.lives}</span>
            <span class="about-grid__label">{t('about.label.passport')}</span>
            <span class="about-grid__value">🇨🇭 {i18n[currentLang].about.passport}</span>
            <span class="about-grid__label">{t('about.label.os')}</span>
            <span class="about-grid__value">{i18n[currentLang].about.os}</span>
            <span class="about-grid__label">{t('about.label.editor')}</span>
            <span class="about-grid__value">{i18n[currentLang].about.editor}</span>
            <span class="about-grid__label">{t('about.label.langs')}</span>
            <span class="about-grid__value">{i18n[currentLang].about.langs}</span>
          </div>
          <p class="about-bio">{i18n[currentLang].about.bio}</p>
        </div>
      </div>
    </div>
  </div>
</section>
