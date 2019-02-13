import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()

@Component({
    selector: 'page-profile-setup-step2',
    templateUrl: 'profile-setup-step2.html'
})

export class profilesetupStep2 {

    title = "Address";
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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {

        this.title = 'Profile Setup';
    }

    next() {
        this.navCtrl.push('profileSetupStep3Pin')
    }

}
