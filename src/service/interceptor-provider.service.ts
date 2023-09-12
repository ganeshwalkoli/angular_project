import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BaseService } from './base.service';
import { CommonService } from './common.service';
import * as Enums from './constant.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptorProvider extends BaseService implements HttpInterceptor {
    fileName: string = 'Interceptor-provider.interceptor.ts';
    tenantId: any = '';
    userId: any = '';
    Authorization: any = '';
    constructor(private _commonService: CommonService) {
        super();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        try {
            console.log({
                req: JSON.stringify(req),
                next: JSON.stringify(next)
            })
            if (req.url !== environment.apiUrl + Enums.CONSTANTS.LOGIN_API) {
                this.Authorization = "Bearer " + this.getLocalAuthToken();
                req = req.clone({
                    headers: new HttpHeaders({
                        'user_id': this.userId,
                        "tenant_id": this.tenantId,
                        "Authorization": this.Authorization
                    })
                });
            }
            return next.handle(req).pipe(tap(()=>{
            },(err:any)=>{           
                if(err.status == 401){
                    this._commonService.toastFunct(err?.error?.message[0]?.msg,"Error !", "error");
                    localStorage.clear();
                    window.location.replace('/login');
                }
                if(err.status == 413){
                    this._commonService.toastFunct(Enums.CONSTANTS.UNAUTHORIZED,"Error !", "error");
                }
            }));
        
        }
        catch (error) {
            let obj = {
                fileName: this.fileName,
                functionName: 'intercept()',
                error: error
            }
            this._commonService.systemException(obj);
            return next.handle(req);
        }
    }
}