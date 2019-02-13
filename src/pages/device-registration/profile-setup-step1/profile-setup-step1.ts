import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()

@Component({
    selector: 'page-profile-setup-step1',
    templateUrl: 'profile-setup-step1.html'
})

export class profilesetupStep1 {

    business = 'business';
    title = "Profile Setup";
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

    }

    next() {
        this.navCtrl.push('profilesetupStep2');
    }

}
