import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'order-details',
    templateUrl: 'order-details.html'
})
export class orderDetails {

    data1 = [];
    data2 = [];
    title = 'Order information';

    quotationDetais: any = [
        {
            prescriptionImage: 'pre',
            quoteImage: 'pre',
            quotePrice: 100,
            quoteDiscount: 50,
            quoteTotal: 150,
            orderDeliveryCharge: 30
        },
        {
            prescriptionImage: 'pre',
            quoteImage: 'pre2',
            quotePrice: 150,
            quoteDiscount: 70,
            quoteTotal: 220,
            orderDeliveryCharge: 30
        },
    ]

    constructor(public nav: NavController) {
        this.data1 = ['OrderDetails']
        this.data2 = ['QuotationDetails']
    }

    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'arrow-forward';
        } else {
            data.showDetails = true;
            data.icon = 'arrow-up';
        }
    }
    
    toggleDetails1(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'arrow-forward';
        } else {
            data.showDetails = false;
            data.showDetails = true;
            data.icon = 'arrow-up';
            data.showDetails = true;
            data.icon = 'arrow-up';
        }
    }

}