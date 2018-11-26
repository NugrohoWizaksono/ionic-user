import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:3000/api';
 
  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers(){
    return new Promise(resolve=> {
      this.http.get(this.apiUrl + '/users').subscribe(data => {
        resolve(data)
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', data)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteUser(id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/users/'+id)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }
}
