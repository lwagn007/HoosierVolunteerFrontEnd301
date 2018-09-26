import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Events } from '../models/Events';

const Api_Url = 'http://localhost:57751/api';

@Injectable()
export class EventsService {

  constructor(private _http: HttpClient) { }

  getEvents() {
    return this._http.get(`${Api_Url}/Event/GetAll`, {headers: this.getHeaders() });
  }

  getEvent(id: string) {
    return this._http.get(`${Api_Url}/Event/GetEventById?id=${id}`, {headers: this.getHeaders()});
  }

  createEvent(event: Events) {
    return this._http.post(`${Api_Url}/Event/Create`, event, {headers: this.getHeaders()});
  }

  updateEvent(event: Events) {
    return this._http.put(`${Api_Url}/Event/Update`, event, {headers: this.getHeaders()});
  }

  deleteEvent(id: number) {
    return this._http.delete(`${Api_Url}/Event/Delete?id=${id}`, {headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
