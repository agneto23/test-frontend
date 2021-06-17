import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import {Pokemon} from "../vo/pokemon";
import {PokemonDetail} from "../vo/pokemonDetail";
import {Result} from "../vo/result";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon = <Pokemon>{};
  pokemonDetail: PokemonDetail= <PokemonDetail>{};
  pokemonResults: Result[] = [];

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.rest.getPokemons("https://pokeapi.co/api/v2/pokemon").subscribe((resp: any) =>  {
      this.pokemon = resp;
      this.pokemonResults = this.pokemon.results;
    });
  }

  getDetail(url: string){
    this.rest.getPokemon(url).subscribe((resp: any) =>  {
      this.pokemonDetail = resp;
    });
  }

  isNext(next: boolean){
    this.rest.getPokemons(next ? this.pokemon.next : this.pokemon.previous).subscribe((resp: any) =>  {
      this.pokemon = resp;
      this.pokemonResults = this.pokemon.results;
    });
  }

  filter(results: Result[]){
    this.pokemon.results = results;
  }

}
