import {JSCMComponent} from '@abstrapp/core';

export const JSCM_BannerHeroComponent: Record<'BannerHeroComponent', JSCMComponent> = {
  BannerHeroComponent: {
    instanceLazyCallback: () => import('./banner-hero'),
    group: 'group_1',
    mapping: [
      {c: 'AbstrMatInput', key: 'title', p: {label: 'Title'}}
    ]
  }
};
