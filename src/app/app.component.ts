import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'devicecheck';
  pin: any = null;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
    });
  }
}
