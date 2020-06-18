import { Injectable } from '@angular/core';
import {Observable, Subscriber, BehaviorSubject, of} from 'rxjs';
import { HttpClient, HttpClientModule,HttpResponse } from '@angular/common/http';
import { Subject } from "rxjs";
import { nextTick } from 'process';
import {map, shareReplay} from 'rxjs/operators';
import axios from 'axios';
import {AxiosInstance} from 'axios';
import { ErrorHandler } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FetchpricesService {
 
  private apiClient : AxiosInstance;

  
 coreData= new BehaviorSubject<any>(0);
 coreData1 = new BehaviorSubject<any>(0);
 coreData2 = new BehaviorSubject<any>(0);
 coreData3 = new BehaviorSubject<any>(0);
 coreData4 = new BehaviorSubject<any>(0);
 
  data = this.coreData.asObservable();
  data1 = this.coreData1.asObservable();
  data2 = this.coreData2.asObservable();
  data3 = this.coreData3.asObservable();
 
  constructor(public http:HttpClient) { 
    
   
    

    //Set up for API
    console.log("service called");
    const util = require('util')
    const finnhub = require('finnhub');
    const defaultClient = finnhub.ApiClient.instance;
    const api_key = defaultClient.authentications['api_key'];
    api_key.apiKey = "brjvrqvrh5r9g3otgpq0" // get from https://finnhub.io/
    const finnHub = new finnhub.DefaultApi();
    //Set up done
   
    finnHub.quote("AMZN",(error,data,response)=>{
       console.log("called");
      //Setting up the value in BehaviorSubject....
      
      this.data=data.c;
      console.log("Amazon:",data.c);
      this.coreData.next(data.c);
     
      
})
    //API call....
    
  finnHub.quote("IBM",(error,data,response)=>{
      //Setting up the value in BehaviorSubject....
      this.data1=data.c;
      console.log("IBM:",data.c);
      this.coreData1.next(data.c);
     return data;
      
})
finnHub.quote("IBM",(error,data,response)=>{
  //Setting up the value in BehaviorSubject....
  this.data1=data.c;
  console.log("IBM:",data.c);
  this.coreData1.next(data.c);
 return data;
  
});
this
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
this.apiClient = axios.create({
  timeout:5000
})
}


getData(){
  console.log("DATA",this.data3);
  return of(this.data3);
  
  this.http.get
}

}

