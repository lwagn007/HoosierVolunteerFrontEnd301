import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from  '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

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

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsIndexComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EventsIndexComponent,
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
    MatChipsModule
  ],
  providers: [
    AuthService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


