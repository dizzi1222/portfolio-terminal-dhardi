<script lang="ts">
  import { player } from '$lib/stores/player.svelte';
  import { parseBlob } from 'music-metadata';

  interface Track {
    title: string;
    game: string;
    src: string;
  }

  const modules = import.meta.glob('/src/lib/assets/playlist/*.mp3', {
    query: '?url',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  function parseTrackName(path: string): { title: string; game: string } {
    const name = path.split('/').pop()!.replace(/\.mp3$/i, '');
    const sep = name.indexOf(' OST ');
    if (sep === -1) return { title: name, game: 'OST' };
    return { game: name.slice(0, sep), title: name.slice(sep + 5).replace(/^[-\s]+/, '') };
  }

  const tracks: Track[] = Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => ({ ...parseTrackName(path), src }))

  let currentTrack = $state(0);
  let playing = $state(false);
  let progress = $state(0);
  let audioEl: HTMLAudioElement | undefined = $state(undefined);

  let frames = ['◴', '◷', '◶', '◵'];
  let spinFrame = $state(0);

  let coverUrl = $state('');

  const coverCache: Record<string, string> = {};

  $effect(() => {
    const interval = setInterval(() => spinFrame = (spinFrame + 1) % 4, 300);
    return () => clearInterval(interval);
  });

  function loadCover(src: string) {
    if (coverCache[src]) {
      coverUrl = coverCache[src];
      return;
    }
    fetch(src)
      .then(res => res.blob())
      .then(blob => parseBlob(blob))
      .then(metadata => {
        const pic = metadata.common?.picture?.[0];
        if (pic?.data) {
          const blob = new Blob([pic.data as unknown as BlobPart], { type: pic.format });
          const url = URL.createObjectURL(blob);
          coverCache[src] = url;
          coverUrl = url;
        } else {
          coverUrl = '';
        }
      })
      .catch(() => {
        coverUrl = '';
      });
  }

  function setupMediaSession() {
    if (!('mediaSession' in navigator)) return;
    const track = tracks[currentTrack];
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.game,
    });
    navigator.mediaSession.setActionHandler('play', () => togglePlay());
    navigator.mediaSession.setActionHandler('pause', () => togglePlay());
    navigator.mediaSession.setActionHandler('previoustrack', () => prevTrack());
    navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
  }

  function seek(e: MouseEvent) {
    if (!audioEl || !audioEl.duration) return;
    const bar = (e.currentTarget as HTMLElement);
    const rect = bar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioEl.currentTime = pct * audioEl.duration;
  }

  function togglePlay() {
    if (!audioEl) return;
    if (!audioEl.src) {
      audioEl.src = tracks[currentTrack].src;
      audioEl.volume = 0.15;
    }
    if (playing) {
      audioEl.pause();
    } else {
      audioEl.play().catch(() => {});
    }
    playing = !playing;
    setupMediaSession();
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    }
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack();
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack();
  }

  function loadTrack() {
    if (!audioEl) return;
    audioEl.src = tracks[currentTrack].src;
    audioEl.volume = 0.15;
    if (playing) {
      audioEl.play().catch(() => { playing = false; });
    }
    coverUrl = '';
    loadCover(tracks[currentTrack].src);
    progress = 0;
    setupMediaSession();
  }

  function selectTrack(i: number) {
    if (i === currentTrack && playing) return;
    currentTrack = i;
    if (!playing) playing = true;
    loadTrack();
  }

  function isTypingTarget(e: KeyboardEvent): boolean {
    const el = e.target as HTMLElement | null;
    if (!el) return false;
    return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!player.visible || isTypingTarget(e)) return;
    const isSpace = e.code === 'Space' || e.key === ' ';
    if (isSpace || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (isSpace) togglePlay();
      else if (e.key === 'ArrowRight') nextTrack();
      else prevTrack();
    }
  }

  function handleAudioReady(el: HTMLAudioElement) {
    audioEl = el;
    el.addEventListener('timeupdate', () => {
      if (el.duration) {
        progress = (el.currentTime / el.duration) * 100;
      }
    });
    el.addEventListener('ended', nextTrack);
  }

  function handleClose() {
    if (audioEl && playing) {
      audioEl.pause();
      playing = false;
    }
    player.hide();
  }

  let isMinimized = $state(false);
  function toggleMinimize() {
    isMinimized = !isMinimized;
  }

  $effect(() => {
    if (player.visible) {
      if (!playing && audioEl) {
        if (!audioEl.src) {
          audioEl.src = tracks[currentTrack].src;
          audioEl.volume = 0.15;
        }
        audioEl.play().catch(() => {});
        playing = true;
        loadCover(tracks[currentTrack].src);
      }
    }
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="music-float" class:visible={player.visible} class:minimized={isMinimized} onclick={() => isMinimized && toggleMinimize()}>

  <div class="music-float__handle" onmousedown={(e) => e.stopPropagation()}>
    <button class="music-float__toggle" onclick={toggleMinimize} aria-label={isMinimized ? 'Expand' : 'Minimize'}>
      {isMinimized ? '□' : '─'}
    </button>
    <span class="music-float__nowplaying">
      {frames[spinFrame]} {playing ? tracks[currentTrack].title : '⏸ pausado'}
    </span>
    <button class="music-float__close" onclick={handleClose} aria-label="Close">✕</button>
  </div>

  {#if !isMinimized}
    <div class="music-float__body">
      <div class="music-float__art">
        {#if coverUrl}
          <img src={coverUrl} alt="cover" class="music-float__art-img" />
        {:else}
          <div class="music-float__art-placeholder">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
            </svg>
          </div>
        {/if}
      </div>
      <div class="music-float__info">
        <div class="music-float__title">{tracks[currentTrack].title}</div>
        <div class="music-float__game">{tracks[currentTrack].game}</div>
      </div>

      <div class="music-float__bar" onclick={seek}>
        <div class="music-float__bar-track">
          <div class="music-float__bar-fill" style="width:{progress}%"></div>
        </div>
      </div>

      <div class="music-float__controls">
        <button class="mf-btn" onclick={prevTrack} aria-label="Previous">⏮</button>
        <button class="mf-btn mf-btn--play" onclick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '⏸' : '▶'}
        </button>
        <button class="mf-btn" onclick={nextTrack} aria-label="Next">⏭</button>
        <span class="music-float__track-num">{currentTrack + 1}/{tracks.length}</span>
      </div>

      <div class="music-float__dots">
        {#each tracks as track, i}
          <button
            class="music-float__dot"
            class:active={i === currentTrack}
            onclick={() => selectTrack(i)}
            aria-label={track.title}
            title={track.title}
          ></button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<audio
  use:handleAudioReady
  preload="none"
/>

<style>
  .music-float {
    position: fixed;
    bottom: 9rem;
    right: 1.5rem;
    z-index: 10002;
    background: rgba(7,7,26,0.92);
    backdrop-filter: blur(12px);
    border: 1px solid var(--accent-secondary);
    border-radius: 8px;
    min-width: 280px;
    max-width: 360px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  }
  .music-float.visible {
    opacity: 1;
    pointer-events: auto;
  }
  .music-float.minimized {
    min-width: 220px;
    cursor: pointer;
  }
  .music-float__handle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.6rem;
    border-bottom: 1px solid rgba(123,44,191,0.3);
    user-select: none;
  }
  .music-float__toggle,
  .music-float__close {
    background: transparent;
    border: 1px solid var(--text-dim);
    color: var(--text-dim);
    font-family: inherit;
    font-size: 0.65rem;
    padding: 0.1rem 0.35rem;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 3px;
    line-height: 1;
  }
  .music-float__toggle:hover,
  .music-float__close:hover {
    border-color: var(--accent-tertiary);
    color: var(--accent-tertiary);
  }
  .music-float__nowplaying {
    flex: 1;
    font-size: 0.7rem;
    color: var(--text-dim);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .music-float__body {
    padding: 0.6rem;
  }
  .music-float__art {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  .music-float__art-img {
    width: 120px;
    height: 120px;
    border-radius: 6px;
    object-fit: cover;
    border: 1px solid var(--accent-secondary);
    box-shadow: 0 0 12px rgba(0,217,255,0.2);
  }
  .music-float__art-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 6px;
    background: var(--bg-tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dim);
    border: 1px solid var(--text-dim);
  }
  .music-float__info {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .music-float__title {
    font-size: 0.85rem;
    color: var(--accent-tertiary);
    font-weight: 700;
  }
  .music-float__game {
    font-size: 0.65rem;
    color: var(--text-dim);
    margin-top: 0.1rem;
  }
  .music-float__bar {
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  .music-float__bar-track {
    height: 3px;
    background: var(--bg-secondary);
    border-radius: 2px;
    overflow: hidden;
  }
  .music-float__bar-fill {
    height: 100%;
    background: var(--accent-tertiary);
    border-radius: 2px;
    transition: width 0.3s ease;
    box-shadow: 0 0 6px var(--accent-tertiary);
  }
  .music-float__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin-bottom: 0.5rem;
  }
  .mf-btn {
    background: transparent;
    border: 1px solid var(--accent-secondary);
    color: var(--accent-tertiary);
    font-family: inherit;
    font-size: 0.8rem;
    padding: 0.25rem 0.45rem;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 4px;
    line-height: 1;
  }
  .mf-btn:hover {
    background: rgba(123,44,191,0.15);
    border-color: var(--accent-tertiary);
    box-shadow: 0 0 8px rgba(0,217,255,0.3);
  }
  .mf-btn--play {
    font-size: 0.95rem;
    padding: 0.25rem 0.6rem;
  }
  .music-float__track-num {
    font-size: 0.6rem;
    color: var(--text-dim);
    margin-left: 0.3rem;
  }
  .music-float__dots {
    display: flex;
    gap: 3px;
    justify-content: center;
    flex-wrap: wrap;
    max-height: 40px;
    overflow-y: auto;
  }
  .music-float__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid var(--text-dim);
    background: transparent;
    padding: 0;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  .music-float__dot:hover {
    border-color: var(--accent-tertiary);
    background: var(--accent-tertiary);
  }
  .music-float__dot.active {
    border-color: var(--accent-tertiary);
    background: var(--accent-tertiary);
    box-shadow: 0 0 4px var(--accent-tertiary);
  }

  @media (max-width: 450px) {
    .music-float {
      bottom: 7rem;
      right: 0.5rem;
      min-width: 190px;
      max-width: 220px;
      border-radius: 6px;
    }
    .music-float.minimized {
      min-width: 140px;
    }
    .music-float__handle {
      gap: 0.35rem;
      padding: 0.25rem 0.4rem;
    }
    .music-float__toggle,
    .music-float__close {
      font-size: 0.52rem;
      padding: 0.05rem 0.25rem;
    }
    .music-float__nowplaying {
      font-size: 0.55rem;
    }
    .music-float__body {
      padding: 0.35rem;
    }
    .music-float__art {
      margin-bottom: 0.3rem;
    }
    .music-float__art-img,
    .music-float__art-placeholder {
      width: 64px;
      height: 64px;
      border-radius: 4px;
    }
    .music-float__art-placeholder :global(svg),
    .music-float__art-placeholder svg {
      width: 22px;
      height: 22px;
    }
    .music-float__info {
      margin-bottom: 0.25rem;
    }
    .music-float__title {
      font-size: 0.62rem;
    }
    .music-float__game {
      font-size: 0.5rem;
    }
    .music-float__bar {
      margin-bottom: 0.3rem;
    }
    .music-float__controls {
      gap: 0.25rem;
      margin-bottom: 0.3rem;
    }
    .mf-btn {
      font-size: 0.58rem;
      padding: 0.15rem 0.3rem;
      border-radius: 3px;
    }
    .mf-btn--play {
      font-size: 0.7rem;
      padding: 0.15rem 0.4rem;
    }
    .music-float__track-num {
      font-size: 0.48rem;
      margin-left: 0.2rem;
    }
    .music-float__dots {
      gap: 2px;
      max-height: 26px;
    }
    .music-float__dot {
      width: 5px;
      height: 5px;
    }
  }

  @media (max-width: 380px) {
    .music-float {
      right: 0.3rem;
      min-width: 160px;
      max-width: 180px;
      bottom: 6.5rem;
    }
    .music-float.minimized {
      min-width: 120px;
    }
    .music-float__art-img,
    .music-float__art-placeholder {
      width: 52px;
      height: 52px;
    }
    .music-float__title {
      font-size: 0.55rem;
    }
    .music-float__nowplaying {
      font-size: 0.5rem;
    }
    .mf-btn--play {
      font-size: 0.62rem;
    }
  }
</style>
