import { NgModule } from '@angular/core';
import { appointmentsManageModule } from "./appointments-manage/appointments-manage.module";
import { appointmentsListModule } from "./appointments-list/appointments-list.module";
import { appointmentDetailsModule } from "./appointment-details/appointment-details.module";
import { invoiceDetailsModule } from "./invoiceDetails/invoiceDetails.module";

@NgModule({
    declarations: [
    ],
    imports: [
        appointmentsManageModule, appointmentsListModule, appointmentDetailsModule, invoiceDetailsModule
    ],
})

export class AppointmentsModule { }