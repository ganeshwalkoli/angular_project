import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/service/auth.guard';
import { AngularChartsComponent } from './angular-charts/angular-charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginWithOtpComponent } from './login-with-otp/login-with-otp.component';
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [
  
  // { path: '', redirectTo: 'dashboard', component: DashboardComponent },

  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login-with-otp', component: LoginWithOtpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'set-password', component: SetPasswordComponent },
  { path: 'charts', component: AngularChartsComponent },
  { path: 'angular-tables', component: DataTableDemoComponent },
  // { path: 'forgot-password', loadChildren: () => import('./Login/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
