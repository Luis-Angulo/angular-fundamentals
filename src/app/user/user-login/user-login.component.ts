import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  public userName: string;
  public password: string;
  public isLoginInvalid: boolean;

  // template sets this property to show validation errors if user hovers the login button
  public mouseOverLogin: boolean;

  constructor(
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoginInvalid = false;
  }

  login(formValues: any): void {
    // the dev server provided doesn't actually check if the password is valid
    // it only checks that the username exists on records
    this.authService
      .login(formValues.userName, formValues.password)
      .subscribe((res) => {
        if (res) {
          this.isLoginInvalid = false;
          this.toastr.success(`${this.userName} logged in!`);
          this.router.navigate(['events']);
        } else {
          this.isLoginInvalid = true;
          this.toastr.error(`User: ${this.userName} not found!`);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
