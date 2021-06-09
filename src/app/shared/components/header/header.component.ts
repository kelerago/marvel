import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CharacterService } from '../../../character/services/character.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private characterService: CharacterService,
    private authService: AuthService,
    private router: Router
    ) {}

  public term: string = "";

  public isAuthenticated: boolean = false;
  public userData: any = {};

  ngOnInit(): void {

    this.authService.authenticationState.subscribe(response => {

      this.isAuthenticated = response;
    });

    this.authService.userData.subscribe(response => {

      this.userData = response;
    })
  }

  getSearch() {

    this.characterService.search.next(this.term);
  }

  logout() {

    this.authService.logout();

    this.router.navigate(['/login']);
  }

}
