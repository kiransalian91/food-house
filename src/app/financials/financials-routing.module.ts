import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialsComponent } from './financials/financials.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialsRoutingModule { }
