import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialsRoutingModule } from './financials-routing.module';
import { FinancialsComponent } from './financials/financials.component';

@NgModule({
  imports: [
    CommonModule,
    FinancialsRoutingModule
  ],
  declarations: [FinancialsComponent]
})
export class FinancialsModule { }
