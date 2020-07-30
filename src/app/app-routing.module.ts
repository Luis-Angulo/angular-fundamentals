// Base angular modules (required)
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routed components
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

// Module config decorator
@NgModule({
  imports: [
    // AppRouting is the base router, so it uses forRoot
    // Maybe extract routes to events module if more modules come in
    RouterModule.forRoot([
      { path: 'events/:id', component: EventDetailComponent }, // arg placeholder for router
      { path: 'events', component: EventsListComponent },
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: '**', redirectTo: 'events', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
