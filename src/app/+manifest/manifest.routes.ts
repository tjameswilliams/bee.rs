import { RouterConfig } from '@angular/router';

import { ManifestComponent } from './manifest.component';
import { ManifestInfoComponent } from './manifestinfo.component';
import { BeerEditorComponent } from './beereditor.component';

export const ManifestRoutes: RouterConfig = [
  {
    path: 'info-manifest',
    component: ManifestInfoComponent
  },
	{
    path: 'beer-manifest',
    component: ManifestComponent
  },
	{
    path: 'beer-editor/:id',
    component: BeerEditorComponent
  },
	{
    path: 'beer-editor',
    component: BeerEditorComponent
  }
];
