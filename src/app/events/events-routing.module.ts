// Base angular modules (required)
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routed components
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailGuard } from './event-detail/event-detail.guard';
import { EventCreateGuard } from './event-create/event-create.guard';
import { EventsListResolver } from './events-list/events-list.resolver';

// Module config decorator
@NgModule({
  imports: [
    RouterModule.forChild([
       // must go before any general/wildcard routes
      { path: 'events/new', component: EventCreateComponent, canDeactivate: [EventCreateGuard] },
      { path: 'events/:id', component: EventDetailComponent, canActivate: [EventDetailGuard] }, // arg placeholder for router
      { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
    ]),
  ],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
