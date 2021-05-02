import { Component, EventEmitter, Injectable, Output } from "@angular/core";
import { DateAdapter } from "@angular/material/core";
import { DateRange, MatDateRangeSelectionStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY } from "@angular/material/datepicker";

@Injectable()
export class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}
  selectionFinished(date: D | null): DateRange<D> {
    var x = this._createSevenDayRange(date);
    return x;
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createSevenDayRange(activeDate);
  }

  private _createSevenDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -3);
      const end = this._dateAdapter.addCalendarDays(date, 3);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }

}
@Component({
  selector: 'date-range-picker-selection-strategy-example',
  templateUrl: 'date-time-picker.html',
  providers: [{
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: FiveDayRangeSelectionStrategy
  }]
})
export class DateRangePickerSelectionStrategyExample {
@Output() selectStart: EventEmitter<any> = new EventEmitter();
@Output() selectEnd: EventEmitter<any> = new EventEmitter();
}