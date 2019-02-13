import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { walletTransactions } from "./wallet-transactions";

@NgModule({
    declarations: [
        walletTransactions
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(walletTransactions)
    ],
    exports: [
        walletTransactions
    ]
})

export class walletTransactionsModule {
}