import { CombatComponent } from './../combat/combat.component';
import { ClientMessage } from './../../models/client-message';
import { CharacterService } from 'src/app/services/character.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {


  //boolean val to show lore
  //does not show lore by default 
  showLore: boolean = false;
  // values are percentage of encounter
  fightEncounter: number = 60;
  loreEncounter: number = 40;
  statEncounter: number = 20;
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
  clientMessage: ClientMessage = new ClientMessage('');


  constructor(public appComponent: AppComponent, private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  getEncounter() {

    //button has been pressed. set boolean val to true 
    this.showLore = true;
    this.chance = Math.random();
    this.appComponent.resetFight = true;

    setTimeout(() => {
      
          if (this.chance <= this.statEncounter / 100) {
      
            let curStat: number = this.generateRandom(this.statDesc.length);
      
            this.gamePrompt = this.statDesc[curStat];
            this.statPrompt = this.stat[curStat];
      
            this.increaseStat(curStat);
      
          } else if (this.chance <= this.loreEncounter / 100) {
            this.gamePrompt = this.lore[this.generateRandom(this.lore.length)];
            this.statPrompt = '';
          } else {
      
            this.appComponent.resetFight = false;
            this.appComponent.isFighting= true;
            this.gamePrompt = "You are currently in a fight!";
            this.statPrompt = '';
          }



    }, 200)
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
        this.appComponent.playerCharacter.stats.dexterity = this.appComponent.playerCharacter.stats.dexterity + 1;
        break;
      }
      // strength
      case 1: {
        this.appComponent.playerCharacter.stats.strength = this.appComponent.playerCharacter.stats.strength + 1;
        break;
      }

      // defense
      case 2: {
        this.appComponent.playerCharacter.stats.defense = this.appComponent.playerCharacter.stats.defense + 1;
        break;
      }

      // force power
      case 3: {
        this.appComponent.playerCharacter.stats.forcePower = this.appComponent.playerCharacter.stats.forcePower + 1;
        break;
      }
    }

    this.characterService.updateCharacter(this.appComponent.playerCharacter)
    .subscribe(

      data => {
        this.clientMessage.message = `Successfully updated ${this.appComponent.playerCharacter}!`

        this.appComponent.playerCharacter = data;
      

      },
      error => this.clientMessage.message = `Failed to update character.`
    )
  }
}