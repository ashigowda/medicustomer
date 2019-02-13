import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/address-add',
    defaultHistory: ['addressSelect']
})

@Component({
    selector: 'page-address-add',
    templateUrl: 'address-add.html'
})

export class AddressAdd {

    patientId: any;
    title = 'Add Delivery Address';

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

    Addlocation() {
        this.navCtrl.push('LocationCurrent', { patientId: this.patientId })
    }

    gotoManageAddress() {
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
