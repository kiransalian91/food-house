import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-components',
  templateUrl: './common-components.component.html',
  styleUrls: ['./common-components.component.scss']
})
export class CommonComponentsComponent implements OnInit {
  showPopUp = false;
  servicesFinance = [
    {
      name: 'Samir Trading & Marketing Co.',
      imageUrl: '../../../assets/images/page-1.png',
      services: 'Home Services, Electrical, Laundry',
      location: 'Dubai, UAE'
    },
    {
      name: 'Samir Trading & Marketing Co.',
      imageUrl: '../../../assets/images/paint-brush.png',
      services: 'Home Services, Electrical, Laundry',
      location: 'Dubai, UAE'
    },
    {
      name: 'Samir Trading & Marketing Co.',
      imageUrl: '../../../assets/images/paint-brush.png',
      services: 'Home Services, Electrical, Laundry',
      location: 'Dubai, UAE'
    }
  ];

  serviceSelected = true;
  rating = 1.5;
  services = [
    {
      name: 'Car Cleaning'
    }, {
      name: 'Home Cleaning'
    }, {
      name: 'Electrical'
    }, {
      name: 'Plumbing'
    }, {
      name: 'Handyman'
    }, {
      name: 'Pet Care'
    }, {
      name: 'Painting'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  showPopup() {
    this.showPopUp = true;
  }

  hidePopup() {
    this.showPopUp = false;
  }

}
