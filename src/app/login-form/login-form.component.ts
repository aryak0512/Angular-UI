import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public customerService:CustomerService, public router:Router) { }

  ngOnInit(): void {
  }

  validateUser(userLogin:NgForm){
    let credentials=[]
    //reading username and password and send them to back end for pprocessing in form of array
    let username=userLogin.value.username;
    let password=userLogin.value.password;
    credentials.push(username);
    credentials.push(password);

    if(username=="aryak0512" && password=="12345678"){
      this.router.navigate(['home']);
    }
    else{
      alert("INVALID CREDENTIALS!!!");
    }

    /*
    this.customerService.postCustomer(credentials)
     .subscribe(resp => {
        let cust_id:Number=resp.body;
        if(cust_id!=0){
          this.customerService.setLoginStatus();
          this.router.navigate(['home']);
        }
        else{
          alert("INVALID CREDENTIALS!!!");
        }
     });

     */
  }

  
}
