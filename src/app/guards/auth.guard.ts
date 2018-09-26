import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate():Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (!localStorage.getItem('id_token')) {
        console.log("id_token")
        this.router.navigate(['/login']);
        return observer.next(false);
      } else {
        return observer.next(true);
      }
    });
  }

  ngOnInit() {
  }

}
