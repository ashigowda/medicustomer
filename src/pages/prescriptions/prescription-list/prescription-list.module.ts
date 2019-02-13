import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { PrescriptionList } from "./prescription-list";

@NgModule({
    declarations: [
        PrescriptionList
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(PrescriptionList)
    ],
    exports: [
        PrescriptionList
    ]
})

export class PrescriptionListModule {
}