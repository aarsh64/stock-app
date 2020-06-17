import { Injectable } from '@angular/core';
import {Observable, Subscriber, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpClientModule,HttpResponse } from '@angular/common/http';
import { Subject } from "rxjs";
import { nextTick } from 'process';
import {map, shareReplay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchpricesService {
 
 coreData= new BehaviorSubject<any>(0);
 coreData1 = new BehaviorSubject<any>(0);
 coreData2 = new BehaviorSubject<any>(0);
 coreData3 = new BehaviorSubject<any>(0);
 coreData4 = new BehaviorSubject<any>(0);
 
  data = this.coreData.asObservable();
  data1 = this.coreData1.asObservable();
  data2 = this.coreData2.asObservable();
  data3 = this.coreData3.asObservable();
 
  constructor() { 
    //Set up for API
    
    const util = require('util')
    const finnhub = require('finnhub');
    const defaultClient = finnhub.ApiClient.instance;
    const api_key = defaultClient.authentications['api_key'];
    api_key.apiKey = "brjvrqvrh5r9g3otgpq0" // get from https://finnhub.io/
    const finnHub = new finnhub.DefaultApi();
    //Set up done
   
    //API call....
    finnHub.quote("AMZN",(error,data,response)=>{
       
          //Setting up the value in BehaviorSubject....
          this.data=data.c;
          console.log("Amazon:",data.c);
          this.coreData.next(data.c);
         return data;
          
  })
  finnHub.quote("IBM",(error,data,response)=>{
      //Setting up the value in BehaviorSubject....
      this.data1=data.c;
      console.log("IBM:",data.c);
      this.coreData1.next(data.c);
     return data;
      
})
finnHub.quote("MSFT",(error,data,response)=>{
    //Setting up the value in BehaviorSubject....
    console.log("MSFT",data.c)
    this.data2=data.c;
    this.coreData2.next(data.c);
   return data;
    
})
finnHub.quote("AAPL",(error,data,response)=>{
      //Setting up the value in BehaviorSubject....
    console.log("Apple",data.c)
    this.data3=data.c;
    this.coreData3.next(data.c);
   return data;
    
})
}
  
}

