import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../core/services/logger.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  showDetail = false;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }


}
