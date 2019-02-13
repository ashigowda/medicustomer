import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-setting/manage-address/edit-address',
  //defaultHistory: ['Profile']
})

@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html'
})

export class EditAddress {

  title = "Edit Address";

  address = {
    addressName: 'string',
    address: 'string',
    area: 'string',
    city: 'string',
    state: 'string',
    country: 'string',
    pincode: 'string',
  }

  constructor(public navCtrl: NavController) {

  }

  gotoManageAddress() {
    // this.navCtrl.push('ManageAddress')
    this.navCtrl.pop();
  }

}
