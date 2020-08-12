import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
import { Event } from '../../types/event.type';

@Injectable({ providedIn: 'root' })
export class EventDetailResolver implements Resolve<Event> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Event> {
    return this.eventService.getEvent(route.params.id);
  }
}
