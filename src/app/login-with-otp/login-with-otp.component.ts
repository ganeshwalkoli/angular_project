import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-with-otp',
  templateUrl: './login-with-otp.component.html',
  styleUrls: ['./login-with-otp.component.css']
})
export class LoginWithOtpComponent {
  otpForm!: any;
  submitted: boolean = false;
  constructor(private _route: Router) {
    this.otpForm = new FormGroup({
      mobile: new FormControl(null, [Validators.pattern(/^[6-9]\d{9}$/), Validators.required]),
    });
  }

  get f() {
    return this.otpForm?.controls;
  }
}
