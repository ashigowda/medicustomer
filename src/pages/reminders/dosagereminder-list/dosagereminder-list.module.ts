import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { dosagereminderList } from "./dosagereminder-list";

@NgModule({
    declarations: [
        dosagereminderList
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(dosagereminderList)
    ],
    exports: [
        dosagereminderList
    ]
})

export class dosagereminderListModule {
}