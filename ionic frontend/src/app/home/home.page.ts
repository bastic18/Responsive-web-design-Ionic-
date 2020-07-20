import { UserService } from './../services/user.service';
import { Observable } from 'rxjs';
import { EventsService } from './../services/events.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { Subscription } from 'rxjs';
import {map}  from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events_list: Observable<any>;
  user_list: Observable<any>;
  current_user = localStorage.getItem('currentUser');
  constructor(public modalController: ModalController, private events_ser:EventsService, private user_ser:UserService) {

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

  sliderConfig = {
    spaceBetween: 2,
    slidesPerView: 2.8
  }
email:string;
  // events_list: Subscription;
  ngOnInit() {
    
    this.events_list= this.events_ser.getEvents().pipe(map(results=> results.Events));
    console.log('yolooo33333')
    console.log('yah',this.events_list);
    // Event= this.events_list[0]
    this.email= localStorage.getItem('currentUser')
    console.log('userrrremail',this.email)
    this.user_list= this.user_ser.getUser().pipe(map(results=> results.user));
    console.log('yoloo',this.user_list )
  }

  get_events(){
    console.log('yaaaaa')
    return this.events_ser.getEvents().subscribe(result=> result.Events);
  }



}
