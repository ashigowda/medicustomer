import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
    selector: 'page-chat-history',
    templateUrl: 'chat-history.html'
})

export class chatHistory {

    data: any = [
        {
            name: 'AS',
            order: 'HJ03Ok',
            date: '12/02/2017',
            time: '12:01PM',
            status: 'Open',
            color: '#ff3333'
        },
        {
            name: 'YS',
            order: 'HJ03Ok',
            date: '12/02/2017',
            time: '12:01PM',
            status: 'Closed',
            color: '#ff3333'
        },
        {
            name: 'OS',
            order: 'HJ031k',
            date: '13/02/2017',
            time: '11:01PM',
            status: 'Closed',
            color: '#ff3333'
        },
        {
            name: 'AS',
            order: 'HJ032k',
            date: '12/02/2017',
            time: '12:01PM',
            status: 'Closed',
            color: '#ff3333'
        },
        {
            name: 'AS',
            order: 'HJ033k',
            date: '12/02/2017',
            time: '12:01PM',
            status: 'Closed',
            color: '#ff3333'
        },
        {
            name: 'AS',
            order: 'HJ034k',
            date: '12/02/2017',
            time: '12:01PM',
            status: 'Closed',
            color: '#ff3333'
        },
        {
            name: 'AS',
            order: 'HJ035k',
            date: '12/02/2017',
            time: '12:01PM',
            status: 'Closed',
            color: '#ff3333'
        },

    ]

    title = "Chat History"
    status2: any;

    constructor(public navCtrl: NavController, public param: NavParams) {
        this.status2 = this.param.get('status')
        if (this.status2 == 'end') {
            this.data[0].status = 'Closed'
        }
    }

    gotochatStartpage(data, status2) {
        let status = data.status;
        let order = data.order
        this.navCtrl.push('chatDetails', { status, status2, order })
    }

    createchat() {
        this.navCtrl.push('chatRegister')
    }

}
