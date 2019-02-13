import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-setting/manage-patient',
  defaultHistory: ['Profile']
})

@Component({
  selector: 'page-manage-patient',
  templateUrl: 'manage-patient.html'
})

export class ManagePatient {

  title = "Manage Patient"

  constructor(public navCtrl: NavController) {

  }

  edit() {
    this.navCtrl.push('EditAddress')
  }

  addPatient() {
    this.navCtrl.push('PatientAdd')
  }

}
