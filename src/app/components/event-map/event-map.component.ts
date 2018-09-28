import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/Events';

@Component({
  selector: 'app-event-map',
  templateUrl: './event-map.component.html',
  styleUrls: ['./event-map.component.css']
})
export class EventMapComponent implements OnInit {

  dataSource: Events[];
  constructor(private _eventsService: EventsService) { }
  
  @Input('markerClickable') clickable: boolean = true;

  ngOnInit() {
    this._eventsService.getEvents().subscribe((events: Events[]) => {
      console.log('id_token');
      this.dataSource = events;
    });
  }

}
