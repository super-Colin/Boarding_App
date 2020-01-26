import { Component, OnInit } from '@angular/core';
import { DayStatus } from './day-status.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  daysToRender = [
    new DayStatus(),
    new DayStatus(),
    new DayStatus(),
    new DayStatus(),
    new DayStatus(),
    new DayStatus(),
    new DayStatus(4,5,2,4),
    new DayStatus()
  ]

  constructor() { }

  ngOnInit() {
  }

}
