import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ErrorComponent],
  imports: [BrowserModule, EventsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
