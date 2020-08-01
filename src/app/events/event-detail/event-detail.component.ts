import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const eventId: number = +this.route.snapshot.params.id;  // cast to number
    this.eventService.getEvent(eventId).subscribe(
      event => this.event = event,
      err => alert(`event with id: ${eventId} not found`)
    );
  }

}
