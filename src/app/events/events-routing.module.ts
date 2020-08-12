// Base angular modules (required)
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routed components
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventCreateGuard } from './event-create/event-create.guard';
import { EventsListResolver } from './events-list/events-list.resolver';
import { SessionCreateComponent } from './session-create/session-create.component';
import { EventDetailResolver } from './event-detail/event-detail.resolver';

// Module config decorator
@NgModule({
  imports: [
    RouterModule.forChild([
      // must go before any general/wildcard routes
      { path: 'events/sessions/new', component: SessionCreateComponent },
      {
        path: 'events/new',
        component: EventCreateComponent,
        canDeactivate: [EventCreateGuard],
      },
      {
        path: 'events/:id',
        component: EventDetailComponent,
        resolve: { event: EventDetailResolver },
      }, // arg placeholder for router
      {
        path: 'events',
        component: EventsListComponent,
        resolve: { events: EventsListResolver },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
