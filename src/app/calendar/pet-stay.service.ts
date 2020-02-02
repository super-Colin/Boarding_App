import { PetStay } from './pet-stay.model';
import { DayStatus } from './day-status.model';
import { DayService } from './day.service';

export class PetStayService {
    currentStays: PetStay[] = [
        new PetStay(1, 3),
        new PetStay(2, 3),
        new PetStay(4, 6)
    ]

    newStays: PetStay[] = [
        new PetStay(2, 5),
        new PetStay(4, 5)
    ]

    constructor(private dayService: DayService) {}


    generateNewStays(staysToAdd: PetStay[]){

    }

    GenerateNewStays(staysToAdd: PetStay[]) {
        let newDaysStatus = [];
        this.currentDaysStatus;
        this.currentStays;
        let daysToAdjust = [];

        // Loop through each new PetStay in the input array
        for (let stay of staysToAdd) {
            console.log(stay);

            // Loop through each day in the newly added stay in the for of loop
            let i = stay.startDay;
            while (i < stay.endDay) {
                // add the day number and suiteSize needed to an array
                daysToAdjust.push([i, stay.suiteSize]);
                i++;
            }



        }
        console.log('days to adjust : ');
        console.log(daysToAdjust);


        // Turn the daysToAdjust array into an arrays of DayStatus 's
        let newDays = [];
        for (let eachStay of daysToAdjust) {
            let dayNum = eachStay[0];

            let whereIsValue = this.whereIsIn2dArray(newDays, 0, dayNum);

            console.log('where is val: ' + whereIsValue);
            // If we found the value
            if (whereIsValue != false) {
                console.log('value' + dayNum + ' was at:' + whereIsValue);
            } else {
                if (eachStay[1] == 'large') {

                    // newDays.push([dayNum, largeNum+1, newDays[2]]);
                } else if (eachStay[1] == 'small') {
                    newDays.push([dayNum, newDays[1], newDays[2] + 1]);
                } else {
                    console.log('what happened');
                }
            }
        }

        console.log('news finally ==: ');
        console.log(newDays);



        newDaysStatus = [
            new DayStatus(1, 0, 1),
            new DayStatus(2, 0, 2),
            new DayStatus(3, 0, 2),
            new DayStatus(4, 0, 1),
            new DayStatus(5, 0, 1),
            new DayStatus(6),
            new DayStatus(7),
            new DayStatus(8)
        ]

        return newDaysStatus;
    }

}