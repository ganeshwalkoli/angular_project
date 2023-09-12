import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithOtpComponent } from './login-with-otp.component';

const routes: Routes = [
  {
    path: 'login-with-otp',
    component: LoginWithOtpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginWithOtpRoutingModule { }
