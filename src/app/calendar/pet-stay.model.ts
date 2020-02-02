
export class PetStay{

    constructor(
        public startDay: number=1, 
        public endDay: number=3, 
        public suiteSize: string = 'small', 
        public ownerName: string = 'test owner', 
        public ownerPhone: string = 'test phone', 
        public petType: string = 'test dog', 
        public petName: string = 'test pet name', 
        public stayLength: number = 2, 
        public notes: string = 'test notes', 
        public specialNotes:boolean=false
        ){
    }

}
