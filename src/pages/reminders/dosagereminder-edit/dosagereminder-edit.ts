import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'dodagereminder-edit/:dosageId'
})

@Component({
    selector: 'page-dosagereminder-edit',
    templateUrl: 'dosagereminder-edit.html'
})

export class dosagereminderEdit {

    dosageId: any;
    title = "Edit Reminders"

    constructor(public navCtrl: NavController, public param: NavParams) {
        this.dosageId = this.param.get('dosageId')
    }

    gotoreminderslist() {
        this.navCtrl.pop()
    }

    gotoReviewOrderPage() {
        this.navCtrl.pop();
    }

}