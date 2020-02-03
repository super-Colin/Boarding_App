import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './calendar/day/day.component';
import { CockpitComponent } from './calendar/cockpit/cockpit.component';
import { PetStayService } from './calendar/pet-stay.service';
import { DayService } from './calendar/day.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PetStayService, DayService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
