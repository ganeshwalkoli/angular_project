import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  mobileNumber: any;
  otpVerifyForm!: any;
  submitted: boolean = false;

  constructor(private _route: Router) {
    {
      this.otpVerifyForm = new FormGroup({
        otp: new FormControl(null, [Validators.pattern(/^[0-9]\d{3}$/), Validators.required]),
      });
      
  }
  }
  get f() {
    return this.otpVerifyForm?.controls;
  }

}
