import { Component, OnInit } from '@angular/core';
import { Event } from '../../types/event.type';
import { EventService } from '../event.service';
import { ToastrService } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';

// Like HTML, you can define styles in a style property without the need for an external
// stylesheet OR you can define a stylesheet and reference it here using relative path
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: Event[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleEventClicked(message: string): void {
    // Check toastrService for an example on how to integrate external non-typescript libraries
    this.toastrService.spawn(message);
  }
}
