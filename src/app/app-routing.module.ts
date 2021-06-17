import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonComponent} from "./pokemon/pokemon.component";

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent,
    data: { title: 'Pokemon'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
