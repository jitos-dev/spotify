import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';


const routes: Routes = [
  {
    path: '',
    component: TracksPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
