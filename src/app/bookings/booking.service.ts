import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Urls } from '../core/constants/urls';
import { HttpService } from '../core/services/http.service';

@Injectable()
export class BookingService {

  constructor(private httpService: HttpService) { }

  getBookingsList() {
    return this.httpService.doAsyncTask(Urls.bookingListUrl,
      'GET').pipe(map(response => {
        return response;
      }));
  }

  getBookingDetails() {
    return this.httpService.doAsyncTask(Urls.bookingDetailsUrl,
      'GET').pipe(map(response => {
        return response;
      }));
  }
}
