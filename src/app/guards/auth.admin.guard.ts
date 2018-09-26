import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

export class AuthAdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate():Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (localStorage.getItem('id_token')) {
        this.router.navigate(['/home']);
        return observer.next(false);
      }else{
        return observer.next(true);
      }
    });
  }

  ngOnInit() {
  }

}
