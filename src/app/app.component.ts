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
  formEnabled = true;
  results: any[] = [];
  constructor(private service: AppService, private _snackBar: MatSnackBar) { }
  setStartDate(event: Date) {
    this.startDate = event
  }
  getCal() {
    if (this.checkWeek) {
      this.startDate.setDate(this.startDate.getDate() - 3);
      this.getWeekInfo();
    }
    else {
      this.getdateInfo();
    }
  }

  private getWeekInfo() {
    this.service.findCalendarByPinCodeAndDate(this.pincode, this.startDate.toLocaleDateString("in").split("/").join("-"))
      .subscribe(res => {
        this.results = res.centers;
        if (this.results.length > 0) {
          this.formEnabled = false;
        }
        else {
          this.noSlotsAvailableError();
        }
      }, err => {
        this.ServerError(err);
      });
  }

  private getdateInfo() {
    this.service.findByPinCodeAndDate(this.pincode, this.startDate.toLocaleDateString("in").split("/").join("-"))
      .subscribe(res => {
        this.results = res.sessions.map((session: any) => { return { name: session.name, district_name: session.district_name, block_name: session.block_name, from: session.from, to: session.to, fee_type: session.fee_type, sessions: [session] } });
        if (this.results.length > 0) {
          this.formEnabled = false;
        }
        else {
          this.noSlotsAvailableError();
        }
      }, err => {
        this.ServerError(err);

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

