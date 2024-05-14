import { JSCMComponent } from '@abstrapp/core';
import { JSCM_GROUP } from '../common';

export const JSCM_HeroContentComponent: Record<'AbcHeroContent', JSCMComponent> = {
  AbcHeroContent: {
    instanceLazyCallback: () => import('./hero-content'),
    group: JSCM_GROUP,
    mapping: [
      { c: 'AbstrMatInput', key: 'title', p: { label: 'Title' } },
      { c: 'AbstrMatInput', key: 'text', p: { label: 'Text' } },
      { c: 'AbstrMatInput', key: 'image.src', p: { label: 'Image src' } },
      { c: 'AbstrMatInput', key: 'image.alt', p: { label: 'Image alt' } }
    ]
  }
};
