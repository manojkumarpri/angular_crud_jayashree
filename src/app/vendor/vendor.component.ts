import { Component, OnInit } from '@angular/core';
import {Vendor} from './vendor'
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
public vendor:Vendor;
public vendorList:Vendor[];
constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.vendor=new Vendor();
  }
  saveVendor(){
    console.log(this.vendor);
    this.customerService.saveVendor(this.vendor).subscribe((data:Vendor)=>{
    console.log("save",data);
    
    },(error)=>{
 console.log('error',error);
 
    });
    
  }}