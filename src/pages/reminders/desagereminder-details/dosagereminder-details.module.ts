import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { dosagereminderDetails } from "./dosagereminder-details";

@NgModule({
    declarations: [
        dosagereminderDetails
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(dosagereminderDetails)
    ],
    exports: [
        dosagereminderDetails
    ]
})

export class dosagereminderDetailsModule {
}