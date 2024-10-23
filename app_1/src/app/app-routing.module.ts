import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'imput',
    loadChildren: () => import('./paginas/imput/imput.module').then( m => m.ImputPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./paginas/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'clear',
    loadChildren: () => import('./paginas/clear/clear.module').then( m => m.ClearPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
