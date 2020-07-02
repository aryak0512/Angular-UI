import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars=[]
  balance=0.00;
  constructor() {

   }

  ngOnInit(): void {
  }

}
