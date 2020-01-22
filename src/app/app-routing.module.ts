import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {EditstidentComponent} from './editstident/editstident.component';
import {LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'student', component: AddstudentComponent },
  { path: 'editcustomer', component: EditcustomerComponent },
  { path: 'editstudent/:_id', component: EditstidentComponent },
  { path: '', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
