import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { OrderDetails } from "./order-details";

@NgModule({
    declarations: [
        OrderDetails
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(OrderDetails)
    ],
    exports: [
        OrderDetails
    ]
})

export class OrderDetailsModule {
}