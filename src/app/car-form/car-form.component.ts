import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicle } from '../model/vehicle.model';
import { CustomerService } from '../service/customer.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  constructor(public customerService:CustomerService,public router:Router,public storage: StorageMap) { }

  ngOnInit(): void {
  }

  vehicle:Vehicle;

  checkCarNumber(carnumberInput:NgForm){
    let carnumber=carnumberInput.value.carnumber;
    let model=carnumberInput.value.name;
    //call API
    let vehicle=new Vehicle(model,carnumber);
    let customer_id:number;
    this.storage.get('cust_id').subscribe((cust_id) => {  
      customer_id=+cust_id;
          this.customerService.addVehicle(vehicle,customer_id)
          .subscribe(resp => {
          }); 
    });
            
    this.router.navigate(['home']);

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
  }

}
