import { Injectable } from '@angular/core';

import {HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  url_api: string = "http://localhost:5000"


  private get_token(t):string {
    const token = localStorage.getItem(t);
    return token
  }

  getEvents():Observable<any>{
    const user = localStorage.getItem('currentUser');
    const token = this.get_token(user);
    return this.http.get(`${this.url_api}/events`,{headers:{mode:"cors","x-access-token":token}}).pipe(map(results=> results));
  } 
  getEvents_not_visible():Observable<any>{
    const user = localStorage.getItem('currentUser');
    const token = this.get_token(user);
    return this.http.get(`${this.url_api}/events/notvisible`,{headers:{mode:"cors","x-access-token":token}}).pipe(map(results=> results));
  } 
  get_single_event(event_id):Observable<any>{
    const user = localStorage.getItem('currentUser');
    const token = this.get_token(user);
    return this.http.get(`${this.url_api}/events/${event_id}`,{headers:{mode:"cors","x-access-token":token}}).pipe(map(results=> results));
  } 

  create_event(form:FormData): Observable<any>{
    const user = localStorage.getItem('currentUser');
    const token = this.get_token(user);
    return this.http.post(`${this.url_api}/events`,form,{headers:{mode:"cors","x-access-token":token}});
  }
  id:string;
  edit_event(form:FormData): Observable<any>{
    const user = localStorage.getItem('currentUser');
    this.id = localStorage.getItem('currentid');
    console.log('id for route',this.id);
    const token = this.get_token(user);
    return this.http.put(`${this.url_api}/events/${this.id}`,form,{headers:{mode:"cors","x-access-token":token}});
  }

  myEvents():Observable<any>{
    const user = localStorage.getItem('currentUser');
    console.log('userrrr',user)
    const token = this.get_token(user);
    return this.http.get(`${this.url_api}/myevents/${user}`,{headers:{mode:"cors","x-access-token":token}});
  } 

  delete_event(): Observable<any>{
    const user = localStorage.getItem('currentUser');
    this.id = localStorage.getItem('currentid');
    console.log('id for route',this.id);
    const token = this.get_token(user);
    return this.http.delete(`${this.url_api}/events/${this.id}`,{headers:{mode:"cors","x-access-token":token}});
  }

  
  visible_event(id): Observable<any>{
    const user = localStorage.getItem('currentUser');
    const token = this.get_token(user);
    return this.http.put(`${this.url_api}/events/visibility/${id}`,true,{headers:{mode:"cors","x-access-token":token}});
  }


  constructor(private http: HttpClient) { }
}
