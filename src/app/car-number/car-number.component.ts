import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-number',
  templateUrl: './car-number.component.html',
  styleUrls: ['./car-number.component.css']
})
export class CarNumberComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkCarNumber(carnumberInput:NgForm){
    let carnumber=carnumberInput.value.carnumber;
    //send the emailInput as post API and expect 0 or 1 
    //to be returned which will be attached to variable unique
    //checking uniqueness
    /*
    if(carnumber!="mh0"){
      var api = require('car-registration-api-india');
 
      api.CheckCarRegistrationIndia("WB24AE4770","aryak05",function(data){
      console.log(data.Description);
    });

    }
    
    else{
      alert("THE REGISTRATION DOES NOT EXIST.");
    }
    */
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
