import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { OrderDetailsPayment } from "./order-details-payment";

@NgModule({
    declarations: [
        OrderDetailsPayment
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(OrderDetailsPayment)
    ],
    exports: [
        OrderDetailsPayment
    ]
})

export class OrderDetailsPaymentModule {
}