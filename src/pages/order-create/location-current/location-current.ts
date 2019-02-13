import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/address-select/location-current'
})

@Component({
    selector: 'page-location-current',
    templateUrl: 'location-current.html'
})

export class LocationCurrent {

    patientId: any;
    title = 'Current Location';

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.patientId = this.params.get('patientId')
    }

    addAddress() {
        this.navCtrl.push('DeliveryAddressAdd', { patientId: this.patientId })
    }
    
}
