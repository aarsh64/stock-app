import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockpriceComponent } from './stockprice/stockprice.component';


const routes: Routes = [{path:'', redirectTo:'stockprice',pathMatch:'full'},
                        {path:'stockprice', component:StockpriceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
