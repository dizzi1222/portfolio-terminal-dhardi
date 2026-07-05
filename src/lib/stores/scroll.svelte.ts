export const sections = ['hero', 'about', 'tech', 'design', 'projects', 'certs', 'contact'] as const;
export type Section = typeof sections[number];

class ScrollStore {
  value = $state<Section>('hero');

  set(s: Section) {
    this.value = s;
  }

  get sectionLabels(): Record<Section, string> {
    return {
      hero: '~/',
      about: '~/about',
      tech: '~/tech',
      design: '~/design',
      projects: '~/projects',
      certs: '~/certs',
      contact: '~/contact'
    } as Record<Section, string>;
  }
}

export const scroll = new ScrollStore();
