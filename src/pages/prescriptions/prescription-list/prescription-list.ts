import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Http } from "@angular/http";

@IonicPage({
    segment: 'prescription-list',
    defaultHistory: ['OrderListCurrent']
})

@Component({
    selector: 'page-prescription-list',
    templateUrl: 'prescription-list.html'
})

export class PrescriptionList {

    name: any;
    patientId: any;
    listOfPrescription: any;
    title = "Prescriptions";

    constructor(public navCtrl: NavController, public http: Http, public param: NavParams) {
        this.name = this.param.get('name');
        this.patientId = this.param.get('patientId')
        this.http.get('../assets/json/prescriptions.json').map(res => res.json()).subscribe(data => {
            this.listOfPrescription = data;
        });
    }

    viewprescription(prescriptionId) {
        let patientId = this.patientId
        this.navCtrl.push('PrescriptionDetails', { prescriptionId, patientId })
    }

}
