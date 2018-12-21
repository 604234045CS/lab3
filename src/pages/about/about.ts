import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goPrev(){
    this.navCtrl.pop();
  }
  goNext(){
    this.navCtrl.push(ContactPage);
  }
  
}
