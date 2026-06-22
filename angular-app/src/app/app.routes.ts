import { Routes } from '@angular/router';

const appName: string = 'Angular tuto - ';
//order is important. /user will catch before /user/new if declare in first even if the url called is /user/new
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    //be careful when using it: if a route's title is not defined, it will keep the last title that was set
    title: `${appName}Home`,
    loadComponent: () => import('./component/shared/ui/home/home').then((c) => c.Home),
  },
  {
    path: 'test',
    pathMatch: 'prefix',
    title: `${appName}Tests`,
    loadComponent: () => import('./component/test/test/test').then((c) => c.Test),
  },
  {
    path: 'kanban',
    pathMatch: 'prefix',
    title: `${appName}Kanban`,
    loadComponent: () => import('./component/board/board/board').then((c) => c.Board),
  },
  {
    path: 'kanband',
    pathMatch: 'prefix',
    title: `${appName}Dynamic Kanban`,
    loadComponent: () =>
      import('./component/board/board-dynamic/board-dynamic').then((c) => c.BoardDynamic),
  },
  {
    path: 'defer',
    pathMatch: 'prefix',
    title: `${appName}Defer`,
    loadComponent: () => import('./component/defer-sample/defer-sample').then((c) => c.DeferSample),
  },
  {
    path: 'signals',
    pathMatch: 'prefix',
    title: `${appName}Signals`,
    loadComponent: () =>
      import('./component/signal-samples/signal-samples').then((c) => c.SignalSamples),
  },
  {
    path: 'pipes',
    pathMatch: 'prefix',
    title: `${appName}Pipes`,
    loadComponent: () => import('./component/pipe-sample/pipe-sample').then((c) => c.PipeSample),
  },
  {
    path: 'directives',
    pathMatch: 'prefix',
    title: `${appName}Directives`,
    loadComponent: () =>
      import('./component/directive-sample/directive-sample').then((c) => c.DirectiveSample),
  },
  {
    path: 'form',
    children: [
      {
        path: 'reactive',
        pathMatch: 'prefix',
        title: `${appName}Reactive Form`,
        loadComponent: () =>
          import('./component/form/reactive-form/reactive-form').then((c) => c.ReactiveForm),
      },
      {
        path: 'template',
        pathMatch: 'prefix',
        title: `${appName}Template Driven Form`,
        loadComponent: () =>
          import('./component/form/template-driven-form/template-driven-form').then(
            (c) => c.TemplateDrivenForm,
          ),
      },
    ],
  },
];
