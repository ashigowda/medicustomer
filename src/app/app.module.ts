import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ComponentsModule } from "../components/components.module";
import { HttpModule } from "@angular/http";
import { homeModule } from "../pages/home/home.module";
import { tabsModule } from "../pages/tabs/tabs.module";
import { ChatModule } from "../pages/chat/chat.module";
import { orderCreateModule } from "../pages/order-create/order-create.module";
import { OrdersModule } from "../pages/orders/orders.module";
import { ProfileSettingModule } from "../pages/profile-setting/profile-setting.module";
import { OrderHistoryPageModule } from "../pages/order-history/order-history.module";
import { remindersModule } from "../pages/reminders/reminders.module";
import { IonicStorageModule } from '@ionic/storage';
import { PrescriptionModule } from "../pages/prescriptions/prescriptions.module";
import { AppointmentsModule } from "../pages/Appointments/appointments.module";
import { deviceRegistrationModule } from "../pages/device-registration/device-registration.module";

@NgModule({
  declarations: [
    MyApp
    
  ],
  imports: [
    BrowserModule,ComponentsModule,homeModule,
    tabsModule,ChatModule,orderCreateModule,
    BrowserModule,
    ComponentsModule,
    AppointmentsModule,
    deviceRegistrationModule,
    homeModule,
    tabsModule,
    HttpModule,
    OrdersModule,
    ProfileSettingModule,
    OrderHistoryPageModule,remindersModule,
    PrescriptionModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: 'false'}),
    IonicStorageModule.forRoot({
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
