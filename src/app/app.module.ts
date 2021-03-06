import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ADD this
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2PhotoswipeModule // ADD this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
