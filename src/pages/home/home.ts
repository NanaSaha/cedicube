import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyPage } from '../apply/apply';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  apply_loan() {
    
    this.navCtrl.push(ApplyPage)
  }

}
