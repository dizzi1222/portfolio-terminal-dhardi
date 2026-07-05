<script lang="ts">
  import { player } from '$lib/stores/player.svelte';
  import { parseBlob } from 'music-metadata';

  interface Track {
    title: string;
    game: string;
    src: string;
  }

  const tracks: Track[] = [
    { title: 'Memories of You - Kimi no Kioku', game: 'Persona', src: '/playlist/Persona OST - Memories of You - Kimi no Kioku (キミの記憶).mp3' },
    { title: 'Windmill Isle (Day)', game: 'Sonic', src: '/playlist/Sonic OST - Windmill Isle (Day) (Unleashed).mp3' },
    { title: 'Title Theme', game: 'Zelda', src: '/playlist/Zelda OST - Title Theme.mp3' },
    { title: 'Lost Woods', game: 'Zelda', src: '/playlist/Zelda OST - Lost Woods.mp3' },
    { title: 'Main Theme', game: 'Zelda', src: '/playlist/Zelda OST - Main Theme.mp3' },
    { title: 'Song of Healing', game: 'Zelda', src: '/playlist/Zelda OST - Song of Healing.mp3' },
    { title: 'Song of Storms', game: 'Zelda', src: '/playlist/Zelda OST - Song of Storms.mp3' },
    { title: 'Iwatodai Dorm', game: 'Persona', src: '/playlist/Persona OST - Iwatodai Dorm.mp3' },
    { title: 'Beneath the Mask', game: 'Persona', src: '/playlist/Persona OST - Beneath the Mask.mp3' },
    { title: 'Burn My Dread', game: 'Persona', src: '/playlist/Persona OST - Burn My Dread.mp3' },
    { title: 'Last Surprise', game: 'Persona', src: '/playlist/Persona OST - Last Surprise.mp3' },
    { title: 'I believe', game: 'Persona', src: '/playlist/Persona OST - I believe.mp3' },
    { title: 'Butterfly Kiss (Tae Takemi Theme)', game: 'Persona', src: '/playlist/Persona OST - Butterfly Kiss (Tae Takemi Theme) アトラスサウンドチーム.mp3' },
    { title: 'A Corner of Memories', game: 'Persona', src: '/playlist/Persona OST - A Corner of Memories.mp3' },
    { title: 'Wait and See', game: 'Persona', src: '/playlist/Persona OST - Wait and See.mp3' },
    { title: 'Ideal and the Real (end version)', game: 'Persona', src: '/playlist/Persona OST - Ideal and the Real (end version).mp3' },
    { title: 'Gehrman The First Hunter', game: 'Bloodborne', src: '/playlist/Bloodborne OST - Gehrman The First Hunter.mp3' },
    { title: 'Lady Maria of the Astral Clocktower', game: 'Bloodborne', src: '/playlist/Bloodborne OST - Lady Maria of the Astral Clocktower.mp3' },
    { title: 'Ludwig The Accursed / Holy Blade', game: 'Bloodborne', src: '/playlist/Bloodborne OST - Ludwig The Accursed  Holy Blade.mp3' },
    { title: 'The First Hunter', game: 'Bloodborne', src: '/playlist/Bloodborne OST - The First Hunter.mp3' },
    { title: 'Bury the Light', game: 'Devil May Cry', src: '/playlist/Devil May Cry OST - Bury the Light.mp3' },
    { title: 'DEVILS NEVER CRY', game: 'Devil May Cry', src: '/playlist/Devil May Cry OST - DEVILS NEVER CRY.mp3' },
    { title: 'A Rules of Nature', game: 'Metal Gear Rising', src: '/playlist/Metal Gear Rising Revengeance OST - A Rules of Nature.mp3' },
    { title: 'The Only Thing I Know For Real', game: 'Metal Gear Rising', src: '/playlist/Metal Gear Rising Revengeance OST - A The Only Thing I Know For Real.mp3' },
    { title: 'Arsenals Guts', game: 'Metal Gear Solid', src: '/playlist/Metal Gear Solid OST - Arsenals Guts (tema turbio).mp3' },
    { title: 'Song of the Ancients (Atonement)', game: 'Nier', src: '/playlist/Nier OST - Song of the Ancients (Atonement) Popola.mp3' },
    { title: 'Shadowlord', game: 'Nier', src: '/playlist/Nier OST - Shadowlord.mp3' },
    { title: 'A Beautiful Song', game: 'Nier', src: '/playlist/Nier OST - A Beautiful Song_帆足圭吾.mp3' },
    { title: 'Clocktowers Beneath The Sea', game: 'A Hat in Time', src: '/playlist/A Hat in Time OST - Clocktowers Beneath The Sea.mp3' },
    { title: "Scootin' through Clocktowers Beneath the Sea", game: 'A Hat in Time', src: '/playlist/A Hat in Time OST - Scootin\u2019 through Clocktowers Beneath the Sea.mp3' },
    { title: 'Corridors of Time', game: 'Chrono Trigger', src: '/playlist/Chronno Trigger OST - Corridors of Time.mp3' },
    { title: 'Secret of the Forest', game: 'Chrono Trigger', src: '/playlist/Chronno Trigger OST - Secret of the Forest.mp3' },
    { title: 'Fields of Time (Home World 3)', game: 'Chrono Cross', src: '/playlist/Chrono Cross OST - Fields of Time Home World 3.mp3' },
    { title: 'High and Scream', game: 'Dragon Ball Tenkaichi', src: '/playlist/Dragon Ball Tenkaichi OST -High and Scream.mp3' },
    { title: 'Survive Theme', game: 'Dragon Ball Tenkaichi', src: '/playlist/Dragon Ball Tenkaichi OST -Survive Theme.mp3' },
    { title: 'Aerith Theme', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Aerith Theme (VII) エアリスのテーマ.mp3' },
    { title: 'APOCALYPSIS AQUARIUS', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - APOCALYPSIS AQUARIUS.mp3' },
    { title: 'Blinded by Light', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Blinded by Light.mp3' },
    { title: 'Chaos Temple', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Chaos Temple.mp3' },
    { title: 'Premonition', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Premonition.mp3' },
    { title: 'Theme of Love', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Theme of Love.mp3' },
    { title: "Tifa's Theme", game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Tifa\'s Theme (Final Fantasy VII).mp3' },
    { title: 'Trisection', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Trisection.mp3' },
    { title: 'Valse di Fantastica', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Valse di Fantastica.mp3' },
    { title: 'Veiled in Black', game: 'Final Fantasy', src: '/playlist/Final Fantasy OST - Veiled in Black.mp3' },
    { title: 'Darkness of the Unknown', game: 'Kingdom Hearts', src: '/playlist/Kingdom Hearts OST - Darkness of the Unknown.mp3' },
    { title: 'Dearly Beloved', game: 'Kingdom Hearts', src: '/playlist/Kingdom Hearts OST - Dearly Beloved.mp3' },
    { title: 'Kairis II (Extended)', game: 'Kingdom Hearts', src: '/playlist/Kingdom Hearts OST - Kairis II (Extended).mp3' },
    { title: 'Vector to the Heavens (Xion)', game: 'Kingdom Hearts', src: '/playlist/Kingdom Hearts OST - Vector to the Heavens Xion.mp3' },
    { title: 'Intro NUN3', game: 'Naruto Ultimate Ninja', src: '/playlist/Naruto Ultimate Ninja OST - Intro NUN3.mp3' },
    { title: 'Intro NUN5', game: 'Naruto Ultimate Ninja', src: '/playlist/Naruto Ultimate Ninja OST - Intro NUN5.mp3' },
    { title: 'Champion Cynthia Battle', game: 'Pokemon', src: '/playlist/Pokemon OST - Champion Cynthia Battle (Pearl).mp3' },
    { title: 'Champion Cynthia Encounter', game: 'Pokemon', src: '/playlist/Pokemon OST - Champion Cynthia Encounter (Pearl).mp3' },
    { title: 'Champion - Red vs Gold', game: 'Pokemon', src: '/playlist/Pokemon OST - Champion - Red vs Gold (Red Fire).mp3' },
    { title: 'Menu 1 (Melee)', game: 'Smash Bros', src: '/playlist/Smash Bros OST - Menu 1 (Melee).mp3' },
    { title: 'Temple Theme (Melee)', game: 'Smash Bros', src: '/playlist/Smash Bros OST - Temple Theme (Melee).mp3' },
    { title: 'Dragon Road Day', game: 'Sonic', src: '/playlist/Sonic OST - Dragon Road Day (Unleashed).mp3' },
    { title: 'Undefeatable', game: 'Sonic', src: '/playlist/Sonic OST - Undefeatable (Frontier).mp3' },
    { title: 'Battle Against A True Hero', game: 'Undertale', src: '/playlist/Undertale OST - Battle Against A True Hero.mp3' },
    { title: 'But The Earth Refused To Die', game: 'Undertale', src: '/playlist/Undertale OST - But The Earth Refused To Die.mp3' },
    { title: "Don't Give Up", game: 'Undertale', src: '/playlist/Undertale OST - Don-t Give Up.mp3' },
    { title: 'Home', game: 'Undertale', src: '/playlist/Undertale OST - Home.mp3' },
    { title: 'Hopes And Dreams', game: 'Undertale', src: '/playlist/Undertale OST - Hopes And Dreams.mp3' },
    { title: "It's Raining Somewhere Else", game: 'Undertale', src: '/playlist/Undertale OST - Its Raining Somewhere Else.mp3' },
    { title: 'Reunited', game: 'Undertale', src: '/playlist/Undertale OST - Reunited.mp3' },
    { title: 'Ruins', game: 'Undertale', src: '/playlist/Undertale OST - Ruins.mp3' },
    { title: 'sans.', game: 'Undertale', src: '/playlist/Undertale OST - sans..mp3' },
  ];

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
          const blob = new Blob([pic.data], { type: pic.format });
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

  function handleKeydown(e: KeyboardEvent) {
    if (!player.visible) return;
    if (e.key === ' ') { e.preventDefault(); togglePlay(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); nextTrack(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevTrack(); }
  }

  $effect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });

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
</style>
