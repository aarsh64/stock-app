import { Injectable, ɵConsole } from '@angular/core';
import { Observable, Subscriber, BehaviorSubject, of, timer } from 'rxjs';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Subject } from "rxjs";
import { nextTick } from 'process';
import { map, shareReplay } from 'rxjs/operators';
import axios from 'axios';
import { AxiosInstance } from 'axios';
import { ErrorHandler } from "@angular/core";
import { getLocaleDateFormat } from '@angular/common';



const util = require('util')
const finnhub = require('finnhub');
const defaultClient = finnhub.ApiClient.instance;
const api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "brjvrqvrh5r9g3otgpq0" // get from https://finnhub.io/
const finnHub = new finnhub.DefaultApi();

@Injectable({
  providedIn: 'root'
})
export class FetchpricesService {

  private apiClient: AxiosInstance;


  coreData = new BehaviorSubject<any>(0);
  coreData1 = new BehaviorSubject<any>(0);
  coreData2 = new BehaviorSubject<any>(0);
  coreData3 = new BehaviorSubject<any>(0);
  coreData4 = new BehaviorSubject<any>(0);

  data = this.coreData.asObservable();
  data1 = this.coreData1.asObservable();
  data2 = this.coreData2.asObservable();
  data3 = this.coreData3.asObservable();

  constructor(public http: HttpClient) {


//......It will call all the APIs every 10 seconds.....
    timer(10000, 10000).subscribe(() => {

      console.log("------------10 Second call-------------");
      this.getAmazon();
      this.getApple();
      this.getIBM();
      this.getMicrosoft();
      
    })
    
   
    finnHub.quote("AMZN", (error, data, response) => {
      console.log("called");
      //Setting up the value in BehaviorSubject....
      this.data = data.c;
      // console.log("Amazon:",data.c);
      this.coreData.next(data.c);


    })
    //API call...
    finnHub.quote("IBM", (error, data, response) => {
      //Setting up the value in BehaviorSubject....
      this.data1 = data.c;
      // console.log("IBM:",data.c);
      this.coreData1.next(data.c);
      return data;

    });

    finnHub.quote("MSFT", (error, data, response) => {
      //Setting up the value in BehaviorSubject....
      console.log("MSFT", data.c)
      this.data2 = data.c;
      this.coreData2.next(data.c);
      return data;

    })
    finnHub.quote("AAPL", (error, data, response) => {
      //Setting up the value in BehaviorSubject....
      // console.log("Apple",data.c)
      this.data3 = data.c;
      this.coreData3.next(data.c);
      return data;

    })
    this.apiClient = axios.create({
      timeout: 5000
    })
  }

  
  getAmazon() {
    finnHub.quote("AMZN", (error, data, response) => {
      // console.log("called");
      //Setting up the value in BehaviorSubject....
      //  console.log(data.c);
      this.coreData.next(data.c);
      this.data = data.c;
      return data.c;
      //  console.log("Amazon:",data.c);

    })
  }

  getIBM() {
    finnHub.quote("IBM", (error, data, response) => {
      //Setting up the value in BehaviorSubject....
      this.data1 = data.c;
      // console.log("IBM:",data.c);
      this.coreData1.next(data.c);
      return data;
    })
  }

  getMicrosoft() {
    finnHub.quote("MSFT", (error, data, response) => {
      //Setting up the value in BehaviorSubject....
      // console.log("MSFT",data.c)
      this.data2 = data.c;
      this.coreData2.next(data.c);
      return data;

    })
  }
  getApple() {
    finnHub.quote("AAPL", (error, data, response) => {
      //Setting up the value in BehaviorSubject....
      this.data3 = data.c;
      // console.log("IBM:",data.c);
      this.coreData3.next(data.c);
      return data;
    })
  }

}

