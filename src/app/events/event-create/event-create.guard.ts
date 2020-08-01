import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventCreateComponent } from './event-create.component';

@Injectable({
  providedIn: 'root',
})
export class EventCreateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: EventCreateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return !component.isDirty;
  }
}
