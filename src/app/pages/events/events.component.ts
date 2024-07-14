import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Observable } from 'rxjs';
import { Events } from '../../model/model';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CardModule,ImageModule,ButtonModule,FormsModule,RatingModule,AsyncPipe,CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  value!: number;

  eventService = inject(EventService);
  eventData$ : Observable<Events> = new Observable<Events>;

  activatedRoute = inject(ActivatedRoute);
  constructor(){
    this.activatedRoute.params.subscribe((res:any)=>{
      //debugger;
      this.eventData$ =  this.eventService.getEvent(res.id);
      console.log(this.eventData$)
    })
  }


  
} 
