import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character, CharacterResponse } from '../../interfaces/character.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { ImageAspect, ImageSize } from '../../enums/character.enum';
import { ComicResponse, Comic } from '../../interfaces/comic.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public character!: Character;
  public comics: Comic[] = [];

  readonly imageType= ImageAspect.landscape + ImageSize.incredible;
  readonly comicImageType = ImageAspect.portrait + ImageSize.small; 

  slideConfig = {"slidesToShow": 8, "slidesToScroll": 8};

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) =>  this.characterService.getCharacter(id) )
    )    
    .subscribe((response: CharacterResponse) => {

      this.character = response.data.results[0];      

      this.characterService.getCharacterComics(this.character.id)
      .subscribe((response: ComicResponse) => {

        this.comics = response.data.results;          
      })
    });
  }

}
