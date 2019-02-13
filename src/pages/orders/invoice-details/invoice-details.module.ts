import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { InvoiceDetails } from "./invoice-details";

@NgModule({
  declarations: [
    InvoiceDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(InvoiceDetails)
  ],
  exports: [
    InvoiceDetails
  ]
})

export class invoiceDetailsModule {
}