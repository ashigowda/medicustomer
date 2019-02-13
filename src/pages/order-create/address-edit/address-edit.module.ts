import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { AddressEdit } from "./address-edit";

@NgModule({
  declarations: [
    AddressEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AddressEdit)
  ],
  exports: [
    AddressEdit
  ]
})

export class AddressEditModule {
}