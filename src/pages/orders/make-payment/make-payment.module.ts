import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { MakePayment } from "./make-payment";

@NgModule({
    declarations: [
        MakePayment
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(MakePayment)
    ],
    exports: [
        MakePayment
    ]
})

export class MakePaymentModule {
}