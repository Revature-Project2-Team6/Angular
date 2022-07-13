import { Character } from './../../models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  statsUpdated: boolean = false;
  combatCompleted: boolean = false;
  constructor(private player: Character, private npc:Character) { }

  winner: string = '';
  ngOnInit(): void {
  }

  startFight(): void{
    // display the stats
    this.addSkillMods(this.player);
    this.addSkillMods(this.npc);
    this.statsUpdated = true;
    this.winner = this.calculateWinner(this.player, this.npc);
    this.subSkillMods(this.player);
    this.subSkillMods(this.npc);
    this.combatCompleted = true;
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
