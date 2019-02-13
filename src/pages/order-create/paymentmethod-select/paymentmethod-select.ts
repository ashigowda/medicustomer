import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/payementmethod-select',
    defaultHistory: ['addressSelect']
})

@Component({
    selector: 'page-paymentmethod-select',
    templateUrl: 'paymentmethod-select.html'
})

export class preferedPaymentMethod {

    patientId: any;
    title = 'Prefered Payment Method';

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.patientId = this.params.get('patientId')
    }

    gotoReviewOrderPage() {
        this.navCtrl.push('orderReview', { patientId: this.patientId })
    }

}
