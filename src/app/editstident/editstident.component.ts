import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Stud } from '../addstudent/student';   
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editstident',
  templateUrl: './editstident.component.html',
  styleUrls: ['./editstident.component.css']
})
export class EditstidentComponent implements OnInit {
  selectedDay: string = '';
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
  submitted = false;
  public student:Stud;
  public data;
  studeditForm: FormGroup;
  constructor(private customerService:CustomerService,private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getstudent(this.route.snapshot.params['_id']);
    this.studeditForm = this.formBuilder.group({
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
    console.log(this.studeditForm.value);
    if (this.studeditForm.invalid) {
      return;
  }
  this.saveCustomer();
  }
  get f() { return this.studeditForm.controls; }

  getstudent(_id) {
    this.customerService.getOnestudent(_id).subscribe(data => {
      this.data = data;
      console.log(this.data);
      //this.isLoadingResults = false;
    });
  }
  saveCustomer(){
    console.log("here edited listdata", this.data);
    this.customerService.putforeditstud(this.data);
  }
}
