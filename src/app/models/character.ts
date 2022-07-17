import { ThisReceiver } from "@angular/compiler";
import { User } from "./users";

export class Character {
  id: number;
  name: string;
  species: Species;
  imageUrl: string;
  stats: Stats;
  //skills: Skills[];
  owner: User;

  constructor(
    id: number,
    name: string,
    species: Species,
    imageUrl: string,
    stats: Stats,
    //skills: Skills[],
    owner: User
  ) {
    this.id = id
    this.name = name
    this.species = species
    this.imageUrl = imageUrl
    this.stats = stats
    //this.skills = skills;
    this.owner= owner
  }

  setStat(stat: string, amount: number){
    switch(stat){
      case 'dex':{
          this.stats.dexterity += amount;
          break;
        }
        case 'def':{
          this.stats.defense += amount;
          break;
        }
        case 'fp':{
          this.stats.forcePower += amount;
          break;
        }
        case 'str':{
          this.stats.strength += amount;
          break;
        }
    }
  }
}


export class Species {

  id: number;
  speciesName: string;
  description: string;

  constructor(id: number, speciesName: string, description: string) {
    this.id = id
    this.speciesName = speciesName
    this.description = description
  }
}

export class Stats {

  id: number;
  defense: number;
  dexterity: number;
  experience: number;
  forcePower: number;
  health: number;
  level: number;
  strength: number;

  constructor(
    id: number,
    defense: number,
    dexterity: number,
    experience: number,
    forcePower: number,
    health: number,
    level: number,
    strength: number,
) {
    this.id = id
    this.defense = defense
    this.dexterity = dexterity
    this.experience = experience
    this.forcePower = forcePower
    this.health = health
    this.level = level
    this.strength = strength
  }

}

export class Skills {

  id: number;
  description: string;
  name: string;
  power: number;
  stat: string;

  constructor(
    id: number,
    description: string,
    name: string,
    power: number,
    stat: string
) {
    this.id = id
    this.description = description
    this.name = name
    this.power = power
    this.stat = stat
  }
}

export class character_and_skills {

  skill_id: number;
  character_id: number;
  constructor(skill_id: number, character_id: number) {
    this.skill_id = skill_id
    this.character_id = character_id
  }

}
