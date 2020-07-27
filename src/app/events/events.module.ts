import { NgModule } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [EventsListComponent, EventThumbnailComponent],
  exports: [EventsListComponent],
})
export class EventsModule {}
