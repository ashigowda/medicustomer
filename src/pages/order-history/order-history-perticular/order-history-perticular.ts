import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@IonicPage({
  segment: 'orders-history/:order'
})

@Component({
  selector: 'page-order-history-perticular',
  templateUrl: 'order-history-perticular.html'
})

export class OrdersHistoryPerticular {

  title: any;
  history = "history"
  orders: any = [];

  constructor(public navCtrl: NavController, public http: Http, public param: NavParams) {
    this.title = this.param.get('order')
    this.http.get('../assets/json/orders.json').map(res => res.json()).subscribe(data => {
      this.orders = data;
    });
  }

  gotoDetails(id) {
    this.navCtrl.push('OrderDetails')
  }

}
