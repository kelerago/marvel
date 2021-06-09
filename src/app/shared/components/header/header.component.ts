import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterService } from '../../../character/services/character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private characterService: CharacterService) {}

  public term: string = "";

  ngOnInit(): void {
  }

  getSearch() {

    this.characterService.search.next(this.term);
  }

}
