import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BookingService } from './booking.service';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule
  ],

  declarations: [BookingsComponent],

  providers: [BookingService]
})
export class BookingsModule { }
