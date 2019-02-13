import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'appointments-manage/orders',
})

@Component({
  selector: 'page-appointments-manage',
  templateUrl: 'appointments-manage.html'
})

export class appointmentsManage {

  appointment: any = "appointment"

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

  title = "Appointments"
  orders: any = [];

  constructor(public navCtrl: NavController) {

  }

}
