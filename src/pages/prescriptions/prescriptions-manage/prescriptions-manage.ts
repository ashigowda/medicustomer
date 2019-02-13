import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'prescriptions-manage/orders',
})

@Component({
  selector: 'page-prescriptions-manage',
  templateUrl: 'prescriptions-manage.html'
})

export class PrescriptionManage {

  list: any = [
    {
      name: 'Parvathi',
      patientId: 123,
      relation: 'Myself',
    },

    {
      name: 'Asha',
      patientId: 456,
      relation: 'Sister',
    },
    {
      name: 'Swathi',
      patientId: 789,
      relation: 'Sister',
    },
  ]

  title = "Prescriptons"
  orders: any = [];

  constructor(public navCtrl: NavController) {
  }

  // gotoPage(name, patientId) {
  //   this.navCtrl.push('PrescriptionList', { name, patientId })
  // }

}
