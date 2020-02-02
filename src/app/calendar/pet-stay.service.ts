import { OnInit, Injectable } from '@angular/core';

import { PetStay } from './pet-stay.model';
import { DayStatus } from './day-status.model';
import { DayService } from './day.service';


@Injectable()
export class PetStayService implements OnInit {
    currentStays: PetStay[] = [
        new PetStay(1, 3),
        new PetStay(2, 3),
        new PetStay(4, 6)
    ]

    newStays: PetStay[] = [
        new PetStay(2, 5),
        new PetStay(4, 5)
    ]
    newStaySmall: PetStay = new PetStay(2, 5, 'small');
    newStayLarge: PetStay = new PetStay(2, 5, 'large');

    constructor(private dayService: DayService) {}

    ngOnInit(){
        // this.generateNewStays(this.newStay)
    }

    // 
    // add new stay and make sure no day is over booked
    generateNewStays(stayToAdd: PetStay = this.newStaySmall){
        let updatedStays = this.currentStays.slice();
        let daysBetween = this.dayService.getDaysBetween(stayToAdd.startDay, stayToAdd.endDay);
        let noProblems: boolean = true;

        for( let dayNumber of daysBetween){
            let dayStatus = this.dayService.getDayStatus(dayNumber);
            let daySuites: string[];
            // pick the suite size to look through
            if(stayToAdd.suiteSize = 'small'){
                console.log('Suite size is small');
                daySuites = dayStatus.smallSuites.slice();
            } else if (stayToAdd.suiteSize = 'large'){
                console.log('Suite size is large');
                daySuites = dayStatus.largeSuites.slice();
            } else {
                console.log('function is not sure what suite size the input has??');
            }
            console.log('about to look for spot in ');
            console.log(daySuites);
            let availableSpot: number = daySuites.indexOf('Available');
            // check for an available suite
            if ( availableSpot >= 0 ){
                //  console.log('found a spot!');
            } else{
                console.log('generateNewStays found no available spots of size: ' + stayToAdd.suiteSize + ', on day : ' + dayStatus.dayNumber);
                console.log(dayStatus);
                noProblems = false;
            }
        }
        // push new stay
        if(noProblems == true){
            updatedStays.push(stayToAdd);
            console.log('no problems found! ADDING TO UPDATED STAYS');
        }

        // console.log(updatedStays);
        // console.log('^that was being returned by generatestays^');
        return updatedStays;
    }


    onAddStay(stayToAdd:PetStay){
        console.log('-----Current stays: ');
        // console.log(this.generateNewStays(stayToAdd));
        console.log(this.currentStays);
        this.currentStays = this.generateNewStays();
        console.log('-----Current stays AFTER onAddStay: ');
        console.log(this.currentStays);
        return this.currentStays;
    }
    onAddStays(staysToAdd:PetStay[]){
        for(let stay of staysToAdd){
            this.onAddStay(stay);
        }
    }

}