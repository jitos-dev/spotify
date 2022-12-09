import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryPageComponent } from './pages/history-page/history-page.component';


const routes: Routes = [
  {
    path: '',
    component: HistoryPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
