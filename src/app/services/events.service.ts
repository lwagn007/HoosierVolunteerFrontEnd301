import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Events } from '../models/Events';

const Api_Url = 'https://hoosiervolunteer.azurewebsites.net';

@Injectable()
export class EventsService {

  constructor(private _http: HttpClient) { }

  getEvents() {
    return this._http.get(`${Api_Url}/api/Event/GetAll`, {headers: this.getHeaders() });
  }

  getEvent(id: string) {
    return this._http.get(`${Api_Url}/api/Event/GetEventById?id=${id}`, {headers: this.getHeaders()});
  }

  createEvent(event: Events) {
    return this._http.post(`${Api_Url}/api/Event/Create`, event, {headers: this.getHeaders()});
  }

  updateEvent(event: Events) {
    return this._http.put(`${Api_Url}/api/Event/Update`, event, {headers: this.getHeaders()});
  }

  deleteEvent(id: number) {
    return this._http.delete(`${Api_Url}/api/Event/Delete?id=${id}`, {headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
