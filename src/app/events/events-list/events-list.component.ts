import { Component, OnInit } from '@angular/core';
import { Event } from '../../types/event.type';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';

// Like HTML, you can define styles in a style property without the need for an external
// stylesheet OR you can define a stylesheet and reference it here using relative path
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: Event[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }
}
