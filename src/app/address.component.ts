import { Component, Input, OnInit } from '@angular/core';
import { Address } from './model';
import {DataService} from './data.service';

@Component({
  selector: 'my-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit{

  @Input() address!: Address;

  regions = ['East', 'South', 'North', 'West', 'Midwest'];
 states!: string[];
  constructor(private dataService: DataService){

  }
  ngOnInit(){
    this.dataService.getStates().subscribe(states => {
      this.states = states;

    });
  }
}

