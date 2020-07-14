import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle.model';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles:Vehicle[]=[];

  constructor(public customerService:CustomerService,public router:Router,public storage: StorageMap) {
 
   }

  ngOnInit(): void {
  }

}
