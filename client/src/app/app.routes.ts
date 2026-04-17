import { Routes } from '@angular/router';
import { gameGuard } from './guards/game-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Home'
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings').then(m => m.Settings),
        title: 'Settings'
    },
    {
        path: 'game',
        canActivate: [gameGuard],
        children: [
            {
                path: 'setup',
                loadComponent: () => import('./pages/game/setup/setup').then(m => m.Setup),
                title: 'Configurazione'
            },
            {
                path: 'reveal',
                loadComponent: () => import('./pages/game/reveal/reveal').then(m => m.Reveal)
            },
            {
                path: 'play',
                loadComponent: () => import('./pages/game/play/play').then(m => m.Play)
            },
            {
                path: 'results',
                loadComponent: () => import('./pages/game/results/results').then(m => m.Results)
            }
        ]
    },
    {
        path: 'page-not-found',
        loadComponent: () => import('./pages/errors/page-not-found/page-not-found').then(m => m.PageNotFound),
        title: '404 - Page Not Found'
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
    }
];
