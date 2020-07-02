import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable()
export class CustomerService{
    isLoggedIn:Boolean=false;
    constructor(public http: HttpClient,public storage: StorageMap){
        
    }

    setCustomerEmail(email){
        //saving email in local storage
        this.storage.set('email', email).subscribe(() => {});
    }
    setLoginStatus(){
        this.isLoggedIn=true;
    }

    getLoginStatus(){
        return this.isLoggedIn;
    }

    registerCustomer(user_details):Observable<HttpResponse<Number>>{
        
        return this.http.post<Number>('http://localhost:8081/add-customer',user_details,{observe:'response'});

    }
    
    postCustomer(credentials):Observable<HttpResponse<Number>>{
        
        return this.http.post<Number>('http://localhost:8081/test-login',credentials,{observe:'response'});

    }

    checkEmailUniqueness(emailInput):Observable<HttpResponse<Number>>{
        
        return this.http.post<Number>('http://localhost:8081/test-login',emailInput,{observe:'response'});

    }

    sendOtpEntered(otpEntered):Observable<HttpResponse<Number>>{
        
        return this.http.post<Number>('http://localhost:8081/test-login',otpEntered,{observe:'response'});

    }

    



}