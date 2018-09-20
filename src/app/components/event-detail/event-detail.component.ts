import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/Events'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {

  event: Events;

  constructor(private _activatedRoute: ActivatedRoute, private _eventsService: EventsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._eventsService.getEvent(routeData.get('id')).subscribe((singleEvent: Events) => {
        this.event = singleEvent;
      });
    });
  }
}
