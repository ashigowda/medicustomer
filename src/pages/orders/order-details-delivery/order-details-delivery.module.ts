import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { OrderDetailsDelivery } from "./order-details-delivery";

@NgModule({
    declarations: [
        OrderDetailsDelivery
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(OrderDetailsDelivery)
    ],
    exports: [
        OrderDetailsDelivery
    ]
})

export class OrderDetailsDeliveryModule {
}