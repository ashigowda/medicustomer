import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderListCurrent } from "./order-list-current";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
    declarations: [
        OrderListCurrent
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(OrderListCurrent)
    ],
    exports: [
        OrderListCurrent
    ]
})

export class OrderListCurrentModule {
}