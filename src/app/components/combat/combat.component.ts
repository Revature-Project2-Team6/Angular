import { ClientMessage } from './../../models/client-message';
import { CharacterService } from 'src/app/services/character.service';
import { Character, Species, Stats, Skills } from './../../models/character';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { AppComponent } from 'src/app/app.component';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent{

  clientMessage: ClientMessage = new ClientMessage('');
  winner: string = '';
  message: string = '';
  statsUpdated: boolean = false;
  combatCompleted: boolean = false;
  leveledUp: boolean = false;
  player: Character = new Character(0, '',
  new Species(0, '', ''), '',
  new Stats(0, 0, 0, 0, 0, 0, 0, 0,),
  //[new Skills(0, '', '', 0, '')],
  new User(0, '', '', ''));

  npc: Character = new Character(0, '',
  new Species(0, '', ''), '',
  new Stats(0, 0, 0, 0, 0, 0, 0, 0),
  //[new Skills(0, '', '', 0, '')],
  new User(0, '', '', ''));
  constructor(public appComponent: AppComponent, private cServ: CharacterService) { }

  ngOnInit(){
    this.player = this.appComponent.playerCharacter;
    this.generateNpc();
  }

  generateNpc() {

    let number: number = this.generateRandom(3);

    // enemy type selection
    switch(number) {
      // Bantha
      case 0:
        this.npc.name = "Bantha";
        break;
      // Jawa
      case 1:
        this.npc.name = "Jawa";
        break;
      // Raider
      case 2:
        this.npc.name = "Raider";
        break;
    }

    this.npc.imageUrl = `assets/${this.npc.name}.png`

    this.npc.stats = new Stats(0, this.generateRandom(9) + 1, this.generateRandom(9) + 1, this.generateRandom(9) + 1, this.generateRandom(9) +1,
    this.generateRandom(9) + 1, this.generateRandom(9) + 1, this.generateRandom(9) + 1);

    console.log(this.npc.stats)

  }

  generateRandom(limit: number): number {

    let rand = Math.random() * limit;

    rand = Math.floor(rand);

    return rand;
  }

  calculateLevelUp() {
    let threshold: number = this.player.stats.level * 100;

    if (this.player.stats.experience >= threshold) {
      this.leveledUp = true;
      this.player.stats.level++;
      console.log("Level up!")
    }
  }

  startFight(): void{
    // reset boolean
    this.leveledUp = false;
    // display the stats
    console.log('combat started')
    //this.addSkillMods(this.player);
    //this.addSkillMods(this.npc);
    this.statsUpdated = true;
    this.winner = this.calculateWinner(this.player, this.npc);
    console.log(this.winner);
    this.combatCompleted = true;
    if(this.winner != 'draw'){
      this.message = this.winner + ' wins!'
    } else{
      this.message = this.winner;
    }

    //set isFightFinished to false
    this.appComponent.isFighting = false;
  }

  addSkillMods(char:Character){
    //this.useSkills(char);
  }

  /* subSkillMods(char:Character){
    for(let skill = 0; skill < char.skills.length; skill++){
      char.setStat(char.skills[skill].stat, -char.skills[skill].power);
    }
  }

  useSkills(char:Character){
    for(let skill = 0; skill < char.skills.length; skill++){
      char.setStat(char.skills[skill].stat, char.skills[skill].power);
    }
  } */

  calculateWinner(player:Character, npc:Character) : string{
    let playerEP: Number = player.stats.strength + player.stats.forcePower;
    let playerED: Number = player.stats.defense + player.stats.forcePower;
    let npcEP: Number = npc.stats.strength + npc.stats.forcePower;
    let npcED:Number = npc.stats.defense + npc.stats.forcePower;

    if(playerEP > npcED){
      //exp calculations
      player.stats.experience += npc.stats.level * 10;
      this.calculateLevelUp();
      this.cServ.updateCharacter(this.appComponent.playerCharacter)
      .subscribe(
  
        data => {
          this.clientMessage.message = `Successfully updated ${this.appComponent.playerCharacter}!`
  
          this.appComponent.playerCharacter = data;
        
  
        },
        error => this.clientMessage.message = `Failed to update character.`
      )

      return 'player';
    }else if(npcEP > playerED){
      return 'npc';
    }else{
      return 'draw';
    }


  }
}
