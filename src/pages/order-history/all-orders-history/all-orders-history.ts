import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@IonicPage({
  segment: 'order-history-main/all-orders-history'
})

@Component({
  selector: 'page-all-orders-history',
  templateUrl: 'all-orders-history.html'
})

export class AllOrdersHistory {

  title = "All Orders"
  order: string = "order";
  history = "history"
  orders: any = [];

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('../assets/json/orders.json').map(res => res.json()).subscribe(data => {
      this.orders = data;
    });
  }

}
