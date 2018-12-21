import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  gotoPage(){
    this.navCtrl.push(AboutPage);
  }
  goPrev(){
    this.navCtrl.pop();
  }
  

}
