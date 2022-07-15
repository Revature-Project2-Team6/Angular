import { User } from "./users";

export class Character {
  id: number;
  name: string;
  species: Species;
  imageUrl: string;
  stats: Stats;
  owner: User;

  constructor(
    id: number,
    name: string,
    species: Species,
    imageUrl: string,
    stats: Stats,
    owner: User
  ) {
    this.id = id
    this.name = name
    this.species = species
    this.imageUrl = imageUrl
    this.stats = stats
    this.owner= owner
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
  def: number;
  dex: number;
  exp: number;
  fp: number;
  health: number;
  lvl: number;
  str: number;

  constructor(
    id: number, 
    def: number, 
    dex: number, 
    exp: number, 
    fp: number, 
    health: number, 
    lvl: number, 
    str: number, 
) {
    this.id = id
    this.def = def
    this.dex = dex
    this.exp = exp
    this.fp = fp
    this.health = health
    this.lvl = lvl
    this.str = str
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
