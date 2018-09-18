import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { Token } from '../models/Token';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const Api_Url = 'http://localhost:57751';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }
  login(loginInfo){
    const str = 
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this._http.post(`${Api_Url}/token`, str).subscribe( (token: Token) => { localStorage.setItem('id_token', token.access_token);
    });
  }
}
