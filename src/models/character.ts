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
}
