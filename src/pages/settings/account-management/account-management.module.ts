import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { accountManagement } from "./account-management";

@NgModule({
    declarations: [
        accountManagement
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(accountManagement)
    ],
    exports: [
        accountManagement
    ]
})

export class accountManagementModule {
}