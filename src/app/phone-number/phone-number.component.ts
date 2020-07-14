import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  constructor(public router:Router,public customerService:CustomerService,public storage: StorageMap) { }

  ngOnInit(): void {
  }
  
  checkContact(contactInput:NgForm){
   
    let contact:String=contactInput.value.contact;
   
    this.customerService.checkContactUniqueness(contact)
     .subscribe(resp => {
        let unique:number=resp.body;
        if(resp.body==0){
          this.storage.set('contact', contact).subscribe(() => {});
          this.router.navigate(['register']);
        }
        else{
          alert("THE NUMBER ENTERED ALREADY EXISTS.");
        }

     });
  }



}
