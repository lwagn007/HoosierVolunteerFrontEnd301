import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.css']
})
export class EventsIndexComponent implements OnInit {

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this._eventsService.getNotes().subscribe((events: Event[]) => {

    });
  }
}
