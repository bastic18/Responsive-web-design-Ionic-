import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: '';
  password:'';
 
 

  constructor(private authser: AuthService, private r:Router) { }

  ngOnInit() {
  }

login_verify(){
  console.log('yolo');
  console.log(this.username, this.password);
this.authser.login_user(this.username, this.password).subscribe(result=> {console.log(result);
  console.log(result.token);
  localStorage.setItem(this.username, result.token);
  localStorage.setItem('currentUser', this.username);
this.r.navigate(["/home"]); 

}, error => console.log('HTTP Connection Error', error))


// console.log( this.authser.getoken(this.username))
}



}
