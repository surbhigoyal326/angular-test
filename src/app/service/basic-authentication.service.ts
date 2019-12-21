import { Injectable } from '@angular/core';
import { API_URL } from './../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  // authenticate(username, password) {
  //   // console.log('before ' + this.isUserLogedIn());
  //   if (username === 'admin' && password === 'admin') {
  //    sessionStorage.setItem('authenticatedUser', username);
  //    // console.log('after ' + this.isUserLogedIn());
  //    return true;
  //  }
  //   return false;
  // }

    executeBasicJwtAuthService(username, password) {
      return this.httpClient.post<any>(
        `${API_URL}/authenticate`, {
          username,
          password
        }).pipe(
          map(
            data => {
              sessionStorage.setItem(AUTHENTICATED_USER, username);
              sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
              return data;
            }
          )
        );
    // console.log('Api service');
  }

  // getAuthenticatedUser() {
  //   return sessionStorage.getItem(AUTHENTICATED_USER);
  // }

  // getAuthenticatedToken() {
  //   if (this.getAuthenticatedUser()) {
  //     return sessionStorage.getItem(TOKEN);
  //   }
  // }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
    }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
