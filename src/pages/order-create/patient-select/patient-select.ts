import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'order-create/patient-select',
    defaultHistory: ['home']
})

@Component({
    selector: 'page-patient-select',
    templateUrl: 'patient-select.html'
})

export class patientSelect {

    patientId: any;
    title = 'Select Patient';

    members = [
        {
            patientId: '4143',
            name: 'Asha rani',
            age: '26',
            relation: 'Myself'
        },
        {
            patientId: '4153',
            name: 'sirisha',
            age: '26',
            relation: 'Sister'
        },
        {
            patientId: '4183',
            name: 'Rohith',
            age: '26',
            relation: 'Brother'
        }
    ]

    constructor(public navCtrl: NavController) {
    }

    addPatient() {
        this.navCtrl.push('patientAdd')
    }

    gotouploadPrescriptionsPage() {
        this.navCtrl.push('prescriptionUpload', { patientId: this.patientId })
    }

}
