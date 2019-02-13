import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'chat-history/chat-details/:order',
    defaultHistory: ['chatHistory']
})

@Component({
    selector: 'page-chat-details',
    templateUrl: 'chat-details.html'
})

export class chatDetails {

    messages = [];
    newDate: any;
    time: Array<string>
    my_message: string;
    status: any;
    order: any;

    constructor(public navCtrl: NavController, public param: NavParams) {
        this.status = this.param.get("status")
        this.order = this.param.get('order');
    }

    backHistoryPage() {
        this.navCtrl.push('chatHistory', { status: "end" })
    }

    backHistoryPage1() {
        this.navCtrl.push('chatHistory')
    }

    send(message) {
        this.newDate = new Date()
        this.messages.push({ my_message: message, currentDate: this.newDate })
        this.my_message = null;
    }

    endChat() {
        this.navCtrl.push('chatHistory', { status: "end" })

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
