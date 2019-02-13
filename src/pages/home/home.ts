import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class home {

    title = "Medi prescribe"

    list: any = [
        {
            order: 'Order Medicines',
            icon: 'medkit',
            page: 'patientSelect'
        },
        {
            order: 'Medicine Refilles',
            icon: 'medical',
            index: 0
        },
    ]

    constructor(public navCtrl: NavController) {
    }

    gotoChatPage() {
        this.navCtrl.push('chatHistory')
    }

}
