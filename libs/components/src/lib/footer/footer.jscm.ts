import {JSCMComponent} from '@abstrapp/core';
import { JSCM_GROUP } from '../common';

export const JSCM_FooterComponent: Record<'AbcFooter', JSCMComponent> = {
  AbcFooter: {
    instanceLazyCallback: () => import('./footer'),
    group: JSCM_GROUP,
    mapping: []
  }
};
