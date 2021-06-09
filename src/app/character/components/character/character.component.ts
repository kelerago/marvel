import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { ImageSize, ImageAspect } from '../../enums/character.enum';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()
  public character!: Character;

  readonly imageType= ImageAspect.portrait + ImageSize.xlarge;

  constructor() { }

  ngOnInit(): void {
  }

}
