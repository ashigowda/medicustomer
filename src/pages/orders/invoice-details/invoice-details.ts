import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-invoiceDetails',
  templateUrl: 'invoice-details.html'
})
export class InvoiceDetails {

  title = "Invoices"

  constructor(public navCtrl: NavController, public param: NavParams) {

  }
  gotopaymentpage() {
    this.navCtrl.push('MakePayment')
  }

}
