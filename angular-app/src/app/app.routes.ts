import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('./component/shared/ui/home/home').then((c) => c.Home),
  },
  {
    path: 'kanban',
    pathMatch: 'prefix',
    loadComponent: () => import('./component/board/board/board').then((c) => c.Board),
  },
  {
    path: 'kanband',
    pathMatch: 'prefix',
    loadComponent: () =>
      import('./component/board/board-dynamic/board-dynamic').then((c) => c.BoardDynamic),
  },
];
