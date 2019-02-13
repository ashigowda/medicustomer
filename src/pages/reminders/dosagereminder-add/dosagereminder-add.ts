import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    defaultHistory: ['dosagereminderList']
})

@Component({
    selector: 'page-dosagereminder-add',
    templateUrl: 'dosagereminder-add.html'
})

export class dosagereminderAdd {

    title = "Add Reminders"

    constructor(public navCtrl: NavController, public app: App) {

    }
    gotodosagelist() {
        this.navCtrl.pop()
    }

}