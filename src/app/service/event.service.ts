import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events, IapiResp } from '../model/model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiurl: string  = "https://freeapi.miniprojectideas.com/api/EventBooking/";

  constructor(private http: HttpClient) { }

  getAllEvents(){
    //debugger
    return this.http.get<IapiResp>(`${this.apiurl}GetAllEvents`);
  }

  getEvent(eventId: number){
    return this.http.get<IapiResp>(`${this.apiurl}GetEventById?id=${eventId}`).pipe(
     map((item: any)=>{
      return item.data
     })
    );
  }
}
