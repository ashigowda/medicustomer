import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'profile-details',
  templateUrl: 'profile-details.html'
})

export class ProfileDetails {

  @Input('profile') profile: any;

  image: any;
  imgPreview: any = 'assets/imgs/blank-avatar.jpg';
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController
    //private sanitizer: DomSanitizer
  ) {

  }

}