import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public profileForm: FormGroup; // Template accesible members must be public

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const firstName = new FormControl(this.authService.currentUser.firstName);
    const lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName,
    });
  }

  saveChanges(formValues: any): void {
    this.authService.updateUserProfile(
      formValues.firstName,
      formValues.lastName
    );
    this.router.navigate(['events']);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
