import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {
  emailInput="";

  constructor(public router:Router,public customerService:CustomerService) {
 }

  ngOnInit(): void {
  }

  checkEmail(emailInput:NgForm){
    this.emailInput=emailInput.value.email;
    let email:String=emailInput.value.email;
    //send the emailInput as post API and expect 0 or 1 
    //to be returned which will be attached to variable unique
    //checking uniqueness
    let unique=5;
    if(unique!=0){
      //saving email to local storage
      this.customerService.setCustomerEmail(email);
      this.router.navigate(['otp-verify']);
    }
    else{
      alert("THE EMAIL ENTERED DOES NOT EXIST.");
    }
    /*
    this.customerService.checkEmailUniqueness(emailInput)
     .subscribe(resp => {
        let unique:Number=resp.body;
        if(unique!=0){
          this.router.navigate(['otp-verify']);
        }
        else{
          alert("THE EMAIL ENTERED DOES NOT EXIST.");
        }

     });
     */


  }
}
