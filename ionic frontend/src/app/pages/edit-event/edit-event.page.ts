import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {


  name:'';
  description:'';
  category:'';
  title: '';
  date1: '';
  date2: '';
  cost: '';
  venue:'';
  flyer: File;
  visibility: Boolean;
  data:any;
  constructor( private ser:EventsService, private r: Router) { }

  ngOnInit() {
  }


  edit_event(){

    this.data={
      'name': this.name, 'description': this.description, 'category': this.category, 'title': this.title, 
      'start_dt': this.date1, 'end_dt': this.date2, 'cost': this.cost, 'venue': this.venue,  'visibility': true
    };

    console.log('yolo', this.data);
    let form  =new FormData();
    form.append("name",this.name)
    form.append("title",this.title)
    form.append("description",this.description)
    form.append("cost",""+this.cost)
    form.append("category",""+this.category)
    form.append("start_date",this.date1)
    form.append("end_date",this.date2)
    // form.append("flyer",this.event.file)
    form.append("venue",this.venue)
    this.ser.edit_event(form).subscribe(res=>{
      
      if (!res.errors){
        //success
        this.r.navigate(["/myevents"]);
        location.reload();
        return false;
        localStorage.removeItem('currentid');
      }else{
        console.log(res.errors)
      }
      
      

    },err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'))

  }

}
