import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { Profile } from "./profile";

@NgModule({
    declarations: [
        Profile
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(Profile)
    ],
    exports: [
        Profile
    ]
})

export class ProfileModule {
}