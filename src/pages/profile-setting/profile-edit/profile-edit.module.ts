import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileEdit } from "./profile-edit";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
    declarations: [
        ProfileEdit
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ProfileEdit)
    ],
    exports: [
        ProfileEdit
    ]
})

export class ProfileEditModule {
}