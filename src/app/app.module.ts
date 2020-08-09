import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';

// When an external service is manually registered, you must use the old providers syntax
// to register the service manually
const toastr: Toastr = window['toastr']; // toastr lib, in global from node_modules

@NgModule({
  declarations: [AppComponent, NavComponent, ErrorComponent],
  imports: [BrowserModule, EventsModule, AppRoutingModule],
  providers: [{
    provide: TOASTR_TOKEN,  // The lookup token for the injector
    useValue: toastr  // The value to bind to the token
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
