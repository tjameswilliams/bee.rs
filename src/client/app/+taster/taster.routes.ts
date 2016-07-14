import { RouterConfig } from '@angular/router';

import { TasterComponent } from './taster.component';
import { LobbyComponent } from './lobby.component';

export const TasterRoutes: RouterConfig = [
  {
    path: 'new-taster',
    component: TasterComponent
  },
	{
    path: 'please-wait',
    component: LobbyComponent
  }
];
