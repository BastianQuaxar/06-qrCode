import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }
  ionViewwillEnter(){
    console.log('ionViewwillEnter');
  }

  ionViewwillLeave(){
    console.log('ionViewwillLeave');
  }

  constructor() {}

}
