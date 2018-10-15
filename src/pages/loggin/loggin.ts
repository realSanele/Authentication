import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var firebase;

@IonicPage()
@Component({
  selector: 'page-loggin',
  templateUrl: 'loggin.html',
})
export class LogginPage {
  password: string;
  email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogginPage');
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user =>
      console.log(user.uid),
      this.navCtrl.setRoot("HomePage",{userName:this.email}),
      console.log("Signed In successful")
    );
    
  }

  signup(){
    this.navCtrl.push("SignupPage");
  }

  googleSignIn(){
    //this.navCtrl.push("");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((user) => {
      //console.log("Login page = "+user.user);
      console.log(user.user.displayName);
      this.navCtrl.setRoot("HomePage",{userName:user.user.displayName});
    });
  }

}
