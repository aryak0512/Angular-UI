import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  email;

  constructor(public customerService:CustomerService,public router:Router,public storage: StorageMap) {
        this.storage.get('email').subscribe((email) => {
          console.log("From storage: "+email);
          this.email=email;

        });
  }

  ngOnInit(): void {
  }

  registerUser(userRegister:NgForm){
    
    let user_details=[]
    let username=userRegister.value.username;
    let password=userRegister.value.password;
    let name=userRegister.value.name;
    let email=this.email;
    let address=userRegister.value.address;
    let contact=userRegister.value.contact;
    
    user_details.push(name);
    user_details.push(email);
    user_details.push(address);
    user_details.push(username);
    user_details.push(password);
    user_details.push(contact);
  
    
   this.customerService.registerCustomer(user_details)
     .subscribe(resp => {
        console.log(resp.body);
     });


    this.router.navigate(['login']);
      alert("Registration successful. Please login now to access the portal.");
  }


}
