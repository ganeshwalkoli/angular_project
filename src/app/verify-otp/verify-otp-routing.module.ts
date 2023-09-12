import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyOtpComponent } from './verify-otp.component';

const routes: Routes = [{
  path: 'verify-otp',
  component: VerifyOtpComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyOtpRoutingModule { }
