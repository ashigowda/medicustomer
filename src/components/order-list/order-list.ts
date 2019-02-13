import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
    selector: 'order-list',
    templateUrl: 'order-list.html'
})

export class OrderList {

    @Input('list') orders: any;
    @Input('orderStatus') orderStatus: any;
    @Input('history') history: any;

    constructor(public nav: NavController, public view: ViewController) {

    }

    gotoDetails(order) {
        let id = order.id;
        if (order.orderStatus != 'Waiting For Delivery') {
            this.nav.push('OrderDetails', { id })
        }
        else {
            this.nav.push('OrderDetailsDelivery', { id })
        }
    }

    gotoHistory(id) {
        this.nav.push('OrderDetailsHistory', { id })
    }

    gotoPayment(id) {
        this.nav.push('OrderDetailsPayment', { id })
    }

    makePayment(id) {
        this.nav.push('InvoiceDetails', { id })
    }

}