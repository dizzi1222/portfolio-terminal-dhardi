export const sections = ['hero', 'experience', 'tech', 'design', 'projects', 'interests', 'certs', 'about', 'contact'] as const;
export type Section = typeof sections[number];

class ScrollStore {
  value = $state<Section>('hero');

  set(s: Section) {
    this.value = s;
  }

  get sectionLabels(): Record<Section, string> {
    return {
      hero: '~/',
      experience: '~/experience',
      tech: '~/tech',
      design: '~/design',
      projects: '~/projects',
      interests: '~/interests',
      certs: '~/certs',
      about: '~/about',
      contact: '~/contact'
    } as Record<Section, string>;
  }
}

export const scroll = new ScrollStore();
