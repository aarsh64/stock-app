import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { request } from 'http';
import { map, shareReplay, startWith, flatMap } from 'rxjs/operators';
import { FetchpricesService } from 'src/app/fetchprices.service';
import { Observable, BehaviorSubject, Subscription, of, timer } from 'rxjs';
import { ChildActivationEnd } from '@angular/router';
import { ConstantPool, ThrowStmt } from '@angular/compiler';
import { FormControl, FormBuilder } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { switchMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { timeStamp } from 'console';


@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})

export class StockpriceComponent implements OnInit {


  stocks = {
    name: String,
    price: Number,
    added: Boolean
  };
  stockArray = [];
  value = new BehaviorSubject<any>(0);
  valu1 = new BehaviorSubject<any>(0);
  valu2 = new BehaviorSubject<any>(0);
  valu3 = new BehaviorSubject<any>(0);

  displayArray = [this.value, this.valu1, this.valu2, this.valu3];

  numArray = 0;
  stockData: Array<object> = [];
  stockX = [];
  stockName = [];
  selected: boolean = false;


  constructor(public service: FetchpricesService, public db: AngularFirestore) {

    this.service.data.subscribe(data => {
      this.value = data;
      this.numArray = parseInt(data);
      // console.log("Amazon Inside constructor:", this.value);
      if (data != 0) {
        this.stockData.push({
          name: "Amazon",
          price: data
        })
      }
    })

    this.service.data1.subscribe(data => {
      this.valu1 = data;
      this.numArray = parseInt(data);
      // console.log("IBM Inside constructor:", this.valu1);
      if (data != 0) {
        this.stockData.push({
          name: "IBM",
          price: data
        })


      }
    })

    this.service.data2.subscribe(data => {
      this.valu2 = data;
      // console.log("MSFT Inside constructor:", this.valu2);
      if (data != 0) {
        this.stockData.push({
          name: "Microsoft",
          price: data
        })
      }
    });
    this.service.data3.subscribe(data => {
      this.valu3 = data;
      // console.log("Apple Inside constructor:", this.valu3);
      if (data != 0) {
        this.stockData.push({
          name: "Apple",
          price: data
        })
      }
    })
  }


  ngOnInit() {

  }

  selectEvent(item) {



    if (item.name == "Amazon" && this.stockArray) {
      this.stockX.push(this.value);
      this.stockData.push(
        {
          name: "AMAZON",
          price: this.value,
          added: true
        });
      this.stockName.push("Amazon");
      this.stockArray.push({
        name: "Amazon",
        price: this.value,
        added: true

      })

    }

    if (item.name == "Apple") {
      this.stockX.push(this.valu3);
      this.stockName.push("Apple");
      this.stockArray.push({
        name: "Apple",
        price: this.valu3
      })
    }
    if (item.name == "Microsoft") {

      this.stockX.push(this.valu2);
      this.stockName.push("Microsoft");
      this.stockArray.push({
        name: "Microsoft",
        price: this.valu2
      })
    }
    if (item.name == "IBM") {
      this.selected = true;
      this.stockX.push(this.valu1);
      this.stockName.push("IBM");
      this.stockArray.push({
        name: "IBM",
        price: this.valu1
      })
    }

  }

  barGraph() {
  }
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true

  };

  public barChartLabels = this.stockName;
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [

    { data: this.stockX, label: "Stocks" }];

  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Amazon',
   
    },
    {
      id: 2,
      name: 'Apple',
 
    },
    {
      id: 3,
      name: 'Microsoft',
      
    },
    {
      id: 4,
      name: 'IBM'
    }
  ];

  public reset(): void {
    this.stockX.splice(0, this.stockX.length);
    this.stockArray.splice(0, this.stockArray.length);
  }

  onChanges(){}
}

