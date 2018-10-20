import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Urls } from '../core/constants/urls';
import { HttpService } from '../core/services/http.service';

@Injectable()
export class ServicesListService {

  constructor(private httpService: HttpService) { }

  getServiceList() {
    return this.httpService.doAsyncTask(Urls.serviceListUrl,
      'Get').pipe(map(response => {
        return response;
    }));
  }
}
