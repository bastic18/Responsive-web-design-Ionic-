import { Router } from '@angular/router';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.page.html',
  styleUrls: ['./createvent.page.scss'],
})

export class CreateventPage implements OnInit {
  name:'';
  description:'';
  category:'';
  title: '';
  date1: '';
  date2: '';
  cost: '';
  venue:'';
  flyer: '';
  visibility: Boolean;
  data:any;
  
  constructor(public toastController: ToastController, private ser:EventsService, private r:Router) {

  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  
  }
  



  ngOnInit() {
  }

  add_event(){
    console.log('name',this.name, this.date1);
    this.data={
      'name': this.name, 'description': this.description, 'category': this.category, 'title': this.title, 
      'start_dt': this.date1, 'end_dt': this.date2, 'cost': this.cost, 'venue': this.venue, 'flyer': this.flyer,  'visibility': true
    };
    console.log('adevent', this.data);
    // this.ser.create_event(this.data).subscribe(result=> console.log(result));



    let form  =new FormData();
    form.append("name",this.name)
    form.append("title",this.title)
    form.append("description",this.description)
    form.append("cost",""+this.cost)
    form.append("category",""+this.category)
    form.append("start_date",this.date1)
    form.append("end_date",this.date2)
    form.append("flyer",this.flyer)
    form.append("venue",this.venue)
    console.log('form daaattattaaa: ', this.flyer);
    this.ser.create_event(form).subscribe(res=>{
      
      if (!res.errors){
        //success
        this.r.navigate(["/myevents"])
        location.reload();
        return false;
      }else{
        console.log(res.errors)
      }
      
      

    },err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'))

  }


  loadImageFromDevice(event: { target: { files: any[]; }; }) {
    console.log("image loooadd")
    const file = event.target.files[0];
    console.log(file)
    this.flyer = file;
    localStorage.setItem(this.flyer, file)
  
  }





}
