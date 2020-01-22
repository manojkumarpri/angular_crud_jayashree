import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Customer } from './customer/customer';
import { Vendor } from './vendor/vendor';
import { Stud } from './addstudent/student';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
public baseUrl='http://localhost:3005/api/customer'

public baseUrl1='http://localhost:3005/api/vendor'
public baseUr2='http://localhost:3005/api/student'
  static saveVendor: any;

  constructor(public httpclient:HttpClient) { }
  private data;

 

  saveCustomer(customer:Customer){
    return this.httpclient.post(this.baseUrl,customer);  
  }
  getAllCustomer(){
    return this.httpclient.get(this.baseUrl);  
  }
addStudent(student:Stud){
  console.log("service"+student);
  return this.httpclient.post(this.baseUr2,student);
}
getStudent(){
  return this.httpclient.get(this.baseUr2);
}

deleteStud(_id){
  return this.httpclient.delete(this.baseUr2+"/"+_id);
}


  saveVendor(vendor:Vendor){
    return this.httpclient.post(this.baseUrl1,vendor);
  }
  getOnestudent(id) {
    return this.httpclient.get(this.baseUr2+"/"+id);
  }
  putforeditstud(listdata){
    console.log("here called",listdata);
    this.httpclient.put(this.baseUr2+"/"+listdata._id, listdata).
    subscribe(res =>{
    console.log("responce", res)
    });

}



  getProductedit(customer) {
    console.log(customer._id);
    localStorage.setItem('custedit', JSON.stringify(customer));

  }
  getselecteditem(){
    var retrievedObject =JSON.parse(localStorage.getItem('custedit'));
    return retrievedObject;
  }
  deleteProduct(id) {
    return this.httpclient.delete(this.baseUrl+"/"+id);
  }
  
  putforedit(listdata){
    console.log("here called",listdata);
    this.httpclient.put(this.baseUrl+"/"+listdata._id, listdata).
    subscribe(res =>{
    console.log("responce", res)
    });

}


}