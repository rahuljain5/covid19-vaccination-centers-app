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
        // return JSON.parse(`{"centers":[{"center_id":418468,"name":"AustinTown UPHC 1","state_name":"Karnataka","district_name":"BBMP","block_name":"East","pincode":560047,"lat":12,"long":77,"from":"10:00:00","to":"16:00:00","fee_type":"Free","sessions":[{"session_id":"99e7d650-c045-4ece-805d-bc9b346bd3f3","date":"03-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["10:00AM-11:00AM","11:00AM-12:00PM","12:00PM-01:00PM","01:00PM-04:00PM"]},{"session_id":"146cfd5e-51ac-44c4-ab71-cbf7f655d50d","date":"04-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"6f279094-b2e1-4540-b975-d27cd627d9c2","date":"06-05-2021","available_capacity":3,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-04:00PM"]},{"session_id":"89ab4b14-6a82-44b4-9ce4-36601aba49ca","date":"07-05-2021","available_capacity":30,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"8586635f-b506-4b08-8107-8f1741735902","date":"08-05-2021","available_capacity":43,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"1a2ed1ae-9d57-4bce-ae8a-69d59b8e8e53","date":"09-05-2021","available_capacity":86,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]}]},{"center_id":559920,"name":"NEELSANDRA UPHC COVI-S","state_name":"Karnataka","district_name":"BBMP","block_name":"East","pincode":560047,"lat":12,"long":77,"from":"09:00:00","to":"18:00:00","fee_type":"Free","sessions":[{"session_id":"7498b10d-f5bc-4a16-96dd-8f0d7c28c860","date":"03-05-2021","available_capacity":16,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"8afac8a7-7578-45bc-bf8c-e70c3a74ce8a","date":"04-05-2021","available_capacity":44,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"55a85e46-eb18-4ade-b53c-0b0e397ffd54","date":"05-05-2021","available_capacity":48,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]}]}]}`);
    }


}