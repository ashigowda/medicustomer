import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { DeliveryAddressAdd } from "./delivery-address-add";

@NgModule({
  declarations: [
    DeliveryAddressAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DeliveryAddressAdd)
  ],
  exports: [
    DeliveryAddressAdd
  ]
})

export class DeliveryAddressAddModule {
}