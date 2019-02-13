import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Http } from "@angular/http";

@IonicPage({
    segment: 'appointment-details/:id',
    defaultHistory: ['OrderListCurrent']
})

@Component({
    selector: 'page-appointment-details',
    templateUrl: 'appointment-details.html'
})

export class appointmentDetails {

    prescriptionId: any;
    patientId: any;
    name: any;
    status: any;
    listOfPrescription: any;
    title = "Appointment Details";

    constructor(public navCtrl: NavController, public param: NavParams, public http: Http) {
        this.patientId = this.param.get('patientId');
        this.prescriptionId = this.param.get('prescriptionId');
        this.status = this.param.get('status')
        this.http.get('../assets/json/prescriptions.json').map(res => res.json()).subscribe(data => {
            this.listOfPrescription = data.filter(members => members.prescriptionId === this.prescriptionId);
        });
    }

    gotoviewPrescription() {
        let prescriptionId = this.prescriptionId;
        this.navCtrl.push('PrescriptionDetails', { prescriptionId, patientId: this.patientId })
    }

    gotoviewInvoice() {
        this.navCtrl.push('invoiceDetails')
    }

}
