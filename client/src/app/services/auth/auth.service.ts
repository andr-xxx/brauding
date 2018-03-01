import { Injectable } from '@angular/core';
// import decode from 'jwt-decode';

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('token');
  }
}
