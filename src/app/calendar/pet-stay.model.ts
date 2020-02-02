
export class PetStay{
    // startDay:number;
    // endDay:number;
    // ownerName:string;
    // ownerPhone:string;
    // petType: string;
    // petName: string;
    // suiteSize:string;
    // stayLength:number;
    // notes:string;
    // specialNotes:boolean;


    constructor(
        public startDay: number=1, 
        public endDay: number=3, 
        public ownerName: string = 'test owner', 
        public ownerPhone: string = 'test phone', 
        public petType: string = 'test dog', 
        public petName: string = 'test pet name', 
        public suiteSize: string = 'small', 
        public stayLength: number = 2, 
        public notes: string = 'test notes', 
        public specialNotes:boolean=false
        ){ }

    addStay(){
        
    }


}
