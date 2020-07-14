import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { StorageMap } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {
  emailInput="";

  constructor(public router:Router,public customerService:CustomerService,public storage: StorageMap) {
 }

  ngOnInit(): void {
  }

  checkEmail(emailInput:NgForm){
   
    let email:String=emailInput.value.email;
   
    this.customerService.checkEmailUniqueness(email)
     .subscribe(resp => {
        let unique:number=resp.body;
        if(resp.body==0){
          this.storage.set('email', email).subscribe(() => {});
          this.customerService.sendOtp(email)
             .subscribe(resp => {
                console.log("otp sent...");
           });
          this.router.navigate(['otp-verify']);
        }
        else{
          alert("THE EMAIL ENTERED ALREADY EXISTS.");
        }

     });
  }
}
