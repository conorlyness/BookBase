import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient, private router: Router, public nav: NavbarService) { }

  createUser(user: object) {
    const url = environment.createNewUserUrl;
    return this.http.post<Observable<any>>(url, user);
  }

  loginUser(user: object) {
    const url = environment.loginUserUrl;
    return this.http.post<Observable<any>>(url, user);
  }

  logoutUser() {
    localStorage.removeItem("sessionUserId");
    this.nav.hideNav();
    this.router.navigate(['']);
  }

  getUserId() {
    return !!localStorage.getItem("sessionUserId");
  }
}
