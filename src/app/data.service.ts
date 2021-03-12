import {Injectable} from '@angular/core';
import{ createTestCustomers } from './test-data';
import{Customer} from './model';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/delay';
import { catchError, delay } from 'rxjs/internal/operators';
import { tap, map } from 'rxjs/operators';
//import { tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { error } from 'node:console';
//import 'rxjs/add/operator/catch';




@Injectable()
export class DataService{

  private customersUrl = 'api/customers';
  private statesUrl='api/states';
constructor(private loggerService: LoggerService,
  private http: HttpClient
  ){}

  getCustomersPromise() : Promise<Customer[]>{
    this.loggerService.log('Getting customers via Http....');
    return this.http.get(this.customersUrl).toPromise().then(response=>{
      const cust = response as Customer[];
      this.loggerService.log(`Got ${cust.length} customers`);
      return cust;
    },
    error =>{
      this.loggerService.log(`Error occured ${error}`);
      return Promise.reject('Somethnig bad hapened check console');
    }
    );


  }
/*
getCustomers(): Observable<Customer[]>{
  this.loggerService.log('Getting customers as Observable via Http....');
  return this.http.get(this.customersUrl).pipe(map(
    (response: Customer[]) => response as Customer[])
  .tap((custs)=>{
    this.loggerService.log(`Got ${custs.length} customers`);
  }));
}
*/
/*
  getStates(): Observable<string[]>{
    this.loggerService.log('Getting customers as Observable via Http....');
    return this.http.get(this.statesUrl).pipe(map
      (response => response as string[])).pipe(tap((states)=>{
      this.loggerService.log(`Got ${states.length} customers`);
    })).pipe(catchError =>{
      this.loggerService.log(`Error occured: ${Error}`);
      return Observable.throw('Error string array');
    });
  }
*/
  getStates(): Observable<string[]> {
    this.loggerService.log('Getting states as an Observable via Http ...');

    return this.http.get(this.statesUrl)
      .pipe(map(response => {
        return response as string[];
      }))  // <-- extract data
      .pipe(tap(states => this.loggerService.log(`Got ${states.length} states`)))
      ;
  }
}

