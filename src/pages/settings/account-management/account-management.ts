import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-account-management',
    templateUrl: 'account-management.html'
})

export class accountManagement {

    title = "My Account"

    navList: any = [
        {
            order: 'Wallet',
            page: 'walletManagement',
            icon: 'filing'
        },
        {
            order: 'Refer and Earn',
            page: 'discountEarn',
            icon: 'flower'
        },
        {
            order: 'Profile Setting',
            page: 'Profile',
            icon: 'person'
        },
        {
            order: 'Order History',
            page: 'OrderHistory',
            icon: 'refresh'
        },
        {
            order: 'Remainder',
            page: 'dosagereminderList',
            icon: 'alarm'
        },
    ]

    constructor(public navCtrl: NavController, public app: App) {

    }

    gotosigninPage() {
        this.navCtrl.setRoot('pinVerify')
    }

}