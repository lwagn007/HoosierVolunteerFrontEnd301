import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public _loginForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this._loginForm = this._form.group({
      email: new FormControl ('',Validators.required),
      password: new FormControl ('',Validators.required)
    });
  }

  onSubmit(){
    this._authService.login(this._loginForm.value);
    let control: AbstractControl = null;
    this._loginForm.reset();
    this._loginForm.markAsUntouched();
    Object.keys(this._loginForm.controls).forEach((name) => {
      control = this._loginForm.controls[name];
      control.setErrors(null);
    });
  }
}
