import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class MyTestService {


  private loginURL="http://localhost:1337/user/login"
  private SignUpURL="http://localhost:1337/user/signup"

  constructor(private http: HttpClient) {   }


signNew(user: User){

  return fetch(this.SignUpURL, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(user),
     
    // Adding headers to the request
  
});
}

  login(user: User){
    return fetch(this.loginURL, {
     
      // Adding method type
      method: "POST",
       
      // Adding body or contents to send
      body: JSON.stringify(user),
       
      // Adding headers to the request
    
  });
  }
}
