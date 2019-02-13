import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Http } from "@angular/http";

@IonicPage({})

@Component({
    selector: 'page-appointments-list',
    templateUrl: 'appointments-list.html'
})

export class appointmentsList {

    patientId: any;
    name: any;
    appointmentList1: any;
    title = "Appointments List";

    constructor(public navCtrl: NavController, public http: Http, public param: NavParams) {
        this.name = this.param.get('name');
        this.patientId = this.param.get('patientId')
        this.http.get('../assets/json/prescriptions.json').map(res => res.json()).subscribe(data => {
            this.appointmentList1 = data;
        });
    }

    viewprescription(prescriptionId, status) {
        let patientId = this.patientId;
        this.navCtrl.push('appointmentDetails', { patientId, prescriptionId, status })
    }

}
