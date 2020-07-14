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
    let username=userLogin.value.username;
    let password=userLogin.value.password;
    credentials.push(username);
    credentials.push(password);

    
    this.customerService.customerLogin(credentials)
     .subscribe(resp => {
        let cust_id:number=resp.body;
        
        this.customerService.setCustomerId(cust_id);
        if(cust_id!=0){
          
          this.customerService.setLoginStatus();
          this.router.navigate(['home']);
        }
        else{
          alert("INVALID CREDENTIALS!!!");
        }
     });

     
  }

  
}
