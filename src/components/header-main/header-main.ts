import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'header-main',
  templateUrl: 'header-main.html'
})

export class HeaderPart {

  @Input('title') title: any;
  @Input('icon') icon: any;
  @Input('click') click: any;

  constructor(public nav: NavController, public view: ViewController) {

  }

  close1(show) {
    this.view.dismiss(show)
  }

  gotoBackPage() {
    this.nav.pop()
  }

}