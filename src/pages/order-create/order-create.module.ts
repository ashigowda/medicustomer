import { NgModule } from '@angular/core';
import { patientSelectModule } from "./patient-select/patient-select.module";
import { patientAddModule } from "./patient-add/patient-add.module";
import { prescriptionUploadModule } from "./prescription-upload/prescription-upload.module";
import { orderDetailsModule } from "./order-details/order-details.module";
import { addressSelectModule } from "./address-select/address-select.module";
import { PreferedPaymentMethodModule } from "./paymentmethod-select/paymentmethod-select.module";
import { orderReviewModule } from "./order-review/order-review.module";
import { AddressAddModule } from "./address-add/address-add.module";
import { LocationCurrentModule } from "./location-current/location-current.module";
import { DeliveryAddressAddModule } from "./delivery-address-add/delivery-address-add.module";
import { AddressEditModule } from "./address-edit/address-edit.module";

@NgModule({
  declarations: [
 
  ],
  imports: [
   patientSelectModule,
   patientAddModule,
   prescriptionUploadModule,
   orderDetailsModule,
   addressSelectModule,
   PreferedPaymentMethodModule,
   orderReviewModule,
   AddressAddModule,
   LocationCurrentModule,
   DeliveryAddressAddModule,
   AddressEditModule
  ],
})
export class orderCreateModule {}