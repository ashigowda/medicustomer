import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    segment: 'account-management/wallet-management/wallet-offers',
    defaultHistory: ['walletManagement']
})

@Component({
    selector: 'page-wallet-offers',
    templateUrl: 'wallet-offers.html'
})

export class walletOffers {

    title = "Wallet offers"

    constructor(public navCtrl: NavController, public app: App) {

    }

    gotosigninPage() {
        this.app.getRootNav().setRoot('signin')
    }

}