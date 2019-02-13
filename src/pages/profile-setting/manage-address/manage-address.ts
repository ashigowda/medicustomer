import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-setting/manage-address',
  defaultHistory: ['Profile']
})

@Component({
  selector: 'page-manage-address',
  templateUrl: 'manage-address.html'
})

export class ManageAddress {

  title = "Manage Address"

  constructor(public navCtrl: NavController) {
  }

  edit() {
    this.navCtrl.push('EditAddress')
  }

  addAddress() {
    this.navCtrl.push('ProfileAddressAdd')
  }

}
