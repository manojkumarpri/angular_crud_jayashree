import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Stud } from './student';   
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  public student:Stud;
  submitted = false;
 // public student:Stud = { _id: '', studnumberid: '', studentname: '', password:'', mobilenumber:'',email: '',gender:'',address:'' };
 // public studentList:Stud[]; t54trh.,nb
  public data;
  constructor(private customerService:CustomerService,private router: Router,private route: ActivatedRoute,private formBuilder: FormBuilder) { }
  studForm: FormGroup;
  ngOnInit() {
    this.getallstud();
    this.student=new Stud();
    this.studForm = this.formBuilder.group({
      studnumberid: ['', Validators.required],
      studentname: ['', Validators.required],
      password: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
    
  }
  onSubmit():void{
    this.submitted = true;
    console.log(this.studForm.value);
    if (this.studForm.invalid) {
      return;
  }
  this.saveCustomer();
  }
  get f() { return this.studForm.controls; }
  saveCustomer(){
    console.log("obj"+this.student);
    this.customerService.addStudent(this.student).subscribe((data:Stud)=>{
    console.log("save",data);
    
    },(error)=>{
 console.log('error',error);
 
    });
    
  }
  getallstud(){
    this.customerService.getStudent().subscribe((data:Stud)=>{
this.data = data;
console.log("here my data",this.data)
    });
  }

deletestudent(_id){
  console.log(_id);
  this.customerService.deleteStud(_id).subscribe((data) =>{
    this.data = data;
    console.log(this.data);
  });
}

}
