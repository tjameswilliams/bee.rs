import { RouterConfig } from '@angular/router';

import { StartSessionComponent } from './startsession.component';
import { TastingRoundComponent } from './tastinground.component';
import { HostRoundComponent } from './hostround.component';

export const SessionRoutes: RouterConfig = [
  {
    path: 'start-session',
    component: StartSessionComponent
  },
	{
		path: 'tasting-round/:id',
		component: TastingRoundComponent
	},
  {
		path: 'host-round/:id',
		component: HostRoundComponent
	}
];
