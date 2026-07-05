<script lang="ts">
  import { lang } from '$lib/stores/lang.svelte';
  import { i18n, type Lang } from '$lib/i18n';
  import { showToast } from '$lib/stores/toast.svelte';

  let currentLang = $state<Lang>('es');
  lang.subscribe(v => currentLang = v);

  const t = (path: string) => {
    let v: any = i18n[currentLang];
    for (const k of path.split('.')) { if (v) v = v[k]; else return ''; }
    return v || '';
  };

  let cvModalOpen = $state(false);
  let formName = $state('');
  let formEmail = $state('');
  let formMsg = $state('');
  let honeypot = $state('');
  let sending = $state(false);

  function openCV() {
    cvModalOpen = true;
    document.dispatchEvent(new CustomEvent('detail-open'));
  }
  function closeCV() {
    cvModalOpen = false;
    document.dispatchEvent(new CustomEvent('detail-close'));
  }

  function handleCvKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeCV();
  }

  $effect(() => {
    if (cvModalOpen) {
      document.addEventListener('keydown', handleCvKeydown);
      return () => document.removeEventListener('keydown', handleCvKeydown);
    }
  });

  async function handleSubmit() {
    if (sending) return;
    if (!formName.trim() || !formEmail.trim() || !formMsg.trim()) {
      showToast('⚠ Complete todos los campos');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail)) {
      showToast('⚠ Email inválido');
      return;
    }
    sending = true;
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formName, email: formEmail, message: formMsg, honeypot })
      });
      if (res.ok) {
        showToast('✓ Mensaje enviado correctamente');
        formName = ''; formEmail = ''; formMsg = ''; honeypot = '';
      } else {
        showToast('✗ Error al enviar. Intenta de nuevo.');
      }
    } catch {
      showToast('✗ Error de conexión');
    } finally {
      sending = false;
    }
  }
</script>

<section class="section" id="contact">
  <div class="window" style="max-width:600px;margin:0 auto">
    <div class="window__titlebar">
      <div class="window__titlebar-dots">
        <span class="window__titlebar-dot window__titlebar-dot--close"></span>
        <span class="window__titlebar-dot"></span>
        <span class="window__titlebar-dot"></span>
      </div>
      <span>contact.sh</span>
    </div>
    <div class="window__content">
      <h2 class="section__title">// {t('sectionTitles.contact')}</h2>
      <div class="terminal-line">
        <span class="terminal-line__prompt">$</span>
        <span class="terminal-line__cmd">echo $GITHUB</span>
      </div>
      <div class="terminal-line__output">
        <a href="https://github.com/dizzi1222" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style="vertical-align:middle;margin-right:4px"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> github.com/dizzi1222
        </a>
      </div>

      <div class="terminal-line" style="margin-top:var(--gap-md)">
        <span class="terminal-line__prompt">$</span>
        <span class="terminal-line__cmd">echo $LINKEDIN</span>
      </div>
      <div class="terminal-line__output">
        <a href="https://www.linkedin.com/in/dizzi-%C5%8Dkami-0b77093a1/" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style="vertical-align:middle;margin-right:4px"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> linkedin.com/in/dizzi
        </a>
      </div>

      <div class="terminal-line" style="margin-top:var(--gap-md)">
        <span class="terminal-line__prompt">$</span>
        <span class="terminal-line__cmd">echo $TWITTER</span>
      </div>
      <div class="terminal-line__output">
        <a href="https://x.com/dizzi_ds" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style="vertical-align:middle;margin-right:4px"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> x.com/dizzi_ds
        </a>
      </div>

      <div class="terminal-line" style="margin-top:var(--gap-md)">
        <span class="terminal-line__prompt">$</span>
        <span class="terminal-line__cmd">echo $INSTAGRAM</span>
      </div>
      <div class="terminal-line__output">
        <a href="https://www.instagram.com/diego.sam042/" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style="vertical-align:middle;margin-right:4px"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 0 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg> @diego.sam042
        </a>
      </div>

      <div class="terminal-line" style="margin-top:var(--gap-md)">
        <span class="terminal-line__prompt">$</span>
        <span class="terminal-line__cmd">echo $DEVTO</span>
      </div>
      <div class="terminal-line__output">
        <a href="https://dev.to/dizzi1222" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style="vertical-align:middle;margin-right:4px"><path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM6 8h1.5v5.25c0 .713.287 1 .938 1h.562v1.312h-.75c-1.275 0-1.988-.525-1.988-1.688V8h1.738zm5.25 0h1.5v1.5h-1.5V8zm0 2.25h1.5v5.25h-1.5v-5.25zM15 8h1.875c1.313 0 2.063.75 2.063 2.063 0 1.237-.525 1.874-1.5 1.874.975 0 1.5.638 1.5 1.875 0 1.312-.75 2.063-2.063 2.063H15V8zm1.5 1.5v1.125h.375c.338 0 .563-.187.563-.563 0-.337-.225-.562-.563-.562H16.5zm0 2.625v1.5h.563c.337 0 .562-.225.562-.563 0-.337-.225-.562-.563-.562H16.5z"/></svg> dev.to/dizzi1222
        </a>
      </div>

      <div class="terminal-line" style="margin-top:var(--gap-md)">
        <span class="terminal-line__prompt">$</span>
        <span class="terminal-line__cmd">echo $EMAIL</span>
      </div>
      <div class="terminal-line__output">
        <a href="mailto:diegosamuel042@gmail.com">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style="vertical-align:middle;margin-right:4px"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> diegosamuel042@gmail.com
        </a>
      </div>

      <div class="terminal-line" style="margin-top:var(--gap-md)">
        <span class="terminal-line__prompt">$</span>
        <span class="terminal-line__cmd">wget cv.pdf</span>
      </div>
      <div class="terminal-line__output">
        <button class="btn" onclick={openCV}>⬇ Ver CV</button>
        <span style="color:var(--text-dim);font-size:0.8rem;margin-left:var(--gap-sm)">|</span>
        <a href="/cv.pdf" target="_blank">⬇ Descargar PDF</a>
      </div>

      <!-- Contact Form -->
      <div style="margin-top:var(--gap-lg);padding-top:var(--gap-md);border-top:1px solid var(--text-dim)">
        <div class="terminal-line" style="margin-bottom:var(--gap-md)">
          <span class="terminal-line__prompt">$</span>
          <span class="terminal-line__cmd">./send_message.sh --to diego</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:var(--gap-md)">
          <div>
            <span class="terminal-line__prompt" style="font-size:0.8rem">name@host:~$</span>
            <input
              type="text"
              bind:value={formName}
              placeholder="Tu nombre"
              class="contact-input"
              aria-label="Name"
            />
          </div>
          <div>
            <span class="terminal-line__prompt" style="font-size:0.8rem">email@host:~$</span>
            <input
              type="email"
              bind:value={formEmail}
              placeholder="tu@email.com"
              class="contact-input"
              aria-label="Email"
            />
          </div>
          <div>
            <span class="terminal-line__prompt" style="font-size:0.8rem">msg@host:~$</span>
            <textarea
              bind:value={formMsg}
              placeholder="Escribe tu mensaje..."
              class="contact-input contact-textarea"
              aria-label="Message"
              rows="3"
            ></textarea>
          </div>

          <!-- Honeypot -->
          <div style="position:absolute;left:-9999px" aria-hidden="true">
            <input type="text" bind:value={honeypot} tabindex="-1" autocomplete="off" />
          </div>

          <button class="btn btn--filled" onclick={handleSubmit} disabled={sending} style="align-self:flex-start">
            {sending ? '⏳ Enviando...' : '📨 Enviar mensaje'}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CV Modal -->
{#if cvModalOpen}
  <div class="modal-overlay active">
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div class="modal-backdrop" onclick={closeCV} role="presentation"></div>
    <div class="window modal-window" style="max-width:700px">
      <div class="window__titlebar">
        <div class="window__titlebar-dots">
          <span class="window__titlebar-dot window__titlebar-dot--close"></span>
          <span class="window__titlebar-dot"></span>
          <span class="window__titlebar-dot"></span>
        </div>
        <span>cv_preview.sh</span>
        <button class="modal-close-btn" onclick={closeCV}>✕</button>
      </div>
      <div class="window__content">
        <div style="text-align:center;padding:var(--gap-sm);background:var(--bg-tertiary);margin-bottom:var(--gap-md);border-radius:4px;max-height:250px;overflow:hidden">
          <img src="/modal-placeholder-cv.png" alt="CV Preview" style="max-width:100%;max-height:230px;object-fit:contain;border-radius:4px" />
        </div>
        <p style="margin:var(--gap-md) 0;color:var(--text-muted);line-height:1.7">
          {currentLang === 'en'
            ? 'Download my resume to see my complete experience, education and technical skills.'
            : 'Descarga mi currículum para ver mi experiencia completa, educación y habilidades técnicas.'}
        </p>
        <div style="display:flex;gap:var(--gap-sm);flex-wrap:wrap">
          <a href="/cv.pdf" target="_blank" class="btn btn--filled">
            ⬇ {currentLang === 'en' ? 'Download CV (PDF)' : 'Descargar CV (PDF)'}
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .contact-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--text-dim);
    color: var(--accent-tertiary);
    font-family: inherit;
    font-size: 0.85rem;
    padding: 0.3rem 0;
    outline: none;
    transition: border-color 0.2s;
  }

  .contact-input:focus {
    border-bottom-color: var(--accent-primary);
  }

  .contact-input::placeholder {
    color: var(--text-dim);
    opacity: 0.6;
  }

  .contact-textarea {
    resize: vertical;
    min-height: 3rem;
    line-height: 1.5;
  }
</style>
