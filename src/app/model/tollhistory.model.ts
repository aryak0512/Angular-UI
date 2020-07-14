import { Vehicle } from './vehicle.model';
import { Time } from '@angular/common';
import { TollPlaza } from './tollplaza.model';


export class TollHistory{
    id:number;
    vehicle:Vehicle;
    tollPlaza:TollPlaza;
    tollPrice:number;
    date:Date;
    time:Time;
    
    
}