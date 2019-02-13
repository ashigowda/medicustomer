import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()

@Component({
    selector: 'page-deviceverify',
    templateUrl: 'device-verify.html'
})

export class deviceverify {

    title: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.title = 'Verify Phone';
    }

    next() {
        this.navCtrl.setRoot('profilesetupStep1')
    }

}
