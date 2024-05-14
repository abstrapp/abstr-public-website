import { AbstrConfig } from '@abstrapp/core';
import { JSCM_BannerHeroComponent, JSCM_FooterComponent, JSCM_HeroContentComponent } from '@abstrapp/components';

export default {
  clientId: 'abstrapp',
  appRootPath: 'demo',
  // Component mapping list needed by ComponentMappingService to instantiate a Class component via JSON
  components: {
    ...(JSCM_BannerHeroComponent),
    ...(JSCM_FooterComponent),
    ...(JSCM_HeroContentComponent),
  }
} as AbstrConfig;

