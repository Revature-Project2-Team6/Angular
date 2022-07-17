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
  currentPasswordField = "";
  newPasswordField = "";
  updateUserInfoStatus = "";
  updateUserInfoStatusClass = "danger";

  constructor(public appComponent: AppComponent, public uServ: UserService, public cServ: CharacterService) { }

  ngOnInit(): void {
    this.uServ.getUserById(this.appComponent.loggedInUser.id).subscribe(
      (response) => {
        this.user = new User(response.id, response.username, response.password, response.email);
        this.appComponent.loggedInUser = new User(response.id, response.username, response.password, response.email);
      }
    );
    this.cServ.getCharactersByUserId(this.appComponent.loggedInUser.id).subscribe(
      (response) => {
        this.characters = response;
      }
    );
  }

  updateUserInfo(): void {
    if (this.currentPasswordField) {
      if (this.currentPasswordField !== this.appComponent.loggedInUser.password) {
        this.updateUserInfoStatus = "Incorrect password. Please try again";
        this.updateUserInfoStatusClass = "danger";
        return;
      }

      if (this.newPasswordField) {
        this.user.password = this.newPasswordField;
      } else {
        this.user.password = this.currentPasswordField
      }

      this.uServ.updateUser(this.user).subscribe({
        next: (response) => {
          this.user = response;
          this.updateUserInfoStatus = "Changes saved successfully"
          this.updateUserInfoStatusClass = "success";
        },
        error: (error) => {
          // TODO: Modify both frontend and backend to pass specific error messages
          this.updateUserInfoStatus = "Changes were not saved. Please try again";
          this.updateUserInfoStatusClass = "danger";
        }
      })
      this.currentPasswordField = "";
      this.newPasswordField = "";
    } else {
      this.updateUserInfoStatus = "Please enter your password to apply changes";
      this.updateUserInfoStatusClass = "danger";
    }
  }

}
