import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { LoggerService } from '../services/logger.service';
import { CommonService } from '../services/common.services';
import { Urls } from '../../core/constants/urls';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('sidebarDiv') sidebarDiv: ElementRef;
  locationUrl: string;
  navbarOpen = false;
  notificationsList: any[];
  unreadCount: number;
  pageTitle = '';
  private headericon = Urls.imgUrl + 'header/header-icon.png';
  private logo = Urls.imgUrl + 'header/logo.svg';
  private notification = Urls.imgUrl + 'header/notifications.svg';
  private menuicon = Urls.imgUrl + 'header/menu.svg';
  private dropdown = Urls.imgUrl + 'dropdown-icon.svg';
  private closeicon = Urls.imgUrl + 'close-menu.svg';
  private routerSubscription;

  navbarItems = [
    { name: 'Home', link: '/home', isActive: false },
    { name: 'Crazy Color', link: '/crazycolors', isActive: false },
    { name: 'Setan Creations', link: '/setancreations', isActive: false },
    { name: 'Khadava The Banda', link: '/khadavatheband', isActive: false },
    { name: 'Contact Us', link: '/contactus', isActive: false }
  ];

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private logger: LoggerService, private router: Router, private location: Location, private commonService: CommonService) {
    router.events.subscribe(val => {
      this.locationUrl = location.path();
    });

    this.commonService.getNotificationsList().subscribe(response => {
      this.logger.log('Received notifications list');

      if (response && response.data) {
        this.notificationsList = response.data.notifications;
        this.unreadCount = response.data.unread;
        this.commonService.setNotifications(response.data);
      }
    });
  }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.navbarItems.forEach((item) => {
          if (this.location.path().indexOf(item.link) !== -1) {
            this.pageTitle = item.name;
          }
        });
      }
      if (val instanceof  NavigationEnd) {
        if (this.location.path() === '/notifications') {
          this.pageTitle = 'Notifications';
        }
      }
    });

    let notificationData;
    this.commonService.notifications.subscribe(message => notificationData = message);

    this.logger.log(notificationData);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  openMenu() {
    this.logger.log('open menu');
  }

  onClickOutside(e) {
    if (e.target === this.sidebarDiv.nativeElement) {
      this.navbarOpen = false;
    }
  }

  signOut() {
    this.logger.log('sign out');
  }

  onShown(): void {
    this.logger.log('Dropdown is shown');
  }

  headerTabClick(index: number) {
    const link = this.navbarItems[index].link;
    this.navbarOpen = false;
    this.router.navigate([link]);
    this.pageTitle = this.navbarItems[index].name;
    console.log('this.navbarItems[index].name', this.navbarItems[index].name);
  }



  checkActive(link) {
    if (this.locationUrl && this.locationUrl.indexOf(link) !== -1) {
      return true;
    }
  }

  goToNotifications() {
    this.router.navigate(['/notifications']);
  }

  logout() {
    // this.router.navigate(['/signIn']);
  }
}
