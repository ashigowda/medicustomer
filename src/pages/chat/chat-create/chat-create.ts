import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'chat-history/chat-create',
    defaultHistory: ['chatHistory']
})
@Component({
    selector: 'page-chat-create',
    templateUrl: 'chat-create.html'
})

export class chatCreate {

    title = 'Create Chat'
    messages: any;
    newDate: any;
    time: Array<string>
    my_message: string;

    constructor(public navCtrl: NavController) {
        this.messages = [];
    }

    send(message) {
        this.newDate = new Date()
        this.messages.push({ my_message: message, currentDate: this.newDate })
        this.my_message = null;
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