import { Component, OnInit } from '@angular/core';
import { TollPlaza } from '../model/tollplaza.model';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-toll-plaza',
  templateUrl: './toll-plaza.component.html',
  styleUrls: ['./toll-plaza.component.css']
})
export class TollPlazaComponent implements OnInit {
  


  
  tollPlaza:TollPlaza=new TollPlaza('name','username','passsowrd',50.00);
  constructor(public customerService:CustomerService, public router:Router,public storage: StorageMap) { 

    
    //get all 
    this.customerService.fetchAllTollPlaza()
    .subscribe(resp => {
      console.log("All plaza fetched:"+resp.body);
    });

  }

  ngOnInit(): void {
  }


//button for each plaza to get history
  getPlazaHistory(id:number){
    this.customerService.showPlazaHistory(id)
    .subscribe(resp => {
      console.log("Plaza history:"+resp.body);
    });
  }
//addd a button to register new plaza
  registerPlaza(){
    this.customerService.registerTollPlaza(this.tollPlaza)
    .subscribe(resp => {
      console.log("Total plaza"+resp.body);
    });
  }
  




}
