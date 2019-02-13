import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'order-history/order-details/:id',
  defaultHistory: ['OrderListCurrent']
})

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html'
})

export class OrderDetailsHistory {

  title = "Order Information"
  constructor(public navCtrl: NavController) {

  }

}
