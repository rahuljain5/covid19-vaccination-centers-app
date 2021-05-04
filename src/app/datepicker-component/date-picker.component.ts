import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'datepicker',
  templateUrl: 'date-picker.component.html',
})
export class DatePickerComponent {
  @Output() selectStart: EventEmitter<Date> = new EventEmitter();
  constructor() { }
  disablePrev = (date: Date | null): boolean => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (date)
      return (date > yesterday) || (date == yesterday);
    else
      return false;
  }
  emitDate(event: Date | null) {
    if (event === null)
      this.selectStart.emit(new Date());
    else
      this.selectStart.emit(event)
  }
}