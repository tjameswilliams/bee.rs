import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { HostRoutes } from './+host/index';
import { ManifestRoutes } from './+manifest/manifest.routes';
import { SessionRoutes } from './+session/session.routes';
import { TasterRoutes } from './+taster/taster.routes';
import { SummaryRoutes } from './+summary/summary.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...HostRoutes,
  ...ManifestRoutes,
  ...SessionRoutes,
  ...TasterRoutes,
	...SummaryRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
