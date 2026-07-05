import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>('dark');
export const bgGifActive = writable(true);

export function initTheme() {
  const saved = localStorage.getItem('terminal-theme') || 'dark';
  theme.set(saved as 'dark' | 'light');
  applyTheme(saved as 'dark' | 'light');
  const bgSaved = localStorage.getItem('terminal-bg-gif');
  bgGifActive.set(bgSaved !== 'false');
}

export function toggleTheme() {
  theme.update(t => {
    const next = t === 'dark' ? 'light' : 'dark';
    localStorage.setItem('terminal-theme', next);
    applyTheme(next);
    return next;
  });
}

export function toggleBgGif() {
  bgGifActive.update(v => {
    const next = !v;
    localStorage.setItem('terminal-bg-gif', String(next));
    return next;
  });
}

function applyTheme(t: 'dark' | 'light') {
  if (t === 'light') {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }
}
