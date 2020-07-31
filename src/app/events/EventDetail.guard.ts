import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventService } from './event.service';
import { Event } from './event.type';

@Injectable({
  providedIn: 'root',
})
export class EventDetailGuard implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // wrapper converts the event into a boolean if the eventService call returns falsy
    const wrapper = map((requestedEvent: Event) => {
      const eventFound = !!requestedEvent;
      if (!eventFound) {
        this.router.navigate(['/error']);
      }
      return eventFound;
    });

    return wrapper(this.eventService.getEvent(+next.params.id));
  }
}
