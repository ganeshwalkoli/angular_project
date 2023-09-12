import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularChartsComponent } from './angular-charts/angular-charts.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorProvider } from 'src/service/interceptor-provider.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginModule } from './login/login.module';
import { LoginWithOtpModule } from './login-with-otp/login-with-otp.module';
import { VerifyOtpModule } from './verify-otp/verify-otp.module';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableDemoComponent,
    AngularChartsComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SetPasswordComponent
  ],
  imports: [
    LoginModule,
    LoginWithOtpModule,
    VerifyOtpModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
