import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { getOrCreateElementRef } from '@angular/core/src/render3/di';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.authService.getRole();
      if (localStorage.getItem('userRole') != "Admin") {
        console.log(localStorage.getItem('userRole'))
        this.router.navigate(['/home']);
        return observer.next(false);
      } else {
        return observer.next(true);
      }
    });
  }
}