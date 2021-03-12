import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';

import {DataService} from './data.service';
import {LoggerService	} from './logger.service';
import { InMemoryDataService } from './in-memory-data.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule

  ],
  providers: [
    DataService,
    LoggerService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
