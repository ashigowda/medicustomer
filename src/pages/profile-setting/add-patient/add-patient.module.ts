import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientAdd } from "./add-patient";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
    declarations: [
        PatientAdd
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(PatientAdd)
    ],
    exports: [
        PatientAdd
    ]
})

export class PatientAddModule {
}