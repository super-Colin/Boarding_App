import { Component, OnInit } from '@angular/core';
import { DayStatus } from './day-status.model';
import { DayService } from './day.service';
import { PetStay } from './pet-stay.model';
import { PetStayService } from './pet-stay.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  daysToRender = [];

  constructor(private petStayService: PetStayService, private dayService: DayService) { }

  ngOnInit() {
    this.daysToRender = this.dayService.currentDaysStatus;
  }
  
  onAddedStay(input){
    console.log('onADDED!!!! Fired ,input : ' + input);
  }


  addStay(stay:PetStay){
    this.petStayService.onAddStay(stay);
  }

}
