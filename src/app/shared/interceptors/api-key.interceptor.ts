import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../../auth/services/auth.service";
import { environment } from '../../../environments/environment';

/**
 * Add api key to Every Request
 */
@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request;

    if(this.authService.isLoggedIn()){

        const apiKey = environment.publicKey;

        request = req.clone({ 
          params: req.params.set('apikey', apiKey)
        });

    } else {

        request = req;
    }

    return next.handle(request);
  }
}