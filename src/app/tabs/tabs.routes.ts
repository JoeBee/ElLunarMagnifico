import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'la-luna',
        loadComponent: () => import('../la-luna/la-luna.page').then(m => m.LaLunaPage),
      },
      {
        path: 'terrestrial-location',
        loadComponent: () =>
          import('../terrestrial-location/terrestrial-location.page').then((m) => m.TerrestrialLocationPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: 'la-luna',
        pathMatch: 'full',
      },
    ],
  },
];
