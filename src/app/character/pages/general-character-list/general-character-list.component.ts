import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CharacterResponse, Character } from '../../interfaces/character.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-general-character-list',
  templateUrl: './general-character-list.component.html',
  styleUrls: ['./general-character-list.component.scss']
})
export class GeneralCharacterListComponent implements OnInit {

  public characters: Character[] = [];
  public totalCharacters: number = 0;

  public searchTerm: string = "";

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {

    this.getCharacters(0);

    this.characterService.search.subscribe((searchTerm:string) => {

      this.searchTerm = searchTerm;
      this.getCharacters(0, this.searchTerm);
    })
  }  

  getCharacters(offset: number = 0, searchTerm?: string) {

    this.characterService.getCharacters(offset, searchTerm)
    .subscribe((response: CharacterResponse) => {

      this.characters = response.data.results;
      this.totalCharacters = response.data.total;
    });
  }

  pagination(page: number){

    let offset = 0;

    if(page > 1) {

      offset = (page - 1) * environment.pageLimit
    }

    this.getCharacters(offset, this.searchTerm);
  }

}
