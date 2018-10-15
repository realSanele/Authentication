import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var firebase;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  name: string;
  email: string;
  password: string;

  person: Person;
  signup_form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    
    this.signup_form = this.fb.group({
      name: ['',Validators.required],
      //email :['',Validators.required],
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password : ['',Validators.compose([Validators.minLength(8),Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) =>{
      console.log("user id = "+user.uid)
      this.navCtrl.push("HomePage"),
      console.log("Sign Up successful")
    });
  }

  onSubmit({obj,valid}:{obj:Person,valid:boolean}){
    console.log(valid);
  }

}
