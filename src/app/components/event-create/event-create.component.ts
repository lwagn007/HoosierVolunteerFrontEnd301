import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private _eventsService: EventsService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.eventForm = this._form.group({
      EventTitle: new FormControl,
      Type: new FormControl,
      EventRange: new FormControl,
      VolunteersNeeded: new FormControl,
      Address: new FormControl,
    });
  }

  onsubmit() {
    this._eventsService.createEvent(this.eventForm.value).subscribe(data => {
      this._router.navigate(['/notes']);
    });
  }  
}