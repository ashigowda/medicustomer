import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})

export class signin {
  response: any;

  rtitle = "Login with Pin"
  create = "Enter your 4-digit Pin"

  pinStage: number = 1;
  pin: string = "";
  pinRepeat: string = "";
  tPin: string;

  pinConfirmed: boolean = true;

  error: boolean;
  matrix = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.tPin = this.pin;

    this.response = this.navParams.get("message");
  }

  ionViewWillEnter() {
  }


  clicked(event) {
    if (event.srcElement.id == 'iback' || event.srcElement.id == "back") {
      this.tPin = this.tPin.slice(0, -1);
    } else {
      if (this.tPin.length < 4)
        this.tPin += event.srcElement.id;
    }
    this.pin = this.tPin;
    this.pinRepeat = this.tPin;
    this.pinConfirmed = true;
  }

  repeatPin() {
    this.pinStage = 1;
    this.tPin = this.pinRepeat;
  }

  confirmPin() {
    console.log("Pin confirmed: " + this.pinRepeat)
    if (this.pinConfirmed) {
      // this.profileVerify.pin = this.pinRepeat;
      this.navCtrl.push('tabs', 1)
    } else {
      console.log("Pin not confirmed");
    }
  }

}