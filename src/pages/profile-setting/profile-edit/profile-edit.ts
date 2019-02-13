import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-setting/profile-edit',
  // defaultHistory: ['Profile']
})

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html'
})

export class ProfileEdit {

  title = "Edit Profile";
  tabIndex: string = "0";

  profile = {
    firstName: 'string',
    lastName: 'string',
    pin: 'string',
    email: 'string',
    countryCode: 'string',
    phone: 'string',
    dateOfBirth: "1994-08-04",
    gender: 'string',
    address: {
      addressName: 'string',
      address: 'string',
      area: 'string',
      city: 'string',
      state: 'string',
      country: 'string',
      pincode: 'string',
    },
    notication: {
      email: true,
      text: true,
      newsLetter: true,
    },
  }

  constructor(public navCtrl: NavController) {

  }

  update() {
    this.navCtrl.push('ProfileView')
  }

  cancel() {
    this.navCtrl.pop();
  }

}
