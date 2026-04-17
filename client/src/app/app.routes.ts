import { Routes } from '@angular/router';
import { gameGuard } from './guards/game-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Home'
    },
    {
        path: 'setup',
        canActivate: [gameGuard],
        loadComponent: () => import('./pages/setup/setup').then(m => m.Setup),
        title: 'Configurazione'
    },
    {
        path: 'reveal',
        canActivate: [gameGuard],
        loadComponent: () => import('./pages/game/game').then(m => m.Game)
    },
    {
        path: 'play',
        canActivate: [gameGuard],
        loadComponent: () => import('./pages/play/play').then(m => m.Play)
    },
    {
        path: 'results',
        canActivate: [gameGuard],
        loadComponent: () => import('./pages/results/results').then(m => m.Results)
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
