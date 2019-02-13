import { NgModule } from '@angular/core';
import { PrescriptionManageModule } from "./prescriptions-manage/prescriptions-manage.module";
import { PrescriptionListModule } from "./prescription-list/prescription-list.module";
import { PrescriptionDetailsModule } from "./prescription-details/prescription-details.module";

@NgModule({
    declarations: [
    ],
    imports: [
        PrescriptionManageModule, PrescriptionListModule, PrescriptionDetailsModule
    ],
})

export class PrescriptionModule { }