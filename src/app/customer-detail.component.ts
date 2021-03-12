import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'node:stream';
import {Address, Customer} from './model';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html'
})


export class CustomerDetailComponent {
  showInfo= true;

  @Input() customer!: Customer;
  @Input() address!: Address;
  @Output() shift = new EventEmitter<number>();

right(){
  this.shift.emit(1);
}
left(){
  this.shift.emit(-1);
}





}
