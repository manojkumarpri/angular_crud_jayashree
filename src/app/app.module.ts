import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

import {MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule, MatButtonModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';
import { VendorComponent } from './vendor/vendor.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstidentComponent } from './editstident/editstident.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    VendorComponent,
    EditcustomerComponent,
    AddstudentComponent,
    EditstidentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,MatCardModule,MatFormFieldModule,MatTableModule,FormsModule,HttpClientModule,MatInputModule,MatRadioModule,MatSelectModule,MatButtonModule,
    AppRoutingModule
  ],
  providers: [CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
