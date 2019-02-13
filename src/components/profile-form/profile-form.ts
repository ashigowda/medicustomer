import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'profile-form',
    templateUrl: 'profile-form.html'
})

export class ProfileForm {

    @Input('profile') profile: any;

    constructor(public navCtrl: NavController) {
    }

}