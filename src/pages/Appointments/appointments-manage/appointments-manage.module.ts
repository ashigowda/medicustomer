import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { appointmentsManage } from "./appointments-manage";

@NgModule({
    declarations: [
        appointmentsManage
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(appointmentsManage)
    ],
    exports: [
        appointmentsManage
    ]
})

export class appointmentsManageModule {
}