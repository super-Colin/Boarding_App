
import {DayStatus} from './day-status.model';
// import {PetStay} from './pet-stay.model'

export class DayService{

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

    getDayStatus(dayNumber:number){
        // console.log('getDayStatus returning : ' + this.currentDaysStatus[dayNumber]);
        return this.currentDaysStatus[dayNumber -1];
    }

    getDaysBetween(startDay:number, endDay:number){
        let returnArray: number[]= [];
        let i = startDay
        for(i; i <= endDay; i++){
            returnArray.push(i);
            // console.log('days between:');
            // console.log(returnArray);
        }
        return returnArray;
    }

    
}