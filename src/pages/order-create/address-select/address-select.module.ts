import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { addressSelect } from "./address-select";

@NgModule({
  declarations: [
    addressSelect
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(addressSelect)
  ],
  exports: [
    addressSelect
  ]
})

export class addressSelectModule {
}