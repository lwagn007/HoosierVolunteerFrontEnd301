import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { Event } from '../../models/Event';

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
      Start: new FormControl,
      End: new FormControl,
      VolunteersNeeded: new FormControl,
      Address: new FormControl,
      Zip: new FormControl,
      City: new FormControl,
      State: new FormControl,
    });
  }

//need alex or kenn help with creating pseudoform to accept user input

  onSubmit() {
    this.eventForm.value.End = this.eventForm.value.End[1]

    this.eventForm.value.Start = this.eventForm.value.Start[0]
      
    console.log(this.eventForm.value);
    this._eventsService.createEvent(this.eventForm.value).subscribe(data => {
      this._router.navigate(['/event']);
    });
  }  
}