import { Component, OnInit, Output } from '@angular/core';
import { PetStay } from '../pet-stay.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() stay:PetStay;

  constructor() { }

  ngOnInit() {
  }

  onAddStay(){
    // this.stay
  }

}
