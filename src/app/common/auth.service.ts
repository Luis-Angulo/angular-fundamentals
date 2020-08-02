import { Injectable } from '@angular/core';
import { User } from '../types/user.type';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUser: User;

  public login(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Pappa',
      userName,
      password,
    };
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
