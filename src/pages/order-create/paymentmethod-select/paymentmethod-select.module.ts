import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { preferedPaymentMethod } from "./paymentmethod-select";


@NgModule({
  declarations: [
    preferedPaymentMethod
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(preferedPaymentMethod)
  ],
  exports: [
    preferedPaymentMethod
  ]
})

export class PreferedPaymentMethodModule {
}