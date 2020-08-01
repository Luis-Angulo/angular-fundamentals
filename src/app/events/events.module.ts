import { NgModule } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  imports: [CommonModule, EventsRoutingModule],
  declarations: [
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
  ],
  exports: [EventsListComponent],
})
export class EventsModule {}
