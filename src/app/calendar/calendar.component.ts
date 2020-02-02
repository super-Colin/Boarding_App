import { Component, OnInit } from '@angular/core';
import { DayStatus } from './day-status.model';
import { DayService } from './day.service';
import { PetStay } from './pet-stay.model';
import { PetStayService } from './pet-stay.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [PetStayService, DayService]
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

  // whereIsIn2dArray(arrayToCheck:any[], innerArrayPosition:number, valueToFind:any){

  //   for(let index of arrayToCheck){
  //     let valueToCheck = index[innerArrayPosition];
      
  //     if(valueToCheck == valueToFind){
  //       console.log('value found at : ' + index[0]);
  //       return index;
  //     }
  //   }
  //   return false
  // }
}
