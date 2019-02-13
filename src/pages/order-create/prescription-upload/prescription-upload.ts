import { Component } from '@angular/core';
import { NavController, IonicPage, ActionSheetController, NavParams } from 'ionic-angular';

@IonicPage({
    segment: 'patient-select/:patientId/prescription-upload',
    defaultHistory: ['patientSelect']
})

@Component({
    selector: 'page-prescription-upload',
    templateUrl: 'prescription-upload.html'
})

export class prescriptionUpload {

    quoteImage: any = [];
    title = 'Upload Prescriptions';
    patientId: any;

    constructor(public navCtrl: NavController, public actionSheet: ActionSheetController, public params: NavParams) {
        this.patientId = this.params.get('patientId')
    }

    addprescription() {
        let actionSheet = this.actionSheet.create({
            title: 'Choose Option',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    role: 'destructive',
                    handler: () => {

                        this.navCtrl.push('orderDetails', { patientId: this.patientId })
                    }
                }, {
                    text: 'Gallery',
                    icon: 'image',
                    handler: () => {

                        this.navCtrl.push('orderDetails')
                    }
                }
            ]
        });
        actionSheet.present();
    }

}
