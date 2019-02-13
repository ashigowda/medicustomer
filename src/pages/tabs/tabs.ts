import { Component} from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
@IonicPage({
  segment:'main'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class tabs {
  
  [x: string]: any;
  tab1Root: any = 'home';
  tab2Root: any = 'OrderListCurrent';
  tab3Root:any = 'appointmentsManage';
  tab4Root:any= 'PrescriptionManage';
   tab5Root: any = 'accountManagement';
   
  constructor(public params: NavParams,public nav:NavController) {
    this.activeTab = this.params.get('tabIndex');
    
    this.name = this.params.data;  
    
  }
}