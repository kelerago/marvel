import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate() {

        let response;

        if(!this.authService.isLoggedIn()) {

            response = true;

        } else {

            response = this.router.navigate(['/']);
        }

        return response;
    }
}