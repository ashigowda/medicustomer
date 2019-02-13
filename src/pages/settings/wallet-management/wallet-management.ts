import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    segment: 'account-management/wallet-management',
    defaultHistory: ['accountManagement']
})

@Component({
    selector: 'page-wallet-management',
    templateUrl: 'wallet-management.html'
})

export class walletManagement {

    title = "My Wallet"

    navList: any = [
        {
            order: 'Wallet Balance',
            page: 'walletBalance',
            icon: 'logo-usd'
        },
        {
            order: 'Trasactions',
            page: 'walletTransactions',
            icon: 'md-card'
        },
        {
            order: 'Gift Cards & Offers',
            page: 'walletOffers',
            icon: 'cube'
        }
    ]

    constructor(public navCtrl: NavController, public app: App) {

    }

    gotosigninPage() {
        this.app.getRootNav().setRoot('signin')
    }

}