import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
public listData:any;
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.listData= this.customerService.getselecteditem();
    console.log("here data get",this.listData)
  }
  saveCustomer(){
    console.log("here edited listdata", this.listData);
    this.customerService.putforedit(this.listData);
  }
}
