
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './../services/events.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

  constructor(public modalController: ModalController, private router: Router, private route:ActivatedRoute,private events_ser:EventsService ) { }

  dismissModal(){
    this.modalController.dismiss();

  }

// CHANGE ROUTES
  moveNext(){ 
    this.router.navigate(['../edit-event'], { relativeTo: this.route });
    this.modalController.dismiss();
  }


  curr_event: Observable<any>;
  c: Subscription;
  foo;
  bar;
  results;
  num;
//  results2=JSON.parse(this.results);
image:string
pic: any;
  ngOnInit() {
    console.log(`${this.foo} ${this.bar} ${this.results} ${this.num}`);
    localStorage.setItem('currentid',this.num );
    console.log('id for route at modal', this.num)
    this.curr_event= this.events_ser.get_single_event(this.num);
    this.c =this.events_ser.get_single_event(this.num).subscribe(res=> {console.log('polo',res.Events);
    this.c= res.Events;
    // this.image= this.c.flyer;
    // this.pic=localStorage.getItem(this.image);
    // console.log('results', this.c);
    // console.log('results image', this.image);
  });
    
    console.log('list', this.curr_event);

    
  }


  ngOnDestroy(): void {
    this.c.unsubscribe()
  }


  delete_event(){

   
    this.events_ser.delete_event().subscribe(res=>{
      
      if (!res.errors){
        //success
        this.router.navigate(["/home"]);
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
