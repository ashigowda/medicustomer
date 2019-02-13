import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Http } from "@angular/http";

@IonicPage({
  defaultHistory: ['OrderListCurrent']
})

@Component({
  selector: 'page-prescription-details',
  templateUrl: 'prescription-details.html'
})

export class PrescriptionDetails {

  name: any;
  patientId: any;
  title = "Prescription Details";

  data1 = [];
  data = [];

  prescriptionId: any;
  listOfPrescription: any = [];

  drug: any = [
    {
      no: 1,
      drugName: "Dolo-650(8)",
    },
    {
      no: 2,
      drugName: " Imol-10(5)",
    },
    {
      no: 3,
      drugName: "Imol-20(10)",
    }
  ]

  symptoms: any = ['Sweating',
    'Chills and shivering',
    'Headache',
    'Muscle aches',
    'Loss of appetite',
    'Dehydration',]

  constructor(public navCtrl: NavController, public param: NavParams, public http: Http) {

    this.prescriptionId = this.param.get('prescriptionId');
    this.patientId = this.param.get('patientId');
    this.http.get('../assets/json/prescriptions.json').map(res => res.json()).subscribe(data => {
      this.listOfPrescription = data.filter(members => members.prescriptionId === this.prescriptionId);
    });
  }

  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'arrow-forward';
    }
    else {
      data.showDetails = false;
      data.showDetails = true;
      data.icon = 'arrow-up';
      data.showDetails = true;
      data.icon = 'arrow-up';
    }
  }

  toggleDetails1(data1) {
    if (data1.showDetails) {
      data1.showDetails = false;
      data1.icon = 'arrow-forward';
    } else {
      data1.showDetails = false;
      data1.showDetails = true;
      data1.icon = 'arrow-up';
      data1.showDetails = true;
      data1.icon = 'arrow-up';
    }
  }

  gotoOrderPage() {
    let patientId = this.patientId;
    this.navCtrl.push('orderDetails', { patientId })
  }

}
