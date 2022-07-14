import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //default image will be the first option in dropdown 
  image = "stormtrooper1";

  onChange(newValue:string):void{
    console.log(`change detected: ${newValue}`);
    this.image = newValue;
  }

}
