import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { MatTableDataSource } from '@angular/material';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'gender', 'address'];
  dataSource;
  public customer:Customer;
  public customerList:Customer[];
  public data;
  constructor(private customerService:CustomerService,private router: Router,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.customer=new Customer();
    this.getAllCustomer();
    this.getProductedit(this.route.snapshot.params['_id']);
   // console.log(this.route.snapshot.params['id']);
  }
  getAllCustomer(){
    this.customerService.getAllCustomer().subscribe((data:Customer[])=>{
      console.log("save",data);
      this.data = data
      //console.log("save",data.length);
      this.dataSource=new MatTableDataSource(data);
      },(error)=>{
   console.log('error',error);
   
      });
      
    }
  saveCustomer(){
    console.log(this.customer);
    this.customerService.saveCustomer(this.customer).subscribe((data:Customer)=>{
    console.log("save",data);
    
    },(error)=>{
 console.log('error',error);
 
    });
    
  }
  getProductedit(customer) {
    console.log("here obj", customer);
    this.customerService.getProductedit(customer);
    this.router.navigate(['/editcustomer']);
     
  }
  deleteProduct(_id) {  
    console.log("hereid", _id);
    this.customerService.deleteProduct(_id)
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        //this.isLoadingResults = false;
      });
  }
}
