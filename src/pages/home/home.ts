import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }
  
  goAdduserPage() {
    this.navCtrl.push('AdduserPage', {});
  }

  deleteUser(id){
    this.restProvider.deleteUser(id).then((result) => {
      console.log(result);
      this.reload();
    }, (err) => {
      console.log(err);
    });
  }
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  reload(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
