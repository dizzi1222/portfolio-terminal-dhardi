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

  let tooltipText = $state('');
  let tooltipVis = $state(false);
  let tooltipX = $state(0);
  let tooltipY = $state(0);

  const techNames = [
    'Node.js', 'Express', 'React', 'MongoDB', 'PostgreSQL', 'TypeScript', 'JavaScript', 'Python',
    'Git', 'Docker', 'Arch', 'Neovim', 'Tailwind CSS', 'Svelte', 'Astro',
    'Render', 'Vercel', 'Google Cloud', 'Railway', 'Material UI', 'VoltBuilder', 'React Router', 'Bootstrap',
    'Figma', 'HTML', 'CSS', 'Vite', 'Lua', 'Shell', 'OpenCode', 'Antigravity', 'Ollama'
  ];
  const techs = techNames.map(name => ({ name }));

  const iconKeys: Record<string, string> = {
    'Node.js': 'IconNode',
    Express: 'IconExpress',
    React: 'IconReact',
    MongoDB: 'IconMongoDB',
    PostgreSQL: 'IconPostgreSQL',
    Python: 'IconPython',
    TypeScript: 'IconTypeScript',
    JavaScript: 'IconJavaScript',
    Docker: 'IconDocker',
    Git: 'IconGit',
    'Tailwind CSS': 'IconTailwind',
    Svelte: 'IconSvelte',
    Astro: 'IconAstro',
    Arch: 'IconArch',
    Neovim: 'IconNeovim',
    Render: 'IconRender',
    Vercel: 'IconVercel',
    'Google Cloud': 'IconGCloud',
    Railway: 'IconRailway',
    'Material UI': 'IconMaterialUI',
    VoltBuilder: 'IconVoltBuilder',
    'React Router': 'IconReactRouter',
    Bootstrap: 'IconBootstrap',
    OpenCode: 'IconOpenCode',
    Figma: 'IconFigma',
    HTML: 'IconHTML',
    CSS: 'IconCSS',
    Vite: 'IconVite',
    Lua: 'IconLua',
    Shell: 'IconShell',
    Canvas: 'IconCanvas',
    Antigravity: 'IconAntigravity',
    Ollama: 'IconOllama'
  };

  interface ColorSvg {
    viewBox: string;
    content?: string;
    paths?: { d: string; fill: string; fillRule?: string }[];
  }

  function getColorSvg(name: string): ColorSvg | null {
    const key = iconKeys[name];
    const data = key ? iconSvgs[key] : undefined;
    return data?.hoverSvg ?? null;
  }

  function handleTechEnter(e: MouseEvent, name: string) {
    const desc = (i18n[currentLang]?.tech as Record<string, string> | undefined)?.[name];
    if (!desc) return;
    tooltipText = `${name}: ${desc}`;
    tooltipX = e.clientX + 16;
    tooltipY = e.clientY + 16;
    tooltipVis = true;
  }

  function handleTechFocus(e: Event, name: string) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const desc = (i18n[currentLang]?.tech as Record<string, string> | undefined)?.[name];
    if (!desc) return;
    tooltipText = `${name}: ${desc}`;
    tooltipX = rect.right + 8;
    tooltipY = rect.top;
    tooltipVis = true;
  }

  function handleTechMove(e: MouseEvent) {
    if (!tooltipVis) return;
    tooltipX = e.clientX + 16;
    tooltipY = e.clientY + 16;
  }

  function handleTechLeave() {
    tooltipVis = false;
    tooltipText = '';
  }
</script>

<section class="section" id="tech">
  <div class="window">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>tech_stack.json</span>
    </div>
    <div class="window__content tech-content">
      <h2 class="section__title">// {t('sectionTitles.tech')}</h2>
      <div class="icon-grid">
        {#each techs as tech}
          {@const colorSvg = getColorSvg(tech.name)}
          {@const mono = iconSvgs[iconKeys[tech.name]]}
          <div class="icon-grid__item"
            role="button"
            tabindex="0"
            onmouseenter={(e) => handleTechEnter(e, tech.name)}
            onmousemove={handleTechMove}
            onmouseleave={handleTechLeave}
            onfocusin={(e) => handleTechFocus(e, tech.name)}
            onfocusout={handleTechLeave}>
            <div class="tech-icon">
              {#if mono}
                <svg class="tech-icon__mono" width="40" height="40" viewBox={mono.viewBox} fill="currentColor" aria-hidden="true">
                  {#each mono.paths as p}
                    <path d={p.d} />
                  {/each}
                </svg>
              {:else}
                <svg class="tech-icon__mono" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              {/if}
              {#if colorSvg?.content}
                <svg class="tech-icon__color" width="40" height="40" viewBox={colorSvg.viewBox} aria-hidden="true">
                  {@html colorSvg.content}
                </svg>
              {:else if colorSvg?.paths}
                <svg class="tech-icon__color" width="40" height="40" viewBox={colorSvg.viewBox} aria-hidden="true">
                  {#each colorSvg.paths as p}
                    <path d={p.d} fill={p.fill} fill-rule={p.fillRule === 'evenodd' ? 'evenodd' : undefined} />
                  {/each}
                </svg>
              {/if}
            </div>
            <span class="icon-grid__label">{tech.name}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

{#if tooltipVis}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="tech-tooltip" style="left:{tooltipX}px;top:{tooltipY}px">
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
  .tech-tooltip {
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
