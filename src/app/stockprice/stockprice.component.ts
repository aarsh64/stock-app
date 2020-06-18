import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { request } from 'http';
import {map, shareReplay,startWith, flatMap} from 'rxjs/operators';
import {FetchpricesService} from 'src/app/fetchprices.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ChildActivationEnd } from '@angular/router';
import { ConstantPool, ThrowStmt } from '@angular/compiler';
import {FormControl,FormBuilder} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})

export class StockpriceComponent implements OnInit {
 
stocks={
  name:String,
  price: Number
};
stockArray=[];
  value = new BehaviorSubject<any>(0) ;
  valu1 = new BehaviorSubject<any>(0);
  valu2 = new BehaviorSubject<any>(0);
  valu3 = new BehaviorSubject<any>(0);
   private val$:Observable<any>;
   private val1:Observable<any>;
   numArray=0;
   stockData:Array<object>=[];
   stockX=[];
   stockName=[];
   dataLet=Subscription;
   loadChart:boolean=false;
  constructor(public service:FetchpricesService) {  
  
    this.service.data.subscribe(data => {
      this.value=data;
      this.numArray=parseInt(data);
      console.log("Type of Data:",typeof(data));
     console.log("Checking Inside constructor:",this.value);
     if(data!=0){
      this.stockData.push({
        name:"Amazon",
        price:data
      })
      console.log("CHECK!!!",this.stockData);
 }
    })
    
    this.service.data1.subscribe(data => {
      this.valu1=data;
      this.numArray=parseInt(data);
      console.log("Type of Data:",typeof(data));
     console.log("Checking Inside constructor:",this.valu1);
     if(data!=0){
      this.stockData.push({
        name:"IBM",
        price:data
      })
      console.log("CHECK!!!",this.stockData);
 }
    })
    
    
    this.service.data2.subscribe(data => {
      this.valu2=data;
      console.log("Checking Inside constructor:",this.valu2);
      if(data!=0){
        this.stockData.push({
          name:"Microsoft",
          price:data
        })
        console.log("CHECK!!!",this.stockData);
   }
    })
    this.service.data3.subscribe(data => {
      this.valu3=data;
      console.log("Checking Inside constructor:",this.valu3);
      if(data!=0){
        this.stockData.push({
          name:"Apple",
          price:data
        })
        console.log("CHECK!!!",this.stockData);
   }
    })
     }
   

     ngOnInit() {
      this.loadChart=false;
      this.barGraph();
 }
 barGraph(){ 
   }
       public barChartOptions = {
      scaleShowVerticalLines: true,
      responsive: true
      
    };
    
    public barChartLabels = this.stockName;
    public barChartType = 'horizontalBar';
    public barChartLegend = true;
    public barChartData = [
     
      {data:this.stockX, label:"Stocks"}];
       
       keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Amazon'
     },
     {
       id: 2,
       name: 'Apple'
     },
     {
       id: 3,
       name: 'Microsoft'
     },
     {
       id: 4,
       name: 'IBM'
     }
  ];
  selectEvent(item) {
    this.loadChart=true;
    // do something with selected item
    if(item.name == "Amazon"){
      console.log("AMAZON SELECTED!!");
      this.stockX.push(this.value);
      this.stockName.push("Amazon");
      this.stockArray.push({
        name:"Amazon",
        price:this.value
      })
    }
    console.log(this.stockArray);
  
    if(item.name == "Apple"){
      this.stockX.push(this.valu3);
      this.stockName.push("Apple");
      console.log("Apple SELECTED!!");
      this.stockArray.push({
        name:"Apple",
        price:this.valu3
      })
    }
    if(item.name == "Microsoft"){
      this.stockX.push(this.valu2);
      this.stockName.push("Microsoft");
     
      console.log("Microsoft SELECTED!!");
      this.stockArray.push({
        name:"Microsoft",
        price:this.valu2
      })
    }
    if(item.name == "IBM"){
      this.stockX.push(this.valu1);
      this.stockName.push("IBM");
     
      console.log("IBM SELECTED!!");
      this.stockArray.push({
        name:"IBM",
        price:this.valu1
      })
    }
  
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
  public reset(): void {
    this.stockX.splice(0,this.stockX.length);
    this.stockArray.splice(0,this.stockArray.length);
  }
}
