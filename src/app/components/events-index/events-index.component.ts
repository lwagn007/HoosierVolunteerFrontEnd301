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

  columnNames = ['eventId', 'eventTitle', 'type', 'eventRange_Start', 'eventRange_End', 'eventDescription', 'volunteersNeeded', 'address', 'buttons'];
  dataSource: MatTableDataSource<Events>

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this._eventsService.getNotes().subscribe((events: Events[]) => {
      this.dataSource = new MatTableDataSource<Events>(events);
    });
  }
}