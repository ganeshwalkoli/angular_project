import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotPass: FormGroup;
  submitted: boolean = false;
  forgotEmail!: any;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    {
      this.forgotPass = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      });
    }
  }
  get f() {
    return this.forgotEmail?.controls;
  }
}
