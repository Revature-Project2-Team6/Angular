import { SpeciesService } from './../../services/species.service';
import { ClientMessage } from './../../models/client-message';
import { CharacterService } from './../../services/character.service';
import { AppComponent } from 'src/app/app.component';
import { Character, Species, Stats } from './../../models/character';
import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  speciesList: Species[] = [];

  character: Character = new Character(0,'',
  new Species(0, 'human', 'test description'), '', new Stats(0, 1, 1, 1, 1, 1, 1, 1), new User(0, '', '', ''))
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(public appComponent: AppComponent, private characterService: CharacterService
    , private speciesService: SpeciesService) { }

  ngOnInit(): void {
  }

  //default image will be the first option in dropdown 
  image = "human";

  onChange(newValue:string):void{
    console.log(`change detected: ${newValue}`);
    this.image = newValue;
    this.character.species.speciesName = newValue;
    this.character.species.id = 0;
  }

  createCharacter() {

    this.assignStats();

    this.character.imageUrl = `assets/${this.character.species.speciesName}.png`;
    this.character.owner = this.appComponent.loggedInUser;

    // check if species exist in DB
    this.findSpecies()

  }

  findSpecies(): void {

    this.speciesService.findSpecies()
    .subscribe(
      (response) => { 

        response.forEach(s => {

          if (s.speciesName == this.character.species.speciesName) {
            this.character.species = s;
          }
        })
      },
      (error) => {
        this.clientMessage.message = "Failed to find species";
      }
    )

    if (this.character.species.id == 0) {
      this.registerSpecies(this.character.species.speciesName);
      setTimeout(() => {

        this.registerCharacter(this.character);
      }, 2000)
    } else {
      setTimeout(() => {

        this.registerCharacter(this.character);
      }, 2000)
    }
  }

  registerSpecies(species: string) {

    fetch(`https://swapi.dev/api/species/?search=${species}`)
    .then((response) => response.json())
    .then(obj => {
      this.character.species.description = obj.results[0].classification;

      this.speciesService.registerSpecies(this.character.species)
      .subscribe(
        data => {
          this.clientMessage.message = `Successfully registered ${data.speciesName}!`

          this.character.species = data;
        
  
        },
        error => this.clientMessage.message = `Unable to register. Check that all constraints have been met.`
      )
    })
  }

  registerCharacter(character: Character): void {

    this.characterService.registerCharacter(character)
    .subscribe(
      data => this.clientMessage.message = `Successfully registered ${data.name}!`,
      error => this.clientMessage.message = `Unable to register. Check that all constraints have been met.`

    )
  }

  assignStats() {

    console.log("stats assigned")

    switch(this.character.species.speciesName) {

      case "human": {

        this.character.stats = new Stats(0, 2, 3, 0, 2, 12, 1, 3);
        break;
      }

      case "twi'lek": {
        this.character.stats = new Stats(0, 1, 4, 0, 3, 10, 1, 2);
        break;
      }

      case "wookie": {
        this.character.stats = new Stats(0, 3, 2, 0, 1, 14, 1, 5);
        break;
      }

      case "hutt": {
        this.character.stats = new Stats(0, 4, 1, 0, 2, 15, 1, 3);
        break;
      }
    }

    console.log(this.character.stats)
  }
}
