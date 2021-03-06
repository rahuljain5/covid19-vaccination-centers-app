import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../app.service';

@Component({
  selector: 'app-find-district-sessions',
  templateUrl: './find-district-sessions.component.html',
  styleUrls: ['./find-district-sessions.component.scss']
})
export class FindDistrictSessionsComponent implements OnInit {
  selectedState: any = {};
  selectedDistrict: any = {};
  checkWeek: boolean = false;
  districts: any;
  states: any;
  startDate: Date = new Date();
  results = [];
  matSpinnerEnabledForDist = false
  @Output() resultsLoaded: EventEmitter<any> = new EventEmitter()
  constructor(private service: AppService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getStates().subscribe(res => {
      this.states = res.states;
    }, err => console.error(err))
  }
  setStartDate(event: Date) {
    this.startDate = event
  }
  fillDistricts() {
    this.service.getDistricts(this.selectedState.state_id).subscribe(res => {
      this.districts = res.districts;

    }, err => console.error(err))
  }
  getCal() {
    this.matSpinnerEnabledForDist = true;
    if (this.checkWeek) {
      this.startDate.setDate(this.startDate.getDate() - 3);
      this.getWeekInfo();
    }
    else {
      this.getdateInfo();
    }
  }

  private getWeekInfo() {
    this.service.findCalendarByDistrictAndDate(this.selectedDistrict.district_id, this.startDate.toLocaleDateString("in").split("/").join("-"))
      .subscribe(res => {
        this.results = res.centers;
        if (this.results.length > 0) {
          this.matSpinnerEnabledForDist = false;
          this.resultsLoaded.emit(this.results)
        }
        else {
          this.noSlotsAvailableError();
        }    
        this.matSpinnerEnabledForDist = false;
      }, err => {
        this.ServerError(err);
        this.matSpinnerEnabledForDist = false;
      });
  }

  private getdateInfo() {
    this.service.findByDistrictAndDate(this.selectedDistrict.district_id, this.startDate.toLocaleDateString("in").split("/").join("-"))
      .subscribe(res => {
        this.results = res.sessions.map((session: any) => { return { name: session.name, district_name: session.district_name, block_name: session.block_name, from: session.from, to: session.to, fee_type: session.fee_type, sessions: [session] } });
        if (this.results.length > 0) {
          this.matSpinnerEnabledForDist = false;
          this.resultsLoaded.emit(this.results)
        }
        else {
          this.noSlotsAvailableError();
        }
        this.matSpinnerEnabledForDist = false;
      }, err => {
        this.ServerError(err);        
        this.matSpinnerEnabledForDist = false;
      });
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
