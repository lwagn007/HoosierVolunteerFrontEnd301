import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Events } from '../../models/Events';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  event: Events;

  constructor( 
    private _eventsService: EventsService,
    private _ar: ActivatedRoute,
    private _router: Router) {
      
    this._ar.paramMap.subscribe(p => {
      this._eventsService.getEvent(p.get('id')).subscribe((singleEvent: Events) => {
        this.event = singleEvent;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._eventsService.deleteEvent(this.event.EventId).subscribe(() => {
      this._router.navigate(['/event']);
    });
  }
}
