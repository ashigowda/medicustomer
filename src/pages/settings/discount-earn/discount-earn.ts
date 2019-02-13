import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    segment: 'acoount-management/discount-earn',
    defaultHistory: ['accountManagement']
})

@Component({
    selector: 'page-discount-earn',
    templateUrl: 'discount-earn.html'
})

export class discountEarn {

    title = "Earn Extra Discount";
    input = "BS6457"

    constructor(public navCtrl: NavController, public app: App) {

    }

    gotosigninPage() {
        this.app.getRootNav().setRoot('signin')
    }

    gotoapps() {
        alert("need to implement share link functionality")
    }

}