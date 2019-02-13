import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { OrderHistory } from "./order-history-main";

@NgModule({
  declarations: [
   OrderHistory
  ],
  imports: [
      ComponentsModule,
   IonicPageModule.forChild( OrderHistory)
  ],
  exports: [
     OrderHistory
  ]
})

export class  OrderHistoryModule {
}