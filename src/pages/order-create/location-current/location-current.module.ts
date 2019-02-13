import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { LocationCurrent } from "./location-current";

@NgModule({
  declarations: [
    LocationCurrent
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LocationCurrent)
  ],
  exports: [
    LocationCurrent
  ]
})

export class LocationCurrentModule {
}