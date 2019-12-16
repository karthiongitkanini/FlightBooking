import{HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Registration } from 'src/models/registration.model';

@Injectable()
export class RegistrationService{
    reg:any;
    result:string;
    constructor(private myHttp:HttpClient){
        this.reg=[];
        
    }
 //  addUser(register:Registration){

//      this.result="already existing";
//      this.myHttp.post("https://localhost:44367/api/Register",register)
       
//     .subscribe(res=>{
//         console.log(res);
//     })

//  }

 
 addUser(reg:Registration){

    // const body:Registration={
    //     Firstname=reg.Firstname,
    //     Lastname=reg.Lastname,
    //     Email=reg.Email,
    //     Phonenumber=reg.Phonenumber,
    //     Dob=reg.Dob

    // }
    
    console.log(reg);
    return this.myHttp.post("https://localhost:44381/api/auth/Register",reg);

//     this.result="already existing";
//     this.myHttp.post("https://localhost:44381/api/Registration",reg).subscribe(res=>{
//        console.log(res);
//    })


}

}