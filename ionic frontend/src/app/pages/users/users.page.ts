import { element } from 'protractor';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {map}  from 'rxjs/operators';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
users: Observable<any>;
id:''
  constructor(private ser:UserService, private router:Router) { }

  ngOnInit() {

    this.users= this.ser.getUsers().pipe(map(results=> results.users));
    console.log('userssss',this.users);
  }

  delete_user(user){

    console.log('user id',user);
    this.ser.delete_user(user).subscribe(res=>{ 

      if (!res.errors){
        this.router.navigate(["/users"]);
        location.reload();
        return false;

      }else{
        console.log(res.errors)
      }
      
    
    },err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'))
      
    
  }


  promote_user(user){

    console.log('user id for promotion',user);
    this.ser.promote_user(user).subscribe(res=>{ 

      if (!res.errors){
        this.router.navigate(["/users"]);
        location.reload();
        return false;

      }else{
        console.log(res.errors)
      }
      
    
    },err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'))
      
    
  }


 



}
