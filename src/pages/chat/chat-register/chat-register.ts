import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'chat-history/chat-register',
    defaultHistory: ['chatHistory']
})

@Component({
    selector: 'page-chat-register',
    templateUrl: 'chat-register.html'
})

export class chatRegister {

    title = 'Medi Serve'

    constructor(public navCtrl: NavController) {
    }

    goBack() {
        if (status == 'Open') {
            this.navCtrl.push('chatHistory')
        }
        else {
            this.navCtrl.push('chatHistory', { status: "end" })
        }
    }

    startChat() {
        this.navCtrl.push('chatCreate')
    }

    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }

}
