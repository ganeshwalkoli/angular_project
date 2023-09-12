import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpClient: HttpClient,
    private _toastr: ToastrService) { }

  systemException(obj: any) {
    //this.logger(Mlogger.severity.debug, [], Mlogger.step.log, obj.fileName + ' in ' + obj.functionName, obj.error);
    // this.log({
    //   systemException: obj
    // });
  }


  toastFunct(message: any, title: any, type: any = 'info') {
    switch (type) {
      case 'info': {
        this._toastr.info(message, title);
        break;
      }
      case 'success': {
        this._toastr.success(message, title);
        break;
      }
      case 'error': {
        this._toastr.error(message, title);
        break;
      }
      case 'warning': {
        this._toastr.warning(message, title);
        break;
      }
      default: {
        this._toastr.info(message, title);
        break;
      }
    }

  }

  fetchData(dataObj: any): Observable<any> {
    let url = dataObj.api_url;
    let data = dataObj.param_data;
    if (dataObj.method == 'post') {
      return this._httpClient.post<any>(url, data);
    }
    else {
      return this._httpClient.get<any>(url);
    }

  }
}
