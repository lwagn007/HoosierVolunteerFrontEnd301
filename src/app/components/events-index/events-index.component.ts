import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/Event';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.css']
})
export class EventsIndexComponent implements OnInit {

  columnNames = ['eventId', 'eventTitle', 'type', 'eventRange_Start', 'eventRange_End', 'volunteersNeeded', 'address', 'buttons'];
  dataSource: MatTableDataSource<Event>

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this._eventsService.getNotes().subscribe((events: Event[]) => {
      this.dataSource = new MatTableDataSource<Event>(events);
    });
  }
}