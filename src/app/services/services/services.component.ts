import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouteConfigLoadEnd, RoutesRecognized, NavigationEnd } from '@angular/router';

import { LoggerService } from '../../core/services/logger.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  showDetail = false;
  private paramObserverSubscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logger: LoggerService) { }

  ngOnInit() {
  }


}
