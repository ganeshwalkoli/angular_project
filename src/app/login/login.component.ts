import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { CommonService } from 'src/service/common.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  formUser: FormGroup;
  constructor(
    private _authService: AuthService,
    private _route: Router,
    private _commonService: CommonService,
    private formBuilder: FormBuilder
  ) {
    this.formUser = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
          ),
        ],
      ],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {
    // Check for saved login credentials
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    this.email = email === null ? "" : email;
    this.password = password === null ? "" : password;
  }

  login() {
    let data = {
      email: this.email,
      password: this.password,
    };
    localStorage.setItem('token','true')
    this._route.navigate(["/dashboard"]);

    // this._authService.login(data).subscribe(async (res: any) => {
    //   if (res.status == "success") {
    //     this._commonService.toastFunct("Success", "Success", "success");
    //   } else {
    //     console.log("---------------");
    //     this._commonService.toastFunct(res.message[0]["msg"], "Error", "error");
    //   }
    // });
  }

}
