import { User } from './models/users';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectStarWars';
  public registerModalVisibility: string = "";
  public isGalaxyLoaded: boolean = false;
  public isLoggedIn = false;
  public loggedInUser: User = new User(0, '', '', '');
}
