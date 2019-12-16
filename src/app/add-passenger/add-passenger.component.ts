import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Passenger } from 'src/models/passenger.model';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {
  PassengerDetailsForm: FormGroup;
  isSubmitted = false;
  result: string;
  passenger: Passenger
  pass:any
  passcount:string
  p:number;

  // Gender Names
  Gender: any = ['Male', 'Female', 'Other']
  // AllClassData = [
  //   {
  //     'Passenger': '1'
  //   },
  //    {    
  //     'Passenger':'2'    
  //    }
  // ]
  constructor(private fb: FormBuilder, private myHttp: HttpClient) {

  }
  ngOnInit() {
    this.createform();
  }

  createform() {
    this.passcount=localStorage.getItem("value");
    console.log(this.passcount);
   this.p=parseInt(this.passcount)

    let arr = []
  
    for (let i = 0; i <this.p; i++) {
      arr.push(this.BuildFormDynamic(i))
    }
    this.PassengerDetailsForm = this.fb.group({
      PassengerDetails: this.fb.array(arr)
    })
   // PassengerDetails: this.fb.array(arr);
  

  }

  BuildFormDynamic(product): FormGroup {
    return this.fb.group({
      Passenger: [product.Passenger],
      Name: ['', Validators.required],
      Age: ['', Validators.required],
      Gender: ['', Validators.required]
    })
  }


  SaveData() {
    //pass this data to service and api node/webapi  
    this.isSubmitted = true;
    if (!this.PassengerDetailsForm.valid) {
      this.result = " please fill all fields";
      return false;
    } else {
      // alert(JSON.stringify(this.PassengerDetailsForm.value))
     this.PassengerDetailsForm.controls.PassengerDetails.value
      console.log(this.PassengerDetailsForm.controls.PassengerDetails.value)
       this.pass=this.PassengerDetailsForm.controls.PassengerDetails.value
      this.myHttp.post("https://localhost:44381/api/passenger",this.pass).subscribe(res=>{
            console.log(res);
            this.result="passengers details are added successfully!!!"
        })
    }

  }
}
