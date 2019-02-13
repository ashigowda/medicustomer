import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/address-select',
    defaultHistory: ['orderDetails']
})

@Component({
    selector: 'page-address-select',
    templateUrl: 'address-select.html'
})

export class addressSelect {

    title = 'Address Select';
    patientId: any;

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.patientId = this.params.get('patientId')
    }

    gotoselectpaymentmethodpage() {
        this.navCtrl.push('preferedPaymentMethod', { patientId: this.patientId })
    }

    addAddress() {
        this.navCtrl.push('AddressAdd', { patientId: this.patientId })
    }

    edit() {
        this.navCtrl.push("AddressEdit", { patientId: this.patientId })
    }

}
