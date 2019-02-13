import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { AllOrdersHistory } from "./all-orders-history";

@NgModule({
    declarations: [
        AllOrdersHistory
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(AllOrdersHistory)
    ],
    exports: [
        AllOrdersHistory
    ]
})

export class AllOrdersHistoryModule {
}