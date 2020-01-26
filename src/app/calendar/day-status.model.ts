
export class DayStatus {
  public largeSuites:string[] = [];
  public smallSuites:string[] = [];

  constructor(largeSuites: number = 3, largeSuitesBooked: number = 2, smallSuites: number = 9, smallSuitesBooked: number = 5) {
    let i = 0;
    while (i < largeSuites) {
      if (i < largeSuitesBooked) {
        this.largeSuites.push('Booked');
      } else {
        this.largeSuites.push('Available');
      }
      i++;
    }

    i = 0;
    while (i < smallSuites) {
      if (i < smallSuitesBooked) {
        this.smallSuites.push('Booked');
      } else {
        this.smallSuites.push('Available');
      }
      i++;
    }

  }


  toggleBookedStatus(suites:string, num:number){
    if(suites == 'large'){
      if(this.largeSuites[num] == 'Available'){
        this.largeSuites[num] = 'Booked';
      } else{
        this.largeSuites[num] = 'Available';
      }
    } else if(suites == 'small'){
      if (this.smallSuites[num] == 'Available') {
        this.smallSuites[num] = 'Booked';
      } else {
        this.smallSuites[num] = 'Available';
      }
    }

  }

}
