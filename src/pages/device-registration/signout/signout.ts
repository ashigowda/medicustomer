import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()
@Component({
    selector: 'page-signout',
    templateUrl: 'signout.html'
})

export class signout {
    response: any;
    message: string;
    title: string;

    subTitle;
    status: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.title = 'Sign out';
        this.subTitle = "Logged out successfully"
        this.message = "Please click on Login button to relogin!";
        this.response = this.navParams.get("message");
        let status = this.navParams.get("status");
        this.status = status ? status : 0;
    }

    next() {
        this.navCtrl.setRoot('devicecheck');
    }

}
