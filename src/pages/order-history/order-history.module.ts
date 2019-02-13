import { NgModule } from '@angular/core';
import { OrderHistoryModule } from "./order-history-main/order-history-main.module";
import { AllOrdersHistoryModule } from "./all-orders-history/all-orders-history.module";
import { OrdersHistoryPerticularModule } from "./order-history-perticular/order-history-perticular.module";
import { OrderDetailsHistoryModule } from "./order-details/order-details.module";

@NgModule({
    declarations: [
    ],
    imports: [
        OrderHistoryModule, AllOrdersHistoryModule, OrdersHistoryPerticularModule, OrderDetailsHistoryModule
    ],
})

export class OrderHistoryPageModule { }