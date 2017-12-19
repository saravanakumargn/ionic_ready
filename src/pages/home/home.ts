import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    let val = "test";
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
