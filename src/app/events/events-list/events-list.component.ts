import { Component, OnInit } from '@angular/core';
import { Event } from '../event.type';
import { EventService } from '../event.service';

// Like HTML, you can define styles in a style property without the need for an external
// stylesheet OR you can define a stylesheet and reference it here using relative path
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    console.log('ngOnInit called!');
    this.eventService.getEvents().subscribe(
      (events) => (this.events = events),
      (error) => alert(`Error: ${error.message}, please reload the page`)
    );
  }

  handleEventClicked(event): void {
    console.log(event);
  }
}
