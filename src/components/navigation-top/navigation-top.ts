import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'navigation-top',
  templateUrl: 'navigation-top.html'
})

export class NavigationLinks {

  @Input('list') list: any;

  constructor(public nav: NavController) {

  }

  gotoPage(page, index) {
    if (index == 0) {
      this.nav.parent.select(index);
    }
    else {
      this.nav.push(page)
    }

  }

}