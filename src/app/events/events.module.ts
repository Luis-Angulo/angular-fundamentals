import { NgModule } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EventsListComponent, EventThumbnailComponent, EventDetailComponent],
  exports: [EventsListComponent],
})
export class EventsModule {}
