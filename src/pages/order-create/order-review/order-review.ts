import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/order-review',
    defaultHistory: ['addressSelect']
})

@Component({
    selector: 'page-order-review',
    templateUrl: 'order-review.html'
})

export class orderReview {

    title = 'Review Order';

    constructor(public navCtrl: NavController, public alert: AlertController) {
    }

    gotoSelectAddressPage() {
        this.navCtrl.push('addressSelect')
    }

    gotoplaceOrder() {
        let alert = this.alert.create({
            title: 'Confirmation',
            subTitle: 'Your order for the Id 001 has been placed successfully',
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        this.navCtrl.parent.select(1)
                    }
                }
            ]
        });
        alert.present();
    }

}
