import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    segment: 'account-management/wallet-management/wallet-balance',
    defaultHistory: ['walletManagement']
})

@Component({
    selector: 'page-wallet-balance',
    templateUrl: 'wallet-balance.html'
})

export class walletBalance {

    title = "Wallet Balance"

    constructor(public navCtrl: NavController, public app: App) {

    }

    gotosigninPage() {
        this.app.getRootNav().setRoot('signin')
    }

}