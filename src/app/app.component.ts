import { Character, Skill, Species, Stats } from './models/character';
import { Component } from '@angular/core';
import { User } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectStarWars';
  public registerModalVisibility: string = "";
  public isGalaxyLoaded: boolean = false;
  public isLoggedIn = false;

  public playerCharacter: Character = new Character(0, 'Stormtrooper1',
  new Species(0, 'human', 'human'), 'stormtrooper1',
  new Stats(0, 10, 2, 0, 0, 0, 0, 2, 0),
  [new Skill(0, '', '', 2, 'fp')],
  new User(0, '', '', ''));

  public npcCharacter: Character = new Character(0, 'Stormtrooper2',
  new Species(0, 'human', 'human'), 'stormtrooper2',
  new Stats(0, 3, 2, 0, 0, 0, 0, 5, 0),
  [new Skill(0, '', '', 0, '')],
  new User(0, '', '', ''));


  test = "";

}
