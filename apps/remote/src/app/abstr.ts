import { AbstrConfig } from '@abstrapp/core';
import { JSCM_BannerHeroComponent } from '@abstrapp/components';

export default {
  clientId: 'abstrapp',
  appRootPath: 'demo',
  // Component mapping list needed by ComponentMappingService to instantiate a Class component via JSON
  components: {
    ...(JSCM_BannerHeroComponent)
  }
} as AbstrConfig;

