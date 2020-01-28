import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { PetStay } from '../pet-stay.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() newStay = new EventEmitter<PetStay>();
  @ViewChild('ownerName', { static: false }) ownerName:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // onAddStay(inputTxt:ElementRef){
  onAddStay(input:HTMLInputElement){
    console.log('onAddStay Fired ,input text: ' + input.value);
    this.newStay.emit(new PetStay(1,3));
  }

}
