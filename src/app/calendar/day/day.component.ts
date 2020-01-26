import { Component, OnInit, Input } from '@angular/core';
import { DayStatus } from '../day-status.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day:DayStatus;


  constructor() { 
  }

  ngOnInit() {
    console.log('on Init' + this.day.largeSuites);
  }

} 
