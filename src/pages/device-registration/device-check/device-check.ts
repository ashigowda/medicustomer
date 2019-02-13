import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()

@Component({
    selector: 'page-devicecheck',
    templateUrl: 'device-check.html'
})

export class devicecheck {

    title = "Device Check";
    message = "Device checking failed.Use buttons";

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    gotoRegister() {
        this.navCtrl.setRoot('deviceregister')
    }

    gotoSignin() {
        this.navCtrl.setRoot('signin')
    }

}
