import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { ManagePatient } from "./manage-patient";

@NgModule({
    declarations: [
        ManagePatient
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ManagePatient)
    ],
    exports: [
        ManagePatient
    ]
})

export class ManagePatientModule {
}