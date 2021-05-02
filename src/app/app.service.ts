import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AppService {
    baseURL = "https://cdn-api.co-vin.in/api/v2/";
    moduleURL = "appointment/sessions/public/";
    http: HttpClient;

    constructor(httpClient: HttpClient){
        this.http = httpClient;
    }

    findByPinCodeAndDate(pinCode: string, date:string): Observable<any>{
        let capability = "calendarByPin";
        let params = new HttpParams({fromObject:{pincode:pinCode, date:date}})
        let url = this.baseURL+this.moduleURL+capability;
        let options = {
            params: params,
            acceptLanguage: "en_US"
        };

        return this.http.get<any>(url,options);
    }


}