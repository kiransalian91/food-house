import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { CommonService } from './../services/common.services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificationsList;
  unreadCount;
  private notificationsData;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.notifications.subscribe(message => {
      console.log('get data');
      this.notificationsData = message;
      this.notificationsList = this.notificationsData.notifications;
      this.unreadCount = this.notificationsData.unread;
    });
  }

  checkToday(date) {
    if (new Date(date).toDateString() === new Date().toDateString()) {
      return true;
    } else {
      return false;
    }
  }

}
