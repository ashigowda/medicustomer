import { NgModule } from '@angular/core';
import { accountManagementModule } from "./account-management/account-management.module";
import { walletManagementModule } from "./wallet-management/wallet-management.module";
import { walletBalanceModule } from "./wallet-balance/wallet-balance.module";
import { walletTransactionsModule } from "./wallet-transactions/wallet-transactions.module";
import { walletOffersModule } from "./wallet-offers/wallet-offers.module";
import { discountEarnModule } from "./discount-earn/discount-earn.module";

@NgModule({
    declarations: [
    ],
    imports: [
        accountManagementModule,
        walletManagementModule,
        walletBalanceModule,
        walletTransactionsModule,
        walletOffersModule,
        discountEarnModule,
    ],
})

export class OrdersModule { }