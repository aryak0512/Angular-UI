import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Customer } from '../model/customer.model';
import { Vehicle } from '../model/vehicle.model';
import { TollHistory } from '../model/tollhistory.model';
import { TollPlaza } from '../model/tollplaza.model';

@Injectable()
export class CustomerService{
    isLoggedIn:Boolean=false;
    constructor(public http: HttpClient,public storage: StorageMap){ }

    setCustomerEmail(email:String){
        //saving email in local storage
        this.storage.set('email', email).subscribe(() => {});
    }

    setCustomerId(cust_id:number){
        //saving email in local storage
        this.storage.set('cust_id', cust_id).subscribe(() => {});
    }

    setToken(token_id){
        //saving email in local storage
        this.storage.set('token_id', token_id).subscribe(() => {});
    }

    setLoginStatus(){
        this.isLoggedIn=true;
    }

    getLoginStatus(){
        return this.isLoggedIn;
    }

    registerCustomer(user_details):Observable<HttpResponse<number>>{  
        return this.http.post<number>('http://localhost:8081/add-customer',user_details,{observe:'response'});
    }
    
    customerLogin(credentials):Observable<HttpResponse<number>>{
        return this.http.post<number>('http://localhost:8081/login',credentials,{observe:'response'});
    }

    checkEmailUniqueness(emailInput):Observable<HttpResponse<number>>{    
        return this.http.post<number>('http://localhost:8081/isEmailRegistered',emailInput,{observe:'response'});
    }

    checkContactUniqueness(contactInput):Observable<HttpResponse<number>>{    
        return this.http.post<number>('http://localhost:8081/verifyContact',contactInput,{observe:'response'});
    }

    sendOtp(otpEntered):Observable<HttpResponse<Boolean>>{     
        return this.http.post<Boolean>('http://localhost:8081/sendOTP',otpEntered,{observe:'response'});
    }

    sendOtpEntered(otpEntered):Observable<HttpResponse<Boolean>>{     
        return this.http.post<Boolean>('http://localhost:8081/verifyingOTP',otpEntered,{observe:'response'});
    }

    getCustomerData(cust_id:number):Observable<HttpResponse<Customer>>{ 
        return this.http.get<Customer>('http://localhost:8081/getUser/'+cust_id,{observe:'response'});
    }
    
    addVehicle(vehicle:Vehicle,customer_id:number):Observable<HttpResponse<number>>{  
        return this.http.post<number>('http://localhost:8081/addVehicle/'+customer_id,vehicle,{observe:'response'});
    }

    editContact(contact:String,customer_id:number):Observable<HttpResponse<Boolean>>{     
        return this.http.post<Boolean>('http://localhost:8081/editContact'+customer_id,contact,{observe:'response'});
    }

    deleteUser(customer_id:number):Observable<HttpResponse<void>>{     
        return this.http.delete<void>('http://localhost:8081/deleteUser/'+customer_id,{observe:'response'});
    }
    deleteCar(customer_id:number,vehicle_id:number):Observable<HttpResponse<Boolean>>{     
        return this.http.get<Boolean>('http://localhost:8081/removeVehicle/'+customer_id+'/'+vehicle_id,{observe:'response'});
    }
    
    showCarHistory(vehicle_id:number):Observable<HttpResponse<TollHistory[]>>{ 
        return this.http.get<TollHistory[]>('http://localhost:8081/fetchHistoryFromVehicle/'+vehicle_id,{observe:'response'});
    }

    registerTollPlaza(tollPlaza:TollPlaza):Observable<HttpResponse<number>>{     
        return this.http.post<number>('http://localhost:8081/registerTollPlaza',tollPlaza,{observe:'response'});
    }


    fetchAllTollPlaza():Observable<HttpResponse<TollPlaza[]>>{     
        return this.http.get<TollPlaza[]>('http://localhost:8081/fetchAllTollPlaza/',{observe:'response'});
    }

    showPlazaHistory(id:number):Observable<HttpResponse<TollHistory[]>>{ 
        return this.http.get<TollHistory[]>('http://localhost:8081/fetchHistoryFromToll/'+id,{observe:'response'});
    }

    addBalance(cust_id,token_id):Observable<HttpResponse<Boolean>>{ 
        console.log("CUSTOMER ID is:"+cust_id);  
        console.log("TOKEN ID is:"+token_id);  
        return this.http.get<Boolean>('http://localhost:8081/addBalance/'+cust_id+'/'+token_id,{observe:'response'});
    }
}