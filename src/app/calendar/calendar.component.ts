import { Component, OnInit } from '@angular/core';
import { DayStatus } from './day-status.model';
import { PetStay } from './pet-stay.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

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

  currentDaysStatus: DayStatus[] = [
    new DayStatus(1),
    new DayStatus(2),
    new DayStatus(3),
    new DayStatus(4),
    new DayStatus(5),
    new DayStatus(6),
    new DayStatus(7),
    new DayStatus(8)
  ]

  currentStays: PetStay[] = [
    new PetStay(1,3),
    new PetStay(2,3),
    new PetStay(4,6)
  ]

  newStays: PetStay[] = [
    new PetStay(2, 5),
    new PetStay(4, 5),
    new PetStay(1, 6)
  ]
  
  onAddedStay(input){
    console.log('onADDED!!!! Fired ,input : ' + input);
  }





// -------------------------------------------------

  whereIsIn2dArray(arrayToCheck:any[], innerArrayPosition:number, valueToFind:any){
    // console.log('index starting');
    // let index:number = 0;
    // console.log('index finished');
    for(let index of arrayToCheck){
      // console.log('loop started');
      let valueToCheck = index[innerArrayPosition];
      // console.log('value to find is : ' + valueToFind);
      // console.log('value to check is : ' + valueToCheck);
      if(valueToCheck == valueToFind){
        console.log('value found at : ' + index[0]);
        return index;
      }
    }
    return false
  }

  // countBookedStrings(arrayToCheck: any[]){
  //   let amountBooked:number = 0;
  //   for(let i of arrayToCheck){
  //     if(i == 'booked'){
  //       amountBooked ++;
  //     }
  //   }
  //   return amountBooked;
  // }

  generateNewStays(staysToAdd:PetStay[]){
    let newDaysStatus =[];
    this.currentDaysStatus;
    this.currentStays;
    let daysToAdjust = [];

    // Loop through each new PetStay in the input array
    for(let stay of staysToAdd){
      console.log(stay);

      // Loop through each day in the newly added stay in the for of loop
      let i = stay.startDay;
      while(i < stay.endDay){
        // add the day number and suiteSize needed to an array
        daysToAdjust.push([i,stay.suiteSize]);
        i++;
      }



    }
    console.log( 'days to adjust : ');
    console.log(daysToAdjust);

    
    // Turn the daysToAdjust array into an arrays of DayStatus 's
    let newDays = [];
    for(let eachStay of daysToAdjust){
      let dayNum = eachStay[0];
      // let largeNum: number= this.countBookedStrings(eachStay);
      // let smallNum: number = this.countBookedStrings(eachStay);

      let whereIsValue = this.whereIsIn2dArray(newDays, 0, dayNum);

      console.log('where is val: ' + whereIsValue);
      // If we found the value
      if (whereIsValue != false){
        console.log('value' + dayNum + ' was at:' + whereIsValue);
      }else{
        if(eachStay[1] == 'large'){

          // newDays.push([dayNum, largeNum+1, newDays[2]]);
        } else if (eachStay[1] == 'small'){
          newDays.push([dayNum, newDays[1], newDays[2] + 1]);
        } else{
          console.log('what happened');
        }
      }
    }

    console.log('news finally ==: ');
    console.log(newDays);



    newDaysStatus = [
      new DayStatus(1,0,1),
      new DayStatus(2,0,2),
      new DayStatus(3,0,2),
      new DayStatus(4,0,1),
      new DayStatus(5,0,1),
      new DayStatus(6),
      new DayStatus(7),
      new DayStatus(8)
    ]

    return newDaysStatus;
  }


// ---------------------------------------





  // daysToRender = this.generateStays(this.hardCodedStays);
  // daysToRender = this.generateStays(this.newStays);
  daysToRender = [
    new DayStatus(1,1,2),
    new DayStatus(2,2,1),
    new DayStatus(3,1,2),
    new DayStatus(4,2,2),
    new DayStatus(5,2,2),
    new DayStatus(6,3,3),
    new DayStatus(7,3,1),
    new DayStatus(8,1,3)
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
