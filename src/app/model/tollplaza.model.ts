import { TollHistory } from './tollhistory.model';


export class TollPlaza{
    id:number;
    name:String;
    username:String;
    password:String;
    tollPrice:number;
    totalAmount:number;
    tollHistories:TollHistory[];
    constructor(name:String,username:String,password:String,tollPrice:number){
        this.name=name;
        this.username=username;
        this.password=password;
        this.tollPrice=tollPrice;
        

    }

}