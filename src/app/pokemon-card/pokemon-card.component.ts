import { Component, Input } from '@angular/core';
import { getPokemonNumber, getPokemonImage, Pokemon } from 'src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon | undefined;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
