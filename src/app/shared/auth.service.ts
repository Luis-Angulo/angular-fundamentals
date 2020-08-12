import { Injectable } from '@angular/core';
import { User } from '../types/user.type';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // This is a terrible design for an authService, its meant to illustrate the use
  // of the techniques applied to code it, not to be something to replicate
  // part of why its so quirky is because the simulated backend is weird and designed
  // for the short course, not to emulate a practical auth backend
  private baseUrl = '/api';
  public currentUser: User;

  constructor(private httpClient: HttpClient) {}

  updateUserProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    // might be necessary to set headers manually, add them if the server requests them
    return this.httpClient.put(
      `${this.baseUrl}/users/${this.currentUser.id}`,
      this.currentUser
    );
  }

  checkAuthStatus() {
    // This basically returns the observable as future proofing, which is why
    // it uses tap before subscribe
    return this.httpClient
      .get(`${this.baseUrl}/currentIdentity`)
      .pipe(
        tap((res) => {
          // dev server returns empty if the user is not logged in
          if (res instanceof Object) {
            this.currentUser = res as User;
          }
        })
      )
      .subscribe();
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
