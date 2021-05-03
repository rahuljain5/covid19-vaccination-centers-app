import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AppService {
    baseURL = "https://cdn-api.co-vin.in/api/v2/";
    sessionURL = "appointment/sessions/public/";
    locationURL = "admin/location/";
    http: HttpClient;

    constructor(httpClient: HttpClient){
        this.http = httpClient;
    }

    getStates(): Observable<any>{
        let capability = "states";
        let url = this.baseURL+this.locationURL+capability;
        let options = {
        };

        return this.http.get<any>(url, options);
    }
    
    getDistricts(state_id:string): Observable<any>{
        let capability = "districts/"+state_id;
        let url = this.baseURL+this.locationURL+capability;
        let options = {
        };

        return this.http.get<any>(url, options);
    }

    findCalendarByPinCodeAndDate(pinCode: string, date:string): Observable<any>{
        let capability = "calendarByPin";
        let params = new HttpParams({fromObject:{pincode:pinCode, date:date}})
        let url = this.baseURL+this.sessionURL+capability;
        let options = {
            params: params,
        };

        return this.http.get<any>(url,options);
    }

    findByPinCodeAndDate(pinCode: string, date:string): Observable<any>{
        let capability = "findByPin";
        let params = new HttpParams({fromObject:{pincode:pinCode, date:date}})
        let url = this.baseURL+this.sessionURL+capability;
        let options = {
            params: params,
        };

        return this.http.get<any>(url,options);
    }

    findByDistrictAndDate(district: string, date:string): Observable<any>{
        let capability = "findByDistrict";
        let params = new HttpParams({fromObject:{district_id:district, date:date}})
        let url = this.baseURL+this.sessionURL+capability;
        let options = {
            params: params,
        };

        return this.http.get<any>(url,options);
    }

    findCalendarByDistrictAndDate(district: string, date:string): Observable<any>{
        let capability = "calendarByDistrict";
        let params = new HttpParams({fromObject:{district_id:district, date:date}})
        let url = this.baseURL+this.sessionURL+capability;
        let options = {
            params: params,
        };

        return this.http.get<any>(url,options);
    }
}