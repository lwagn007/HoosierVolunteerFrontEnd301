import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/Events';

@Component({
  selector: 'app-event-map',
  templateUrl: './event-map.component.html',
  styleUrls: ['./event-map.component.css']
})
export class EventMapComponent implements OnInit {
  userName: string;
  isLoggedIn: boolean;
  isOrganization: boolean; 
  dataSource: Events[];
  constructor(private _eventsService: EventsService, private _router: Router) { }
  
  @Input('markerClickable') clickable: boolean = true;

  ngOnInit() {
    this._eventsService.getEvents().subscribe((events: Events[]) => {
      console.log('id_token');
      this.dataSource = events;
    });

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
  }

  goToEvent(id){
    this._router.navigate(['/event/detail/' + id]);
  }
}
