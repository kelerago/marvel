import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
