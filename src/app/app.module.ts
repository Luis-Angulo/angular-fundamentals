import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
import { JQ_TOKEN } from './shared/jquery.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

// When an external service is manually registered, you must use the old providers syntax
// to register the service manually
const toastr: Toastr = window['toastr']; // toastr lib, in global from node_modules
const jquery = window['$']; // jquery, already in bootstrap

@NgModule({
  declarations: [AppComponent, NavComponent, ErrorComponent],
  imports: [
    BrowserModule,
    EventsModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: TOASTR_TOKEN, // The lookup token for the injector
      useValue: toastr, // The value to bind to the token
    },
    {
      provide: JQ_TOKEN,
      useValue: jquery,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
