import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { ApplicationHttpClient, applicationHttpClientCreator } from './services/application-http-client';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    MDBBootstrapModule,
    SlickCarouselModule,
    HeaderComponent,
  ],
  providers: [
    {
      provide: ApplicationHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient]
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: ApiKeyInterceptor, 
      multi: true
    }
  ]
})
export class SharedModule { }
