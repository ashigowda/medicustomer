import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-invoiceDetails',
  templateUrl: 'invoiceDetails.html'
})

export class invoiceDetails {

  add: boolean = false;
  number: any;
  description: any = [];
  rate: any;
  details = [];
  i: any = [];
  appointmentId: any;
  title = "Invoice Details"

  constructor(public navCtrl: NavController) {
  }

  addInvoice() {
    this.details.push({
      number: this.number,
      description: this.description,
      rate: this.rate
    })
  }

  makePayment() {
    this.navCtrl.push('MakePayment')
  }

}