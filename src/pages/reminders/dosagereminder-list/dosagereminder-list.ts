import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-dosagereminder-list',
    templateUrl: 'dosagereminder-list.html'
})

export class dosagereminderList {
    title = "Dosage Reminders"
    members = [
        {
            dosageId: '4143',
            name: 'Dolo-650',
            time: '9:00AM'
        },
        {
            dosageId: '4153',
            name: 'siphene',
            time: '8:00AM'
        },
        {
            dosageId: '4183',
            name: 'coldact',
            time: '8:30AM'
        }
    ]

    constructor(public navCtrl: NavController, public app: App) {

    }

    gotoDetails(dosageId) {
        this.navCtrl.push('dosagereminderDetails', { dosageId })
    }

    addReminder() {
        this.navCtrl.push('dosagereminderAdd')
    }

}