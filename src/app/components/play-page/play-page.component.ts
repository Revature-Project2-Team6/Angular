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


  constructor() { }

  ngOnInit(): void {
  }

  getEncounter() {

    this.chance = Math.random();

    if (this.chance <= this.statEncounter / 100) {

      console.log("stat encountered")
    } else if (this.chance <= this.loreEncounter / 100) {
      console.log("Fight encountered")
    } else {
      console.log("lore boost encountered")
    }
    console.log(this.chance);
  }

}
