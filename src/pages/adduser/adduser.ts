import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';

/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {

  user = { nama: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  saveUser() {
    this.restProvider.addUser(this.user).then((result) => {
      console.log(result);
      this.loadHome();
    }, (err) => {
      console.log(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }

  loadHome(){
    this.navCtrl.setRoot(HomePage)
    this.navCtrl.popToRoot();
  }
}
