import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { patientAdd } from "./patient-add";

@NgModule({
  declarations: [
    patientAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientAdd)
  ],
  exports: [
    patientAdd
  ]
})

export class patientAddModule {
}