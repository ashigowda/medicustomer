import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    segment: 'account-management/wallet-management/wallet-transactions',
    defaultHistory: ['walletManagement']
})

@Component({
    selector: 'page-wallet-transactions',
    templateUrl: 'wallet-transactions.html'
})

export class walletTransactions {

    title = "Transactions"

    transactions: any = [
        {
            date: '12-10-2013',
            debit: '23.00',
            credit: '23.90',
            balance: '210.30'
        },
        {
            date: '23-10-2013',
            debit: '231.00',
            credit: '230.53 ',
            balance: '2345.65 '
        },
        {
            date: '12-10-2013',
            debit: '293.00',
            credit: '232.00',
            balance: '345.56'
        },
        {
            date: '12-10-2013',
            debit: '23.67',
            credit: '232.00',
            balance: '345.34'
        },
        {
            date: '12-10-2013',
            debit: '53.00',
            credit: '232.00',
            balance: '2.345'
        },
        {
            date: '12-10-2013',
            debit: '134.00',
            credit: '232.00',
            balance: '345.67'
        },
        {
            date: '12-10-2013',
            debit: '2323.00',
            credit: '232.00',
            balance: '96.70'
        }
    ]

    constructor(public navCtrl: NavController, public app: App) {

    }

    gotosigninPage() {
        this.app.getRootNav().setRoot('signin')
    }

}