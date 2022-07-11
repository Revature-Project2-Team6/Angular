import { User } from './../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {


  user: User= new User(0, "", "", "", "", "");

  displayStyle = "none"

  constructor() { }

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


}
