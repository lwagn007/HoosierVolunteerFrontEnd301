import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private _registerForm: FormGroup;
  constructor(private _form: FormBuilder) { 
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl,
      firstName: new FormControl,
      lastName: new FormControl,
      phoneNumber: new FormControl,
      address: new FormControl,
      zip: new FormControl,
      city: new FormControl,
      state: new FormControl, 
      password: new FormControl,
      passwordConfirm: new FormControl
    });
  
  
  }


onSubmit() {
  console.log(this._registerForm.value);
}

}
