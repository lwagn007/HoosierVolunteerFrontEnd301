import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  isLoggedIn: boolean; 

  constructor(public router: Router, public _authService: AuthService) { }

  ngOnInit() {
    // this._authService.userInfo.subscribe((d: UserData) => {
    //   this.isLoggedIn = d.isLoggedIn;
    // });

    if(localStorage.getItem('id_token')){
      this.isLoggedIn = true;
      this.userName = localStorage.getItem('user');
    }
  }
  
  onLogOut(){
    this._authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}

export interface UserData {
  user:string;
  userName:string;
  email: string;
  isLoggedIn: boolean;
}
