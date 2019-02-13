import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { prescriptionUpload } from "./prescription-upload";

@NgModule({
  declarations: [
    prescriptionUpload
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionUpload)
  ],
  exports: [
    prescriptionUpload
  ]
})

export class prescriptionUploadModule {
}