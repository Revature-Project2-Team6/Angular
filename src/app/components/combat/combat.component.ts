import { Character, Species, Stats, Skill } from './../../models/character';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent{

  winner: string = '';
  message: string = '';
  statsUpdated: boolean = false;
  combatCompleted: boolean = false;
  player: Character = new Character(0, '',
  new Species(0, '', ''), '',
  new Stats(0, 0, 0, 0, 0, 0, 0, 0, 0),
  [new Skill(0, '', '', 0, '')],
  new User(0, '', '', ''));

  npc: Character = new Character(0, '',
  new Species(0, '', ''), '',
  new Stats(0, 0, 0, 0, 0, 0, 0, 0, 0),
  [new Skill(0, '', '', 0, '')],
  new User(0, '', '', ''));
  constructor(public appComponent: AppComponent) { }

  ngOnInit(){
    this.player = this.appComponent.playerCharacter;
    this.npc = this.appComponent.npcCharacter;
  }


  startFight(): void{
    // display the stats
    console.log('combat started')
    this.addSkillMods(this.player);
    this.addSkillMods(this.npc);
    this.statsUpdated = true;
    this.winner = this.calculateWinner(this.player, this.npc);
    console.log(this.winner);
    this.combatCompleted = true;
    if(this.winner != 'draw'){
      this.message = this.winner + ' wins!'
    } else{
      this.message = this.winner;
    }
  }

  addSkillMods(char:Character){
    this.useSkills(char);
  }

  subSkillMods(char:Character){
    for(let skill = 0; skill < char.skills.length; skill++){
      char.setStat(char.skills[skill].stat, -char.skills[skill].power);
    }
  }

  useSkills(char:Character){
    for(let skill = 0; skill < char.skills.length; skill++){
      char.setStat(char.skills[skill].stat, char.skills[skill].power);
    }
  }

  calculateWinner(player:Character, npc:Character) : string{
    let playerEP: Number = player.stats.str + player.stats.fp;
    let playerED: Number = player.stats.def + player.stats.fp;
    let npcEP: Number = npc.stats.str + npc.stats.fp;
    let npcED:Number = npc.stats.def + npc.stats.fp;

    if(playerEP > npcED){
      return 'player';
    }else if(npcEP > playerED){
      return 'npc';
    }else{
      return 'draw';
    }
  }
}
