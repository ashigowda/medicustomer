import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@IonicPage({
  segment: 'order-list-current/orders',
})

@Component({
  selector: 'page-order-list-current',
  templateUrl: 'order-list-current.html'
})

export class OrderListCurrent {

  title = "Current Orders";
  tabIndex: string = "0";
  order: string = "Waiting For Quote";
  payment: string = "Waiting For Payment";
  delivery: string = 'Waiting For Delivery';

  orders: any = [];

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('../assets/json/orders.json').map(res => res.json()).subscribe(data => {
      this.orders = data;
    });

  }

}
