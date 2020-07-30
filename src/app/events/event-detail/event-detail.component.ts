import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.type';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;

  constructor(
    private eventService: EventService,
    
    ) { }

  ngOnInit(): void {
    const eventId = 1;
    this.eventService.getEvent(eventId).subscribe(
      event => this.event = event,
      err => alert(`event with id: ${eventId} not found`)
    );
  }

}
