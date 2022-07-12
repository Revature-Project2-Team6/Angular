import { UserService } from './../services/user.service';
import { ClientMessage } from './../models/client-message';
import { User } from './../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {


  user: User= new User(0, "", "", "");
  clientMessage: ClientMessage = new ClientMessage('');

  displayStyle = "none"

  constructor(private userService: UserService) { }

  printUser() {

    console.log(this.user);
    this.closePopup();
  }


  openPopup() {

    this.displayStyle = "block";

  }

  closePopup() {

    this.displayStyle = "none"

  }

  registerUser(): void {

    this.userService.registerUser(this.user)
    .subscribe(
      data => this.clientMessage.message = `Successfully registered ${data.username}`,
      error => this.clientMessage.message = `Something went wrong. Error ${error}`
    )


  }


}
