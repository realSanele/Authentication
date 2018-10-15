import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  declare var firebase;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //var user = firebase.auth().currentUser;
    this.userName = this.navParams.get("userName");
    console.log(this.userName);
    if(this.userName == null){
      this.userName = this.navParams.get("fd");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logout(){
    firebase.auth().signOut().then((result) =>{
      this.navCtrl.setRoot("LogginPage");
    });
  }

}
