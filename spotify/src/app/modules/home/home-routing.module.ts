import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*El path: ** ese lo podemos cambiar para hacer una ruta /home que redirija en vez de 
a /tracks */

const routes: Routes = [
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta. 
    redirectTo: '/tracks'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
