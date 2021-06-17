import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Result} from "../vo/result";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent{

  @Input()
  pokemonResults: Result[] = [];
  @Output()
  pokemonFilter = new EventEmitter<Result[]>();
  inputText: string = '';

  constructor() { }

  filterPokemons(){
    this.pokemonFilter.emit(this.pokemonResults.filter(item => item.name.includes(this.inputText)))
  }

}
