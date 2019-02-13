import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()

@Component({
    selector: 'page-profile-verify-step1',
    templateUrl: 'profile-verify-step1.html'
})

export class profileVerifyStep1 {

    title: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.title = 'Profile Verify';
        // this.getProfile();
    }

    next() {
        // this.setVerifyProfile();
    }

}
