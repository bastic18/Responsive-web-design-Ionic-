import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  firstname:'';
  lastname:'';
  username: '';
  email:'';
  password:'';
  
  constructor( private authser: AuthService, private r:Router) { }

  ngOnInit() {
  }
register_user(){
  console.log('yolo  register');
  console.log(this.firstname,this.lastname, this.username, this.email, this.password );
this.authser.create_user(this.firstname,this.lastname, this.username, this.email, this.password).subscribe(result=> {console.log(result);
 
this.r.navigate(["/login"]); }, error => console.log('HTTP Connection Error', error))
}

}
