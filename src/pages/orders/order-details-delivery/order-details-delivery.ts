import { Component } from '@angular/core';
import { NavParams, NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'order-list-delivery/:id/order-details-delivery',
    defaultHistory: ['OrderListCurrent']
})

@Component({
    selector: 'page-order-details-delivery',
    templateUrl: 'order-details-delivery.html'
})

export class OrderDetailsDelivery {

    title = "Order Information"
    data1 = [];
    data2 = [];

    constructor(public params: NavParams, public navCtrl: NavController, public modal: ModalController) {
        this.data1 = ['OrderDetails']
        this.data2 = ['QuotationDetails']
    }

    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }

}