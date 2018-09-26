import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IsOrganization } from '../../models/IsOrganization';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  selectedValue: string;

  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl,
      firstName: new FormControl,
      lastName: new FormControl,
      phoneNumber: new FormControl,
      IsOrganization: new FormControl,
      address: new FormControl,
      zip: new FormControl,
      city: new FormControl,
      state: new FormControl, 
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit(){
    if (this._registerForm.value.IsOrganization != true){
      this._registerForm.value.IsOrganization = false;
    };
    console.log(this._registerForm.value);
    this._authService
      .register(this._registerForm.value)
      .subscribe( () => this._authService.login(this._registerForm.value));
  }
}
