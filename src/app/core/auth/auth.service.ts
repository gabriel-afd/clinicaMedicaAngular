// src/app/core/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { USERS_MOCK } from '../auth/user.mock.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'app_token';
  private readonly USER_KEY = 'app_user';

  login(email: string, password: string): boolean {
    const user = USERS_MOCK.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token');
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
}
