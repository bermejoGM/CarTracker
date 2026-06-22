import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AuthResponse, RegisterRequest, LoginRequest } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/auth';

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, payload).pipe(
      tap((response) => this.storeSession(response, true))
    );
  }

  login(payload: LoginRequest, remember: boolean): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, payload).pipe(
      tap((response) => this.storeSession(response, remember))
    );
  }

  private storeSession(response: AuthResponse, remember: boolean): void {
    this.clearSession();

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('accessToken', response.accessToken);
    storage.setItem('refreshToken', response.refreshToken);
    storage.setItem('userName', response.nombre);
    storage.setItem('userEmail', response.email);
  }

  private clearSession(): void {
    [localStorage, sessionStorage].forEach((storage) => {
      storage.removeItem('accessToken');
      storage.removeItem('refreshToken');
      storage.removeItem('userName');
      storage.removeItem('userEmail');
    });
  }
}