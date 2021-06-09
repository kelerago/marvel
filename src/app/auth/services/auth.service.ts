import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AuthService {

    private authenticationState = new BehaviorSubject(false);

    public isLoggedIn(): boolean {

        return true;
    }
}