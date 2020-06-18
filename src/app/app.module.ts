import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { StockpriceComponent } from './stockprice/stockprice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    StockpriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    AutocompleteLibModule,
    AngularFireModule.initializeApp(environment.firebase),
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
