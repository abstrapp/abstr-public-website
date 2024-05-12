import {JSCMComponent} from '@abstrapp/core';

export const JSCM_BannerHeroComponent: Record<'BannerHeroComponent', JSCMComponent> = {
  BannerHeroComponent: {
    instanceLazyCallback: () => import('./banner-hero'),
    group: 'group_1',
    mapping: [
      {c: 'AbstrMatInput', key: 'title', p: {label: 'Title'}},
      {c: 'AbstrMatInput', key: 'image.src', p: {label: 'Image Source'}},
      {c: 'AbstrMatInput', key: 'image.alt', p: {label: 'Image Alt'}},
      {c: 'AbstrMatLink', key: 'link', p: {label: 'Link'}},
    ]
  }
};
