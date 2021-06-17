import {Component, Input, OnInit} from '@angular/core';
import {PokemonDetail} from "../vo/pokemonDetail";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input()
  pokemonDetail: PokemonDetail = <PokemonDetail>{};

  constructor() { }

  ngOnInit(): void {
  }

}
