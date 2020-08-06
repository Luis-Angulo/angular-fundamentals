import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  public userName: string;
  public password: string;
  // template sets this property to show validation errors if user hovers the login button
  public mouseOverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(formValues: any): void {
    this.authService.login(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
