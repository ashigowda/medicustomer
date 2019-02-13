import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'order-list-payment/:id/make-payment',
  defaultHistory: ['OrderListCurrent']
})

@Component({
  selector: 'page-make-payment',
  templateUrl: 'make-payment.html'
})

export class MakePayment {

  title = "Payment Options";

  list: any = [
    { option: 'Cash On Delivery' },
    { option: 'Credit and Debit card payment' },
    { option: 'Net Banking' },
    {
      option: 'Wallet'
    }]

  constructor(public navCtrl: NavController) {

  }

  makePayment() {
    this.navCtrl.setRoot('OrderListCurrent')
  }

}
