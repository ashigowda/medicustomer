import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { appointmentsList } from "./appointments-list";

@NgModule({
    declarations: [
        appointmentsList
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(appointmentsList)
    ],
    exports: [
        appointmentsList
    ]
})

export class appointmentsListModule {
}