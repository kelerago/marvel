import { Extension, ItemType, URLType } from "../enums/character.enum";

export interface CharacterResponse {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    etag:            string;
    data:            CharacterData;
}

export interface CharacterData {
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: Character[];
}

export interface Character {
    id:          number;
    name:        string;
    description: string;
    modified:    string;
    thumbnail:   Thumbnail;
    resourceURI: string;
    comics:      Comics;
    series:      Comics;
    stories:     Stories;
    events:      Comics;
    urls:        URL[];
}

export interface Comics {
    available:     number;
    collectionURI: string;
    items:         ComicsItem[];
    returned:      number;
}

export interface ComicsItem {
    resourceURI: string;
    name:        string;
}

export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        ItemType;
}

export interface Thumbnail {
    path:      string;
    extension: Extension;
}

export interface URL {
    type: URLType;
    url:  string;
}