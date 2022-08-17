import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  createUser(user: object) {
    const url = environment.createNewUserUrl;
    return this.http.post<Observable<any>>(url, user);
  }

  loginUser(user: object) {
    const url = environment.loginUserUrl;
    return this.http.post<Observable<any>>(url, user);
  }
}
