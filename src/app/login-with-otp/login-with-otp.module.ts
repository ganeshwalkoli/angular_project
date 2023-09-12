import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginWithOtpRoutingModule } from './login-with-otp-routing.module';
import { LoginWithOtpComponent } from './login-with-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginWithOtpComponent],
  imports: [
    CommonModule,
    LoginWithOtpRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginWithOtpComponent]
})
export class LoginWithOtpModule { }
