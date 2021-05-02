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

    this.service.findByPinCodeAndDate(this.pincode, this.startDate)
    .subscribe(res => this.results = res.centers.filter((a:any) => a.sessions.some((b:any) => b.available_capacity !== 0)), err => console.error(err)); 
    
    if(this.results.length > 0){
      this.formEnabled = false
    }
    else {
      this._snackBar.open('No Slots Available! Try a different Date Range/Pin Code', 'Hide', {
        duration: 3000
      });
    }
  }
}

