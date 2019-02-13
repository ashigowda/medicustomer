import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/address-edit'
})

@Component({
    selector: 'page-address-edit',
    templateUrl: 'address-edit.html'
})

export class AddressEdit {

    patientId: any;
    title = 'Edit Address';

    address = {
        addressName: 'string',
        address: 'string',
        area: 'string',
        city: 'string',
        state: 'string',
        country: 'string',
        pincode: 'string'
    }

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.patientId = this.params.get('patientId')
    }

    gotoAddressSelect() {
        this.navCtrl.push('addressSelect', { patientId: this.patientId })
    }

    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }

}