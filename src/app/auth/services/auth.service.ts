import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as firebase from 'firebase/app';
import { AngularFireAuth  } from "@angular/fire/auth";
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

    constructor(
        private afAuth: AngularFireAuth
    ) {

        if(this.isLoggedIn()) {

            this.authenticationState.next(true);

            this.userData.next(this.getUserData());
        }
    }

    public authenticationState = new BehaviorSubject(false);
    public userData = new BehaviorSubject({});

    public socialLogin(provider: any): Promise<any> {

        return new Promise((resolve, reject) => {

            return this.afAuth.signInWithPopup(provider)
            .then((result: any) => {

                const userData = result.user.providerData[0];

                localStorage.setItem(environment.storageUserKey, JSON.stringify(userData));   

                this.authenticationState.next(true);

                this.userData.next(userData);

                resolve(userData);
        
            }).catch((error) => {

                reject();
            });
        });
    }
    
    public googleAuth(): Promise<any> {

        return this.socialLogin(new firebase.auth.GoogleAuthProvider());
    }

    public isLoggedIn(): boolean {

        let response = false;

        let userData = localStorage.getItem(environment.storageUserKey);

        if(userData) {

            response = true;
        }

        return response;
    }

    public getUserData() {

        return JSON.parse(localStorage.getItem(environment.storageUserKey)!);
    }

    logout() {

        localStorage.removeItem(environment.storageUserKey);

        this.authenticationState.next(false);
        this.userData.next({});
    }
}