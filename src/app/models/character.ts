import { User } from "./users";

export class Character {
  id: number;
  name: string;
  species: Species;
  imageUrl: string;
  stats: Stats;
  skills: Skill[];
  owner: User;

  constructor(
    id: number,
    name: string,
    species: Species,
    imageUrl: string,
    stats: Stats,
    skills: Skill[],
    owner: User
  ) {
    this.id = id
    this.name = name
    this.species = species
    this.imageUrl = imageUrl
    this.stats = stats
    this.skills = skills
    this.owner = owner
  }

  setStat(stat: string, amount: number){
    switch(stat){
      case 'dex':{
          this.stats.dex += amount;
          break;
        }
        case 'def':{
          this.stats.def += amount;
          break;
        }
        case 'fp':{
          this.stats.fp += amount;
          break;
        }
        case 'str':{
          this.stats.str += amount;
          break;
        }
    }
  }
}


export class Skill{
  id: Number;
  description: string;
  name: string;
  power: number;
  stat: string;


  constructor(
    id: Number,
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

export class Stats{
  id: number;
  def: number;
  dex: number;
  exp: number;
  fp: number;
  health: number;
  lvl: number;
  str: number;
  character_id;

  constructor(
    id: number,
    def: number,
    dex: number,
    exp: number,
    fp: number,
    health: number,
    lvl: number,
    str: number,
    character_id: number
) {
    this.id = id
    this.def = def
    this.dex = dex
    this.exp = exp
    this.fp = fp
    this.health = health
    this.lvl = lvl
    this.str = str
    this.character_id = character_id
  }
}

export class Species{
  id: number;
  description: string;
  name: string;


  constructor(
    id: number,
    description: string,
    name: string
) {
    this.id = id
    this.description = description
    this.name = name
  }

}
