import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { Charts2Component } from './charts-2/charts-2.component';

export const routes: Routes = [
    {
        path: '**',
        redirectTo: 'charts',
        pathMatch: 'full'
    },
    {
        path: 'charts',
        component: ChartsComponent
    },
    {
        path: 'charts2',
        component: Charts2Component
    }
    // {
    //     path: 'about',
    //     loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    // }
];
