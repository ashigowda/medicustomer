import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/order-details',
    defaultHistory: ['patientSelect']
})

@Component({
    selector: 'page-order-details',
    templateUrl: 'order-details.html'
})

export class orderDetails {

    title = 'Order Details';
    patientId: any;

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.patientId = this.params.get('patientId')
    }

    gotoSelectAddressPage() {
        this.navCtrl.push('addressSelect', { patientId: this.patientId })
    }

}
