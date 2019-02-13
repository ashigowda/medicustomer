import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { ProfileView } from "./profile-view";

@NgModule({
    declarations: [
        ProfileView
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ProfileView)
    ],
    exports: [
        ProfileView
    ]
})

export class ProfileViewModule {
}