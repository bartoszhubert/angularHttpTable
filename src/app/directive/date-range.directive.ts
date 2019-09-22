import { Directive, Input } from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup
} from "@angular/forms";

import { DateRange } from "./date-range.validator";

@Directive({
  selector: "[dateRange]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: DateRangeDirective, multi: true }
  ]
})
export class DateRangeDirective implements Validator {
  @Input("dateRange") dateRange: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    return DateRange(this.dateRange[0], this.dateRange[1])(formGroup);
  }
}
