import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Character } from 'src/app/models/character';
import { User } from 'src/app/models/users';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-info-menu',
  templateUrl: './info-menu.component.html',
  styleUrls: ['./info-menu.component.css']
})
export class InfoMenuComponent implements OnInit {

  user = new User(0, "", "", "");
  characters: Character[] = [];

  constructor(public appComponent: AppComponent, public uServ: UserService, public cServ: CharacterService) { }

  ngOnInit(): void {
    this.uServ.getUserById(this.appComponent.userId).subscribe(
      (response) => {
        this.user = response;
      }
    );
    this.cServ.getCharactersByUserId(this.appComponent.userId).subscribe(
      (response) => {
        this.characters = response;
        console.log(this.characters);
      }
    );
  }

}
