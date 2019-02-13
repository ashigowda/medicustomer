import { NgModule } from '@angular/core';
import { OrderListCurrentModule } from "./order-list-current/order-list-current.module";
import { OrderDetailsModule } from "./order-details/order-details.module";
import { OrderDetailsPaymentModule } from "./order-details-payment/order-details-payment.module";
import { OrderDetailsDeliveryModule } from "./order-details-delivery/order-details-delivery.module";
import { MakePaymentModule } from "./make-payment/make-payment.module";
import { invoiceDetailsModule } from "./invoice-details/invoice-details.module";

@NgModule({
    declarations: [
    ],
    imports: [
        OrderListCurrentModule, OrderDetailsModule, OrderDetailsPaymentModule, OrderDetailsDeliveryModule, MakePaymentModule, invoiceDetailsModule
    ],
})

export class OrdersModule { }