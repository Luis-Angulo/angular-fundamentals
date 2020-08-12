import { Injectable } from '@angular/core';
import { User } from '../types/user.type';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = '/api';
  public currentUser: User;

  constructor(private httpClient: HttpClient) {}

  updateUserProfile(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  public login(userName: string, password: string) {
    return this.httpClient
      .post(`${this.baseUrl}/login`, { username: userName, password })
      .pipe(
        tap((response: any) => {
          console.log(response);
          this.currentUser = response.user;
        })
      )
      .pipe(catchError(() => of(false)));
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
