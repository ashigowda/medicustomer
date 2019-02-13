import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { patientSelect } from "./patient-select";

@NgModule({
  declarations: [
    patientSelect
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientSelect)
  ],
  exports: [
    patientSelect
  ]
})

export class patientSelectModule {
}