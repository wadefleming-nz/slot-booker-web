import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SlotBookerService {
  constructor() {}

  bookSlot() {
    console.log('clicked');
  }
}
