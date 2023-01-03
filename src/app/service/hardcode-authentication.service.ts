import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodeAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'bharath' && password === 'dummy') {
      //Redirect to welcome
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
