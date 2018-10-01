import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { getOrCreateElementRef } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  isLoggedIn: boolean;
  isOrganization: boolean; 

  constructor(public router: Router, public _authService: AuthService) { }

  ngOnInit() {
    // this._authService.userInfo.subscribe((d: UserData) => {
    //   this.isLoggedIn = d.isLoggedIn;
    // });

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
  isOrganization: boolean;
}
