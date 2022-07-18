import { CharacterService } from 'src/app/services/character.service';
import { Planet } from './../../models/planet';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-planet-select',
  templateUrl: './planet-select.component.html',
  styleUrls: ['./planet-select.component.css']
})
export class PlanetSelectComponent implements OnInit {

  isCharSelected: boolean = false;

  planets: Planet[] = [];
  characters: Character[] = [];

                            // id, name, diameter, climat
  tatooine: Planet = new Planet(1, '', 0, '');
  hoth: Planet = new Planet(4, '', 0, '');
  endor: Planet = new Planet(7, '', 0, '');

  constructor(public appComponent: AppComponent, public cServ: CharacterService) { }

  ngOnInit(): void {

    this.cServ.getCharactersByUserId(this.appComponent.loggedInUser.id).subscribe(
      (response) => {
        this.characters = response;
      }
    );

    this.planets.push(this.tatooine);
    this.planets.push(this.hoth);
    this.planets.push(this.endor);

    this.planets.forEach(p => {

      fetch(`https://swapi.dev/api/planets/${p.id}`)
      .then((response) => response.json())
      //.then(obj => console.log(obj))  To print object data to the console
      .then(obj => {
  
        p.name = obj.name;
        p.diameter = obj.diameter / 40;
        p.climate = obj.climate;
      })
    })
  }

  selectChar(char: Character) {
    this.appComponent.playerCharacter = char;
    this.isCharSelected = true;
    console.log(char);
  }
}
