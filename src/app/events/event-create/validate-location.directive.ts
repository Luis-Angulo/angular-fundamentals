import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidateLocation]',
  // adds this directive as a validator to the NG_VALIDATORS default collection
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateLocationDirective,
      multi: true,
    },
  ],
})
export class ValidateLocationDirective implements Validator {
  constructor() {}

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    // onlineUrl is a level above the others, which are nested
    // we need to cast to access the controls
    const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;
    if (
      (addressControl?.value && cityControl?.value && countryControl?.value) ||
      onlineUrlControl?.value
    ) {
      return null;
    }
    return { validateLocation: false };
  }
}
