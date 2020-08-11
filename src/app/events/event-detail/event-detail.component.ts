import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../../types/event.type';
import { ActivatedRoute, Params } from '@angular/router';
import { Session } from 'src/app/types/session.type';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: Event;
  addMode: boolean;
  filter = 'all';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // route.data contains all resolved data
    this.route.data.forEach((data) => {
      // since the resolver already subbed, we don't need to call subscribe here
      this.event = data.event;
      this.addMode = false;
      this.filter = 'all';
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  cancelSession(): void {
    this.addMode = false;
  }

  saveNewSession(session: Session): void {
    // Get the id with the highest value to calculate next id
    const oldMaxId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    );
    session.id = oldMaxId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
