import { Component, OnInit } from '@angular/core';
import { DayStatus } from './day-status.model';
import { PetStay } from './pet-stay.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  stay;

    // startDay:number;
    // endDay:number;
    // ownerName:string;
    // ownerPhone:string;
    // animalType: string;
    // animalName: string;
    // suiteSize:string;
    // stayLength:number;
    // notes:string;
    // specialNotes:boolean;

  hardCodedStays:PetStay[] = [
    new PetStay(),
    new PetStay(),
    new PetStay()
  ]


  generateStays(listOfStays:PetStay[]){

    let requiredDays =[];
    // for(stay of listOfStays){
    //   stay.length;
    // }



    return requiredDays;
  }


  // daysToRender = this.generateStays(this.hardCodedStays);
  daysToRender = [
    new DayStatus(1),
    new DayStatus(2),
    new DayStatus(3),
    new DayStatus(4),
    new DayStatus(5),
    new DayStatus(6),
    new DayStatus(7,4,5,2,4),
    new DayStatus(8)
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
