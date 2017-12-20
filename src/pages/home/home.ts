import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ENV } from '@env';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
this.buildMap();
  }

  buildMap() {
    console.log('buildMap');
    console.log(ENV.isDebugMode);
    console.log('ENV.baseUrl');
    console.log(ENV.baseUrl);
    if (ENV.isDebugMode) {
      console.log('111111111111111111 ENV.isDebugMode');
    } else {
      console.log('111111111111111111 222222222222222 ENV.isDebugMode');
    }

    // process.env.IONIC_ENV
    
    const val = "test";
    console.log(val);
    var test = function() {
      console.log('test');
    }
    const arr = ['a', 'b', 'c'];
    arr.forEach(function (element) {
      console.log(element);
    });
  arr.forEach((element) => {
    console.log(element);
});
  }
}
