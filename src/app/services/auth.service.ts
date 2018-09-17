import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';

const Api_Url = "https://kcpelevennote.azurewebsites.net";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(regUserData: RegisterUser) {

  }
}
