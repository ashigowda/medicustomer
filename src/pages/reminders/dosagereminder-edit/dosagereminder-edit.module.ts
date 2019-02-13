import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { dosagereminderEdit } from "./dosagereminder-edit";

@NgModule({
    declarations: [
        dosagereminderEdit
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(dosagereminderEdit)
    ],
    exports: [
        dosagereminderEdit
    ]
})

export class dosagereminderEditModule {
}