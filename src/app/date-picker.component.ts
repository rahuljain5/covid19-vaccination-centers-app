import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'datepicker',
  templateUrl: 'date-picker.component.html',
})
export class DatePickerComponent {
  minDate: Date;
  @Output() selectStart:EventEmitter<Date> = new EventEmitter();
  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
  }

}