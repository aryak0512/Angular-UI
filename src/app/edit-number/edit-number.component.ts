import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-number',
  templateUrl: './edit-number.component.html',
  styleUrls: ['./edit-number.component.css']
})
export class EditNumberComponent implements OnInit {

  constructor(public router:Router,public customerService:CustomerService,public storage: StorageMap) { }

  ngOnInit(): void {
  }

  checkContact(contactInput:NgForm){
   
    let contact:String=contactInput.value.contact;
    //STEP 1: GET CUSTOMER ID
    let customer_id:number;
    //we retrieve the cust_id stored in local storage and assign to instance variable
    this.storage.get('cust_id').subscribe((cust_id) => {  
      customer_id=+cust_id;
          this.customerService.getCustomerData(customer_id)
         .subscribe(resp => {
           
         });
    });

    //STEP 2: CHECK FOR UNIQUENESS
    this.customerService.checkContactUniqueness(contact)
     .subscribe(resp => {
        let unique:number=resp.body;
        if(resp.body==0){
          this.storage.set('contact', contact).subscribe(() => {});
          
          //step 3 : call edit-contact api
          this.customerService.editContact(contact,customer_id)
          .subscribe(resp => {
          }); 





          this.router.navigate(['home']);
        }
        else{
          alert("THE CONTACT ENTERED ALREADY EXISTS.");
        }

     });
   
    
  }

}
