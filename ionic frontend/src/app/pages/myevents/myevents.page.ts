import { Observable } from 'rxjs';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../../detail-modal/detail-modal.component';
import {map}  from 'rxjs/operators';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.page.html',
  styleUrls: ['./myevents.page.scss'],
})

export class MyeventsPage implements OnInit {

  fname = 'Anthony';
  lname = 'Ramos';
  current_date = '14/07/2020'
  events = [['Party', 'Beach Party Fun', 'Hello girls and boys! the time is near Mark your calendars and grab your gear!  Off to the ocean we will goBring the bikini, leave the beau!'],
  ['Party', 'Beach Party Fun', 'TESTING r!  Off to the ocean we will goBring the bikini, leave the beau!'],
  ['Party', 'Beach Party Fun', 'TESTING r!  Off to the ocean we will goBring the bikini, leave the beau!'],
  ['Party', 'Beach Party Fun', 'TESTING r!  Off to the ocean we will goBring the bikini, leave the beau!']];
  
  
  constructor(public modalController: ModalController, private ser:EventsService) {

  }

  async presentModal(e) {
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      cssClass: 'my-custom-class',
      componentProps: { 
        foo: 'hello',
        bar: 'world',
        results: this.events_list ,
        num: e
      }
    });
    return await modal.present();
  }
  events_list: Observable<any>;
  email:string;

  ngOnInit() {
    this.email= localStorage.getItem('currentUser')
    console.log('yolooo111')
    this.events_list= this.ser.myEvents().pipe(map(results=> results.Events));
    console.log('yolooo33333')
    console.log('yah',this.events_list);

  }

}
