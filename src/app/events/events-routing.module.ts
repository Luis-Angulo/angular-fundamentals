// Base angular modules (required)
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routed components
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';

// Module config decorator
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'events/new', component: EventCreateComponent }, // must go before any general/wildcard routes
      { path: 'events/:id', component: EventDetailComponent }, // arg placeholder for router
      { path: 'events', component: EventsListComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
