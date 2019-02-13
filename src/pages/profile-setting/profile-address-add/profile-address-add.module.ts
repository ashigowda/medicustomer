import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { ProfileAddressAdd } from "./profile-address-add";

@NgModule({
    declarations: [
        ProfileAddressAdd
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ProfileAddressAdd)
    ],
    exports: [
        ProfileAddressAdd
    ]
})

export class ProfileAddressAddModule {
}