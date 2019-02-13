import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { OrdersHistoryPerticular } from "./order-history-perticular";

@NgModule({
  declarations: [
   OrdersHistoryPerticular
  ],
  imports: [
      ComponentsModule,
   IonicPageModule.forChild( OrdersHistoryPerticular)
  ],
  exports: [
     OrdersHistoryPerticular
  ]
})

export class  OrdersHistoryPerticularModule {
}