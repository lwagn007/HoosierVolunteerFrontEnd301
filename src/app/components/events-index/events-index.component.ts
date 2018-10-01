import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/Events';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.css']
})
export class EventsIndexComponent implements OnInit {
  userName: string;
  isLoggedIn: boolean;
  isOrganization: boolean; 
  
  columnNames = ['eventTitle', 'eventRange_Start', 'eventRange_End', 'volunteersNeeded', 'address', 'buttons'];
  dataSource: MatTableDataSource<Events>

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this._eventsService.getEvents().subscribe((events: Events[]) => {
      console.log('id_token');
      this.dataSource = new MatTableDataSource<Events>(events);

      if(localStorage.getItem('id_token')){
        this.isLoggedIn = true;
        this.userName = localStorage.getItem('user');
        if(localStorage.getItem('userRole') == "Admin"){
          this.isOrganization = true;
        }
        else{
          this.isOrganization = false;
        }
      }
    });
  }
}