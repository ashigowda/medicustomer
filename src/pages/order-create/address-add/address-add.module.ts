import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { AddressAdd } from "./address-add";

@NgModule({
  declarations: [
    AddressAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AddressAdd)
  ],
  exports: [
    AddressAdd
  ]
})

export class AddressAddModule {
}