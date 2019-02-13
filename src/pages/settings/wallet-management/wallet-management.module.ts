import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { walletManagement } from "./wallet-management";

@NgModule({
    declarations: [
        walletManagement
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(walletManagement)
    ],
    exports: [
        walletManagement
    ]
})

export class walletManagementModule {
}