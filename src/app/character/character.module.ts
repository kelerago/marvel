import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralCharacterListComponent } from './pages/general-character-list/general-character-list.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { FavoriteCharacterListComponent } from './pages/favorite-character-list/favorite-character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterService } from './services/character.service';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GeneralCharacterListComponent,
    CharacterDetailComponent,
    FavoriteCharacterListComponent,
    CharacterComponent,
    CharacterListComponent,
    ComicDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    GeneralCharacterListComponent,
    CharacterDetailComponent,
    FavoriteCharacterListComponent,
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
