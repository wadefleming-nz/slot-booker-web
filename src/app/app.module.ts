import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlotBookerComponent } from './slot-booker/slot-booker.component';

@NgModule({
  declarations: [
    AppComponent,
    SlotBookerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
