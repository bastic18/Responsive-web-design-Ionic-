import { Router } from '@angular/router';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


import { ModalController } from '@ionic/angular';

import { Subscription } from 'rxjs';
import {map}  from 'rxjs/operators';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.page.html',
  styleUrls: ['./visibility.page.scss'],
})
export class VisibilityPage implements OnInit {

  constructor(private event_ser:EventsService, private r:Router) { }
  events_list_not_visble: Observable<any>;
  ngOnInit() {

    this.events_list_not_visble= this.event_ser.getEvents_not_visible().pipe(map(results=> results.Events));
  }

  visibility(id){

    console.log('event id',id);
    this.event_ser.visible_event(id).subscribe(result=>{
        if(!result.error){
          this.r.navigate(['/visibilty'])
          location.reload();
          return false;
        }else {
          console.log(result.error)
        }


    })

  }

}
