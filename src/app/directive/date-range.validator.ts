import { FormGroup } from "@angular/forms";

export function DateRange(dateFrom: string, dateTo: string) {
  return (formGroup: FormGroup) => {
    const startingDate = formGroup.controls[dateFrom];
    const finalDate = formGroup.controls[dateTo];

    if (!startingDate || !finalDate) {
      return null;
    }

    if (
      (startingDate.errors && startingDate.errors.required) ||
      (finalDate.errors && finalDate.errors.required)
    ) {
      return null;
    }

    if (
      new Date(startingDate.value).getTime() >
      new Date(finalDate.value).getTime()
    ) {
      finalDate.setErrors({ dateRange: true });
    } else {
      finalDate.setErrors(null);
    }
  };
}
