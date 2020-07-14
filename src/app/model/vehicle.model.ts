import { Customer } from './customer.model';
import { TollHistory } from './tollhistory.model';

export class Vehicle{
	id:number;
    makerModel:String;
    registrationNo:String;
    user:Customer;
    tollHistories: TollHistory[];
    
    constructor(makerModel:String,registrationNo:String){
        this.makerModel=makerModel;
        this.registrationNo=registrationNo;
    }
    

}