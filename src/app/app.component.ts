import { Character, Skills, Species, Stats } from './models/character';
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

  public playerCharacter: Character = new Character(0, 'Uncle Owen',
  new Species(0, 'human', 'human'), 'human',
  new Stats(0, 10, 2, 0, 0, 0, 0, 2),
  //[new Skills(0, '', '', 2, 'fp')],
  new User(0, '', '', ''));


  public npcCharacter: Character = new Character(0, 'Aayla Secura',
  new Species(0, 'creepy tenticle lady', `twi'lek`), `twi'lek`,
  new Stats(0, 3, 2, 0, 0, 0, 0, 5,),
  //[new Skills(0, '', '', 0, '')],
  new User(0, '', '', ''));


  test = "";
  public userId = 0;
  public loggedInUser: User = new User(0, '', '', '');
}
