import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {


  // values are percentage of encounter
  fightEncounter: number = 50;
  loreEncounter: number = 40;
  statEncounter: number = 30;
  chance: number = 0;

  lore: string[] = ["You are surrounded by sand on a hot day. You look around, finding no signs of life in sight.",
  "You encounter a small settlement. There are a bunch of traders, but most of them are selling junk.",
  "You come across a few Tusken Raider huts. After closer examination, you find corpses with burnt slashes.",
  "You hear very loud noises coming from a canyon in the distance. As you approach, you realize the locals are competing in a pod race!"]

  statDesc: string [] = [`You come across a group of jawas. They point at some junk in your bag, looking very interested in it.
  You decide to give them the piece, since it is of no value to you. In return, they give you advice in how to survive the 
  harsh environment of Tatooine.`, 
  `You help a trader bring down his cargo into his shop.`,
  `Exploring the harsh desert has improved your resistance to the forces of nature.`,
  `You find a Jedi statue buried within the sand. After excavating it from the ground, you decide to meditate in front of it.`]

  stat: string [] = [`Your dexterity has increased by 1!`, `Your strength has increased by 1!`, `Your defense has increased by 1!`,
  `Your force power has increased by 1!`]

  gamePrompt: string = '';
  statPrompt: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  getEncounter() {

    this.chance = Math.random();

    if (this.chance <= this.statEncounter / 100) {

      let curStat: number = this.generateRandom(this.statDesc.length);

      this.gamePrompt = this.statDesc[curStat];
      this.statPrompt = this.stat[curStat];

    } else if (this.chance <= this.loreEncounter / 100) {
      this.gamePrompt = "You are currently in a fight!";
      this.statPrompt = '';
    } else {
      this.gamePrompt = this.lore[this.generateRandom(this.lore.length)];
      this.statPrompt = '';
    }
    console.log(this.chance);
  }

  generateRandom(limit: number): number {

    let rand = Math.random() * limit;

    rand = Math.floor(rand);

    return rand;
  }

  increaseStat(stat: number) {

    switch(stat) {
      // dexterity
      case 0: {

        break;
      }
      // strength
      case 1: {

        break;
      }

      // defense
      case 2: {

        break;
      }

      // force power
      case 3: {

        break;
      }
    }
  }

}
