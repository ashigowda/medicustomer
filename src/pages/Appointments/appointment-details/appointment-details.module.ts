import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { appointmentDetails } from "./appointment-details";

@NgModule({
    declarations: [
        appointmentDetails
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(appointmentDetails)
    ],
    exports: [
        appointmentDetails
    ]
})

export class appointmentDetailsModule {
}