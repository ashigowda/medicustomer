import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'order-list/:id/order-details',
  defaultHistory: ['OrderListCurrent']
})

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html'
})

export class OrderDetails {
  title = "Order Information"
  constructor(public navCtrl: NavController) {

  }

}
