import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-setting/manage-address/profile-address-add',
  //defaultHistory: ['Profile']
})

@Component({
  selector: 'page-profile-address-add',
  templateUrl: 'profile-address-add.html'
})

export class ProfileAddressAdd {

  title = "Add Address";

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
    this.navCtrl.push('ManageAddress')
  }

}
