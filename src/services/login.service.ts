import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';

import { Login } from 'src/models/login.model';


@Injectable()
export class LoginService{


    login:any;
    constructor(private myHttp:HttpClient){
        this.login=[];

    }
    verifyEmail(value)
    {
      return this.myHttp.get("https://localhost:44381/api/Login/"+"?"+"umail="+value);
    }

    getUserDataFromAPI(login:Login){
        console.log(login.Password);
        //return this.myHttp.get("https://localhost:44381//api/Login?email="+login.Email+"&upass="+login.Password);
        var data="username="+login.Email+"&password="+login.Password+"&grant_type=password";
        var reqHeader=new HttpHeaders({'Content-type':'application/x-WWW-urlencoded'});
        return this.myHttp.post("https://localhost:44381/token",data,{headers:reqHeader});
    }
    // getUserData(login):Login[]{
    //     this.getUserDataFromAPI(login).subscribe((data)=>
    //     {
    //         console.log(data);
    //     this.login=data;
    // });
    // console.log(this.login)
    // return this.login;
    // }
}