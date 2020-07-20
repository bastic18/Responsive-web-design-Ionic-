import { Injectable } from '@angular/core';

import {HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const httpOptions={
// headers: new HttpHeaders({

//   'Authorization': ''
// })
// };
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url_api: string = "http://localhost:5000"


  public login_user(username:string,password:string): Observable<any>{
    
    return this.http.post(`${this.url_api}/authlogin`,{},{
      headers:{
        Authorization: 'Basic ' + btoa(username + ":" + password),
        mode: "cors"
      }
    })
  }

  public create_user(firstname: string, lastname:string, username:string, email:string, password:string): Observable<any>{
  
    return this.http.post(`${this.url_api}/user`,{'firstname':firstname, 'lastname':lastname, 'username':username, 'email':email, 'password':password},{headers:{mode:"cors"}});
    // .pipe(map(results=> results));
  }


  public getoken(t):string {
    const token = localStorage.getItem(t);
    return token
  }

  constructor(private http: HttpClient) { }
}
