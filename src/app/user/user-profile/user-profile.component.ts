import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TOASTR_TOKEN, Toastr } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public profileForm: FormGroup; // Template accesible members must be public
  firstName: FormControl; // defined as members for validation method reuse
  lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr // inject with token syntax
  ) {}

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      // regex for "must start with letters"
      // regex from course was '[a-zA-Z.*]' to test that the value should start with letters
      // this is wrong, and I substituted the string here to match only alphabetical characters
      [Validators.required, Validators.pattern('[a-zA-Z ]*')]
    );
    this.lastName = new FormControl(this.authService.currentUser.lastName, [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  // might be cool to pass a reference to the field in and use a single method in larger forms
  isFirstNameValid(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  isLastNameValid(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  saveChanges(formValues: any): void {
    if (this.profileForm.valid) {
      this.authService
        .updateUserProfile(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success(
            `${formValues.firstName} ${formValues.lastName}`,
            'Update success!'
          );
          this.router.navigate(['events']);
        });
    }
    // maybe error message here?
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
