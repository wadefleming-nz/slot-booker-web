import { Component, OnInit } from '@angular/core';

@Component({
  selector: ' ',
  templateUrl: './slot-booker.component.html',
  styleUrls: ['./slot-booker.component.css'],
})
export class SlotBookerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  findSlotClicked() {
    console.log('clicked');
  }
}
