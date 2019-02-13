import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { orderDetails } from "./order-details";

@NgModule({
  declarations: [
    orderDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderDetails)
  ],
  exports: [
    orderDetails
  ]
})

export class orderDetailsModule {
}