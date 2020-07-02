import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { CarNumberComponent } from './car-number/car-number.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginFormComponent},
  {path:'email-input', component:EmailInputComponent},
  {path:'otp-verify', component:OtpVerifyComponent},
  {path:'car-number', component:CarNumberComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
