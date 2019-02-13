import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/address-select/delivery-address-add'
})

@Component({
    selector: 'page-delivery-address-add',
    templateUrl: 'delivery-address-add.html'
})

export class DeliveryAddressAdd {

    patientId: any;
    title = 'Add Delivery Address';

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.patientId = this.params.get('patientId')
    }

    saveAddress() {
        this.navCtrl.push('addressSelect', { patientId: this.patientId })
    }

}
