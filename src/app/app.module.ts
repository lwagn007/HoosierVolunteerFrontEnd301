import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatChipsModule,
  MatTableModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';
import { EventsIndexComponent } from './components/events-index/events-index.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { EventUpdateComponent } from './components/event-update/event-update.component';
import { EventDeleteComponent } from './components/event-delete/event-delete.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { RoleguardGuard } from './guards/roleguard.guard';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'event', component: EventsIndexComponent},
  { path: 'event', children:[ 
    { path: 'create', canActivate:[RoleguardGuard], component: EventCreateComponent },
    { path: 'detail/:id', component: EventDetailComponent },
    { path: 'update/:id', canActivate:[RoleguardGuard], component: EventUpdateComponent },
    { path: 'delete/:id', canActivate:[RoleguardGuard], component: EventDeleteComponent}
  ]},
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EventsIndexComponent,
    EventCreateComponent,
    EventDetailComponent,
    EventUpdateComponent,
    EventDeleteComponent,
    FooterComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatTableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [
    AuthService,
    RoleguardGuard,
    AuthGuard,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


