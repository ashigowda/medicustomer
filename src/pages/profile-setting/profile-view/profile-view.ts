import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-setting/profile-view',
  defaultHistory: ['Profile']
})

@Component({
  selector: 'page-profile-view',
  templateUrl: 'profile-view.html'
})

export class ProfileView {

  title = "Profile"

  profile = {
    firstName: 'parvathi',
    lastName: 'Reddy',
    pin: '1234',
    email: 'parvathi@gmail.com',
    countryCode: '0091',
    phone: '9542037170',
    dateOfBirth: "1994-08-04",
    gender: 'female',
    address: {
      addressName: 'home',
      address: '#39',
      area: 'MR Layout',
      city: 'Bangalore',
      state: 'karantaka',
      country: 'India',
      pincode: '560049',
    },
    notication: {
      email: true,
      text: true,
      newsLetter: true,
    },
  }

  constructor(public navCtrl: NavController) {

  }

  gotoEditProfilePage() {
    this.navCtrl.push('ProfileEdit')
  }

}
