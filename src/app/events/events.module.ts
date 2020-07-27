import { NgModule } from "@angular/core";
import {EventsListComponent} from "./events-list/events-list.component";
import { EventThumbnailComponent } from "./event-thumbnail/event-thumbnail.component";

@NgModule({
    imports: [],
    declarations: [EventsListComponent, EventThumbnailComponent],
    exports: [EventsListComponent],
})
export class EventsModule {}
