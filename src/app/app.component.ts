import { Component, Injectable } from '@angular/core';
import { AppService } from './app.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  title = 'covidVaccineTracker';
  service: AppService;
  startDate = '';
  endDate = '';
  pincode:string = '';
  formEnabled = true;
  results:any[] = [];
  constructor(service: AppService, private _snackBar: MatSnackBar){
    this.service = service
  }


  setStartDate(event:Date){
    this.startDate = event.toLocaleDateString().split('/').join('-');
  }  
  setEndDate(event:Date){
    this.endDate = event.toLocaleDateString().split('/').join('-');
  }
  getCal(){

    // this.service.findByPinCodeAndDate(this.pincode, this.startDate)
    // .subscribe(res => {
      var res = JSON.parse(`{"centers":[{"center_id":558433,"name":"LLC 2-BAPTIST HOSPITAL","state_name":"Karnataka","district_name":"BBMP","block_name":"East","pincode":560032,"lat":13,"long":0,"from":"09:00:00","to":"13:00:00","fee_type":"Paid","sessions":[{"session_id":"7d7471be-d9e1-4b17-92d6-1ae927475275","date":"01-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-10:00AM","10:00AM-11:00AM","11:00AM-12:00PM","12:00PM-01:00PM"]},{"session_id":"be5537f7-10ca-4a24-a0ef-63d1bac9e6ba","date":"02-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"8ba0b348-144b-4bf1-843a-245d093c3e20","date":"03-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"0aa8577c-eb88-4ff2-9625-799998ad4827","date":"04-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]}]},{"center_id":691983,"name":"Sulthanpalya Uphc Covaxin","state_name":"Karnataka","district_name":"BBMP","block_name":"East","pincode":560032,"lat":12,"long":77,"from":"09:00:00","to":"18:00:00","fee_type":"Free","sessions":[{"session_id":"3df32c35-a73d-4ff9-9002-20a96958c416","date":"01-05-2021","available_capacity":5,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"a2b4e46e-015c-4a20-85a3-4c28e75c89a0","date":"02-05-2021","available_capacity":1,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"2b0edd7c-26f2-461a-a75e-4b25c044c593","date":"03-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]}]},{"center_id":418555,"name":"Ganganagara UPHC 1","state_name":"Karnataka","district_name":"BBMP","block_name":"East","pincode":560032,"lat":13,"long":77,"from":"09:00:00","to":"16:00:00","fee_type":"Free","sessions":[{"session_id":"fcdf6b12-d1d9-45ac-a4e5-378c0f2bea64","date":"01-05-2021","available_capacity":2,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-04:00PM"]},{"session_id":"8e89ede8-c57b-4273-bdf1-513f746ac033","date":"02-05-2021","available_capacity":5,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-04:00PM"]},{"session_id":"91f0c349-9e2d-45b3-827f-427eb442e8bc","date":"03-05-2021","available_capacity":1,"min_age_limit":45,"vaccine":"","slots":["10:00AM-11:00AM","11:00AM-12:00PM","12:00PM-01:00PM","01:00PM-04:00PM"]},{"session_id":"6e924cfd-f88d-4a42-8dac-9fef98da07b1","date":"04-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-04:00PM"]},{"session_id":"9295b11c-e6ab-4696-9dbe-d87433bfc995","date":"05-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"eb639ee0-ae46-4434-981e-59847c7ff1e9","date":"06-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["10:00AM-11:00AM","11:00AM-12:00PM","12:00PM-01:00PM","01:00PM-04:00PM"]},{"session_id":"5c1fe4a3-b162-4b55-9c39-f77ce7936935","date":"07-05-2021","available_capacity":1,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]}]},{"center_id":418531,"name":"Cholanayakanahalli UPHC","state_name":"Karnataka","district_name":"BBMP","block_name":"East","pincode":560032,"lat":13,"long":77,"from":"09:00:00","to":"16:00:00","fee_type":"Free","sessions":[{"session_id":"c480915a-dd7d-4dd9-8e4e-41b653121912","date":"01-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-04:00PM"]},{"session_id":"4a594b74-802b-4c86-8c42-b697b9b13dc1","date":"02-05-2021","available_capacity":3,"min_age_limit":45,"vaccine":"","slots":["10:00AM-11:00AM","11:00AM-12:00PM","12:00PM-01:00PM","01:00PM-04:00PM"]},{"session_id":"68a213a8-71c3-4c3b-97ec-bff68bc54d57","date":"03-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["10:00AM-12:00PM","12:00PM-02:00PM","02:00PM-04:00PM","04:00PM-05:00PM"]},{"session_id":"e46ed964-d9a6-42c7-9ec5-463ae31961ec","date":"04-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"25d8566f-f3cf-4b6e-8978-5dd5c9bbc12e","date":"05-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"73ea16af-b7bc-4979-bc15-e05eda403a91","date":"06-05-2021","available_capacity":23,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"05b7c998-b0de-4371-837e-b38ce07362e9","date":"07-05-2021","available_capacity":40,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]}]},{"center_id":418619,"name":"Sulthanpalya UPHC","state_name":"Karnataka","district_name":"BBMP","block_name":"East","pincode":560032,"lat":13,"long":77,"from":"10:00:00","to":"16:00:00","fee_type":"Free","sessions":[{"session_id":"22cfa7bf-4f9a-4eb1-9fbf-01381b5fec75","date":"02-05-2021","available_capacity":2,"min_age_limit":45,"vaccine":"","slots":["10:00AM-11:00AM","11:00AM-12:00PM","12:00PM-01:00PM","01:00PM-04:00PM"]},{"session_id":"c85b9be2-7e81-4d05-809b-5aa3bcacf81b","date":"03-05-2021","available_capacity":1,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"5f2f9fc7-6972-438e-8102-042b438f0413","date":"04-05-2021","available_capacity":0,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-04:00PM"]},{"session_id":"5e9699ce-feb4-41b3-8d53-070d2472882d","date":"05-05-2021","available_capacity":48,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]},{"session_id":"103abfc3-8908-4b3f-b641-f6bb434f92f3","date":"06-05-2021","available_capacity":18,"min_age_limit":45,"vaccine":"","slots":["10:00AM-11:00AM","11:00AM-12:00PM","12:00PM-01:00PM","01:00PM-04:00PM"]},{"session_id":"38175b66-c1b0-4b40-bb5a-47e90f8cd90a","date":"07-05-2021","available_capacity":37,"min_age_limit":45,"vaccine":"","slots":["09:00AM-11:00AM","11:00AM-01:00PM","01:00PM-03:00PM","03:00PM-06:00PM"]}]}]}`);
      this.results = res.centers;
      if(this.results.length > 0){
      this.formEnabled = false
    }
    else {
      this._snackBar.open('No Slots Available! Try a different Date Range/Pin Code', 'Hide', {
        duration: 3000
      }
      );
    // }}, err => {
    //   console.error(err);
    //   this._snackBar.open('There was an error getting data, please try later!', 'Hide', {
    //     duration: 3000
    //   })
    // });
    
  }
}
}

