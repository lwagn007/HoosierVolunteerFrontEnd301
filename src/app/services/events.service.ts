import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'http://localhost:57751';

@Injectable()
export class EventsService {

  constructor(private _http: HttpClient) { }

  getNotes() {
    return this._http.get(`${Api_Url}/Event`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
