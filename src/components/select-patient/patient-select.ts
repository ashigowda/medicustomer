import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'patient-select',
  templateUrl: 'patient-select.html'
})

export class selectPatient {

  @Input('list') list: any;
  @Input('appointment') appointment: any;
  @Input('prescription') prescription: any;

  constructor(public nav: NavController) {

  }

  gotoPage(name, patientId) {
    if (this.appointment == 'appointment') {
      this.nav.push('appointmentsList', { name, patientId })
    }
    else {
      this.nav.push('PrescriptionList', { name, patientId })
    }
  }

}