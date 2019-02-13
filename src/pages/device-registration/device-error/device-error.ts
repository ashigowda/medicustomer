import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()
@Component({
    selector: 'page-deviceerror',
    templateUrl: 'device-error.html'
})

export class deviceerror {

    response: any;
    message: string;
    title: string;
    subTitle;
    status: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {

        this.title = 'Medi Serve';
        this.subTitle = "Network Error occoured"
        this.message = "Please retry after sometime!";
        this.response = this.navParams.get("message");
        let status = this.navParams.get("status");
        this.status = status ? status : 0;

    }

    ionViewDidLoad() {
    }

    next() {
        if (this.status == 0) {
            this.navCtrl.setRoot('devicecheck')
            //this.navCtrl.last();
        } else {
            //this.navCtrl.last();
            this.navCtrl.setRoot('devicecheck')
        }
    }

}
