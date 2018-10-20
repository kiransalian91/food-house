import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Urls } from '../constants/urls';
import { HttpService } from './http.service';

@Injectable()
export class CommonService {

    private notificationsList = new BehaviorSubject({});
    notifications = this.notificationsList.asObservable();

    constructor(private httpService: HttpService) { }

    getNotificationsList() {
        return this.httpService.doAsyncTask(Urls.notificationsList,
            'GET').pipe(map(response => {
                return response;
            }));
        }

    setNotifications(data: any) {
        this.notificationsList.next(data);
    }

}
