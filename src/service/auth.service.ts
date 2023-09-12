import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import * as Enums from 'src/service/constant.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fileName: string = 'auth.service.ts';
  constructor(private _commonService: CommonService) { }

  login(obj: any): any {
    try {
      let dataObj = {
        offset: 0,
        method: 'post',
        api_url: environment.apiUrl + Enums.CONSTANTS.LOGIN_API,
        local_json_file: '',
        param_data: obj,
        mapcol: false
      }
      let resp = this._commonService.fetchData(dataObj);
      console.log({
        resp: resp
      })
      return resp;
    }
    catch (error) {
      let obj = {
        fileName: this.fileName,
        functionName: 'login(obj)',
        error: error
      }
      this._commonService.systemException(obj);
    }
  }

  logout(): any {
    try {
      let dataObj = {
        offset: 0,
        method: 'post',
        api_url: environment.apiUrl + Enums.CONSTANTS.LOGOUT_API,
        local_json_file: '',
        param_data: '{}',
        mapcol: false
      }
      let resp = this._commonService.fetchData(dataObj);
      return resp;
    }
    catch (error) {
      let obj = {
        fileName: this.fileName,
        functionName: 'logout()',
        error: error
      }
      this._commonService.systemException(obj);
    }
  }

  getOTP(obj: any): any {
    try {
      let dataObj = {
        offset: 0,
        method: 'post',
        api_url: environment.apiUrl + Enums.CONSTANTS.GET_OTP_API,
        local_json_file: '',
        param_data: obj,
        mapcol: false
      }
      let resp = this._commonService.fetchData(dataObj);
      return resp;
    }
    catch (error) {
      let obj = {
        fileName: this.fileName,
        functionName: 'getOTP(obj)',
        error: error
      }
      this._commonService.systemException(obj);
    }
  }

  // verifyOTP(obj: any): any {
  //   try {
  //     let dataObj = {
  //       offset: 0,
  //       method: 'post',
  //       api_url: environment.apiUrl + Enums.CONSTANTS.SUBMIT_OTP_API,
  //       local_json_file: '',
  //       param_data: obj,
  //       mapcol: false
  //     }
  //     let resp = this._commonService.fetchData(dataObj);
  //     return resp;
  //   }
  //   catch (error) {
  //     let obj = {
  //       fileName: this.fileName,
  //       functionName: 'getOTP(obj)',
  //       error: error
  //     }
  //     this._commonService.systemException(obj);
  //   }
  // }

  forgotPassword(obj: any): any {
    try {
      let dataObj = {
        offset: 0,
        method: 'post',
        api_url: environment.apiUrl + Enums.CONSTANTS.FORGOT_PASSWORD_API,
        local_json_file: '',
        param_data: obj,
        mapcol: false
      }
      let resp = this._commonService.fetchData(dataObj);
      return resp;
    }
    catch (error) {
      let obj = {
        fileName: this.fileName,
        functionName: 'resetPassword(obj)',
        error: error
      }
      this._commonService.systemException(obj);
    }

  }
}
