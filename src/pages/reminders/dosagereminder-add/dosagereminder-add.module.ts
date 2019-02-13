import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { dosagereminderAdd } from "./dosagereminder-add";

@NgModule({
    declarations: [
        dosagereminderAdd
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(dosagereminderAdd)
    ],
    exports: [
        dosagereminderAdd
    ]
})

export class dosagereminderAddModule {
}