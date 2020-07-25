import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsModule } from "./events/events.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EventsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
