import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'invoice-details',
  templateUrl: 'invoice-details.html'
})

export class invoiceDetails {

  @Input('text') title: any;
  @Input('icon') icon: any;
  @Input('click') click: any;

  constructor(public nav: NavController, public view: ViewController) {

  }

  close1(show) {
    this.view.dismiss(show)
  }

  gotoBackPage() {
    this.nav.pop()
  }

}