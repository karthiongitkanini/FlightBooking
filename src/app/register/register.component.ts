
import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/models/registration.model';
import { RegistrationService } from 'src/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  reg:Registration;
  result:string;
  // summa:string;

  minDate = new Date(1960,0,1);
  maxDate = new Date(2003, 11, 31);
  
  Gender: any = ['Male','Female','Other'];
  
  constructor( private registrationservice:RegistrationService,private router:Router)
   {
    this.reg=new Registration();
    }


 
    createUser(){
      // this.registerservice.addUser(this.register);
      // 
    
        if( this.reg.Firstname!=undefined && this.reg.Lastname!=undefined && this.reg.Password!=undefined && this.reg.Username!=undefined && this.reg.Phonenumber!=undefined)
        {
          this.registrationservice.addUser(this.reg).subscribe((res:any)=>
          {
            //debugger;
            console.log(res);
            if(res==true)
            {
              this.result="added";
            }
            else{
              this.result="notadded";
            }
          });
        }
        else{
          this.result="notadded";
        }
        
       
    
  
    }
    // fun(event:any)
    // {
    
    //     this.summa=event.target.value;
    //     console.log(this.summa);
    // }
    goToLogin(){
      this.router.navigateByUrl("/login");
    }
    goToRegister(){
      this.router.navigateByUrl("/register");
    }
    
  ngOnInit() {
  }

}

