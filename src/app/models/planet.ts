export class Planet {

    id: number;
    name: string; 
    diameter: number;
    climate: string;

  constructor(
    id: number, 
    name: string, 
    diameter: number, 
    climate: string
) {
    this.id = id
    this.name = name
    this.diameter = diameter
    this.climate = climate
  }
}