import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { ManageAddress } from "./manage-address";

@NgModule({
    declarations: [
        ManageAddress
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ManageAddress)
    ],
    exports: [
        ManageAddress
    ]
})

export class ManageAddressModule {
}