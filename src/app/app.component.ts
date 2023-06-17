import { Component } from '@angular/core';
import { Character } from './models/character.model';
import { RickMortyServiceService } from './services/rick-morty-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rick-morty';

  constructor(private _rickMortyService: RickMortyServiceService) {

  }
  firstCharacter: Character = new Character;
  secondCharacter: Character = new Character;

  getFirstChracter(firstCharacterInput: string) {
    this._rickMortyService.getFirstCharacterByName(firstCharacterInput).subscribe({
      next: (res) => {
        // console.log(res)
        this.firstCharacter = res.results[0];
        console.log(this.firstCharacter.name);
      },
      error: console.log,
    });
  }
  getSecondCharacter(secondCharacterInput: string) {
    console.log(secondCharacterInput);
    this._rickMortyService.getSecondCharacterByName(secondCharacterInput).subscribe({
      next: (res) => {
        this.secondCharacter = res.results[0];
      },
      error: console.log,
    });
  }
}
