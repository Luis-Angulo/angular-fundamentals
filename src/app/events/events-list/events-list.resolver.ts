import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
import { Event } from '../../types/event.type';

@Injectable({ providedIn: 'root' })
export class EventsListResolver implements Resolve<Event[]> {
  constructor(private eventService: EventService) {}

  resolve(): Observable<Event[]> {
    return this.eventService.getEvents();
  }
}
