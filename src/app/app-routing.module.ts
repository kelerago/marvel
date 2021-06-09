import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralCharacterListComponent } from './character/pages/general-character-list/general-character-list.component';
import { CharacterDetailComponent } from './character/pages/character-detail/character-detail.component';
import { FavoriteCharacterListComponent } from './character/pages/favorite-character-list/favorite-character-list.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralCharacterListComponent
  },
  {
    path: 'favorites',
    component: FavoriteCharacterListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'character-detail/:id',
    component: CharacterDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }