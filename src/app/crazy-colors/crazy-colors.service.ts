import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Urls } from '../core/constants/urls';
import { HttpService } from '../core/services/http.service';

@Injectable()
export class CrazycolorsService {

  constructor(private httpService: HttpService) { }

  getAgentsList() {
    return this.httpService.doAsyncTask(Urls.agentsListUrl,
      'GET').pipe(map(response => {
        return response;
      }));
  }

  getAgentDetails() {
    return this.httpService.doAsyncTask(Urls.agentDetailsUrl,
      'GET').pipe(map(response => {
        return response;
      }));
  }
}
