import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  getLocalAuthToken() {
    return (localStorage.getItem("authToken") !== null) ? localStorage.getItem("authToken") : null;
  }

  // log(value: any, type?: string) {
  //   // type [info,error,log,warn,debug]
  //   if (!environment.production) {
  //     if (type === 'error')
  //       console.error(value);
  //     else if (type === 'warn')
  //       console.warn(value);
  //     else
  //       console.log(value);
  //   }
  // }
}
