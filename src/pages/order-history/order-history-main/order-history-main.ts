import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'account/order-history',
    defaultHistory: ['accountManagement']
})
@Component({
    selector: 'page-order-history-main',
    templateUrl: 'order-history-main.html'
})

export class OrderHistory {

    title = "Order History"

    list: any = [
        {
            order: 'All',
            icon: 'people',
            badge: 20,
            page: 'AllOrdersHistory'
        },

        {
            order: 'Parvathi',
            icon: 'person',
            age:"20 years",
            relation: 'Myself',
            badge: 10,
            page: 'OrdersHistoryPerticular'
        },
        {
            order: 'Asha',
            icon: 'person',
            relation: 'Sister',
            badge: 5,
            age:" 21 years",
            page: 'OrdersHistoryPerticular'
        },
    ]

    constructor(public navCtrl: NavController) {

    }

    gotoPage(page, order) {
        this.navCtrl.push(page, { order })
    }

}
