import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module"
import { OrderDetailsHistory } from "./order-details";

@NgModule({
    declarations: [
        OrderDetailsHistory
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(OrderDetailsHistory)
    ],
    exports: [
        OrderDetailsHistory
    ]
})

export class OrderDetailsHistoryModule {
}