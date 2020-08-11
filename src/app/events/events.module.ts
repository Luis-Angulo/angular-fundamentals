import { NgModule } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionCreateComponent } from './session-create/session-create.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SharedModule } from '../shared/shared.module';
import { VotesDisplayComponent } from './votes-display/votes-display.component';
import { ValidateLocationDirective } from './event-create/validate-location.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    SessionCreateComponent,
    SessionsListComponent,
    VotesDisplayComponent,
    ValidateLocationDirective,
  ],
  exports: [EventsListComponent],
})
export class EventsModule {}
