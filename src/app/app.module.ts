import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { CarNumberComponent } from './car-number/car-number.component';
import { CarFormComponent } from './car-form/car-form.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PaymentComponent } from './payment/payment.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { EditNumberComponent } from './edit-number/edit-number.component';
import { TollPlazaComponent } from './toll-plaza/toll-plaza.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    EmailInputComponent,
    OtpVerifyComponent,
    CarNumberComponent,
    CarFormComponent,
    VehiclesComponent,
    PaymentComponent,
    PaypalComponent,
    PhoneNumberComponent,
    EditNumberComponent,
    TollPlazaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
