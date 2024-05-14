import { JSCMComponent } from '@abstrapp/core';
import { JSCM_GROUP } from '../common';

export const JSCM_BannerHeroComponent: Record<'AbcBannerHero', JSCMComponent> = {
  AbcBannerHero: {
    instanceLazyCallback: () => import('./banner-hero'),
    group: JSCM_GROUP,
    mapping: [
      { c: 'AbstrMatInput', key: 'title', p: { label: 'Title' } },
      { c: 'AbstrMatInput', key: 'subtitle', p: { label: 'Subtitle' } },
      { c: 'AbstrMatLink', key: 'subtitle', p: { label: 'Link' } }
    ]
  }
};
