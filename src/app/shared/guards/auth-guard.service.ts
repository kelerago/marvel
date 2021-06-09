import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
      private authService: AuthService,
      private router: Router
  ) {}  

  canActivate() {

    let response;

    const loggedIn = this.authService.isLoggedIn();

    if(loggedIn) {

        response = true;

    } else {

        response = this.router.navigate(['/login']);
    }

    return response;
  }
  
}