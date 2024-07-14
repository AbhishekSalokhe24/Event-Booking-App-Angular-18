import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Events, IapiResp } from '../../model/model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule,ButtonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  eventService = inject(EventService);
  eventList: Events[] =  []; // to hold all events from an API (interface)

  ngOnInit(): void {
    //debugger
    this.getEvents();
  }

  getEvents(){
    //debugger
    this.eventService.getAllEvents().subscribe((res: IapiResp)=>{
      //debugger
     this.eventList = res.data;
     console.log(this.eventList);
    })
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = '/assets/Event Image.jpg';
  }

}
