import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {
  
  constructor(public router:Router,public customerService:CustomerService) {}
  ngOnInit(): void {}

  verifyOtp(userLogin:NgForm){
     let otpEntered=userLogin.value.password;
     //post api for verification and result in sucess variable
     /*
     this.customerService.sendOtpEntered(otpEntered)
     .subscribe(resp => {
      let success:Number=resp.body;
      if(success!=0){
        this.router.navigate(['register']);
      }
      else{
        alert("OTP ENTERED IS INCORRECT.");
      }
   });
   */
      if (otpEntered=="1234"){
        this.router.navigate(['register']);
      }
      else{
        alert("OTP ENTERED IS INCORRECT.");
      }
    
  }

}
