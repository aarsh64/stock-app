import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { request } from 'http';
import {map, shareReplay} from 'rxjs/operators';
import {FetchpricesService} from 'src/app/fetchprices.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChildActivationEnd } from '@angular/router';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})

export class StockpriceComponent implements OnInit {
  value = 0;
  valu1 = new BehaviorSubject<any>(0);
  valu2 = new BehaviorSubject<any>(0);
  valu3 = new BehaviorSubject<any>(0);
   private val$:Observable<any>;
   private val1:Observable<any>;
   numArray=[];
   
  constructor(private service:FetchpricesService) {  
  this.service.data.subscribe(data => {
    this.value=data;
   console.log("Checking Inside constructor:",this.value);
  })
  this.service.data1.subscribe(data1 => {
    this.valu1=data1;
    console.log("Checking Inside constructor:",this.valu1);
  })
  this.service.data2.subscribe(data2 => {
    this.valu2=data2;
    console.log("Checking Inside constructor:",this.valu2);
  })
  this.service.data3.subscribe(data3 => {
    this.valu3=data3;
    console.log("Checking Inside constructor:",this.valu3);
  })
}
     
 

     ngOnInit() {
       console.log("ngOnInit called!");
     // this.val= service.getData();
 
  // this.service.data2.subscribe(data => {
  //   this.valu2=data;
  //   console.log("Checking Inside constructor:",this.valu2);
  // })
// setTimeout(this.ngOnInit,5000);
  
}
       public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
      
    };
    
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType = 'horizontalBar';
    public barChartLegend = true;
    public barChartData = [
      {data: [this.numArray], label: 'Stocks'},
      {data:[],label:'LOL'}
      
       ];
       
}
