import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { walletOffers } from "./wallet-offers";

@NgModule({
    declarations: [
        walletOffers
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(walletOffers)
    ],
    exports: [
        walletOffers
    ]
})

export class walletOffersModule {
}