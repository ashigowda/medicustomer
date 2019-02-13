import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    defaultHistory: ['dosagereminderList']
})

@Component({
    selector: 'page-dosagereminder-details',
    templateUrl: 'dosagereminder-details.html'
})

export class dosagereminderDetails {

    title = "Reminder Details"

    constructor(public navCtrl: NavController, public app: App) {

    }
    Edit() {
        this.navCtrl.push('dosagereminderEdit')
    }

}