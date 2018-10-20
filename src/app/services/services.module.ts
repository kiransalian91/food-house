import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { ServicesListService } from './services-list.service';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent
  ],
  providers: [ServicesListService]
})
export class ServicesModule { }
