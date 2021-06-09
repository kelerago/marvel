import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  @Input()
  characters: Character[] = [];

  @Input()
  totalCharacters: number = 0;

  @Output()
  pagination: EventEmitter<number> = new EventEmitter();

  page: number = 1;

  blockPreviousPage: boolean = true;
  blockNextPage: boolean = false;

  get totalPages() {

    return Math.round(this.totalCharacters / environment.pageLimit);
  }

  paginate(count: number) {

    let canPaginate = true;

    if(count < 0 && this.page == 1){

      this.blockPreviousPage = true;
      canPaginate = false;

    } else {

      this.blockPreviousPage = true;
    }

    if(count > 0 && this.page >= this.totalPages){

      this.blockNextPage = true;
      canPaginate = false;

    } else {

      this.blockNextPage = false;
    }

    if(canPaginate){

      this.page = this.page + count;

      this.pagination.emit(this.page);
    }    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
