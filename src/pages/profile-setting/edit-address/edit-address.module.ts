import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { EditAddress } from "./edit-address";

@NgModule({
    declarations: [
        EditAddress
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(EditAddress)
    ],
    exports: [
        EditAddress
    ]
})

export class EditAddressModule {
}