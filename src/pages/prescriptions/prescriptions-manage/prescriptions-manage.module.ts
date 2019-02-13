import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { PrescriptionManage } from "./prescriptions-manage";

@NgModule({
    declarations: [
        PrescriptionManage
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(PrescriptionManage)
    ],
    exports: [
        PrescriptionManage
    ]
})

export class PrescriptionManageModule {
}