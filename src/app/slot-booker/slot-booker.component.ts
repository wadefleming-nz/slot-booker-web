import { Component } from '@angular/core';
import { SlotBookerService } from '../services/slot-booker.service';

@Component({
  selector: 'app-slot-booker',
  templateUrl: './slot-booker.component.html',
  styleUrls: ['./slot-booker.component.css'],
})
export class SlotBookerComponent {
  constructor(private slotBookerService: SlotBookerService) {}

  findSlotClicked() {
    this.slotBookerService.bookSlot();
  }
}
