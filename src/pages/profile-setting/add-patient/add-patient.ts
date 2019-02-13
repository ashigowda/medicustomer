import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-setting/manage-patients/add-patients',
  // defaultHistory: ['Profile']
})

@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html'
})

export class PatientAdd {

  title = "Add Patient"

  constructor(public navCtrl: NavController) {
  }

  gotoManagePatient() {
    this.navCtrl.push('ManagePatient')
  }

}
