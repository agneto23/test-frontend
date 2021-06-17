import {Sprite} from "./sprite";
import {Types} from "./types";

export interface PokemonDetail{
  height: number;
  weight: number;
  sprites: Sprite;
  types: Types[];
}
