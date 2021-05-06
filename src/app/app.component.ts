import { Component, Injectable } from '@angular/core';
import { AppService } from './app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  title = 'covidVaccineTracker';
  startDate = new Date();
  checkWeek = false;
  pincode: string = '';
  hideZeroCapacitySessions = true;
  formEnabled = true;
  matSpinnerEnabledForPin = false;
  results: any[] = []
  filteredResults: any[] = []
  ageFilter: number = 0;
  constructor(private service: AppService, private _snackBar: MatSnackBar) { }
  setStartDate(event: Date) {
    this.startDate = event
  }
  getCal() {
    this.matSpinnerEnabledForPin = true;
    if (this.checkWeek) {
      let sd = new Date(this.startDate.toString());
      sd.setDate(sd.getDate()-3);
      let today = new Date();
      if(sd.toLocaleDateString() === today.toLocaleDateString() || sd> today)
        this.startDate = sd;
      else 
        this.startDate = today;
      this.getWeekInfo();
    }
    else {
      this.getdateInfo();
    }
  }
  applyFilters(){
    if(this.hideZeroCapacitySessions)
    this.filteredResults = this.results.filter(x => x.sessions.some((s:any) => s.available_capacity > 0))
  else 
    this.filteredResults = this.results;
  
    if(this.ageFilter !== 0)
      this.filteredResults = this.filteredResults.filter(x => x.sessions.some((s:any) => s.min_age_limit === this.ageFilter ))
  }
  setFlag(event:any, filterByCapacity:boolean){
    if(filterByCapacity)
      this.hideZeroCapacitySessions = event.value === "1";
    else
      this.ageFilter = parseInt(event.value)
    this.applyFilters()
  }
  private getWeekInfo() {
    this.service.findCalendarByPinCodeAndDate(this.pincode, this.startDate.toLocaleDateString("in").split("/").join("-"))
      .subscribe(res => {
        this.results = res.centers;
        this.applyFilters();
        if (this.results.length > 0) {
          this.formEnabled = false;
        }
        else {
          this.noSlotsAvailableError();
        }
        this.matSpinnerEnabledForPin = false;
      }, err => {
        this.ServerError(err);
        this.matSpinnerEnabledForPin = false;
      });
  }

  private getdateInfo() {
    this.service.findByPinCodeAndDate(this.pincode, this.startDate.toLocaleDateString("in").split("/").join("-"))
      .subscribe(res => {
        this.results = res.sessions.map((session: any) => { return { name: session.name, district_name: session.district_name, block_name: session.block_name, from: session.from, to: session.to, fee_type: session.fee_type, sessions: [session] } });
        this.applyFilters();
        if (this.results.length > 0) {
          this.formEnabled = false;
        }
        else {
          this.noSlotsAvailableError();
        }
        this.matSpinnerEnabledForPin = false;
      }, err => {
        this.ServerError(err);
        this.matSpinnerEnabledForPin = false;
      });
  }

  setResults(event:any[]){
    this.results = event;
    this.applyFilters()
    this.formEnabled = false;
  }

  private ServerError(err: any) {
    console.error(err);
    this._snackBar.open('There was an error getting data, please try later!', 'Hide', {
      duration: 3000
    });
  }
  private noSlotsAvailableError() {
    this._snackBar.open('No Slots Available! Try a different Date Range/Pin Code', 'Hide', {
      duration: 3000
    });
  }
}

