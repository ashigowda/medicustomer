import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { discountEarn } from "./discount-earn";

@NgModule({
    declarations: [
        discountEarn
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(discountEarn)
    ],
    exports: [
        discountEarn
    ]
})

export class discountEarnModule {
}