import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { TollHistory} from '../model/tollhistory.model';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  customer:Customer;
  cars:TollHistory[]=[];
  cust_id:number=0;
 
  constructor(public customerService:CustomerService, public router:Router,public storage: StorageMap) {

  
    let customer_id:number;
    //we retrieve the cust_id stored in local storage and assign to instance variable
    this.storage.get('cust_id').subscribe((cust_id) => {  
      customer_id=+cust_id;
      this.cust_id=customer_id;
          this.customerService.getCustomerData(customer_id)
         .subscribe(resp => {
            console.log(resp.body);
            this.customer=resp.body;
         });

    });

  
   }


   loadUser(){
       let customer_id:number;
        //we retrieve the cust_id stored in local storage and assign to instance variable
        this.storage.get('cust_id').subscribe((cust_id) => {  
          customer_id=+cust_id;
              this.customerService.getCustomerData(customer_id)
             .subscribe(resp => {
                console.log(resp.body);
                this.customer=resp.body;
             });

        });

   }

  ngOnInit(): void {
  this.loadStripe();
  }

  addCar(){
    this.router.navigate(['add-car']);
  }

  deleteAccount(){
      alert("Are you sure you want to delete your account?. Cannot be changed.");


    let customer_id:number;
    //we retrieve the cust_id stored in local storage and assign to instance variable
    this.storage.get('cust_id').subscribe((cust_id) => {  
      customer_id=+cust_id;
          this.customerService.deleteUser(customer_id)
          .subscribe(resp => {});


    });    
  }

  removeCar(vehicle_id:number){
    alert("Car will be removed from your profile!!");
    let customer_id:number;
    //we retrieve the cust_id stored in local storage and assign to instance variable
    this.storage.get('cust_id').subscribe((cust_id) => {  
      customer_id=+cust_id;
          this.customerService.deleteCar(customer_id,vehicle_id)
          .subscribe(resp => {
            console.log(resp.body);
          });

    }); 


  }

  showCarHistory(vehicle_id:number){
    
    let customer_id:number;
    //we retrieve the cust_id stored in local storage and assign to instance variable
    this.storage.get('cust_id').subscribe((cust_id) => {  
      customer_id=+cust_id;
          this.customerService.showCarHistory(vehicle_id)
          .subscribe(resp => {
            console.log("History : "+resp.body);
            this.cars=resp.body;
          });
    });    

  }



   loadStripe() {
     
        if(!window.document.getElementById('stripe-script')) {
          var s = window.document.createElement("script");
          s.id = "stripe-script";
          s.type = "text/javascript";
          s.src = "https://checkout.stripe.com/checkout.js";
          window.document.body.appendChild(s);
        }

    }

    getCustomerId(){
    let customer_id:number=0;
        this.storage.get('cust_id').subscribe((cust_id) => {  
          customer_id=+cust_id;
           console.log("IN FUNCTION:"+customer_id);
           this.pay(50,customer_id);
        });

    }

    pay(amount,cust_id) { 
      
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
       
        alert('Token Created!!');
        let token_id=token.id;
        this.customerService.setToken(token_id); 

        this.storage.get('token_id').subscribe((token_id) => {  
         
           this.customerService.addBalance(cust_id,token_id)
            .subscribe(resp => {
            console.log("PAYMENT SUCCESS");
            });
           
        });            
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });


    

}







  
  




  

}
