import { Injectable } from "@angular/core";
import { ApplicationHttpClient } from '../../shared/services/application-http-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterResponse } from '../interfaces/character.interface';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ComicResponse } from '../interfaces/comic.interface';

@Injectable()
export class CharacterService {

    public search = new BehaviorSubject("");

    constructor(
        private httpClient: ApplicationHttpClient
    ) {}

    public getCharacters(offset: number, searchTerm?: string): Observable<CharacterResponse> {

        let params = new HttpParams()
                     .set('limit', environment.pageLimit.toString())
                     .set('offset', offset.toString());

        if(searchTerm) {

            params = params.set('nameStartsWith', searchTerm);
        }

        return this.httpClient.Get<CharacterResponse>('/characters', { params });
    }

    public getCharacter(characterID: number): Observable<CharacterResponse> {

        return this.httpClient.Get<CharacterResponse>(`/characters/${ characterID }`);
    }

    public getComic(comicID: number): Observable<ComicResponse> {

        return this.httpClient.Get<ComicResponse>(`/comics/${ comicID }`);
    }

    public getCharacterComics(characterID: number): Observable<ComicResponse> {

        return this.httpClient.Get<ComicResponse>(`/characters/${ characterID }/comics`);
    }
}