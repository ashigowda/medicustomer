import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { PrescriptionDetails } from "./prescription-details";

@NgModule({
    declarations: [
        PrescriptionDetails
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(PrescriptionDetails)
    ],
    exports: [
        PrescriptionDetails
    ]
})

export class PrescriptionDetailsModule {
}