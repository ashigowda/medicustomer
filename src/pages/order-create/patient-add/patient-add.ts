import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-patient-add',
    templateUrl: 'patient-add.html'
})

export class patientAdd {

    title = 'Add Patient';
    constructor(public navCtrl: NavController) {
    }

    gotoPatientListPage() {
        this.navCtrl.pop()
    }

}
