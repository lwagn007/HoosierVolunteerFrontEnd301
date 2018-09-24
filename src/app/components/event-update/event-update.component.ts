import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Events } from '../../models/Events';
import { OwlDateTimeComponent } from 'ng-pick-datetime';
import { OwlDateTimeInputDirective } from 'ng-pick-datetime/date-time/date-time-picker-input.directive';


@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  event: Events;
  
  updateEventForm: FormGroup;

  constructor(private _form: FormBuilder,
    private _eventsService: EventsService,
    private _ar: ActivatedRoute,
    private _router: Router) { 
      this._ar.paramMap.subscribe(p=>{
        this._eventsService.getEvent(p.get('id')).subscribe((singleEvent: Events) => {
          this.event = singleEvent;
          this.createForm();
        });
      });
    }
    
    ngOnInit() {
    
    }

    startdate = null;
    enddate = null;

    setDateForm() {
      this.startdate = this.event.Start,
      this.enddate = this.event.End
    }

  createForm(){
    
    this.updateEventForm = this._form.group({
      EventId: new FormControl(this.event.EventId),
      EventTitle: new FormControl(this.event.EventTitle),
      Type: new FormControl(this.event.Type),
      Start: new FormControl(),
      End: new FormControl(),
      EventDescription: new FormControl(this.event.EventDescription),
      VolunteersNeeded: new FormControl(this.event.VolunteersNeeded),
      Address: new FormControl(this.event.Address),
      Zip: new FormControl(this.event.Zip),
      City: new FormControl(this.event.City),
      State: new FormControl(this.event.State),
    });
  }

  onSubmit(form){
    this.updateEventForm.value.End = this.updateEventForm.value.End[1]

    this.updateEventForm.value.Start = this.updateEventForm.value.Start[0]
    
    const updateEvent: Events = {
      EventId: form.value.EventId, 
      EventTitle: form.value.EventTitle,
      Type: form.value.Type,
      Start: form.value.Start,
      End: form.value.End,
      EventDescription: form.value.EventDescription,
      VolunteersNeeded: form.value.VolunteersNeeded,
      Address: form.value.Address,
      Zip: form.value.Zip,
      City: form.value.City,
      State: form.value.State
    };
    this._eventsService.updateEvent(updateEvent).subscribe(d => {
      this._router.navigate(['/event']);
    });
  }
}
