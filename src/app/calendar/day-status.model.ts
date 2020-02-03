
export class DayStatus {
  // public dayNumber: number;

  public largeSuites:string[] = [];
  public largeSuitesBooked:number = 0;
  public largeSuitesFull:boolean = false;

  public smallSuites:string[] = [];
  public smallSuitesBooked:number = 0;
  public smallSuitesFull:boolean  =false


  constructor(
    public dayNumber: number, 
    largeSuitesBooked: number = 0, 
    smallSuitesBooked: number = 0, 
    largeSuites: number = 3, 
    smallSuites: number = 9
    ) {

    this.dayNumber = dayNumber;
    let i = 0;
    while (i < largeSuites) {
      if (i < largeSuitesBooked) {
        this.largeSuites.push('Booked');
        this.largeSuitesBooked ++;
      } else {
        this.largeSuites.push('Available');
      }
      i++;
    }

    i = 0;
    while (i < smallSuites) {
      if (i < smallSuitesBooked) {
        this.smallSuites.push('Booked');
        this.smallSuitesBooked ++;
      } else {
        this.smallSuites.push('Available');
      }
      i++;
    }
    this.updateSuitesFullStatus();
    
  }

  isSuiteFull(booked: number, max: number) {
    if (booked < max) {
      // console.log(booked + ' < ' + max);
      return false;
    } else {
      // console.log(booked + ' > ' + max);
      return true;
    }
  }
  updateSuitesFullStatus() {
    this.largeSuitesFull = this.isSuiteFull(this.largeSuitesBooked, this.largeSuites.length)

    this.smallSuitesFull = this.isSuiteFull(this.smallSuitesBooked, this.smallSuites.length)
  }


  toggleBookedStatus(suites:string, num:number){
    if(suites == 'large'){
      if(this.largeSuites[num] == 'Available'){
        this.largeSuites[num] = 'Booked';
        this.largeSuitesBooked ++;
      } else{
        this.largeSuites[num] = 'Available';
        this.largeSuitesBooked --;
      }
    } else if(suites == 'small'){
      if (this.smallSuites[num] == 'Available') {
        this.smallSuites[num] = 'Booked';
        this.smallSuitesBooked ++;
      } else {
        this.smallSuites[num] = 'Available';
        this.smallSuitesBooked --;
      }
    }

  }

}
