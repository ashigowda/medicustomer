import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()

@Component({
    selector: 'page-deviceregister',
    templateUrl: 'device-register.html'
})

export class deviceregister {

    title: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.title = 'Register Phone';
    }

    next() {
        this.navCtrl.setRoot('deviceverify')
    }

}
