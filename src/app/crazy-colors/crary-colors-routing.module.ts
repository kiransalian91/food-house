import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrazycolorsComponent } from './crazy-colors/crazy-colors.component';

const routes: Routes = [
  {
    path: '',
    component: CrazycolorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrazycolorsRoutingModule { }
