import {DayStatus} from './day-status.model';
import {PetStay} from './pet-stay.model'

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
    newDaysStatus: DayStatus[];

    
}