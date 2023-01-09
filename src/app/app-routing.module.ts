import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthPageComponent } from '@modules/auth/pages/auth-page/auth-page.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    //loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'auth',
    component: AuthPageComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta. 
    redirectTo: '/tracks',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
