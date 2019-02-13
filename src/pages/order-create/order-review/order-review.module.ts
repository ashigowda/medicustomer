import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { orderReview } from "./order-review";

@NgModule({
  declarations: [
    orderReview
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderReview)
  ],
  exports: [
    orderReview
  ]
})

export class orderReviewModule {
}