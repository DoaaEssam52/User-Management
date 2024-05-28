import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HandleFormsService {
  constructor() {}

  // HANDLING ERRORS
  isRequiredError(formGroup: FormGroup, controlKey: string): boolean {
    const formControl = formGroup.get(controlKey);

    return formControl?.touched && formControl.errors?.['required'];
  }

  isLengthError(formGroup: FormGroup, controlKey: string): boolean {
    const formControl = formGroup.get(controlKey);

    return (
      formControl?.touched &&
      (formControl.errors?.['minlength'] || formControl.errors?.['maxlength'])
    );
  }

  isPatternError(formGroup: FormGroup, controlKey: string): boolean {
    const formControl = formGroup.get(controlKey);

    return formControl?.touched && formControl.errors?.['pattern'];
  }

  isEmailError(formGroup: FormGroup, controlKey: string): boolean {
    const formControl = formGroup.get(controlKey);

    return formControl?.touched && formControl.errors?.['email'];
  }
}
